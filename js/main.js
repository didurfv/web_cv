/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/***/ (function() {

eval("const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');\r\nconst mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');\r\nconst menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');\r\nconst header = document.querySelector('.header.container');\r\n\r\nhamburger.addEventListener('click', () => {\r\n\thamburger.classList.toggle('active');\r\n\tmobile_menu.classList.toggle('active');\r\n});\r\n\r\ndocument.addEventListener('scroll', () => {\r\n\tvar scroll_position = window.scrollY;\r\n\tif (scroll_position > 250) {\r\n\t\theader.style.backgroundColor = '#29323c';\r\n\t} else {\r\n\t\theader.style.backgroundColor = 'transparent';\r\n\t}\r\n});\r\n\r\nmenu_item.forEach((item) => {\r\n\titem.addEventListener('click', () => {\r\n\t\thamburger.classList.toggle('active');\r\n\t\tmobile_menu.classList.toggle('active');\r\n\t});\r\n});\n\n//# sourceURL=webpack://gulp_starter/./src/js/main.js?");

/***/ })

/******/ 	});
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })();
