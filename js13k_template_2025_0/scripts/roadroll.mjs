import fs from 'fs'
import { Packer } from 'roadroller';
import { minify } from 'html-minifier-terser'
import AdmZip from 'adm-zip'

async function run() {
  const htmlPath = './dev_build/index.html';
  let html = fs.readFileSync(htmlPath, 'utf8')

  // Strip out the commented-out <script> block first
  html = html.replace(/<!--\s*<script[^>]*>[\s\S]*?<\/script>\s*-->/, '')

  // Then find the real inlined script
  const match = html.match(/<script[^>]*>([\s\S]*?)<\/script>/)
  if (!match) throw new Error('No <script> found.')
  const [fullScriptTag, originalJS] = match

  // Compress with Roadroller
  const packer = new Packer([{ data: originalJS, type: 'js', action: 'eval' }], {})
  await packer.optimize()
  const { firstLine, secondLine } = packer.makeDecoder()
  const packed = firstLine + secondLine

  // Replace the full <script> tag with the packed version
  html = html.replace(fullScriptTag, `<script>${packed}</script>`)

  // Minify final HTML (incl. inline JS & CSS)
  html = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
    useShortDoctype: true,
    removeOptionalTags: true
  })

  // Save final out
  fs.writeFileSync(htmlPath, html)
  console.log(`✓✓ Roadroller-packed JS embedded into ${htmlPath}.\n`);
  
  // File size output
  const maxSize = 13312;
  // console.log('Output size:', fs.statSync('./dev_build/index.html').size, 'bytes')
  const rawSize = Buffer.byteLength(html)
  console.log(`⬜ Final HTML size: ${(rawSize / 1024).toFixed(2)} KB`)
  
  // ZIP Compress
  const zip = new AdmZip()
  zip.addFile('index.html', Buffer.from(html))
  const zipPath = './dev_build/g.zip'
  zip.writeZip(zipPath)
  
  const zipSize = fs.statSync(zipPath).size
  const zipPercent = ((zipSize / maxSize) * 100).toFixed(1);
  console.log(`📦 ZIP size: ${zipSize} bytes (${(zipSize / 1024).toFixed(2)} KB) - (${zipPercent}% of 13KB)`);

  outputBuildFile(rawSize, zipSize, zipPercent, maxSize);

  // File size check & final print
  if (zipSize > 13312) {
    console.warn(`⚠️  WARNING -- ZIP exceeds 13KB limit! (Over by ${zipPercent}%)`);
  } else {
    console.log(`✅ ZIP is within js13k limits: (${zipPercent}% used)`);
  }
  
}

function outputBuildFile(rawSize, zipSize, zipPercent, maxSize) {
  const startDate = new Date('2025-08-13')
  const now = new Date()
  const msPerDay = 1000 * 60 * 60 * 24
  const daysSinceStart = Math.floor((now - startDate) / msPerDay)

  // Build stats output 
  const pad = (n) => n.toString().padStart(2, '0')
  const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}`
  // Build stats file path
  const statsPath = `./dev_build/build-stats-${timestamp}.md`

  // Write plain Markdown with labels + values
  const stats = `
  # Build Stats ${timestamp}

  Pre-compressed HTML size:
  ${(rawSize / 1024).toFixed(2)} KB (${rawSize} bytes)

  Final ZIP size:
  ${(zipSize / 1024).toFixed(2)} KB (${zipSize} bytes)

  ZIP size as % of 13KB:
  ${zipPercent}%

  ${zipSize > maxSize ? '⚠️ ZIP exceeds 13KB limit' : '✅ ZIP is within 13KB limit'}

  This build was created on Day [${daysSinceStart}] of JS13K 2025 (31 Days total)
  `.trim()

  fs.writeFileSync(statsPath, stats)
  console.log(`✅ Wrote build stats to ${statsPath}`)
}

run().catch(console.error);
