
let lazyLoader;

class LazyLoader {
  constructor() {
    this.setupListener();
    this.trackImages();
  }

  trackImages() {
    const images = document.getElementsByTagName('img');
    for (const img of images) {
      if((!image.classList.contains('lazyloaded')) || (!image.classList.contains('lazyload')) ){
        this.observer.observe(img);
      }
    }
  }

  setupListener() {
    const options = {
      rootMargin: '0px 0px',
    };
    this.observer = new IntersectionObserver((trackedImages) => {
      this.intersectionsChanged(trackedImages);
    }, options);
  }

  intersectionsChanged(trackedImages) {
    for (const tims of trackedImages) {
      const image = tims.target;

      if (tims.isIntersecting) {
       
        if((!image.classList.contains('lazyloaded')) && image.getAttribute('data-src')){
          setTimeout(() => {
              const src = image.getAttribute('data-src');
              image.src = src;         
              image.className = 'lazyloaded' 
          }, 200);
        }
      }
    }
  }
}

window.addEventListener('load', () => {
    lazyLoader = new LazyLoader();
}, false);