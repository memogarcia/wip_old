# WIP

## TODO

- ~~Fix repo layout~~
- Create a new file
- Create a new window
- ~~Ctrl-P should preview and un-preview the editor~~
- markdown viewer has a css issue that does not display the file fully while scrolling when loading file from renderer.js (text pasted manually does not have this issue.) (maybe a timing issue?)

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
