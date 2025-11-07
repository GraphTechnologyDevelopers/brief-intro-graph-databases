(function() {
  'use strict';

  function addHeadingAnchors() {
    const headings = document.querySelectorAll('.content h2, .content h3, .content h4');
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const id = heading.id || heading.textContent.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      if (!heading.id) {
        heading.id = id;
      }

      const anchor = document.createElement('a');
      anchor.href = '#' + id;
      anchor.className = 'heading-anchor';
      anchor.setAttribute('aria-hidden', 'true');
      anchor.innerHTML = '#';
      anchor.style.cssText = 'opacity: 0; margin-left: 0.5rem; color: inherit; text-decoration: none; transition: opacity 0.2s;';
      
      heading.appendChild(anchor);
      
      heading.addEventListener('mouseenter', function() {
        anchor.style.opacity = '0.6';
      });
      
      heading.addEventListener('mouseleave', function() {
        anchor.style.opacity = '0';
      });
    }
  }

  function initMermaid() {
    if (typeof mermaid === 'undefined') {
      return;
    }

    const mermaidElements = document.querySelectorAll('.mermaid, code.language-mermaid');
    if (mermaidElements.length === 0) {
      return;
    }

    mermaid.initialize({
      startOnLoad: true,
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default',
      securityLevel: 'loose'
    });

    for (let i = 0; i < mermaidElements.length; i++) {
      const element = mermaidElements[i];
      if (element.tagName === 'CODE') {
        const pre = element.parentElement;
        const wrapper = document.createElement('div');
        wrapper.className = 'mermaid';
        wrapper.textContent = element.textContent;
        pre.parentElement.replaceChild(wrapper, pre);
        mermaid.init(undefined, wrapper);
      } else {
        mermaid.init(undefined, element);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      addHeadingAnchors();
      initMermaid();
    });
  } else {
    addHeadingAnchors();
    initMermaid();
  }
})();

