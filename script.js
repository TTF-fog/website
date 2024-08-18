function rotateScenes(){
    var scroll = window.pageYOffset,
        relPos = scroll / height,
        angle = 90 * relPos;
    
    if(scroll >= height){
      section1.style.transform = "rotateX(90deg)";
      section2.style.transform = "rotateX(0deg)";
    }
    
    section1.style.transform = "rotateX(" + (angle) + "deg)";
    section2.style.transform = "rotateX(-" + (90 - angle) + "deg)";
  }
  
  var section1 = document.querySelector("#top"),
      section2 = document.querySelector("#content"),
      height = window.innerHeight;
  window.addEventListener("scroll", rotateScenes);

function displayLocalTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    const timeperiod  =  localTime.substring(localTime.length-2,localTime.length);
   
    
    if (timeperiod == "pm") {
    
    document.getElementById('top').style.backgroundImage =  "url('best-minecraft-shaders-solas-aurora.jpg')";
    document.getElementById('content').style.backgroundImage = "url('sunlight-night-water-reflection-Minecraft-green-morning-world-jungle-shaders-light-tree-autumn-leaf-flower-screenshot-computer-wallpaper-waterway-11539-880867929.jpg')";
    }else{
      document.getElementById('top').style.backgroundImage = "url('sunlight-night-water-reflection-Minecraft-green-morning-world-jungle-shaders-light-tree-autumn-leaf-flower-screenshot-computer-wallpaper-waterway-11539-880867929.jpg')";
      document.getElementById('content').style.backgroundImage ="url('best-minecraft-shaders-solas-aurora.jpg')";
    }
  }
  
displayLocalTime()
function cityName(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 
