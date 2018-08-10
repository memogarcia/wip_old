// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const jQuery = require('../assets/vendor/js/jquery-3.3.1-min')
const electron = require('electron')
const ipc = electron.ipcRenderer

const remote = electron.remote
const mainProcess = remote.require('./main.js')

const $ = selector => document.querySelector(selector)

const $markdownView = $('.editor_text')
const $htmlView = $('.rendered-html')
const $openFileButton = $('#open-file')
const $saveFileButton = $('#save-file')
const $copyHtmlButton = $('#copy-html')
const $noteList = $('.note-list')


ipc.on('file-opened', (event, file, content) => {
    $markdownView.value = content
})

ipc.on('files', (event, file, content) => {
    // console.log(file)
    getTitle(file)
})


function getTitle(file) {
    const readline = require('readline');
    var sutil = require('line-stream-util')
    const fs = require('fs');

    const rl = readline.createInterface({
        input: fs.createReadStream(file).pipe(sutil.head(1))
    });

    var title;
    rl.on('line', function (line) {
        title = line.replace('#', '')
        var noteul = $('.note-list')
        html_li = jQuery('<li class="list-group-item"><div class="media-body"><strong>' + title + '</strong><p>Lorem ipsum dolor sit amet.</p></div></li>').appendTo(noteul)
    });
}

ipc.on('get-notebooks', (event, name) => {
    var notebook_div = $('.notebook-list')
    var n = name.split("/")
    var notebook_name = n[n.length-1]
    notebook_li = jQuery('<span class="nav-group-item">' + notebook_name + '</span>').appendTo(notebook_div)
    console.log(notebook_li)
})