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

//Define attacks 

    let playerHit = Math.floor(Math.random() * (100 - 25 + 10) + 5);
    let enemyHit = Math.floor(Math.random() * (100 - 25 + 10) + 5);

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

// not necessary to have this
// function enterGame(){
//     let walking = input.keyIn('Do you want to start Walking? ' + ' (y) Yes or (c) Cancel ', {limit: '$<y,c>;'});
//     if (walking === 'y'){
//         return walk()
//     } else if (walking === 'c'){
//         return
//     }
// }

// comment this out 
if (pName !== null){
    return encounter()
}

function endGame(){
    let playerChoice = input.keyIn('Do you want to walk or end game? ' + '(w) Walk or (e) Print Stats ', {limit: '$<w,e>;'});
    if (playerChoice === 'w'){
        walk()
    } else if (playerChoice === 'e'){
        return
    }
}
function encounter(){
 let playerChoice = input.keyIn('Do you want to walk or Print stats? ' + '(w) Walk or (p) Print Stats ', {limit: '$<w,p>;'})
   if (playerChoice === 'w'){
    let chance = Math.floor((Math.random()*2)+1);
        // let enemyChance = wildEnemies[chance]
        if(chance == 1 && player.hp > 0){
            fight()
        } else if (chance == 2 && player.hp > 0){
            runAway()
        // } else if (enemyChance > 1 && player.hp <= 0){
        //     console.log('You have died!')
        }
        // fight(enemyChance)
        if(player.hp > 0){
            walk()
        } else if (player.hp <= 0){
            endGame()
        } 
   } else if (playerChoice === 'p'){
    printStat()
   }

    /// for this function, combine it with the choice function 

    // let user choose to walk, or print stats
    // if user chooses walk
        // calculate 1/4 chance of finding enemy //
        // if enemy is found, fight(enemyChange)
            // let chance = Math.floor((Math.random()*3) +0)
            // let enemyChance = wildEnemies[chance]
            // fight(enemyChance)

    // if user chooses to print stats, 
    // call printSTats
    
    
    //choice()
}

// function choice(){
//     let journey = input.keyIn(`Would you like to: (s) Continue Walking or (p) Print your stats? `, {limit:'$<s,p>'})
//     if( journey === 's'){
//         input.keyInPause("You keep Walking")
//         walk()
//     } else if ( journey === 'p'){
//         printStat()
//     }
// }

function printStat(){
    input.keyInPause('Hi ' + player.name + ' you have got ' + player.hp + ' health points left')
    endGame()
}

function safe(){
    input.keyInPause('You are safe For now');
    encounter()
}
function loss(){
    console.log('You have lost the game')
}
while(player.hp > 0){
    walk()
}
if (player.hp <= 0){
    loss()
} 
function runAway(){
    let chance = Math.floor((Math.random()*2)+1);
    // let playerHit = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    // let enemyHit = Math.floor(Math.random() * (50 - 25 + 1) + 25);
    // let meetEnemy = input.keyIn('Oh, it seems that ' + wildEnemies.name + ' has found you' + ' (a) Attack or (r) Run away ', {limit: '$<a,r>;'}) 
    //while(meetEnemy === 'r'){
        if(chance == 1){
            player.hp = player.hp - enemyHit
            console.log('You did not successfully run away so you have taken some damage to your health points')
            encounter() // player takes damage
            // console.log that player did not successfully, run away, and they take some damage
        }
        else { 
            console.log('You have successfully run away and did not incure any damage to your health points')
            encounter()
            // console.log that player successfully runs and does not have any damage
        }

            //meetEnemy = input.keyIn('you attempt to run away, but ' + wildEnemies.name + ' attacks dealing ' + enemyHit + '/n Your current HP is ' + player.hp + `. \n (a) Attack or (r) Run away? `,{limit:'$<a,r>'})
            //if (meetEnemy === 'a'){
            //    attack()
            //} else if (meetEnemy === 'r'){
            //    input.keyInPause('You managed to escape safely')
                // meetEnemy = ''
            //}
    //}
}

// Define Attack 

function attack(){

    // create a while loop, start while loop here
    while( player.hp > 0 && wildEnemies.hp > 0){
        playerScore = " attacks dealing " + enemyHit + " points of damage to you " ; player.hp = player.hp - enemyHit
        enemyScore = " attack " + wildEnemies.name + " and deal "  + playerHit + " points of damage, \n" ; wildEnemies.hp = wildEnemies.hp - playerHit
        playerScore = playerScore - 1
    }

    // change the number of hitpoints and each iteration of while loop
    
    // end while loop

    if (player.hp <= 0){
        console.log('You have died!')
        printStat()
    } else if (wildEnemies.hp <=0 && player.hp > 0){
        console.log('You have defeated the Enemy!')
        encounter()
    }
}
    // console.log (youve died)

    // if enemy hp <= 0 and player hp > 0 
    //console.log (youve defeated the enemy)
    // give player extra hp for winning

    // end attack function

    // this part below is probably not needed
    // let meetEnemy = input.keyIn(wildEnemies.name + ' is closing on you' + ' (a) Attack or (r) Run fast ', {limit: '$<a,r>;'}) 
    //if(meetEnemy === 'a'){ 
            //     if(player.hp > 0){
            //         if(wildEnemies.hp > 0){
            //             engage = input.keyIn(`You` + playerScore + wildEnemies.name + enemyScore + `and your current HP is ` + player.hp + `. \n` + wildEnemies.name + `'s current HP is ` + wildEnemies.hp + `. (a) Attack again or (r) Run Away? `,{limit:'$<a,r>'})  
            //         }
            //     } else {
            //        input.keyInPause("you survived and got the Treasure Chest. You won!")
            //         return
            //     }
            // } // engage ther if statement 
    // if (meetEnemy === 'r'){
    //             runAway()
    //         } if(player.hp <=0){
    //             loss()
    //         }
//}
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
if (player.hp <= 0){
    loss()
} 
    // call loss()


//while(player.hp <= 0){
    //loss()
//}

// problem solving practice
// fizzbuzz









