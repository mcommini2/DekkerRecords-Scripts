(function (){

var oldDie = BattleManager.endTurn; 
BattleManager.endTurn = function() {
    if($gameSwitches.value(46)==true)
	{
		$gameParty.reviveBattleMembers(); 
	}
	this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
};


var oldRevive = Game_Party.prototype.reviveBattleMembers;

Game_Party.prototype.reviveBattleMembers = function() {
    this.battleMembers().forEach(function(actor) {
        if (actor.isDead()) {
            if($gameSwitches.value(46)==true)
			{
				actor.setHp(Math.floor(actor.mhp/4));
				$gameSwitches.setValue(46, false);
			}
			else
			{
				actor.setHp(1);
			}
        }
    });
};

})();