document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You clicked Submit"); // 'this' refers to the button that was just clicked
            } else{
                let gameType = this.getAttribute ("data-type");
                alert (`You clicked ${gameType}`) //tell the user what button has been clicked
            }
        })
        
    }
})

function runGame(){

}

function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}