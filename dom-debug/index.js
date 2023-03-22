const colors = ["red", "blue", "green"]

var addItem = document.getElementById("add"); // breaking it up so that click won't take much time * tho it is still taking a bit of time. Ask TEACHER!
addItem.addEventListener("click", function(e){
    var subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){ // .length should have been spcified to run the for loop 
        const option = document.createElement("option") // Was missing *document* to create "option" tag in the document
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("onchange", function(e){
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value // Trying to capture Input value 
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


