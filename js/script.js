jQuery(document).ready(function(){

var width = jQuery(this).width();
 if(width < 768){
   jQuery(".toggle1").show(2000);
   jQuery(".menu").hide(2000);
   jQuery(".toggle2").hide(200)
   jQuery(".menu ul").css({"display": "block"})
   jQuery(".menu ul li").children("ul").toggle(100).css({
    "position": "absolute",
    "top": "0px",
    "left": "250px",
    "background": "#2E4053",
    "color": "black"
    // "right":"0"

});
  
 }
 else{
    jQuery(".toggle1, .toggle2").hide(2000);
   jQuery(".menu").show(2000);
 }
 jQuery(".toggle1").click(function(){
    jQuery(".toggle1").hide(100);
    jQuery(".toggle2").show(100);   
    jQuery(".menu").show(2000);
 })
 jQuery(".toggle2").click(function(){
    jQuery(".toggle1").show(100);
    jQuery(".toggle2").hide(100);   
    jQuery(".menu").hide(2000);
 })
 jQuery(".menu ul li").click(function(){
    console.log("clicked")
    jQuery(this).children("ul").toggle(100);
    return false
 })
 jQuery(".menu ul ul").parent("li").children("a").append('<i class="fa-solid fa-angle-down"></i>');




})