const sidenav_toggler = document.querySelector('.sidenav-toggler');
const sidenav_nav = document.querySelector('.sidenav');
const closeSideNavBtn = document.querySelector('.closeSideNav');
const backdrop = document.querySelector('.backdrop');


document.addEventListener("DOMContentLoaded", function(){
    setTimeout(
        function() {
            sidenav_nav.style.setProperty('display', 'block')
        }, 1000);
});

if(sidenav_toggler != null && sidenav_nav != null) {
    sidenav_toggler.addEventListener('click',function (){
        sidenav_nav.classList.toggle('show');
        backdrop.style.setProperty('visibility','visible');
    })
}
if(closeSideNavBtn != null){
    closeSideNavBtn.addEventListener('click',function (){
        sidenav_nav.classList.remove('show');
        backdrop.style.setProperty('visibility','hidden');
    })
}
backdrop.addEventListener('click',function (){
    sidenav_nav.classList.remove('show');
    backdrop.style.setProperty('visibility','hidden');
})
