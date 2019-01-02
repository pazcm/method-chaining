$(document).ready(function() {
 //remove makeRed class add makeBorder
 $("button").mouseenter(function() {
  $("button").removeClass("makeRed").addClass("makeBorder");
 });
 $("button").mouseleave(function() {
  $("button").removeClass("makeBorder").addClass("makeRed");
 });
 
}); 
