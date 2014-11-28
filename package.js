Package.describe({
  name: 'flowkey:hotkeys',
  summary: 'Easy and effective hotkeys for your app, powered by Mousetrap',
  version: '1.1.0',
  git: 'https://github.com/nerdmed/hotkeys.git'
});

Package.onUse(function(api, where) {
  api.use(['underscore', 'check', 'mousetrap:mousetrap'], 'client');
  api.addFiles(['hotkeys.js'], 'client');

  api.export('Hotkeys');
});
