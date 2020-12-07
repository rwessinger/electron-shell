function fileFunction() {
  var fileSubMenu = document.getElementById('menu__file__submenu');
  fileSubMenu.style.display = "flex";

  document.body.addEventListener('click', hideMenu(), true);

}

function hideMenu() {
  var fileSubMenu = document.getElementById('menu__file__submenu');
  // fileSubMenu.style.display = "none";
}

// Window Buttons
const remote = require('electron').remote;

 document.getElementById("minimize").addEventListener("click", function (e) {
      // var window = remote.getCurrentWindow();
      // window.minimize();
      win.minimize;
 });

 document.getElementById("maximize").addEventListener("click", function (e) {
      var window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
          window.maximize();
      } else {
          window.unmaximize();
      }
 });

 document.getElementById("close").addEventListener("click", function (e) {
      var window = remote.getCurrentWindow();
      window.close();
 });
