const input = require('readline-sync');

let pName = input.question('What is your name? ');

// Greeting and Define Player

function MainPlayer(player, hp){
    this.player = player;
    this.hp = hp
}

let player = new MainPlayer (pName, 100)
    

let gameOver = false; 

console.log('Welcome Gamer', pName); 

//Define Enemy

function enemies(enemyName, hp){
    this.enemyName = enemyName;
    this.hp = hp
}

let enemy = []
    let enemy1 = new enemies('Harod', 60);
    let enemy2 = new enemies('Largo', 70);
    let enemy3 = new enemies('Nama', 80);

enemy.push(enemy1, enemy2, enemy3)

let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]


//Define attacks 

let playerChoice = input.keyIn('Do you want to walk or end game? ' + '(w) Walk or (e) End Game ', {limit: '$<w,e>;'});


function printStat(){
    input.keyInPause('Hi ' + pName + ' you have got ' + player.hp + ' health points left')
    let playerChoice = input.keyIn('Do you want to walk or end game? ' + '(w) Walk or (e) End Game ', {limit: '$<w,e>;'});
    if(playerChoice == 'w'){
        walk()
    }  
}

function safe(){
    let playerChoice = input.keyIn('You are safe For now. Do you want to keep walking or end the game? ' + '(w) Walk or (e) End Game ', {limit: '$<w,e>;'});
    if(playerChoice == 'w'){
        walk()
    } else if (playerChoice == 'e'){
        gameOver = true; 
    }
}


function attack(){
    let playerHP = player.hp;
    let enemyHP = randomEnemy.hp
    
    while (playerHP > 0 && enemyHP > 0){
                let playerDamage = Math.floor(Math.random() * 50);
                console.log(playerDamage);
                let enemyDamage = Math.floor(Math.random() * 100);
                console.log(enemyDamage);
                playerHP =  playerHP - playerDamage
                enemyHP = enemyHP - enemyDamage;
                console.log(playerHP, enemyHP) 
            } 
            if (playerHP > 0 && enemyHP < 0){
                console.log('You have won')
                let endChoice = input.keyIn('Do you want to check your health points or end the game? ' + '(p) Print Stat (e) End Game' , {limit:'$<p,e>;'})
                if (endChoice == 'p'){
                    printStat(pName)
                } else {
                    return gameOver = true; 
                }
            } else if (playerHP < 0 && enemyHP > 0){
                console.log('The enemy has won')
            } 
            
}
            } 
}

function runAway(){
    let runChance = Math.floor((Math.random() *2) +1);
            if(runChance == 1){
                let runAwayHit = Math.floor((Math.random() * 20) + 1);
                player.hp = player.hp - runAwayHit
                console.log('You did not successfully run away so you have taken some damage to your health points') 
                walk()
            }
            else { 
                console.log('You have successfully run away and did not incure any damage to your health points')
                walk()
            }
}

function walk(){
    let chance = Math.floor((Math.random() * 2 ) + 1);
    if (chance == 1){
        let encounter = input.keyIn('Oops...You have encountered an enemy. What do you want to do? ' + '(a) Attack or (r) Run Away ', {limit: '$<a,r>;'})
    // let meetChance = Math.floor((Math.random() *2) +1);
    if(encounter == 'a'){
        attack(randomEnemy)
    } else if (encounter == 'r'){
        runAway()
    }
} else if(chance == 2){
    safe()
}
}

function startGame(){
    
    if(playerChoice == 'w' && player.hp > 0){
        walk()
    } else if (playerChoice == 'e' && player.hp > 0){
        gameOver = true
    } else if (playerChoice == 'w' && player.hp < 0){
        gameOver = true;
    } else if (playerChoice == 'e'){
        gameOver = true;
    } 
}


startGame();



