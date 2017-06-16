(function (){
  var chargeTP= Game_Battler.prototype.chargeTpByDamage;
  
  Game_Battler.prototype.chargeTpByDamage = function(damageRate){
	damageRate=this._result.hpDamage;
	var value = Math.floor(damageRate* 100 / this.mhp * this.tcr);
    this.gainSilentTp(value);
  };
  
  var initTP= Game_Battler.prototype.initTp;
  
  Game_Battler.prototype.initTp = function() {
    this.setTp(this.tp);
};

var keepTP = Game_Battler.prototype.clearTp;

Game_Battler.prototype.clearTp = function() {
    //this.setTp(0);
};


	

})();