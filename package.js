Package.describe({
    summary: "Easy and effective Hotkeys for your app"
});

Package.on_use(function(api, where) {
    api.use(['underscore','check','mousetrap'], "client");
    api.add_files(['hotkeys.js'], "client");

    api.export("Hotkeys")

});