
(function (){

/*Game_Party.prototype.steal = function(){
	
	$gameMessage.add("Testing 1 & 2 ");
};*/

Game_Enemy.prototype.makeStealDrops = function () {
		 return this.enemy().dropItems.reduce(function(r, di) {
        if (di.kind > 0) {
            return r.concat(this.itemObject(di.kind, di.dataId));
        } else {
            return r;
        }
    }.bind(this), []);
	};

Game_Troop.prototype.steal = function(){
	
	var items = this.makeStealDrops();
	var setup = items.length;
	var ranTarget = (Math.floor(Math.random() * (setup - 1)));
	if(ranTarget % 2 === 0 || ranTarget === 0){
		var target = (ranTarget + 1);
	}
	
	else{
		var target = ranTarget;
	}
		
	var debug = target.toString();

	//$gameMessage.add(debug);  //debug line
	
	
		var item = items[target];  //items are in the "even" (odd) spaces of the array. 1,3, etc
		$gameParty.gainItem(item, 1);
		$gameMessage.add("You stole an item! " + TextManager.obtainItem.format(item.name));
	
};
Game_Troop.prototype.makeStealDrops = function() {
		
	var member1 = this.aliveMembers();	 
	return member1.reduce(function(r, enemy) {
        return r.concat(enemy.makeStealDrops()[0], 0);
    }, [0]);
};

Game_Troop.prototype.stealMember = function(){
	return this.members()[0];
}
//
//
//        This one doesn't work but doesn't crash
//
/*Game_Troop.prototype.makeStealDrops = function() {
		return this.aliveMembers().reduce(function(r, enemy) {
			return r.splice(0, 0, enemy.makeStealDrops());
		}, []);
	};*/
	
////
///       This one crashes the game with undefined function error
///
/*Game_Troop.prototype.makeStealDrops = function() {
		return this.aliveMembers().reduce(function(r, enemy) {
			return r.inject(enemy.makeStealDrops());
		}, []);
	};*/

})();
