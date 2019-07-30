
    var btn=document.getElementById("btn");
    var receptDag= document.getElementById("showResult");
    var x = document.getElementsByTagName("li");
    var lijst=[];
//     var random= Math.floor((Math.random() * 10) + 1);

    btn.addEventListener("click", function(){
       
        for(var i=0; i < x.length; i++ ){
         lijst.push(x[i].innerHTML);
         console.log(lijst);
        }
})

btn.addEventListener("click", function(){
        var items= lijst[Math.floor(Math.random()*lijst.length)];
        console.log(items);
        
        receptDag.innerHTML= items;

})








    


       