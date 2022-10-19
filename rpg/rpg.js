const input = require('readline-sync');

let pName = input.question('What is your name? ');

// Greeting and Define Player

let player = {
    name: pName,
    hp: 75
}

let gameOver = false; 
console.log('Welcome Gamer',player.name); 

//Define Enemy

let wildEnemies = {name: 'Jaro', hp: 55}

//Define attacks 

let playerChoice = input.keyIn('Do you want to walk or end game? ' + '(w) Walk or (e) End Game ', {limit: '$<w,e>;'});



// startGame();

// Define Walk
// function walk(){
//     let chance = Math.floor((Math.random() *2 ) + 1);
//     if (chance == 1){
//     let meetChance = Math.floor((Math.random() *2) +1);
//     if(meetChance == 1){
//         let meetEnemy =  input.keyIn('Oh, it seems that ' + wildEnemies.name + ' has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'})
//         if(meetEnemy === 'a'){
//             while( player.hp > 0 && wildEnemies.hp > 0){
//                 let playerDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//                 let enemyDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//                 playerScore = " attacks dealing " + enemyDamage + " points of damage to you " ; player.hp = player.hp - enemyDamage
//                 enemyScore = " attack " + wildEnemies.name + " and deal "  + playerDamage+ " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerDamage
//                 playerScore = playerScore - Math.floor((Math.random() * 10) + 1);
//             }
//         } else if (meetEnemy === 'r'){
//         runAway()
//         }
//     } else if(chance == 2){
//         safe()
//     }
// }
// }

// function encounter(){
//  let playerChoice = input.keyIn('Do you want to walk or Print stats? ' + '(w) Walk or (p) Print Stats ', {limit: '$<w,p>;'})
//    if (playerChoice === 'w'){
//     let chance = Math.floor((Math.random() *2) +1);
//     if(chance == 1){
//         let meetEnemy =  input.keyIn('Oh, it seems that ' + wildEnemies.name + ' has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'})
//         if(meetEnemy === 'a'){
//             while( player.hp > 0 && wildEnemies.hp > 0){
//                 let playerDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//                 let enemyDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//                 playerScore = " attacks dealing " + enemyDamage + " points of damage to you " ; player.hp = player.hp - enemyDamage
//                 enemyScore = " attack " + wildEnemies.name + " and deal "  + playerDamage+ " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerDamage
//                 playerScore = playerScore - Math.floor((Math.random() * 10) + 1);
//             }
//         } else if (meetEnemy === 'r'){
//         runAway()
//         }
//     } else if (chance == 2){
//             runAway()
//     } 
//    } else if (playerChoice === 'p'){
//     printStat()
//    }
// }

function printStat(){
    input.keyInPause('Hi ' + player.name + ' you have got ' + player.hp + ' health points left')
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

function loss(){
    console.log('You have lost the game')
}

// Game Controller 
// if (player.hp > 0 && playerChoice == 'w'){
//     walk()
// } else if (player.hp > 0 && playerChoice == 'e'){
//     gameOver = true;
// } else if (player.hp <= 0){
//     loss()
//     gameOver = true; 
// }

// function runAway(){
//     let runChance = Math.floor((Math.random() *2) +1);
//         if(runChance == 1){
//             let runAwayHit = Math.floor((Math.random() * 20) + 1);
//             player.hp = player.hp - runAwayHit
//             console.log('You did not successfully run away so you have taken some damage to your health points')
//             encounter() 
//         }
//         else { 
//             console.log('You have successfully run away and did not incure any damage to your health points')
//             encounter()
//         }
// }

// Define Attack 

// function attack(){

//     // create a while loop, start while loop here
//     while( player.hp > 0 && wildEnemies.hp > 0){
//         let playerDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//         let enemyDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
//         playerScore = " attacks dealing " + enemyDamage + " points of damage to you " ; player.hp = player.hp - enemyDamage
//         enemyScore = " attack " + wildEnemies.name + " and deal "  + playerDamage+ " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerDamage
//         playerScore = playerScore - Math.floor((Math.random() * 10) + 1);
//     }

//     if (player.hp <= 0){
//         console.log('You have died!')
//         gameOver = true;
//     } else if (wildEnemies.hp <=0 && player.hp > 0){
//         console.log('You have defeated the Enemy!')
//         encounter()
//     }
// }
// Fight with Enemy 
// function fight(){
//     let meetEnemy =  input.keyIn('Oh, it seems that ' + wildEnemies.name + 'has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'})
//     if(meetEnemy === 'a'){
//         attack()
//     } else if (meetEnemy === 'r'){
//         runAway()
//     }
// }

function walk(){
    let chance = Math.floor((Math.random() *2 ) + 1);
    if (chance == 1){
    let meetChance = Math.floor((Math.random() *2) +1);
    if(meetChance == 1){
        let gameOver = false;
        while (player.hp > 0 && wildEnemies.hp > 0){
                let playerDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
                let enemyDamage = Math.floor(Math.random() * (100 - 35 + 10) + 5);
                // playerScore = " attacks dealing " + enemyDamage + " points of damage to you " ; player.hp = player.hp - enemyDamage
                playerScore = player.hp - playerDamage
                // enemyScore = " attack " + wildEnemies.name + " and deal "  + playerDamage+ " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerDamage
                enemyScore = wildEnemies.hp - enemyDamage;
                console.log(playerScore)
                gameOver = true; 
            } 
    } else if (meetChance == 2){
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
} else if(chance == 2){
    safe()
}
}


// Game Controller 
// if (player.hp > 0 && playerChoice == 'w'){
//     walk()
// } else if (player.hp > 0 && playerChoice == 'e'){
//     gameOver = true;
// } 
if (player.hp <= 0){
    loss()
    gameOver = true; 
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






