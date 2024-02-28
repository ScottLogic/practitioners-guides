document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const guideContent = document.getElementById("guide-content-columns");
    const singleColumnWidth = 768;

    const navTocLinks = document.querySelectorAll('#sidebar-nav-items ul a');
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

    setActiveToc();

    onScrollStop(() => {
      setActiveToc();
    });

    document.querySelector("#guide-content").addEventListener("click", hideSidebar);
    document.querySelector("#sidebar-nav-items ul").addEventListener("click", hideSidebar);

    function hideSidebar() {
      document.querySelector("#show-sidebar").checked = false;
    }
    
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
              document.querySelector("#current-section").innerText = navTocLink.innerText;
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