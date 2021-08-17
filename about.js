  var menu = document.querySelector(".menu");
        var navbar = document.querySelector(".navbar");
        navbar.style.right = "-200px";
        menu.onclick = function(){
            if(navbar.style.right == "-200px"){
                navbar.style.right = "0";
            }else{
                navbar.style.right = "-200px";
            }
        }