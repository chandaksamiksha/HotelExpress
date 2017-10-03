$(document).ready(function(){
    $("#hotelButton").on("click",function(){
    $("#flights").css("display","none");
    $("#hotelId").css("display","flex");
  
});


    $("#flightButton").on("click",function(){
    $("#flights").css("display","flex");
    $("#hotelId").css("display","none");
    });

    $("#default").on("click",function(){
    $("#returnLabel").css("display","inline");
    $("#returndatepickerId").css("display","inline");	
    });

    $("#primary").on("click",function(){
    $("#returnLabel").css("display","none");
    $("#returndatepickerId").css("display","none");	
    });
});

