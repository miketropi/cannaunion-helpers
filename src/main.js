/**
 * Main js
 */
import algoliaSearchInit from "./app/algolia-search";
import ToCShortcode from "./libs/toc-shortcode";
const TOC = require('generate-table-of-contents');

((w, $) => {
  'use strict';

  function randstr(prefix){
    return Math.random().toString(36).replace('0.',prefix || '');
  }

  const tocHandle = () => {
    
    const target = document.querySelector('.toc-target .ch-toc-container');
    if(!target) return;

    const { toc } = CH_PHP_DATA;
    if(!toc) return;

    const { enable, position } = {
      enable: "0",
      position: "pos_1",
      ...toc
    }

    const handle = document.querySelector(`.toc-nav-handle.__${ position }`);

    if(enable != "1") return;

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

    // Override opt 
    [..._html.querySelectorAll('a')].forEach(el => {
      const ID = el.getAttribute('href');
      const $source = $(ID);
      const tocTitle = $source.data('toc-title');
      const tocEnable = $source.data('toc-enable');

      if(tocTitle) {
        $(_html).find(`a[href="${ ID }"]`).html(tocTitle);
      }

      if(tocEnable === 'off') {
        $(_html).find(`a[href="${ ID }"]`).parent().remove();
      }
    });

    // Add event click
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

    // $('body').append($(`<div>`, { class: 'toc-select-mobi-view' }).append($select));
    handle.append(_html);
  }

  const ToCShortcode_Func = () => {
    // ToCShortcode
    const elems = document.querySelectorAll('.__toc-nav-container');
    if(!elems) return;
    
    [...elems].forEach(el => {
      ToCShortcode(el)
    })
  }

  const ready = () => {
    algoliaSearchInit();
    tocHandle();
    ToCShortcode_Func();
  }
 
  $('.header-icon-tools .search-icon').on("click", function(event) {
    event.preventDefault();
    $(this).parents('.elementor-shortcode').toggleClass('wp-algolia-search-mobi-view--active');
  });



  $(ready);
})(window, jQuery);
