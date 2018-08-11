# WIP

## TODO

- ~~Fix repo layout~~
- Create a new file
- Create a new window
- ~~Ctrl-P should preview and un-preview the editor~~
- markdown viewer has a css issue that does not display the file fully while scrolling when loading file from renderer.js (text pasted manually does not have this issue.) (maybe a timing issue?)
- git integration

## Features

Table of contents

```markdown
[TOC]

## 1

## 2
```

FlowChart

    ```flow
    st=>start: User login
    op=>operation: Operation
    cond=>condition: Successful Yes or No?
    e=>end: Into admin

    st->op->cond
    cond(yes)->e
    cond(no)->op
    ```

## Development environment

### Mac OS

    brew install node

### Linux

    pacman -S nodejs npm
    apt-get install -y nodejs

### Windows

    cinst nodejs.install

Get the repo.

    git clone https://github.com/memogarcia/wip
    cd wip
    npm install dependencies && npm install
    npm start

Have fun!