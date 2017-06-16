(function(){

	var oldCommandList = Window_ActorCommand.prototype.makeCommandList;
	
	Window_ActorCommand.prototype.makeCommandList = function() {
		if (this._actor) {
			if (this._actor.tp < 100){
				oldCommandList.call(this);
			}
			else{
				this.addSkillCommands();
				this.addGuardCommand();
				this.addItemCommand();
			}
		}
	};
	
	var oldSkillCommands = Window_ActorCommand.prototype.addSkillCommands;
	
/*	Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};*/
	Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
	var sId = skillTypes.length;
	skillTypes.sort(function(a, b) {
        return a - b;
    });
	
	skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
		if(this._actor.tp < 100){
		if(stypeId!=3){
        this.addCommand(name, 'skill', true, stypeId);
    }
	}
	else{
		this.addCommand(name, 'skill', true, stypeId);
	}
	}, this);
		
	};
	
})();