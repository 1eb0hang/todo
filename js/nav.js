
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

let currentDropDown = null;

function toggleSubMenu(button){
  // if (currentDropDown && currentDropDown != button){
  //   currentDropDown.nextElementSibling.classList.toggle("show")
  // }
  button.nextElementSibling.classList.toggle("show");
  // currentDropDown = button;

  button.classList.toggle("rotate");

  if(sidebar.classList.contains("close")){
    sidebar.classList.toggle("close");
    toggle.classList.toggle("rotate");
  }
}

function toggleSideBar(){
  Array.from(sidebar.getElementsByClassName("show")).forEach(ul=>{
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  })

  sidebar.classList.toggle("close");
  toggle.classList.toggle("rotate");
}
