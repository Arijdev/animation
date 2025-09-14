// Bounce Animation Trigger
function triggerBounce() {
    const bounceBox = document.querySelector('.bounce-box');
    bounceBox.style.animation = 'bounce 1s infinite';
  }
  
  // Custom Animation Trigger
  const customBox = document.querySelector('.custom-animation-box');
  customBox.addEventListener('click', () => {
    customBox.classList.toggle('active');
  });
   