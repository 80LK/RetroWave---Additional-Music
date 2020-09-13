var files = null;
ModAPI.addAPICallback("RetroWaveRadio", function(api){
    if(!files)
        files = FileTools.GetListOfFiles(__dir__ + "sounds/");

    for(let i in files)
        api.addFile(__dir__+"sounds/" + files[i].getName());
})

ModAPI.addAPICallback("RetroWaveGramophone", function(api){
    if(!files)
        files = FileTools.GetListOfFiles(__dir__ + "sounds/");
        
    for(let i in files){
        let name = files[i].getName();

        let sid = "addional_sound_"+i;
        IDRegistry.genItemID(sid);
        Item.createItem(sid, name, {name:"record_13", data:0}, {stack: 1 });

        api.registerDisk(ItemID[sid], __dir__+"sounds/" + name);
    }
})