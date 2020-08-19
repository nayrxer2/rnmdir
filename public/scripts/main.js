const span = document.querySelector('#navbtn')
const navbtn = document.querySelector('#mySidenav');
const open = document.getElementById('opennav');
const close = document.getElementById('closenav');

open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function openNav() {
    navbtn.style.width = "250px";
}  
function closeNav() {
    navbtn.style.width = "0px";
}  