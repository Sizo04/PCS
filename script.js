let hamBtn = document.getElementById('hamBtn');
let hamMenu = document.getElementById('hamMenu');
let counter = 0;

hamBtn.addEventListener("click", () => {
    hamMenu.style.display = "flex";
    counter++;
    if(counter>1){
        hamMenu.style.display = "none";
        counter = 0;
    }
   
} )