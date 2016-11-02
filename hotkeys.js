// Object to save the replaced hotkeys 
var comboMap = {};

Hotkeys = function(options) {
    this.hotkeys = [];

    if (!options || options.autoLoad === undefined) {
        this.autoLoad = true;
    } else {
        this.autoLoad = options.autoLoad;
    }
}

_.extend(Hotkeys.prototype, {
    add: function(obj) {
        var combo = obj.combo;
        var description = obj.description;
        var evenType = obj.evenType; 
        var callback = obj.callback;

        // add all hotkeys to local collection
        this.hotkeys.push(obj);

        // Small Error check
        if(!_.isArray(combo)){
            check(combo, String);
        }

        if(!_.isString(evenType)){
            evenType = '';
        }

        if (!_.isFunction(callback)) {
            throw new Meteor.Error(001, 'Error 001: Callback is not a Function');
        }

        var comboMapEntry = comboMap[combo];
        if (!_.isArray(comboMapEntry)) {
             comboMap[combo] = []
        }
        if (this.autoLoad === true) {
            comboMap[combo].push(callback);
            Mousetrap.bind(combo, callback, evenType);
        }
    },
    load: function() {
        var allHotkeys = this.hotkeys;
        _.each(allHotkeys, function(hotkey) {
            comboMap[hotkey.combo].push(hotkey.callback);
            Mousetrap.bind(hotkey.combo, hotkey.callback, hotkey.evenType);
        })

    },
    unload: function() {
        var allHotkeys = this.hotkeys;
        _.each(allHotkeys, function(hotkey) {
            var comboMapEntry = comboMap[hotkey.combo];

            _.each(comboMapEntry, function(func, index){
            	if(func == hotkey.callback){
					comboMap[hotkey.combo].splice(index,1);
            	}
            });

            // bind it back to the original one
            if(comboMapEntry.length > 0){
                Mousetrap.bind(hotkey.combo, comboMap[hotkey.combo][comboMapEntry.length -1 ], hotkey.evenType);   
            }else{
                Mousetrap.unbind(hotkey.combo);
            }

        })

    }
})