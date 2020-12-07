const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    resizable: true,
    x: 100, // Left offset of window
    y: 100, // top offset of window
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('src/index.html')
  win.show()
  //win.webContents.openDevTools()
  //win.setMenu(null)

  win.on('close', function() { //   <---- Catch close event

      // The dialog box below will open, instead of your app closing.
      require('dialog').showMessageBox({
          message: "Close button has been pressed!",
          buttons: ["OK"]
      });
  });


}

if (process.platform === 'linux') {
    app.commandLine.appendSwitch('enable-transparent-visuals');
    app.commandLine.appendSwitch('disable-gpu');
}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
