// Main Project Dev - Setup Here

## SourceCode/Setup

All dev sourcecode, should be located in only:
    ../index.html
    /src/*

ignore the following:
    dev_notes.md
    /ignore/*

## Dev/Build Commands

Build the dev version with: >npm run build
Run (Dev with live refresh) with: >npm run dev
    (this runs the dev BUILD in /dev_build/)

Serve the build version: >serve dev_codebase_builds

*Prod/deploy commands TBD

(if its the first time using this template, make sure to run 'npm install' first to setup node modules)

## For 'Live' Dev

We need to use 'Live Server' to create a session, within dev_sourcecode
    
    *note that code needs to manage imports etc here, somewhat untested, but it seems like roadroller crunches this down when it creates the single index.html file 