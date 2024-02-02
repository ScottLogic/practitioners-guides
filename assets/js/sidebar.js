document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const guideContent = document.getElementById("guide-content");
    const singleColumnWidth = 768;

    const navTocLinks = document.querySelectorAll('#sidebar-nav-items a');
    const bodyTocLinks = document.querySelectorAll("h2, h3");

    const onScrollStop = callback => {
      let isScrolling;
      guideContent.addEventListener(
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
    
    function checkVisible(elm, offset) {
      const rect = elm.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight / offset >= 0);
    }

    function setActiveToc() {
      bodyTocLinks.forEach((visibleSectionTitle => {
        if (checkVisible(visibleSectionTitle, 1.5)) {
          navTocLinks.forEach((navTocLink => {
            if (navTocLink.innerHTML == visibleSectionTitle.innerHTML) {
              navTocLink.closest("li").classList.add("active-toc");
              // sync scrolling on toc with page
              const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
              if (viewWidth > singleColumnWidth && !checkVisible(navTocLink, 1)) {
                const navTocLinkBoundingBox = navTocLink.closest("li").getBoundingClientRect();
                sidebar.scrollTo({
                  top: navTocLinkBoundingBox.top,
                  left: 0,
                  behavior: "smooth",
                });
              }
            }
            else {
              navTocLink.closest("li").classList.remove("active-toc");
            }
          }));
        };
      }));
    }
  });