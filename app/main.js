const {
    app,
    BrowserWindow,
    Menu,
    dialog
} = require('electron')
const path = require('path')
const menus = require('./menus.js')
const fs = require('fs')
// var file_management = require('./file_management.js')
// var notifier = require("node-notifier");

var mainWindow = null;

function createWindow() {
    // notifier.notify({
    //     message: "Hello, there",
    //     title: "My notification"
    // });
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1800
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "../index.html"));


    Menu.setApplicationMenu(menus.mainMenu)
    app.dock.setMenu(menus.dockMenu)

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // This event fires once the browser window's DOM is loaded
    mainWindow.webContents.on('did-finish-load', () => {
        openFile()
        listFiles()
        listNotebooks()
    })

    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);
// Quit when all windows are closed.
app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", function () {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=main.js.map

function openFile() {
    // const files = dialog.showOpenDialog(mainWindow, {
    //     properties: ['openFile'],
    //     filters: [{
    //         name: 'Markdown Files',
    //         extensions: ['md', 'markdown']
    //     }]
    // })

    // if (!files) return
    const file = "/Users/memogarcia/Downloads/squid.md"
    const content = fs.readFileSync(file).toString()

    mainWindow.webContents.send('file-opened', file, content)
}

function listFiles() {

    fs.readdir("/tmp/wip/python/", (err, files) => {
        files.forEach(file => {
            var file_path = "/tmp/wip/python/" + file
            var content = fs.readFileSync("/tmp/wip/python/" + file).toString()
            mainWindow.webContents.send('files', file_path, content)
        });
    })
}

function listNotebooks() {

    var p = "/tmp/wip/"

    fs.readdir(p, function (err, files) {
        if (err) {
            throw err;
        }

        files.map(function (file) {
            return path.join(p, file);
        }).filter(function (file) {
            console.log(file)
            return fs.statSync(file).isDirectory
        }).forEach(function (file) {
            console.log(file)
            mainWindow.webContents.send('get-notebooks', file)
        });
    });

}

exports.listFiles = listFiles
exports.openFile = openFile
exports.listNotebooks = listNotebooks