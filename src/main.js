/**
 * Main js
 */
import algoliaSearchInit from "./app/algolia-search";
const TOC = require('generate-table-of-contents');

((w, $) => {
  'use strict';

  function randstr(prefix){
    return Math.random().toString(36).replace('0.',prefix || '');
  }

  const tocHandle = () => {
    const handle = document.querySelector('.toc-nav-handle');
    const target = document.querySelector('.toc-target .ch-toc-container');
    if(!target || !handle) return;

    const mobiView = (tocHtml) => {
      const _select = $('<select>', {
        name: '__toc',
        class: 'toc-select',
      });

      _select.append(`<option value="">Scroll to content</option>`);

      [...tocHtml.querySelectorAll('a')].forEach(el => {
        let text = el.text;
        let ID = el.getAttribute('href');
        _select.append(`<option value="${ ID }">${ text }</option>`)
      })

      return _select;
    }

    const H2 = target.querySelectorAll('h2');
    [...H2].forEach(el => {
      el.setAttribute('id', randstr('toc__'));
    })

    const _html = TOC(target, {
      startLevel: 2,
      endLevel: 2,
    });

    const scrollToElem = (ID) => {
      const top = $(`${ ID }`).offset().top;
      const spaceTop = window.innerWidth > 550 ? 160 : 65;
      $('html, body').stop().animate({scrollTop: top - spaceTop}, 500, 'swing');
    }

    [..._html.querySelectorAll('a')].forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      const ID = e.target.getAttribute('href');
      scrollToElem(ID);
    }))

    const $select = mobiView(_html);

    $select.on('change', e => {
      const ID = e.target.value;
      scrollToElem(ID);
    })

    $('body').append($(`<div>`, { class: 'toc-select-mobi-view' }).append($select));
    handle.append(_html);
  }

  const ready = () => {
    algoliaSearchInit();
    tocHandle();
  }
 
  $('.header-icon-tools .search-icon').on("click", function(event) {
    event.preventDefault();
    $(this).parents('.elementor-shortcode').toggleClass('wp-algolia-search-mobi-view--active');
  });



  $(ready);
})(window, jQuery);
