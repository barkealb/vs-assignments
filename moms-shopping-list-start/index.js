var form = document["addItem"]; 

form.addEventListener("submit", function(event){
    event.preventDefault()
    
   const itemName = form.title.value;
    form.title.value = ""

    //Item being created 
    const listInput = document.createElement('li');     //1. createElementli 
    listInput.textContent = itemName;
    //Edit Button
    const editButton = document.createElement('button'); //edit Button 
    editButton.textContent = "edit" // Name the button
    //Delete Button
    const xButton = document.createElement('button'); // x button
    xButton.textContent = "X" // Name the button
    //Appends
    document.getElementById("list").append(listInput)
    listInput.append(editButton);
    listInput.append(xButton);
    // Delete Button
    xButton.addEventListener('click', function(){
        console.log("you clicked the delete button")
        listInput.remove()
    })
})


// DivInput.textContent = itemName; 
// const DivInput = document.createElement('div'); // create div