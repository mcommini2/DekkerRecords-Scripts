(function(){

var oldEnemySetup = Game_Enemy.prototype.setup;

Game_Enemy.prototype.setup = function(enemyId, x, y) {
    
	if($gameSwitches.value(7)==true){
	
	this._enemyId = enemyId;
    this._screenX = x;
    this._screenY = y;
	this._hp = this.mhp/2;
	this._mp = this.mmp;
	}
	else{
		oldEnemySetup.call(this, enemyId, x, y);
	}
};

})();