(function () {
  const config = window.LUX_CONFIG || {};
  const downloadFile = config.download?.file || '/downloads/LuxClient-Setup-latest.exe';

  function q(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qa(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function fillCommonText() {
    qa('[data-app-name]').forEach((el) => (el.textContent = config.appName || 'Lux Client'));
    qa('[data-owner]').forEach((el) => (el.textContent = config.owner || 'Owner'));
    qa('[data-version-range]').forEach((el) => (el.textContent = config.versionRange || '-'));
    qa('[data-loader]').forEach((el) => (el.textContent = config.loader || '-'));

    const yearEl = q('[data-year]');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const discordButtons = qa('[data-discord-link]');
    discordButtons.forEach((el) => {
      el.setAttribute('href', config.community?.discord || '#');
    });

    const youtube = q('[data-youtube-link]');
    if (youtube) youtube.setAttribute('href', config.community?.youtube || '#');

    const tierlist = q('[data-tierlist-link]');
    if (tierlist) tierlist.setAttribute('href', config.community?.tierlist || '#');

    const directLinks = qa('[data-releases-link]');
    directLinks.forEach((el) => el.setAttribute('href', downloadFile));
  }

  function setupNav() {
    const navbar = q('#navbar');
    const toggle = q('#navToggle');
    const mobile = q('#mobileNav');
    const page = document.body.getAttribute('data-page');

    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 12) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll);
    }

    if (toggle && mobile) {
      toggle.addEventListener('click', () => mobile.classList.toggle('open'));
      qa('a', mobile).forEach((link) => {
        link.addEventListener('click', () => mobile.classList.remove('open'));
      });
    }

    qa('[data-nav]').forEach((el) => {
      if (el.getAttribute('data-nav') === page) el.classList.add('is-active');
    });
  }

  function setupReveal() {
    const items = qa('.reveal');
    if (!items.length) return;

    items.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', String(Math.min(i % 6, 5)));
    });

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -30px 0px', threshold: 0.1 }
    );

    items.forEach((el) => obs.observe(el));
  }

  function setupParallax() {
    const layers = qa('[data-parallax]');
    if (!layers.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let raf = 0;
    const state = { x: 0, y: 0 };

    const update = () => {
      layers.forEach((el) => {
        const depth = Number(el.getAttribute('data-parallax-depth') || 8);
        const px = state.x * (depth / 120);
        const py = state.y * (depth / 120);
        el.style.setProperty('--parallax-x', `${px.toFixed(2)}px`);
        el.style.setProperty('--parallax-y', `${py.toFixed(2)}px`);
      });
      raf = 0;
    };

    const onMove = (ev) => {
      const nx = (ev.clientX / window.innerWidth - 0.5) * 2;
      const ny = (ev.clientY / window.innerHeight - 0.5) * 2;
      state.x = nx * 10;
      state.y = ny * 8;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      state.x = 0;
      state.y = 0;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
  }

  function setupFaq() {
    const items = qa('[data-faq-item]');
    if (!items.length) return;

    items.forEach((item) => {
      const toggle = q('[data-faq-toggle]', item);
      const panel = q('[data-faq-panel]', item);
      if (!toggle || !panel) return;

      toggle.addEventListener('click', () => {
        const opened = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', opened ? 'false' : 'true');
        panel.hidden = opened;
        item.classList.toggle('is-open', !opened);
      });
    });
  }

  function setupAnchorScroll() {
    qa('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (ev) => {
        const href = link.getAttribute('href');
        if (!href || href.length < 2) return;
        const target = q(href);
        if (!target) return;
        ev.preventDefault();
        const navH = q('#navbar')?.offsetHeight || 0;
        const y = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  }

  function makeAnnouncementRow(a) {
    const pinned = a.pinned ? '<span class="badge badge-brand">Pinned</span>' : '';
    return `
      <article class="ann-item">
        <div class="ann-title-row">
          <span class="dot"></span>
          <strong class="ann-title">${a.title}</strong>
          ${pinned}
        </div>
        <p class="ann-body">${a.body}</p>
      </article>
    `;
  }

  function initHome() {
    const announcements = q('#homeAnnouncements');
    const partners = q('#homePartners');
    const statsMods = q('#statsModsCount');
    const marquee = q('#modsMarquee');
    const previewVersion = q('#previewVersion');
    const previewOwner = q('#previewOwner');
    const previewLoader = q('#previewLoader');
    const previewPills = q('#previewPills');

    if (announcements) {
      announcements.innerHTML = (config.announcements || []).map(makeAnnouncementRow).join('');
    }

    if (partners) {
      partners.innerHTML = (config.partners || [])
        .map(
          (p) =>
            `<div class="row"><span style="color:${p.color};font-weight:700;">${p.label}</span><span class="row-label">${p.role}</span></div>`
        )
        .join('');
    }

    if (statsMods) statsMods.textContent = String((config.defaultMods || []).length);

    if (marquee) {
      const mods = config.defaultMods || [];
      const entries = Array.from(new Set(mods));
      marquee.innerHTML = entries
        .map((m) => `<span class="marquee-item"><span class="dot"></span>${m}</span>`)
        .join('');
    }

    if (previewVersion) previewVersion.textContent = config.latestVersion || 'latest';
    if (previewOwner) previewOwner.textContent = config.owner || '-';
    if (previewLoader) previewLoader.textContent = config.loader || '-';
    qa('[data-preview-version]').forEach((el) => (el.textContent = config.latestVersion || 'latest'));
    qa('[data-preview-loader]').forEach((el) => (el.textContent = config.loader || '-'));

    if (previewPills) {
      previewPills.innerHTML = (config.titlePills || [])
        .map((pill) => `<a href="${pill.url}" target="_blank" rel="noreferrer"><span>${pill.label}</span></a>`)
        .join('');
    }
  }

  function initFeatures() {
    const host = q('#featuresGrid');
    if (!host) return;
    host.innerHTML = (config.features || [])
      .map(
        (f) => `
        <article class="card feature-card reveal">
          <div class="feature-top">
            <div class="icon-box">${f.icon}</div>
            <span class="badge badge-brand">${f.category}</span>
          </div>
          <h3 class="feature-title">${f.title}</h3>
          <p class="feature-desc">${f.desc}</p>
          <div class="highlight">${f.highlight}</div>
        </article>
      `
      )
      .join('');
  }

  async function initDownload() {
    const btn = q('#downloadBtn');
    const status = q('#downloadStatus');
    const releaseVersion = q('#releaseVersion');
    const releaseMeta = q('#releaseMeta');
    const downloadSha256 = q('#downloadSha256');
    const dynamicWarn = q('#releaseDynamicWarning');
    if (!btn || !status || !releaseVersion || !releaseMeta) return;

    const url = downloadFile;
    const version = config.download?.version || '1.0.0';
    const sizeLabel = config.download?.sizeLabel || '~100 MB';
    const platformLabel = config.download?.platformLabel || 'Windows x64';
    const sha256 = config.download?.sha256 || '-';

    const statusBadge = q('#dlStatusBadge');

    const setBtn = (mainText, subText, disabled) => {
      const mainEl = btn.querySelector('.dl-btn-main');
      const subEl  = btn.querySelector('.dl-btn-sub');
      if (mainEl) mainEl.textContent = mainText;
      if (subEl && subText !== undefined) subEl.textContent = subText;
      btn.disabled = disabled;
      btn.style.opacity = disabled ? '0.6' : '1';
      btn.style.cursor  = disabled ? 'not-allowed' : 'pointer';
    };

    const setBadge = (text, cls) => {
      if (!statusBadge) return;
      statusBadge.textContent = text;
      statusBadge.className = 'badge ' + cls;
    };

    // Show the download button immediately — never block users
    releaseVersion.textContent = version;
    releaseMeta.textContent = `${version} — ${platformLabel} — ${sizeLabel}`;
    if (downloadSha256) downloadSha256.textContent = sha256;
    status.textContent = '✓ Installer ready';
    status.style.color = 'var(--ok)';
    setBadge('Ready to download', 'badge badge-ok');
    if (dynamicWarn) dynamicWarn.classList.add('hidden');
    setBtn('Download for Windows', 'Free · No account required', false);

    // Load download count on page load
    loadDownloadCount();

    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      setBtn('Starting download...', 'Your download will begin shortly', true);
      incrementDownloadCount();
      // Create a hidden <a> with download attribute to force browser download dialog
      const a = document.createElement('a');
      a.href = url;
      a.download = 'LuxClient-Setup-1.0.0.exe';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.setTimeout(() => setBtn('Download for Windows', 'Free · No account required', false), 2200);
    });

    const steps = q('#installSteps');
    if (steps) {
      steps.innerHTML = (config.installSteps || [])
        .map(
          (step) => `
            <article class="card step-card reveal">
              <div class="step-num">${step.n}</div>
              <div>
                <h3 class="feature-title">${step.title}</h3>
                <p class="small-muted">${step.desc}</p>
              </div>
            </article>
          `
        )
        .join('');
    }

    const req = q('#systemRequirements');
    if (req) {
      req.innerHTML = (config.systemRequirements || [])
        .map((row) => `<div class="row"><span class="row-label">${row.label}</span><span>${row.value}</span></div>`)
        .join('');
    }
  }

  function initChangelog() {
    const host = q('#changelogItems');
    if (!host) return;

    const typeMeta = {
      new: { icon: '+', color: '#3fb950', bg: 'rgba(63,185,80,0.14)' },
      fix: { icon: '!', color: '#d29922', bg: 'rgba(210,153,34,0.14)' },
      change: { icon: '~', color: '#58a6ff', bg: 'rgba(88,166,255,0.14)' }
    };

    host.innerHTML = (config.changelog || [])
      .map((release) => {
        const rows = (release.changes || [])
          .map((change) => {
            const meta = typeMeta[change.type] || typeMeta.change;
            return `
              <div class="change-line">
                <span class="change-icon" style="color:${meta.color};background:${meta.bg};">${meta.icon}</span>
                <span class="small-muted">${change.text}</span>
              </div>
            `;
          })
          .join('');

        return `
          <article class="timeline-item reveal">
            <div class="tl-dot">v1</div>
            <div class="changelog-header">
              <h2 class="feature-title" style="margin:0;">${release.title}</h2>
              <span class="changelog-version">v${release.version}</span>
              <span class="badge badge-brand">${release.type}</span>
              <span class="row-label">${release.date}</span>
            </div>
            <div class="changelog-list">${rows}</div>
          </article>
        `;
      })
      .join('');
  }

  const COUNTER_NAMESPACE = 'luxclient';
  const COUNTER_KEY = 'downloads';
  const COUNTER_GET = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
  const COUNTER_HIT = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`;

  function formatCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function setCounterEls(value) {
    qa('[data-download-count]').forEach(el => { el.textContent = value; el.closest('.dl-counter')?.classList.remove('hidden'); });
  }

  async function loadDownloadCount() {
    try {
      const res = await fetch(COUNTER_GET);
      if (!res.ok) return;
      const data = await res.json();
      setCounterEls(formatCount(data.count || 0));
    } catch (_) {}
  }

  async function incrementDownloadCount() {
    try {
      const res = await fetch(COUNTER_HIT);
      if (!res.ok) return;
      const data = await res.json();
      setCounterEls(formatCount(data.count || 0));
    } catch (_) {}
  }

  function initStore() {
    // Store page is intentionally static while products are unavailable.
  }

  function init() {
    fillCommonText();
    setupNav();
    initHome();
    initFeatures();
    initDownload();
    initChangelog();
    initStore();
    setupReveal();
    setupParallax();
    setupFaq();
    setupAnchorScroll();
    // Load counter on any page that has [data-download-count]
    if (document.querySelector('[data-download-count]')) loadDownloadCount();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
