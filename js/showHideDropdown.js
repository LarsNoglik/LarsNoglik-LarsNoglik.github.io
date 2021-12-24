//Else node does not exist -> So use window.onload()
var status = "hidden";


window.onload = function() {
    const btnMenu = document.getElementById("menueBtn");

    btnMenu.addEventListener("click", function(){
    showHideDropdown()});
};


function showHideDropdown() {
    var dropMenu = document.getElementById("dropMenu");
    var classShowHide = dropMenu.children;


    //alert(status);
    if(status == "hidden"){
        //var classShowHide = document.getElementsByClassName("hide");

        dropMenu.setAttribute("class","show");
        dropMenu.setAttribute("animation","");

        for(var i=0; i < classShowHide.length; i++){
           classShowHide[i].setAttribute("class","show");
        }
       
        status = "visible";
    }else{
        //var classShowHide = document.getElementsByClassName("show");

        dropMenu.setAttribute("class","hide");

        for(var i=0; i < classShowHide.length; i++){
            classShowHide[i].setAttribute("class","hide");
        }
        
        status = "hidden";
    }
}