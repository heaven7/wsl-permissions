Package.describe({
  name: 'heaven7:wsl-permissions',
  version: '0.0.2',
  summary: 'Permissions for wsl packages',
  git: 'https://github.com/heaven7/wsl-permissions.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
        'heaven7:wsl-core@0.0.3_1',
        'alanning:roles@1.2.14'
    ];

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use(packages, both);
    api.imply(packages);

    api.addFiles([
        'lib/server/methods.js',
        'lib/server/permissions.js'
    ], 'server');

});
