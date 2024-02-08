function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.fontSize = "15px";
      document.getElementById("logo").style.paddingTop = "20px";
      document.getElementById("navbar-right").style.padding = "8px";
      document.getElementById("navbar").style.padding = "0 calc((100% - 1000px)/2)"
    } else {
      document.getElementById("logo").style.fontSize = "20px";
      document.getElementById("logo").style.paddingTop = "24px";
      document.getElementById("navbar-right").style.padding = "15px 0";
  
    }
  }
  