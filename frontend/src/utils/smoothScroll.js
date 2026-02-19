export function smoothScrollTo(id, duration = 800) {
    const target = document.getElementById(id);
    if (!target) return;
  
    const navbarHeight = document.querySelector("header")?.offsetHeight || 70;
  
    const start = window.pageYOffset;
    const end =
      target.getBoundingClientRect().top +
      start -
      navbarHeight;
  
    const distance = end - start;
    let startTime = null;
  
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
  
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  
      window.scrollTo(0, start + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    requestAnimationFrame(animation);
  }
  