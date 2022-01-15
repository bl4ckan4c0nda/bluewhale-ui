document.addEventListener("DOMContentLoaded", function(){
    setTimeout(
        function() {
            user_profile_wrapper.style.setProperty('display', 'block')
        }, 1000);

});
const html = document.querySelector("html");

const profile_toggler = document.getElementById('user-profile-toggler');
const user_profile_wrapper = document.querySelector('.user-profile-wrapper');

profile_toggler.addEventListener('click',function (e){
    user_profile_wrapper.classList.toggle('show');
})
