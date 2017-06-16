(function(){

var _xpTotal = Game_Troop.prototype.expTotal;

Game_Troop.prototype.expTotal = function() {
    if($gameSwitches.value(7)==true)
	{
		return this.deadMembers().reduce(function(r, enemy) {
			return r + (enemy.exp() * 2);
		}, 0);
	}
	else
	{
		return this.deadMembers().reduce(function(r, enemy) {
			return r + enemy.exp();
		}, 0);
	}
};

var _goldTotal = Game_Troop.prototype.goldTotal;

Game_Troop.prototype.goldTotal = function() {
    
	if($gameSwitches.value(7)==true)
	{
		return this.deadMembers().reduce(function(r, enemy) {
			return r + enemy.gold();
		}, 0) * this.goldRate() * 2;
	}
	else
	{
		return this.deadMembers().reduce(function(r, enemy) {
			return r + enemy.gold();
		}, 0) * this.goldRate();
	}
};

})();