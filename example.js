globalHotkeys = new Hotkeys();

globalHotkeys.add({
    combo: 'ctrl+up',
    description: 'A simple Alert Example',
    evenType: 'keyup',
    callback: function() {
       alert("this is a ctrl+up hotkey");
    }
});

pageHotkeys = new Hotkeys({
	autoLoad: false
});

pageHotkeys.add({
    combo: 'ctrl+up',
    callback: function() {
       alert("this is a ctrl+up hotkey from pageHotkeys");
    }
});



pageHotkeys.load()

// after 10 seconds the global Hotkeys will work again
setTimeout(function(){
  pageHotkeys.unload();
},10000)