function myLastScrollTo(id) {
    var e = document.getElementById(id);
    var box = e.getBoundingClientRect();
    window.scrollBy(0, box.top);
  }
  
  function myScrollTo(id) {
    var e = document.getElementById(id);
    var box = e.getBoundingClientRect();
    var k, inc;
    inc = (box.top >= 0) ? 1 : -1;
    for (k = 0; k < 49; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 50) + ")", 10 * k);
    setTimeout("myLastScrollTo('" + id + "')", 500);
  }
  