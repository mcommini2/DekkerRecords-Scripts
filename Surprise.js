(function(){
	
	/*var SurpriseSetup = BattleManager.onEncounter; 
	/*the BattleManager init function can be overridden by later functions, 
	onEncounter now works as a more reliable place to do the Preemptive*/
	
	/*BattleManager.onEncounter = function() {
    
	if($gameSwitches.value(7)===true)
	{
		$gameMessage.add("Debug true");
		this._preemptive = true;
		this._surprise = false;
	}
	else
	{
		this._preemptive = (Math.random() < this.ratePreemptive());
		this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
	}
};*/  
//////^ The above should work with other iterations. For our game use the following:

   var SurpriseSetup = BattleManager.initMembers;
   
   BattleManager.initMembers = function() {
    
	if($gameSwitches.value(7)===true){
		this._phase = 'init';
    this._canEscape = false;
    this._canLose = false;
    this._battleTest = false;
    this._eventCallback = null;
    this._preemptive = true;
    this._surprise = false;
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._mapBgm = null;
    this._mapBgs = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._logWindow = null;
    this._statusWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
	}
	else{
	this._phase = 'init';
    this._canEscape = false;
    this._canLose = false;
    this._battleTest = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._mapBgm = null;
    this._mapBgs = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._logWindow = null;
    this._statusWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
	}
};

})();
