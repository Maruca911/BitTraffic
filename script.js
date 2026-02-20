var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const toggleList = document.querySelectorAll('.faq__toggle');
const faqItemsList = document.querySelectorAll('.faq__item');

const sections = document.querySelectorAll('section, footer');

const isElementXPercentInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};


const checkIsVisible = (element) => {
    if (isElementXPercentInViewport(element, 5)) {
        element.classList.add('is--visible');
    } else if (element.classList.contains('is--visible')) {
        element.classList.remove('is--visible');
    }
};

document.addEventListener('scroll', () => {
    sections.forEach((section) => {
        checkIsVisible(section);
    });
});

toggleList.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        const faqItem = toggle.closest('.faq__item');
        faqItemsList.forEach((item, j) => {
            item.classList.remove('is--open');
            const positionFromActive = Math.abs(index - j);
            switch (positionFromActive) {
                case 1:
                    item.style.opacity = .6;
                    break;
                case 2:
                    item.style.opacity = .4;
                    break;
                case 3:
                    item.style.opacity = .2;
                    break;
            }
        });
        faqItem.classList.add('is--open');
        faqItem.style.opacity = 1;
        toggle.closest('.faq__wrapper').setAttribute('state', index);
    })
})

faqItemsList.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        item.style.opacity = 1;
        faqItemsList.forEach((item, j) => {
            const positionFromActive = Math.abs(index - j);
            switch (positionFromActive) {
                case 1:
                    item.style.opacity = .6;
                    break;
                case 2:
                    item.style.opacity = .4;
                    break;
                case 3:
                    item.style.opacity = .2;
                    break;
            }
        });
    });
    item.addEventListener("mouseout", () => {
        const currentItem = document.querySelector('.faq__item.is--open');
        const faqItemsListArray = Array.from(faqItemsList);
        const currentIndex = getIndexByClass('is--open', faqItemsListArray);
        currentItem.style.opacity = 1;
        faqItemsList.forEach((item, j) => {
            const positionFromActive = Math.abs(currentIndex - j);
            switch (positionFromActive) {
                case 1:
                    item.style.opacity = .6;
                    break;
                case 2:
                    item.style.opacity = .4;
                    break;
                case 3:
                    item.style.opacity = .2;
                    break;
            }
        });
    });
});

function getIndexByClass(searchClass, list) {
    //ES6 arrow function syntax
    return list.findIndex(elem => elem.classList.contains(searchClass))

    //normal syntax
    //return list.findIndex(function(elem) {return elem.id == idToSearch}) 

}


}
/*
     FILE ARCHIVED ON 21:21:10 Dec 30, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:35:33 Apr 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.466
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 1070.218
  LoadShardBlock: 148.228 (3)
  PetaboxLoader3.datanode: 94.509 (4)
  load_resource: 169.821
  PetaboxLoader3.resolve: 154.356
*/