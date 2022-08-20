// Inserting header and changing the Style 

var headerChange = document.getElementById('header'); 

headerChange.textContent = 'Friends CHAT App'; 
headerChange.style.fontSize = '50px';
headerChange.style.textAlign = 'center'; 
headerChange.style.background = 'blue'; 
headerChange.style.color = 'white'; 

// Wrapping in Span
var newSpan = document.createElement('span'); 

headerChange.appendChild(newSpan); 

// Postive Start to the message  

// First Message
var messagesFirst = document.getElementsByClassName('message left')[0]
messagesFirst.textContent = 'Hello Buddy'
// Second Message 
var messagesSecond = document.getElementsByClassName('message right')[0]
messagesSecond.textContent = 'Hey! How are you?'
// Third Message 
var messageThird = document.getElementsByClassName('message left')[1]
messageThird.textContent = "I'm doing great, Thanks for asking! How is the family?"
//Fourth Message 
var messageFourth = document.getElementsByClassName('message right')[1]
messageFourth.textContent = 'They are all doing super!'
// Clear Button 
var mainDiv = document.querySelector('.messages')

var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function handleClick(){
    mainDiv.replaceChildren()
})