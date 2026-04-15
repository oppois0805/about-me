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
    'skills.framework': 'Framework & Language',
    'skills.ui': 'UI & Design System',
    'skills.viz': 'Visualization & Realtime',
    'skills.ai': 'AI & Automation',
    'skills.advantage': 'Engineering Advantage',
    'adv.eyebrow': 'Core Competencies',
    'adv.intro': 'Six irreplaceable capabilities forged from 10 years of real product delivery.',
    'contact.eyebrow': 'Initiate Contact',
    'contact.title': 'Bridge Engineering to Product Value',
    'contact.channels': 'Direct Channels',
    'contact.copy': 'Copy Email',
    'contact.send': 'Send Inquiry',
    'contact.linkedin': 'LinkedIn / Li-Hao Chen',
    'contact.desc': 'Looking for a frontend architect with deep engineering foundation? If your team deals with complex admin systems, IoT real-time data, or AI-driven development, I can jump right into design and delivery.',
    'contact.copied': 'Copied',
    'footer.status': 'SYSTEM_STATUS: OPERATIONAL',

    // Experience
    'exp.desc': 'From government information systems, frontend engineering, IoT real-time platforms, to modern Angular and AI workflows — continuously turning tech stacks into stable, deliverable product capabilities.',
    'exp.p1.title': 'Government Full-Stack Development',
    'exp.p1.desc': 'Deep expertise in ASP.NET and MSSQL architecture, building government-grade information systems with stable, compliant, and maintainable data management foundations.',
    'exp.p2.title': 'Frontend Technology Transition',
    'exp.p2.desc': 'Shifted to frontend engineering, adopting SCSS, Vue.js, and Gulp automation workflows, evolving from page slicing to maintainable frontend system design.',
    'exp.p3.title': 'IoT Industry Deep Dive',
    'exp.p3.desc': 'Built the IWA2 BMS smart building management system with Angular 8, spanning 20+ functional modules, integrating MQTT, WebSocket, and multiple visualization engines for large-scale hardware orchestration and monitoring.',
    'exp.p4.title': 'Modern Architecture & AI',
    'exp.p4.desc': 'Embracing Angular 21, Signals, Standalone Components, and AI Agent Pipeline, incorporating Prompt Engineering, MCP, and self-healing workflows into development governance.',

    // Products
    'prod.desc': 'Core competency lies not in individual pages, but in integrating shared components, business modules, design specs, and AI engineering workflows into a long-term evolving platform.',
    'eco.label': 'IWA Ecosystem — Three Projects Working in Synergy',
    'eco.desc': 'The DDC device management platform is the main business delivery line, iwa-web-library provides shared components and design specs, and frontEnd-harness drives both DDC and library product lines through AI-automated engineering workflows. All three share a common tech foundation.',
    'eco.role.harness': 'AI-Driven Platform',
    'eco.node.ddc': 'DDC Device Management Platform',
    'eco.role.ddc': 'Business Mainline',
    'eco.role.lib': 'Shared Foundation',

    'proj.ddc.status': 'Primary Product Line',
    'proj.ddc.title': 'IWA DDC Device Management Platform',
    'proj.ddc.alt': 'DDC Device Management Platform — Schedule Calendar',
    'proj.ddc.lead': 'Remote configuration, monitoring, and AI-automated logic orchestration for distributed IoT hardware. Designed 13 functional sub-projects with a 4-layer authentication architecture and 15+ validators.',
    'proj.ddc.p1': '13 functional sub-projects independently planned for modular delivery and maintenance.',
    'proj.ddc.p2': '4-layer authentication architecture integrating JWT auto-refresh and route guards.',
    'proj.ddc.p3': 'State consistency controlled via Signals + RxJS + Strict Mode.',

    'proj.lib.status': 'Shared Foundation',
    'proj.lib.title': 'iwa-web-library Shared Component Library',
    'proj.lib.alt': 'iwa-web-library Shared Component Library',
    'proj.lib.lead': 'Enterprise-grade shared component library with 13 @iwa/* components, dual-track theming system, and visual regression testing workflow.',
    'proj.lib.p1': 'Unified backend visual and interaction foundation, reducing cross-project redundancy.',
    'proj.lib.p2': 'Dual-track SCSS + Tailwind system for design token management.',
    'proj.lib.p3': 'Storybook + Chromatic for continuous component visual consistency verification.',

    'proj.harness.status': 'AI Engineering Platform',
    'proj.harness.title': 'frontEnd-harness Automation Platform',
    'proj.harness.lead': 'Analysis → Builder → QA three-stage Pipeline connecting multiple MCP sets, automating requirements analysis, code generation, and quality validation.',
    'proj.harness.p1': 'Three-stage workflow supporting Full / Layout / Spec / Analysis modes.',
    'proj.harness.p2': 'Single source output to Copilot / Claude / Gemini multi-platform formats.',
    'proj.harness.p3': 'QA fix loop with max 2 iterations, minimizing manual intervention.',

    'proj.bms.status': 'Legacy Large-Scale System',
    'proj.bms.title': 'IWA2 BMS Smart Building Management System',
    'proj.bms.alt': 'IWA2 BMS — Air Compressor Process Diagram',
    'proj.bms.lead': 'Large-scale smart building management system covering device management, BIM 3D, carbon tracking, reports, scheduling, permissions, and virtual meters. Foundation for subsequent platformization and AI automation.',
    'proj.bms.p1': 'Covers device management, reports, scheduling alerts, and permission management.',
    'proj.bms.p2': 'MQTT dual-channel + WebSocket supporting millisecond-level real-time monitoring push.',
    'proj.bms.p3': 'Integrated topology, charts, canvas, and BIM 3D — five visualization engines.',

    'tag.tech': 'Tech Stack',
    'tag.related': 'Related Projects',
    'tag.supply': 'Supplies To',
    'tag.drives': 'Drives Projects',
    'tag.scope': 'Functional Scope',

    'domain.device': 'Device Management',
    'domain.topo': 'Topology Editor',
    'domain.dashboard': 'Production Dashboard',
    'domain.carbon': 'Carbon Tracking',
    'domain.schedule': 'Scheduling & Alerts',
    'domain.i18n': '4-Language i18n',

    // Skills
    'skills.desc': 'The core is not stacking tools, but knowing at which level each technology should operate: framework, real-time communication, AI, automation, quality assurance.',


    // Advantage
    'adv.migrate.title': 'Cross-Gen Migration',
    'adv.migrate.desc': 'Independently completed Angular 8 → 21 full-line upgrade, covering build tools, state management, and component API triple rewrite with zero-downtime switchover.',
    'adv.lib.title': 'Component Library Governance',
    'adv.lib.desc': 'Led 13 @iwa/* shared packages through the full lifecycle — design, packaging, documentation, and visual regression — serving multiple product lines.',
    'adv.viz.title': 'Complex Visualization Delivery',
    'adv.viz.desc': 'Integrated ECharts, Fabric.js, mxGraph, Leaflet — five engines handling charts, canvas, topology, and GIS simultaneously on a single platform.',
    'adv.iot.title': 'IoT Real-Time Architecture',
    'adv.iot.desc': 'Designed MQTT dual-channel + WebSocket auto-reconnect mechanism, millisecond-level push running stably in production.',
    'adv.ai.title': 'AI Engineering Workflow',
    'adv.ai.desc': 'Built Analysis → Builder → QA three-stage Pipeline, connecting 4 MCP sets, shortening the requirement-to-validation cycle from days to hours.',
    'adv.qa.title': 'Quality Automation Loop',
    'adv.qa.desc': 'Storybook + Chromatic visual regression, ESLint + Prettier standards, Jasmine/Jest unit testing — three defense lines ensuring delivery consistency.',

    // Aria
    'aria.top': 'Back to top',
    'aria.nav': 'Main navigation',
    'aria.lang': 'Toggle language',
    'aria.metrics': 'Key metrics',
    'aria.console': 'System boot info',
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
    'skills.framework': '框架與語言',
    'skills.ui': 'UI 與設計系統',
    'skills.viz': '視覺化與即時通訊',
    'skills.ai': 'AI 與自動化',
    'skills.advantage': '工程優勢',
    'adv.eyebrow': '核心競爭力',
    'adv.intro': '十年實戰累積的六項不可替代能力，每一項都來自真實產品線的交付驗證。',
    'contact.eyebrow': '開始聯絡',
    'contact.title': '讓工程能力直接對接產品價值',
    'contact.channels': '直接管道',
    'contact.copy': '複製 Email',
    'contact.send': '發送詢問',
    'contact.linkedin': 'LinkedIn / 陳力豪',
    'contact.desc': '正在尋求具備深厚工程底蘊的前端架構師？如果你的團隊需要處理複雜後台、IoT 即時資料或 AI 驅動開發流程，我可以直接進入設計與交付節奏。',
    'contact.copied': '已複製',
    'footer.status': '系統狀態：運作中',

    'exp.desc': '從政府資訊系統、前端工程化、IoT 即時平台，到現代 Angular 與 AI workflow，持續把技術棧轉化為穩定可交付的產品能力。',
    'exp.p1.title': '政府專案全端開發',
    'exp.p1.desc': '深耕 ASP.NET 與 MSSQL 架構，參與政府級資訊系統建置，建立穩定、合規且可維護的資料管理基礎。',
    'exp.p2.title': '前端技術轉型',
    'exp.p2.desc': '轉向前端工程化，導入 SCSS、Vue.js 與 Gulp 自動化流程，從切版走向可維護的前端系統設計。',
    'exp.p3.title': 'IoT 產業深耕',
    'exp.p3.desc': '以 Angular 8 打造 IWA2 BMS 智慧建築管理系統，跨 20+ 功能模組，整合 MQTT、WebSocket 與多種視覺化引擎，支撐大規模硬體連動與監控場景。',
    'exp.p4.title': '現代化架構與 AI',
    'exp.p4.desc': '擁抱 Angular 21、Signals、Standalone Components 與 AI Agent Pipeline，將 Prompt Engineering、MCP 與自修復流程納入開發治理。',

    'prod.desc': '核心能力不在單一頁面，而在於把共用元件、業務模組、設計規格與 AI 工程流程整合成可長期演進的平台。',
    'eco.label': 'IWA 生態系 — 三個專案協同運作',
    'eco.desc': 'DDC 裝置管理平台是業務交付的主線，iwa-web-library 提供共用元件與設計規格，frontEnd-harness 以 AI 自動化工程流程同時驅動 DDC 與 library 兩條產品線。三者共享技術底座，彼此串聯。',
    'eco.role.harness': 'AI 驅動平台',
    'eco.node.ddc': 'DDC 裝置管理平台',
    'eco.role.ddc': '業務主線',
    'eco.role.lib': '共用基底',

    'proj.ddc.status': '主力產品線',
    'proj.ddc.title': 'IWA DDC 裝置管理平台',
    'proj.ddc.alt': 'DDC 裝置管理平台 — 排程行事曆',
    'proj.ddc.lead': '針對分散式 IoT 硬體進行遠端配置、監控與 AI 自動化邏輯編排。設計 13 個功能子專案，建立四層認證架構與 15+ 驗證器。',
    'proj.ddc.p1': '13 個功能子專案獨立規劃，便於模組化交付與維護。',
    'proj.ddc.p2': '建立四層認證架構，整合 JWT 自動刷新與路由守衛。',
    'proj.ddc.p3': '以 Signals + RxJS + Strict Mode 控制狀態一致性。',

    'proj.lib.status': '共用基底',
    'proj.lib.title': 'iwa-web-library 共用元件庫',
    'proj.lib.alt': 'iwa-web-library 共用元件庫',
    'proj.lib.lead': '建立企業級共用元件庫，含 13 個 @iwa/* 元件、雙軌主題系統與視覺回歸測試流程。',
    'proj.lib.p1': '統一後台視覺與互動基礎，減少跨專案重複開發。',
    'proj.lib.p2': '以 SCSS + Tailwind 雙軌系統管理設計 token。',
    'proj.lib.p3': 'Storybook + Chromatic 持續驗證元件外觀一致性。',

    'proj.harness.status': 'AI 工程平台',
    'proj.harness.title': 'frontEnd-harness 自動化平台',
    'proj.harness.lead': '以 Analysis → Builder → QA 三階段 Pipeline 串接多組 MCP，將需求分析、程式碼生成與品質驗證自動化。',
    'proj.harness.p1': '三階段流程支援 Full / Layout / Spec / Analysis 四種模式。',
    'proj.harness.p2': '單一源碼輸出 Copilot / Claude / Gemini 多平台格式。',
    'proj.harness.p3': 'QA 修復閉環最多 2 次迭代，減少人工介入。',

    'proj.bms.status': '前代大型系統',
    'proj.bms.title': 'IWA2 BMS 智慧建築管理系統',
    'proj.bms.alt': 'IWA2 BMS — 空壓主機流程圖',
    'proj.bms.lead': '大型智慧建築管理系統，涵蓋設備管理、BIM 3D、碳排追蹤、報表、排程、權限與虛擬電錶。是後續平台化與 AI 自動化能力的底座。',
    'proj.bms.p1': '覆蓋設備管理、報表、排程告警、權限管理等後台場景。',
    'proj.bms.p2': 'MQTT 雙通道 + WebSocket 支撐毫秒級即時監控推送。',
    'proj.bms.p3': '整合拓撲、圖表、畫布與 BIM 3D 等五種視覺化引擎。',

    'tag.tech': '使用技術',
    'tag.related': '關聯專案',
    'tag.supply': '供給專案',
    'tag.drives': '驅動專案',
    'tag.scope': '功能範圍',

    'domain.device': '設備管理',
    'domain.topo': '拓撲編輯',
    'domain.dashboard': '生產儀表板',
    'domain.carbon': '碳排追蹤',
    'domain.schedule': '排程告警',
    'domain.i18n': '四國語系',

    'skills.desc': '核心不是堆疊工具，而是知道每項技術該在什麼層級發揮作用：框架、即時通訊、AI、自動化、品質保證。',

    'adv.migrate.title': '跨世代遷移',
    'adv.migrate.desc': '獨立完成 Angular 8 → 21 全線升級，涵蓋建構工具、狀態管理與元件 API 三層重寫，零停機切換。',
    'adv.lib.title': '元件庫治理',
    'adv.lib.desc': '主導 13 個 @iwa/* 共用套件從設計、封裝、文件到視覺回歸的完整生命週期，供多產品線共用。',
    'adv.viz.title': '複雜視覺化落地',
    'adv.viz.desc': '整合 ECharts、Fabric.js、mxGraph、Leaflet 五種引擎，在單一平台同時處理圖表、畫布、拓撲與 GIS。',
    'adv.iot.title': 'IoT 即時架構',
    'adv.iot.desc': '設計 MQTT 雙通道 + WebSocket 自動重連機制，毫秒級推送穩定運行於生產環境。',
    'adv.ai.title': 'AI 工程流程化',
    'adv.ai.desc': '建構 Analysis → Builder → QA 三階段 Pipeline，串接 4 組 MCP，將需求到驗證的週期從天縮短至小時。',
    'adv.qa.title': '品質自動化閉環',
    'adv.qa.desc': 'Storybook + Chromatic 視覺回歸、ESLint + Prettier 規範、Jasmine/Jest 單元測試，三道防線確保交付一致性。',

    'aria.top': '回到頂部',
    'aria.nav': '主要導覽',
    'aria.lang': '切換語言',
    'aria.metrics': '關鍵數據',
    'aria.console': '系統啟動資訊',
  },
};

let currentLang = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'zh';
const langToggle = document.getElementById('lang-toggle');

function applyLang(lang, pushState) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] != null) el.setAttribute('alt', dict[key]);
  });
  document.title = lang === 'zh'
    ? 'LEO CHEN | 前端架構師作品集'
    : 'LEO CHEN | Frontend Architect Portfolio';
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  if (langToggle) {
    langToggle.querySelector('.lang-toggle-label').textContent = lang === 'zh' ? 'EN' : '繁中';
  }
  if (pushState !== false) {
    const url = new URL(window.location);
    if (lang === 'zh') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState(null, '', url);
  }
}

applyLang(currentLang, false);

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

/* ── Skill bar fill animation ── */
(function initSkillBars() {
  const meters = document.querySelectorAll('.skill-meter');
  if (!meters.length) return;

  meters.forEach((meter) => {
    const bar = meter.querySelector('i');
    const label = meter.querySelector('strong');
    if (bar) {
      bar.dataset.width = bar.style.width;
      bar.style.width = '0';
    }
    if (label) {
      label.dataset.target = parseInt(label.textContent, 10);
      label.textContent = '0%';
    }
  });

  function animatePercent(el, target, duration) {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(progress * target) + '%';
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const metersInCard = entry.target.querySelectorAll('.skill-meter');
        metersInCard.forEach((meter, i) => {
          setTimeout(() => {
            const bar = meter.querySelector('i');
            const label = meter.querySelector('strong');
            if (bar) {
              bar.style.width = bar.dataset.width;
              bar.classList.add('is-filled');
            }
            if (label) {
              animatePercent(label, parseInt(label.dataset.target, 10), 1000);
            }
          }, i * 200);
        });
        barObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.arsenal-card').forEach((card) => barObserver.observe(card));
})();

/* ── Console typewriter animation ── */
(function initConsoleTypewriter() {
  const container = document.getElementById('console-typewriter');
  if (!container) return;

  const lines = [
    { text: '$ system init --profile "Devin Chen"', cls: 'line-cmd', tag: 'p' },
    { text: '[OK] Angular 21 Architecture', cls: 'line-ok-1', tag: 'li' },
    { text: '[OK] IoT Real-time Stream Engine', cls: 'line-ok-2', tag: 'li' },
    { text: '[OK] AI-Agent Pipeline Integration', cls: 'line-ok-3', tag: 'li' },
  ];

  const promptEl = container.querySelector('.console-prompt');
  promptEl.style.display = 'none';

  let played = false;

  const consoleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || played) return;
        played = true;
        consoleObserver.unobserve(entry.target);
        runTypewriter();
      });
    },
    { threshold: 0.3 }
  );

  consoleObserver.observe(container);

  function runTypewriter() {
    let delay = 300;
    let ulEl = null;

    lines.forEach((line, i) => {
      setTimeout(() => {
        const el = document.createElement(line.tag);
        el.textContent = line.text;
        el.classList.add('console-line', line.cls);

        if (line.tag === 'li') {
          if (!ulEl) {
            ulEl = document.createElement('ul');
            container.insertBefore(ulEl, promptEl);
          }
          ulEl.appendChild(el);
        } else {
          container.insertBefore(el, promptEl);
        }

        if (i === lines.length - 1) {
          setTimeout(() => {
            promptEl.style.display = '';
            promptEl.classList.add('console-line', 'line-ready');
          }, 600);
        }
      }, delay);

      delay += line.tag === 'p' ? 900 : 600;
    });
  }
})();

if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = 'no3111000@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = i18n[currentLang]['contact.copied'];
    } catch {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = i18n[currentLang]['contact.copy'];
    }, 1500);
  });
}

/* ── Sticky header + Scroll-to-top ── */
const header = document.querySelector('.site-header');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (header) header.classList.toggle('is-sticky', y > 60);
  if (scrollTopBtn) scrollTopBtn.classList.toggle('is-visible', y > 400);
}, { passive: true });

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Lightbox ── */
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.project-screenshot').forEach((shot) => {
    shot.addEventListener('click', () => {
      const img = shot.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
  lightbox.addEventListener('click', closeLightbox);
  lbImg.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ── Ecosystem triangle dynamic SVG lines ── */
const ecoTriangle = document.getElementById('eco-triangle');
const ecoSvg = document.getElementById('eco-svg');

if (ecoTriangle && ecoSvg) {
  const NS = 'http://www.w3.org/2000/svg';

  function getNodeCenter(attr) {
    const el = ecoTriangle.querySelector(`[data-eco="${attr}"] .ecosystem-node`);
    if (!el) return { x: 0, y: 0 };
    const parentRect = ecoTriangle.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - parentRect.left,
      y: r.top + r.height / 2 - parentRect.top,
    };
  }

  function makeLine(from, to, delay) {
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    if (delay) line.style.animationDelay = delay;
    return line;
  }

  function makeDot(from, to, dur, begin) {
    const circle = document.createElementNS(NS, 'circle');
    circle.setAttribute('r', '3');
    const anim = document.createElementNS(NS, 'animateMotion');
    anim.setAttribute('dur', dur);
    anim.setAttribute('repeatCount', 'indefinite');
    if (begin) anim.setAttribute('begin', begin);
    anim.setAttribute('path', `M${from.x},${from.y} L${to.x},${to.y} L${from.x},${from.y}`);
    circle.appendChild(anim);
    return circle;
  }

  function drawLines() {
    ecoSvg.innerHTML = '';
    const h = getNodeCenter('harness');
    const d = getNodeCenter('ddc');
    const l = getNodeCenter('lib');

    ecoSvg.appendChild(makeLine(h, d, '0s'));
    ecoSvg.appendChild(makeLine(h, l, '-4s'));
    ecoSvg.appendChild(makeLine(d, l, '-8s'));

    ecoSvg.appendChild(makeDot(h, d, '2.4s', '0s'));
    ecoSvg.appendChild(makeDot(h, l, '2.4s', '0.8s'));
    ecoSvg.appendChild(makeDot(d, l, '2.8s', '0.4s'));
  }

  drawLines();
  window.addEventListener('resize', drawLines);
}