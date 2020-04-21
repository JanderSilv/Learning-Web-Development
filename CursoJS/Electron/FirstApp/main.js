const { app, Menu, Tray, dialog } = require('electron');
const { resolve, basename } = require('path');
const { spawn } = require('child_process');
const fixPath = require('fix-path');
const Store = require('electron-store');
const Sentry = require('@sentry/electron');
const fs = require('fs');

fixPath();

Sentry.init({
    dsn:
        'https://2e16892a2eaa4504afb70be7588ea9f0@o381220.ingest.sentry.io/5208193',
});

const schema = {
    projects: {
        type: 'string',
    },
};

let mainTray = {};

if (app.dock) {
    app.dock.hide();
}

function getLocale() {
    return JSON.parse(fs.readFileSync(resolve(__dirname, 'pt.json')));
}

const store = new Store({ schema });

function render(tray = mainTray) {
    const storedProjects = store.get('projects');
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    const locale = getLocale();

    const items = projects.map(({ name, path }) => ({
        label: name,
        submenu: [
            {
                label: locale.open,
                click: () => {
                    spawn('code', [path], { shell: true });
                },
            },
            {
                label: locale.remove,
                click: () => {
                    store.set(
                        'projects',
                        JSON.stringify(
                            projects.filter((item) => item.path !== path)
                        )
                    );
                    render();
                },
            },
        ],
    }));

    const contextMenu = Menu.buildFromTemplate([
        {
            label: locale.add,
            click: () => {
                const result = dialog.showOpenDialog({
                    properties: ['openDirectory'],
                });

                if (!result) return;

                const [path] = result;
                const name = basename(path);

                store.set(
                    'projects',
                    JSON.stringify([
                        ...projects,
                        {
                            path,
                            name,
                        },
                    ])
                );

                render();
            },
        },
        {
            type: 'separator',
        },
        ...items,
        {
            type: 'separator',
        },
        {
            type: 'normal',
            label: locale.close,
            role: 'quit',
            enabled: true,
        },
    ]);

    tray.setContextMenu(contextMenu);

    tray.on('click', tray.popUpContextMenu);
}

app.on('ready', () => {
    mainTray = new Tray(resolve(__dirname, 'assets', 'iconTemplate.png'));

    render(mainTray);
});
