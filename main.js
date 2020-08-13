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

  function nosubmit(){
      var e = document.getElementById("continents").getElementsByTagName("select")[0];
      var choice =e.options[e.selectedIndex].value;
      if (choice == "africa") {
        document.getElementById("content").innerHTML=`Africa is not a significant source of greenhouse gas emissions. Africa accounts for only
        2–3 per cent of the world’s carbon dioxide emissions from energy and industrial sources.
        According to the World Resources Institute, Africa’s per capita emissions of carbon
        dioxide in the year 2000 were 0.8 metric tons per person, compared with a global figure
        of 3.9 tons per person. Yet Africa is going through the worst effects of climate change. Total available water in the large basins of the Niger,
        Lake Chad and Senegal has decreased by 40–60 per cent and many climate models
        project declining mean precipitation in the already-dry regions of southern Africa.`
      }else if(choice=="australia"){
        document.getElementById("content").innerHTML=`djibsdubcudsddj`
      }
      return false;
  }

 /*let myButton=document.getElementById("submit");
 myButton.on("click",function(e){
    e.preventDefault();
    document.getElementById("Africa").display.all;
 })*/

 let toggleButton = document.querySelector("#submitButton");
 console.log(toggleButton)
 toggleButton.addEventListener('click',displayInfo);

 function displayInfo() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
  }