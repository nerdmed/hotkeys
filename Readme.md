#Meteor Hotkeys
This packages provides you with an easy way to manage Hotkeys and Keyboard Shortcuts in your Meteor Project. We internally use  [mousetrap](http://craig.is/killing/mice) - so you can use all the features provided there.

##Install

	meteor add flowkey:hotkeys

##Get Started

### Create a new Hotkey Set

	globalHotkeys = new Hotkeys();

### Add Hotkeys to your Set

	globalHotkeys.add({
		combo : "ctrl+4",
		eventType: "keydown",
		callback : function(){
			alert("You pressed ctrl+4");
		}
	})

	globalHotkeys.add({
		combo : "g i",
		callback : function(){
			alert("You pressed g and then i");
		}
	})

You can use all combos that are provided by [mousetrap](http://craig.is/killing/mice)

### Loading New Hotkeys
If you have a complex App you may want to load some Hotkeys depending on the context the user is in.
You can do so by using the following:

	contextHotkeys =  new Hotkeys({
		autoLoad : false
	});

	contextHotkeys.add({
		combo : "ctrl+4",
		callback : function(){
			alert("You pressed ctrl+4 in the new Context");
		}
	})

The autoLoad parameter will prevent the Shortcuts to get Loaded by default.
As soon as you load them they will overwrite the existing onces. When you unload the Hotkeys it will revert to the last unloaded hotkey.
Let's see: 

	contextHotkeys.load();

	//-> press ctrl+4
	//-> You will see an Alert with ("You pressed ctrl+4 in the new Context")

	contextHotkeys.unload();

	//-> press ctrl+4
	//-> You will see the globalHotkeys Alert with ("You pressed ctrl+4")



## Next Features
* control hotkeys inside INPUT and TEXTAREA tags
* iron-router support to use hotkeys for are specific route



## Contribute
Feauture and Pullrequests are welcome!


Developed by [flowkey](https://www.flowkey.com)
