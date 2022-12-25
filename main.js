
let header = document.getElementById("header")
let overview = document.querySelector(".overview")
let headerTitle = document.querySelector("header h1")
let jihawiInput = document.querySelector("form .jihawi")

let inputsDivs = document.querySelectorAll("form > div")


jihawiInput.oninput = function(){
  if (this.value.length == 1){

  }
  else if (this.value.length == 2){
    if ((parseInt(this.value) <= 20 && parseInt(this.value) > 0) == false){
      this.value = this.value[0]
    }
  }
}



headerTitle.onclick = function(){
  header.classList.toggle("fullScreen")
}

document.addEventListener("click", function(e){
  if(e.target.parentElement.classList.contains("inputDiv") && e.target.tagName == "INPUT" ) {
    
    inputsDivs.forEach(function(e){
      e.classList.remove("slide")
    })
    
    e.target.parentElement.classList.toggle("slide")
  }
})

