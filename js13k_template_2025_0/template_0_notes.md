# Template for modular setup for js13k start

Based on (but improved) from last years setup, for https://github.com/AD-Edge/JS13K_Triskaidekaphobia/ 

## Setup (based on this warmup project)

1) Create folders and initial files 
(Reference the folder directories in /js13k_template_2025_0/)
important: 
    /dev_build/
    /dev_sourcecode/
    /dev_sourcecode/src/
    /dev_sourcecode/src/main.js
    /dev_sourcecode/src/style.css
    /scripts/
    /scripts/roadroll.mjs
    /index.html

2) Init project and generate package.json
    > npm init -y 

3) copy the package.json
    > npm install (configure package.json as needed)

4) Setup vite config
    copy vite.config.js to main directory
    *this is what tells vite where to run/build/etc

5) Make sure you have copied across roadroller setup: /scripts/roadroll.mjs

----------- End of Setup 

## To test run project/dev/local:

- You can use 'Live Server' (ie in VS Code) to run the local sourcecode or build (need to manage imports etc but webpack will crunch this out)
- To run the current sourcecode version of your project: 

    > npm run dev 

    (this will only run if vite.config.js and package.json are setup correctly)

## To build & roadroll the dev version (takes code from dev_sourcecode and makes a build in dev_build)

    > npm run build

    (this command runs the following: > vite build && node ./scripts/roadroll.mjs)

## Still todo:

- Work out prod/build/launch process (ie npm run deploy)
- Manage server side testing/build process (ie npm run server-build)
- Setup deploy of various builds (only working for dev codebase local build so far)
- The /server/ setup (in /JS13K_Triskaidekaphobia/server) has a good basic setup for my functional server backend 
    *need to update this template here and also add its own build and deploy processes


* (self note) this instruction set is also maintained in Obsidian 