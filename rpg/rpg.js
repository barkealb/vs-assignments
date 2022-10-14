const input = require('readline-sync');

let pName = input.question('What is your name? ');

// Greeting and Define Player

let player = {
    name: pName,
    hp: 75
}

console.log('Welcome Gamer',player.name); 

//Define Enemy

let wildEnemies = {name: 'Jaro', hp: 55}

// Define Walk
function walk(){
    let chance = Math.floor((Math.random() *2 ) + 1 );
    switch (chance){
        case 1: 
        encounter()
        break;
        default:
        safe()
        break;
    }
}

function enterGame(){
    let walking = input.keyIn('Do you want to start Walking? ' + ' (y) Yes or (c) Cancel ', {limit: '$<y,c>;'});
    if (walking === 'y'){
        return walk()
    } else if (walking === 'c'){
        return
    }
}

if (pName !== null){
    return enterGame()
}




let playerHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
let enemyHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);


function encounter(){
    let chance = Math.floor((Math.random()*3) +0)
    let enemyChance = wildEnemies[chance]
    fight(enemyChance)
    choice()
}

function choice(){
    let journey = input.keyIn(`Would you like to: (s) Continue Walking or (p) Print your stats? `, {limit:'$<s,p>'})
    if( journey === 's'){
        input.keyInPause("You keep Walking")
        walk()
    } else if ( journey === 'p'){
        printStat()
    }
}

function printStat(){
    input.keyInPause('Hi ' + player.name + ' you have got ' + player.hp + ' health points left')
}

function safe(){
    input.keyInPause('You are safe For now');
    choice()
}
function runAway(){
    let chance = Math.floor((Math.random()*2)+1);
    let playerHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
    let enemyHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
    let meetEnemy = input.keyIn('Oh, it seems that ' + wildEnemies.name + ' has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'}) 
    while(meetEnemy === 'r'){
        if(chance !== 1){
            player.hp = player.hp - enemyHit
            meetEnemy = input.keyIn('you attempt to run away, but ' + wildEnemies.name + ' attacks dealing ' + enemyHit + '/n Your current HP is ' + player.hp + `. \n (a) Attack or (r) Run away? `,{limit:'$<a,r>'})
            if (meetEnemy === 'a'){
                attack()
            } else if (meetEnemy === 'r'){
                input.keyInPause('You managed to escape safely')
                // meetEnemy = ''
            }
        }
    }
}

// Define Attack 

function attack(){
    let playerHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
    let enemyHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
    let meetEnemy = input.keyIn(wildEnemies.name + ' is closing on you' + ' (a) Attack or (r) Run fast ', {limit: '$<a,r>;'}) 
    while(meetEnemy === 'a'){ 
        enemyScore = " attacks dealing " + enemyHit + " points of damage to you " ; player.hp = player.hp - enemyHit
        playerScore = " attack " + wildEnemies.name + " and deal "  + playerHit + " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerHit
                if(player.hp > 0){
                    if(wildEnemies.hp > 0){
                        engage = input.keyIn(`You` + playerScore + wildEnemies.name + enemyScore + `and your current HP is ` + player.hp + `. \n` + wildEnemies.name + `'s current HP is ` + wildEnemies.hp + `. (a) Attack again or (r) Run Away? `,{limit:'$<a,r>'})  
                    }
                } else {
                   input.keyInPause("you survived and got the Treasure Chest. You won!")
                    return
                }
            } 
    while (meetEnemy === 'r'){
                runAway()
            } if(player.hp <=0){
                loss()
            }
            }
// Fight with Enemy 
function fight(){
    let meetEnemy =  input.keyIn('Oh, it seems that ' + wildEnemies.name + 'has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'})
    if(meetEnemy === 'a'){
        attack()
    } else if (meetEnemy === 'r'){
        runAway()
    }
}

while(player.hp > 0){
    walk()
}

while(player.hp <= 0){
    loss()
}

function loss(){
    console.log('You have lost the game')
}









