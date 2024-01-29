document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
  
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
    });

    const navTocLinks = document.querySelectorAll('#sidebar-nav-items a');
    // const bodyTocLinks = document.querySelectorAll('[id^="key-"]');
    const bodyTocLinks = document.querySelectorAll("h2, h3");

    const onScrollStop = callback => {
      let isScrolling;
      window.addEventListener(
        'scroll',
        e => {
          clearTimeout(isScrolling);
          isScrolling = setTimeout(() => {
            callback();
          }, 150);
        },
        false
      );
    };

    window.onload = setActiveToc();

    onScrollStop(() => {
      setActiveToc();
    });
    
    function checkVisible(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight / 1.5 >= 0);
    }

    function setActiveToc() {
      bodyTocLinks.forEach((visibleSectionTitle => {
        if (checkVisible(visibleSectionTitle)) {
          navTocLinks.forEach((navTocLink => {
            if (navTocLink.innerHTML == visibleSectionTitle.innerHTML) {
              navTocLink.closest("li").classList.add("active-toc");
            }
            else {
              navTocLink.closest("li").classList.remove("active-toc");
            }
          }));
        };
      }));
    }
  });