const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const revealItems = Array.from(document.querySelectorAll('.reveal'));
const counters = Array.from(document.querySelectorAll('.counter'));
const copyEmailButton = document.getElementById('copy-email');
const currentYear = document.getElementById('current-year');

/* ── Tag category color system ── */
const TAG_CATEGORIES = {
  angular:    ['Angular 21', 'Angular 8', 'Angular CLI MCP', 'Angular 8+'],
  typescript: ['TypeScript Strict', 'TypeScript'],
  reactive:   ['Signals', 'RxJS 7.8', 'RxJS 6', 'RxJS / Reactive'],
  primeng:    ['PrimeNG 21', 'PrimeNG 8', 'PrimeNG MCP'],
  styling:    ['Tailwind CSS', 'Tailwind CSS 3.4', 'SCSS'],
  realtime:   ['MQTT', 'WebSocket', 'MQTT / WebSocket'],
  viz:        ['ECharts', 'Plotly', 'Fabric.js', 'mxGraph', 'Leaflet'],
  ai:         ['Prompt Engineering', 'Multi-Agent Pipeline', 'MCP', 'Figma MCP', 'Atlassian MCP', 'AI Agent', 'AI Agent Pipeline'],
  tooling:    ['Storybook 10', 'Chromatic', 'Compodoc', 'ng-packagr', 'JWT', 'Nebular'],
  domain:     ['設備管理', '拓撲編輯', '生產儀表板', '碳排追蹤', '排程告警', '四國語系'],
};

const tagCatMap = new Map();
Object.entries(TAG_CATEGORIES).forEach(([cat, tags]) => {
  tags.forEach((t) => tagCatMap.set(t, cat));
});

document.querySelectorAll('.tag:not(.tag-link)').forEach((el) => {
  const text = el.textContent.trim();
  const cat = tagCatMap.get(text);
  if (cat) el.setAttribute('data-cat', cat);
});

/* ── i18n language toggle ── */
const i18n = {
  en: {
    'nav.about': 'About',
    'nav.exp': 'Experience',
    'nav.prod': 'Products',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'ARCHITECTING PRECISION INTERFACES',
    'hero.title': 'Senior IoT Frontend Architect',
    'hero.subtitle': '10 years of depth — understand principles first, then leverage tools.',
    'hero.summary': 'Focused on IoT smart buildings, Angular architecture evolution, component library governance, and AI Agent Workflow. I break down platform complexity into maintainable systems, connecting design, specs, and validation into production-ready engineering pipelines.',
    'hero.cta1': 'View Core Systems',
    'hero.cta2': 'Initiate Contact',
    'metric.years': 'Years',
    'metric.modules': 'Modules Delivered',
    'metric.components': 'Shared Components',
    'metric.mcp': 'MCP Integrations',
    'status.focus': 'Current Focus',
    'status.focus.title': 'AI-Driven Frontend Systems',
    'status.focus.desc': 'Angular 21 + Design System + Multi-Agent Pipeline + MCP orchestration.',
    'status.domain': 'Operating Domain',
    'status.domain.title': 'IoT / Smart Building',
    'status.domain.desc': 'Remote configuration, monitoring, real-time data streams, and enterprise admin delivery.',
    'exp.eyebrow': 'System Evolution',
    'exp.title': 'Experience & Career',
    'prod.eyebrow': 'Core Systems',
    'prod.title': 'Project Portfolio',
    'skills.eyebrow': 'Technical Arsenal',
    'skills.title': 'Tech Arsenal',
    'skills.logic': 'Logic & Framework',
    'skills.iot': 'IoT & Integration',
    'skills.ai': 'AI & Future-Proof',
    'skills.advantage': 'Engineering Advantage',
    'contact.eyebrow': 'Initiate Contact',
    'contact.title': 'Bridge Engineering to Product Value',
    'contact.channels': 'Direct Channels',
    'contact.copy': 'Copy Email',
    'contact.send': 'Send Inquiry',
    'footer.status': 'SYSTEM_STATUS: OPERATIONAL',
  },
  zh: {
    'nav.about': '關於我',
    'nav.exp': '經歷',
    'nav.prod': '實績',
    'nav.skills': '技能',
    'nav.contact': '聯絡',
    'hero.eyebrow': '精密介面架構師',
    'hero.title': '資深 IoT 前端架構師',
    'hero.subtitle': '十年開發深度，先理解原理，再善用工具。',
    'hero.summary': '聚焦 IoT 智慧建築、Angular 架構演進、元件庫治理與 AI Agent Workflow。我把大型平台的複雜度拆成可維護的系統，並將設計、規格與驗證串成真正可落地的工程流程。',
    'hero.cta1': '查看核心系統',
    'hero.cta2': '開始聯絡',
    'metric.years': '年資',
    'metric.modules': '交付模組',
    'metric.components': '共用元件',
    'metric.mcp': 'MCP 整合',
    'status.focus': '當前焦點',
    'status.focus.title': 'AI 驅動前端系統',
    'status.focus.desc': 'Angular 21 + Design System + Multi-Agent Pipeline + MCP 編排。',
    'status.domain': '應用領域',
    'status.domain.title': 'IoT / 智慧建築',
    'status.domain.desc': '遠端設定、監控、即時資料流與企業級管理後台交付經驗。',
    'exp.eyebrow': '系統演進',
    'exp.title': '經歷與職業',
    'prod.eyebrow': '核心系統',
    'prod.title': '專案實績',
    'skills.eyebrow': '技術武器庫',
    'skills.title': '技術軍火庫',
    'skills.logic': '邏輯與框架',
    'skills.iot': 'IoT 與整合',
    'skills.ai': 'AI 與前瞻技術',
    'skills.advantage': '工程優勢',
    'contact.eyebrow': '開始聯絡',
    'contact.title': '讓工程能力直接對接產品價值',
    'contact.channels': '直接管道',
    'contact.copy': '複製 Email',
    'contact.send': '發送詢問',
    'footer.status': '系統狀態：運作中',
  },
};

let currentLang = 'zh';
const langToggle = document.getElementById('lang-toggle');

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  if (langToggle) {
    langToggle.querySelector('.lang-toggle-label').textContent = lang === 'zh' ? 'EN' : '繁中';
  }
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => sectionObserver.observe(item));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', active);
      });
    });
  },
  {
    threshold: 0.35,
    rootMargin: '-15% 0px -40% 0px'
  }
);

sections.forEach((section) => navObserver.observe(section));

const animateCounter = (element) => {
  const target = Number(element.dataset.target || 0);
  const duration = 1000;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    element.textContent = String(Math.floor(target * progress));

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = String(target);
    }
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = 'no3111000@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = currentLang === 'zh' ? '已複製' : 'Copied';
    } catch {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = i18n[currentLang]['contact.copy'];
    }, 1500);
  });
}