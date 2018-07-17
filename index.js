const { app, BrowserWindow } = require('electron')

let myWindow

app.on('ready', () => {
  myWindow = new BrowserWindow()
  myWindow.loadFile('renderer.html')
})
