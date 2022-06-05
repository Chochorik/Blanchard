window.addEventListener('DOMContentLoaded', function() {
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 150,
  framesCount = 50;

  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function() {
        let scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });
});
