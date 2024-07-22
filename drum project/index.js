var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.key;
    buttonAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keypress", function(event) {

    buttonAnimation(event.key);
  
});
  

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}



