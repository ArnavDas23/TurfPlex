window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.topnav');
    const scrollY = window.scrollY;
  
    if (scrollY > 100) { // Adjust scroll threshold as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

 
  document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
      });
  });

