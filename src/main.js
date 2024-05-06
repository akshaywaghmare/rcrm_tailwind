

document.getElementById("ToggleSidebar").addEventListener("click", expandSidebar);

var sidebar = document.getElementById("application-sidebar-dark");
    
var sidebarLabel = document.getElementsByClassName("sidebar-label");


/**
 * expand sidebar if it is short, otherwise collapse it
 */
function expandSidebar() {
    
    sidebar.classList.remove("w-14");

    sidebar.classList.add("w-64");

    for(var i = 0; i < sidebarLabel.length; i++){
        sidebarLabel[i].classList.remove('hidden'); 
    }



}