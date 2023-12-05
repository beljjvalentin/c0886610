/*
 Student Name: Valentin Belii
 File Name: script.js
 Date: 12/04/2023
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}