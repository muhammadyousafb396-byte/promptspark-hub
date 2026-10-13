/* PromptSpark Hub — front-end: render cards from PROMPTS, live search, filters, copy-to-clipboard.
   Depends on: prompts.js (defines CATEGORIES, PROMPTS). */
(function () {
  'use strict';

  var state = { q: '', category: 'All', tool: 'All', difficulty: 'All', platform: 'All Platforms' };

  var TOOLS = ['All', 'Veo 3', 'Kling', 'Sora', 'Runway', 'Google Flow', 'Midjourney', 'Gemini', 'ChatGPT', 'Claude'];
  var DIFFS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  var PLATFORMS = ['All Platforms', 'YouTube', 'TikTok', 'Facebook', 'Instagram'];

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function matches(p) {
    if (state.category !== 'All' && p.category !== state.category) return false;
    if (state.tool !== 'All' && p.tool !== state.tool) return false;
    if (state.difficulty !== 'All' && p.difficulty !== state.difficulty) return false;
    if (state.platform !== 'All Platforms') {
      var slug = state.platform.toLowerCase();
      if ((p.tags || []).indexOf(slug) === -1) return false;
    }
    if (state.q) {
      var hay = (p.title + ' ' + p.desc + ' ' + p.tool + ' ' + p.category + ' ' + (p.tags || []).join(' ')).toLowerCase();
      if (hay.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  function cardHtml(p) {
    return '<article class="pcard">' +
      '<div class="pcard-top">' +
        '<span class="badge badge-tool">' + esc(p.tool) + '</span>' +
        '<span class="badge badge-diff ' + esc(p.difficulty) + '">' + esc(p.difficulty) + '</span>' +
      '</div>' +
      '<h3><a href="/prompts/' + esc(p.id) + '/">' + esc(p.title) + '</a></h3>' +
      '<p>' + esc(p.desc) + '</p>' +
      '<div class="pcard-foot">' +
        '<button class="copy-btn" data-copy="' + esc(p.id) + '">📋 Copy Prompt</button>' +
        '<a class="view-link" href="/prompts/' + esc(p.id) + '/">Details →</a>' +
      '</div>' +
    '</article>';
  }

  function byId(id) {
    for (var i = 0; i < PROMPTS.length; i++) if (PROMPTS[i].id === id) return PROMPTS[i];
    return null;
  }

  function render() {
    var list = PROMPTS.filter(matches).sort(function (a, b) { return b.popularity - a.popularity; });
    $('promptsGrid').innerHTML = list.map(cardHtml).join('');
    $('emptyState').hidden = list.length > 0;
    $('resultCount').textContent = list.length + ' of ' + PROMPTS.length + ' prompts';
    bindCopyButtons();
  }

  function renderNiches() {
    var el = $('nicheGrid');
    if (!el) return;
    var list = PROMPTS.filter(function (p) { return (p.tags || []).indexOf('creator-niche') !== -1; })
      .sort(function (a, b) { return b.popularity - a.popularity; });
    el.innerHTML = list.map(cardHtml).join('');
  }

  function renderTrending() {
    var tr = PROMPTS.filter(function (p) { return p.trending; })
      .sort(function (a, b) { return b.popularity - a.popularity; })
      .slice(0, 4);
    $('trendStrip').innerHTML = tr.map(function (p, i) {
      return '<a class="trend-card" href="/prompts/' + esc(p.id) + '/">' +
        '<div class="trend-rank">🔥 #' + (i + 1) + ' trending</div>' +
        '<strong>' + esc(p.title) + '</strong>' +
        '<div class="trend-meta">' + esc(p.tool) + ' · ' + esc(p.difficulty) + '</div>' +
      '</a>';
    }).join('');
  }

  function makePills(elId, options, key) {
    var el = $(elId);
    el.innerHTML = '';
    options.forEach(function (opt) {
      var b = document.createElement('button');
      b.className = 'pill' + (state[key] === opt ? ' active' : '');
      b.textContent = opt;
      b.type = 'button';
      b.addEventListener('click', function () {
        state[key] = opt;
        Array.prototype.forEach.call(el.children, function (c) { c.classList.remove('active'); });
        b.classList.add('active');
        if (key === 'category') syncTiles();
        render();
      });
      el.appendChild(b);
    });
  }

  function syncTiles() {
    var tiles = document.querySelectorAll('.tile[data-cat]');
    Array.prototype.forEach.call(tiles, function (t) {
      t.classList.toggle('active', t.getAttribute('data-cat') === state.category);
    });
  }

  function bindTiles() {
    var tiles = document.querySelectorAll('.tile[data-cat]');
    Array.prototype.forEach.call(tiles, function (t) {
      t.addEventListener('click', function () {
        var cat = t.getAttribute('data-cat');
        state.category = (state.category === cat) ? 'All' : cat;
        makePills('catPills', CATEGORIES, 'category');
        syncTiles();
        render();
        document.getElementById('library').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function copyText(text, btn) {
    function done() {
      var orig = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '✅ Copied!';
      setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = orig; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  }

  function bindCopyButtons() {
    var btns = document.querySelectorAll('.copy-btn[data-copy]');
    Array.prototype.forEach.call(btns, function (btn) {
      btn.addEventListener('click', function () {
        var p = byId(btn.getAttribute('data-copy'));
        if (p) copyText(p.prompt, btn);
      });
    });
  }

  function updateCounts() {
    $('statPrompts').textContent = PROMPTS.length;
    $('heroPromptCount').textContent = PROMPTS.length;
    function n(cat) { return PROMPTS.filter(function (p) { return p.category === cat; }).length; }
    $('countVideo').textContent = n('Video Prompts') + ' prompts';
    $('countImage').textContent = n('Image Prompts') + ' prompts';
    $('countText').textContent = n('Text Prompts') + ' prompts';
  }

  function init() {
    if (typeof PROMPTS === 'undefined') {
      $('promptsGrid').innerHTML = '<p class="empty">Prompt library failed to load. Please refresh.</p>';
      return;
    }
    makePills('catPills', CATEGORIES, 'category');
    makePills('toolPills', TOOLS, 'tool');
    makePills('diffPills', DIFFS, 'difficulty');
    makePills('platformPills', PLATFORMS, 'platform');
    bindTiles();
    renderTrending();
    renderNiches();
    updateCounts();
    render();

    var input = $('searchInput');
    input.addEventListener('input', function () {
      state.q = input.value.trim().toLowerCase();
      render();
    });

    // deep-link search: /?q=asmr
    try {
      var q = new URLSearchParams(window.location.search).get('q');
      if (q) { input.value = q; state.q = q.trim().toLowerCase(); render(); }
    } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
