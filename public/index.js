$("#top_button").click(function(){
   if($("#top_email_input").is(":valid")===false){
      $(".top_error").removeClass("hide")
      $("#top_email_input").css("border-color", "rgb(233, 128, 128)")
   }
});
$("#bottom_button").click(function(){
   if($("#bottom_email_input").is(":valid")===false){
      $(".bottom_error").removeClass("hide");
   }
})