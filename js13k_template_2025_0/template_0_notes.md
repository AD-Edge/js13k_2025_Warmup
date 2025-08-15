# Template for modular setup for js13k start

Based on (but improved) from last years setup, for https://github.com/AD-Edge/JS13K_Triskaidekaphobia/ 

## Setup (based on this warmup project)

To setup the build automation (and setting up a simple canvas with test render and basic/WIP input setup) you can copy the folders/files in this project. 
* Good boilerplate for a js13k entry & dev environment with basic roadroller and build/dev commands pre-setup.  

I Use VSCode as my IDE/Editor and run commands via the inbuild VSCode terminal.

Setup steps required: 

1) Create folders and initial files:
(Reference the folder directories in /js13k_template_2025_0/)
(copy file contents as needed) 

    important to make sure you setup for an initial build: 
        /dev_build/
        /dev_sourcecode/
        /dev_sourcecode/src/
        /dev_sourcecode/src/main.js
        /dev_sourcecode/src/style.css
        /scripts/
        /scripts/roadroll.mjs
        /index.html

2) Init vite project (which generates package.json):
    ( '>' = run in terminal ) 
    > npm init -y 

3) Packages Install:
    Copy the package.json into your newly generated package.json
    > npm install 
    (you can also configure package.json as needed, ie project name, description, install other packages as needed. 
    Just use the package.json here as a foundation to start with)

4) Setup vite config:
    create /vite.config.js & copy contents
    or copy vite.config.js file across 
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