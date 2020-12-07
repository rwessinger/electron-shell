function toggleDarkMode() {

  var styleSheet = document.getElementsByTagName('link')[1];
  var href = (styleSheet.getAttribute('href'));

  if (href == 'stylee.css') {
    styleSheet.setAttribute("href", "darkmode.css");
  } else if (href == 'darkmode.css') {
    styleSheet.setAttribute("href", "stylee.css");
  }

}
