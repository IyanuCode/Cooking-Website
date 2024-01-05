
var leftSide = document.querySelector("#leftSide");
var trainingImg = document.getElementById("trainingImg");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", validate);
/*
changing training class img when each button is pressedd
//adding an eventlistner to listen to the traingBtn whenever any of it is pressed and change the image accordingly
*/
leftSide.addEventListener("click", function(e){
    if(e.target.id === "firstTrainingBtn"){
        trainingImg.src = "img/trainier1.jpg"
    } 
    else if(e.target.id === "secondTrainingBtn"){
        trainingImg.src = "img/trainer2.jpg"
    }
    else if(e.target.id === "thirdTrainingBtn"){
        trainingImg.src = "img/trainer3.jpg"
    }
    else if(e.target.id === "fourthTrainingBtn"){
        trainingImg.src = "img/a.jpg"
    }
});

//form validation
function validate() {
    if (text1 ==null || text1==""){  
        alert("Name can't be blank");  
        
      }else if (text2 ==null || text2==""){  
        alert("Subject can't be empty")
    }
}