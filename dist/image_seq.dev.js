"use strict";

var image = new Array();
image["001"] = "http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2U3L21lZXR0aGV0ZWFtLmUxWC5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/fa31e19d/304/meet-the-team-behind-google-doodles-video--ff2932470c";
image["002"] = "http://webneel.com/wallpaper/sites/default/files/images/04-2013/awesome-rain-wallpaper_0";
image["003"] = "http://www.livewallpapers.org/wp-content/uploads/2014/03/Best-3D-Live-Wallpapers";
$(document).ready(function () {
  // Function to add leading zeroes
  function pad(num, size) {
    var s = num + "";

    while (s.length < size) {
      s = "0" + s;
    }

    return s;
  } // Variable to store the current image index


  var currentIdx = 1;
  var max = 3; // Qtd of images in the folder

  setInterval(function () {
    if (currentIdx > max) currentIdx = 1;
    $('body').css('background-image', 'url(' + image[pad(currentIdx, 3)] + '.jpg)');
    currentIdx++;
  }, 1000); // 5000ms == 5 seconds
});