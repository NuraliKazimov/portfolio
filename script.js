// Show an alert when the user clicks on their profile image
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
  profileImg.addEventListener('click', function() {
    alert('Thanks for visiting my portfolio!');
  });
}
