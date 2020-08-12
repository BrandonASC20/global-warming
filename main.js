function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

 /*let myButton=document.getElementById("submit");
 myButton.on("click",function(e){
    e.preventDefault();
    document.getElementById("Africa").display.all;
 })*/

 let toggleButton = document.querySelector("#submitButton");
 console.log(toggleButton);
 toggleButton.addEventListener('click',displayInfo);

 function displayInfo() {
    var x = document.getElementById("Africa");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }