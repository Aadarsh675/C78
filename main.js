var images = ["family.jpeg", "father.jpg", "mother.png"];
var names = ["Supe Family","Bhooshan Supe", "Shweta Supe"];
var x = 0;
function nextslide(){
    document.getElementById("album").src=images[x];
    document.getElementById("relname").innerHTML=names[x];
    x++;
    if (x == 3)
        {x = 0;}
};