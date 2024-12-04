const title = document.querySelector('.centered-title');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) { 
    title.style.transform = 'translateY(-100px)';
    title.style.opacity = '0';
  } else { 
    title.style.transform = 'translateY(0)';
    title.style.opacity = '1';
  }
});
