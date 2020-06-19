(function(window){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {
   
    var a=names[name].charAt(0);
    // name in the loop.
  if (a=='J' || a=='j') {
     window.byeSpeaker.speak(names[name]);
  } else {
     window.helloSpeaker.speak(names[name]);
  }

}
})(window);
