const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920, // Adjust as needed
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'scripts', 'app.js'), // Ensure your JavaScript is loaded
        },
    });

    mainWindow.loadFile('index.html'); // Load your main HTML file
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
