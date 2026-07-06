(function () {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const svg = document.querySelector('.fiber-route');
  const anchors = () => Array.from(document.querySelectorAll('[data-fiber-anchor]'));

  let pathEl = null;
  let pathLength = 0;
  let currentEndpoint = null;

  function buildRoute() {
    if (!svg) return;
    const pageHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const width = window.innerWidth;

    if (width < 900) {
      svg.innerHTML = '';
      return;
    }

    svg.setAttribute('viewBox', `0 0 ${width} ${pageHeight}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', pageHeight);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.innerHTML = '';

    // fiber sits in the left gutter, elbowing inward to greet each section
    const gutterX = Math.max(28, Math.min(width * 0.045, 56));
    const elbowInX = gutterX + 40;

    const hero = document.querySelector('.hero');
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const heroTop = heroRect ? heroRect.top + window.scrollY : 0;
    const heroBottom = heroRect ? heroRect.bottom + window.scrollY : 0;

    const points = [];

    // enter from top of hero
    points.push([gutterX, heroTop - 20]);
    points.push([gutterX, heroBottom - 80]);
    // elbow into hero content on the way out
    points.push([elbowInX, heroBottom - 80]);
    points.push([elbowInX, heroBottom - 30]);
    points.push([gutterX, heroBottom - 30]);

    // route past each anchored section
    anchors().forEach((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = rect.bottom + window.scrollY;

      // vertical run down to just above the section header
      points.push([gutterX, top + 32]);
      // elbow inward at header height
      points.push([elbowInX, top + 32]);
      points.push([elbowInX, top + 96]);
      points.push([gutterX, top + 96]);
      // continue down section to bottom
      points.push([gutterX, bottom - 24]);
    });

    // terminate: drop into contact form, elbow into center, land at a node
    const contact = document.querySelector('#contact');
    let endX = gutterX;
    let endY = pageHeight - 80;
    if (contact) {
      const rect = contact.getBoundingClientRect();
      const bottom = rect.bottom + window.scrollY;
      endX = Math.min(width / 2, 540);
      endY = bottom - 40;
      points.push([gutterX, endY]);
      points.push([endX, endY]);
    } else {
      points.push([endX, endY]);
    }

    const d = 'M ' + points.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L ');

    pathEl = document.createElementNS(SVG_NS, 'path');
    pathEl.setAttribute('d', d);
    svg.appendChild(pathEl);

    // terminal node + halo
    const halo = document.createElementNS(SVG_NS, 'circle');
    halo.setAttribute('cx', endX);
    halo.setAttribute('cy', endY);
    halo.setAttribute('r', '6');
    halo.classList.add('fiber-halo');
    svg.appendChild(halo);

    const node = document.createElementNS(SVG_NS, 'circle');
    node.setAttribute('cx', endX);
    node.setAttribute('cy', endY);
    node.setAttribute('r', '4.5');
    node.classList.add('fiber-node');
    svg.appendChild(node);

    currentEndpoint = [endX, endY];
    pathLength = pathEl.getTotalLength();

    if (prefersReduced) {
      pathEl.style.strokeDasharray = 'none';
      pathEl.style.strokeDashoffset = '0';
    } else {
      pathEl.style.strokeDasharray = pathLength;
      pathEl.style.strokeDashoffset = pathLength;
    }
  }

  function updateStroke() {
    if (!pathEl || prefersReduced) return;
    const scrollTop = window.scrollY;
    const scrollMax = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    // stretch scroll so the line finishes drawing shortly before page bottom
    const progress = Math.min(1, Math.max(0, (scrollTop / scrollMax) * 1.15));
    pathEl.style.strokeDashoffset = pathLength * (1 - progress);
  }

  let rafId = null;
  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      updateStroke();
    });
  }

  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildRoute();
      updateStroke();
    }, 120);
  }

  // ---------- form ----------
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  function setStatus(msg, state) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    if (state) statusEl.setAttribute('data-state', state);
    else statusEl.removeAttribute('data-state');
  }

  function mailtoFallback(form) {
    const data = new FormData(form);
    const fallback = form.getAttribute('data-fallback-email') || '';
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Organization: ${data.get('organization') || ''}`,
      `Email: ${data.get('email') || ''}`,
      '',
      `${data.get('message') || ''}`,
    ].join('\n');
    const href = `mailto:${fallback}?subject=${encodeURIComponent(
      'Project inquiry via jsoindustries.com'
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const action = form.getAttribute('action') || '';
      setStatus('Sending…', null);

      // If Formspree endpoint is still a placeholder, fall back to mailto.
      if (!action || action.includes('YOUR_FORM_ID')) {
        mailtoFallback(form);
        setStatus("Opening your email client…", null);
        return;
      }

      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.reset();
          setStatus("Sent. You'll hear from us within one business day.", 'ok');
        } else {
          setStatus(
            'Something went wrong. Please email office@jsoindustries.com.',
            'error'
          );
        }
      } catch (err) {
        setStatus(
          'Network error. Please email office@jsoindustries.com.',
          'error'
        );
      }
    });
  }

  // ---------- boot ----------
  function boot() {
    buildRoute();
    updateStroke();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // recompute once fonts finish loading (layout can shift)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        buildRoute();
        updateStroke();
      });
    }
    // and one more pass after images/etc. settle
    window.addEventListener('load', () => {
      buildRoute();
      updateStroke();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
