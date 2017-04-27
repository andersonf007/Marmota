/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*esta referenciando a importacao do index.html*/
var pontos = 0;
var velocity = 3000;
var clicouATempo = true;
$(document).ready(function(){
    
   //createAutomatic();
    createDivOnScene();
    isClicked();
}); 

function createDivOnScene(){
    
    var alturaJanela = $(window).height();//window.innerHeight;
    var larguraJanela = $(window).width();// window.innerWidth;
    var top = getRandomInt(100, alturaJanela - 200);
    var left = getRandomInt(100, larguraJanela - 200);
    var color = getRandomInt(1,5);
    switch(color){
       case 1 :
            $("#cenario").append("<div id='1' style=' position:absolute; top:"+top+"px; left:"+left+"px; width:50px;height:50px;background-color:purple;'></div>");
       break;
       
       case 2:
            $("#cenario").append("<div id='1' style=' position:absolute; top:"+top+"px; left:"+left+"px; width:50px;height:50px;background-color:red;'></div>");
       break;
       
       case 3:
            $("#cenario").append("<div id='1' style=' position:absolute; top:"+top+"px; left:"+left+"px; width:50px;height:50px;background-color:green;'></div>");
       break;
       
       case 4 :
            $("#cenario").append("<div id='1' style=' position:absolute; top:"+top+"px; left:"+left+"px; width:50px;height:50px;background-color:blue;'></div>");
       break;
       
       case 5 :
            $("#cenario").append("<div id='1' style=' position:absolute; top:"+top+"px; left:"+left+"px; width:50px;height:50px;background-color:gray;'></div>");
       break;
    }     
}


function isClicked(){
    $("#1").click(function(){
        pontos += 150;
        $("#pontos").html("Pontos: "+pontos);
       // $(this).css("background-color","green");
        $(this).remove();
        //velocity = 0;
        createAutomatic();
        //$(this).css("background-color","green");
        
    });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createAutomatic(){
   
    $("#1").remove();
    createDivOnScene();
    isClicked();
    setTimeout("createAutomatic();",velocity);
    //velocity = 3000;
}


