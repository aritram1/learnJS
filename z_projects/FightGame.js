const Constants = {
    MAX_AMMO : 1000, MAX_HEALTH : 100,
    MIN_AMMO: 20, MIN_HEALTH : 20,
    AMMO_P_ATTACK : 3, HEALTH_P_ATTACK : 2,
    REST : 20
}

//future : DECIDE() is A placeholder function to generate random sample on decisions It will be finally customized
/*Constants.prototype.DECIDE = function(player){    
    threshold = 0.5;        
    return Math.floor(Math.random(1) > threshold);
}*/


//console.log(Constants);
const Player = function(name){
    this.name = name;
    this.alias = name; //future add some logic to set alias
    this.ammo = Constants.MAX_AMMO;
    this.health = Constants.MAX_HEALTH;    
    this.turn = false;
}

Player.prototype.setCurrentPlayer = function(currentplayer){
    this.turn = false;
    currentplayer.turn = true;
}

Player.prototype.attack = function(otherplayer){
    this.ammo = this.ammo - Constants.AMMO_P_ATTACK;
    otherplayer.health = otherplayer.health - Constants.HEALTH_P_ATTACK;
    
    /*
    future : Customized DECIDE function to be used 
    here to decide who can attack next. Currently hardcoded to 
    50-50 chance
    */
    if(Math.random(1) < 0.5){
        this.setCurrentPlayer(otherplayer);
    }    
}

const play = function(player1, player2, debug){ //debug can be used in future
    console.log('-------------------------');
    console.log('| Player1     |   Player2|');
    console.log('--------------------------');
    console.log('Health|Ammo   |   Health|Ammo');

    let fightstat = {
        count: 0,
        player1:0,  //future make prop name same as player's alias 
        player2:0   //far future :  use as array (multiplayer)
    }
    
    while(true){
        data = player1.turn ? `${player1.health}|${player1.ammo}----------->${player2.health}|${player2.ammo}`
                            : `${player1.health}|${player1.ammo}<***********${player2.health}|${player2.ammo}`
        console.log(data);
        
        if(player1.turn){
            //setTimeout(function(){player1.attack(player2)},500); //future make it async
            player1.attack(player2);
            fightstat.player1 +=1;;
        }
        else{
            //setTimeout(function(){player2.attack(player1)},500); //future make it async
            player2.attack(player1);
            fightstat.player2 +=1;
        }
        if (player1.health < Constants.MIN_HEALTH || player1.ammo < Constants.MIN_AMMO || player2.health < Constants.MIN_HEALTH || player2.ammo < Constants.MIN_AMMO){
            console.log(`Exiting after ${fightstat.count} fights`);
            break;
        }
        fightstat.count+=1;
    }
    return fightstat;
}

console.clear();
let aritra = new Player('aritra');
let cognizant = new Player('cognizant');
aritra.turn = true;
let fightstat = play(aritra, cognizant);
console.log(`Fight stat : ${JSON.stringify(fightstat)}`);
