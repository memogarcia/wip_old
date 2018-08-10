const {
    dialog
} = require('electron');


function openFile() {
    const files = dialog.showOpenDialog("", {
        properties: ['openFile'],
        filters: [{
            name: 'Markdown Files',
            extensions: ['md', 'markdown']
        }]
    })

    if (!files) return

    console.log(files)
}

exports.openFile = openFile