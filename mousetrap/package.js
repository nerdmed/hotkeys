Package.describe({
	summary: "Mousetrap packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('mousetrap.min.js', 'client');
	api.add_files('export-mousetrap.js', 'client');
	api.add_files('plugins/global-bind/mousetrap-global-bind.js', 'client');

	api.export && api.export('Mousetrap');
});
