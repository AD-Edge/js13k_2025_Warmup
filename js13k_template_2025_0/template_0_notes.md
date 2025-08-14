## Template for modular setup for js13k start

Based on (but improved) from last years setup, for https://github.com/AD-Edge/JS13K_Triskaidekaphobia/ 

## Notes:

Setup (based on this warmup project)

1) create folders and initial files (refernce setup here)

2) npm init -y

3) copy across the package.json, then npm install (configure package.json as needed)

4) vite config
    copy vite.config.js to main directory
    *this is what tells vite where to run/build/etc

5) copy across roadroller setup: /scripts/roadroll.mjs

6) also note - the /server/ setup (in /JS13K_Triskaidekaphobia/server) has a good basic setup for my functional server backend *need to update this template here


To test run project/dev/local:
- Use 'Live Server' for local build (need to manage imports etc but webpack will crunch this out)
- To run the latest dev build: npm run dev (making sure vite.config.js and package.json are setup correctly)

Still todo:
- work out prod/build/launch process
- manage server side testing/build
- setup deploy of various builds (only working for dev codebase local build so far)



* self note this instruction set is also maintained in Obsidian 