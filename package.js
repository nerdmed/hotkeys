Package.describe({
  name: 'flowkey:hotkeys',
  summary: 'Easy and effective hotkeys for your app, powered by Mousetrap',
  version: '1.2.0',
  git: 'https://github.com/nerdmed/hotkeys.git'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.0');
  api.use(['underscore', 'check', 'mousetrap:mousetrap@1.4.6'], 'client');
  api.addFiles(['hotkeys.js'], 'client');

  api.export('Hotkeys');
});
