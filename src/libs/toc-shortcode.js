const _TOC = require('generate-table-of-contents');

function _randstr(prefix){
  return Math.random().toString(36).replace('0.',prefix || '');
}

const ToCShortcode = (elem) => {
  let { startLevel, endLevel, contentTarget } = elem.dataset;

  const headings = document.querySelector(contentTarget).querySelectorAll('h1, h2, h3, h4, h5, h6');
    [...headings].forEach(el => {
      el.setAttribute('id', _randstr('toc__'));
    })
  
  const _html = _TOC(document.querySelector(contentTarget), {
    startLevel,
    endLevel
  });

  // Override opt 
  [..._html.querySelectorAll('a')].forEach(el => {
    const ID = el.getAttribute('href');
    const $source = jQuery(ID);
    const tocTitle = $source.data('toc-title');
    const tocEnable = $source.data('toc-enable');

    if(tocTitle) {
      jQuery(_html).find(`a[href="${ ID }"]`).html(tocTitle);
    }

    if(tocEnable === 'off') {
      jQuery(_html).find(`a[href="${ ID }"]`).parent().remove();
    }
  });

  const _scrollToElem = (ID) => {
    const top = jQuery(`${ ID }`).offset().top;
    const spaceTop = window.innerWidth > 550 ? 160 : 65;
    jQuery('html, body').stop().animate({scrollTop: top - spaceTop}, 500, 'swing');
  }

  jQuery(_html).on('click', 'a', e => {
    e.preventDefault();
    const ID = e.target.getAttribute('href');
    _scrollToElem(ID);
  })

  // console.log(_html);
  jQuery(elem).append(_html);
}

export default ToCShortcode;