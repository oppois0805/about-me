# IoT 智慧建築前端工程師 — 十年開發簡歷

## 個人定位

深耕 IoT 智慧建築領域十年，專注裝置監視控制系統的前端架構設計與交付。從 Angular 8 到 Angular 21，歷經兩個世代的完整開發週期；從手動編碼到 AI Agent 自動化，持續推動前端工程效能躍進。

---

## 職涯發展歷程

### 第一階段：IWA2 BMS 智慧建築管理系統（Angular 8）

> 前端開發工程師 — 負責三大子系統開發

**BMS 設定管理後台（iwa2-web-bms）**

從零開發含 20+ 功能模組的企業級 SPA，涵蓋設備管理、BIM 3D 設定、碳排放追蹤、電力計價、報表、排程告警、權限管理、虛擬電錶與群組控制。建立 50+ 服務層，以 RxJS BehaviorSubject 實現狀態管理，搭配 WebSocket 自製重連與 MQTT 雙模組即時通訊。實作四層路由守衛（AppGuard → TokenGuard → MqttGuard → LogoutGuard）。整合 Nebular 2.0 + PrimeNG 8 + Handsontable 試算表 + Leaflet 地圖 + Angular Tree 階層資料。自製 50+ 驗證器與指令。

**BMS 生產監控入口（iwa2-web-bms-portal）**

開發 Production Dashboard，透過 Angular Gridster2 實現可拖曳儀表板。設計雙通道 MQTT（webMqtt / parentMqtt）即時雙向推送。整合 ECharts + Plotly.js 圖表、mxGraph 拓撲圖、Fabric.js 畫布，呈現完整設備監控視覺化。實作動態環境配置（免重建切換），支援四國語系。

**即時圖控編輯器（iwa2-web-realtime-editor）**

以原生 JavaScript + jQuery + mxGraph 獨立開發圖形化即時編輯器，實現設備拓撲拖拉設計與即時預覽。採用 Gulp 4 + Webpack 5 + Babel 7 建構，封裝 12+ 領域服務，支援 SVG 匯出，部署於 Docker + Nginx。

**第一階段成就**

- 交付 20+ 功能模組、50+ 服務、四國語系的大型 IoT 管理平台
- 設計 MQTT 雙通道 + WebSocket 即時通訊架構，支撐毫秒級監控推送
- 同時駕馭 Angular 與原生 JavaScript，依場景靈活選擇技術方案
- 整合 mxGraph / ECharts / Plotly / Fabric.js / BIM 3D 五大視覺化引擎

---

### 第二階段：IWA DDC 裝置管理平台（Angular 21）

> 前端架構師 / AI 開發自動化工程師 — 主導三大子系統架構設計

**企業級 Angular 元件庫（iwa-web-library）**

基於 Angular 21 + PrimeNG 21 + Tailwind CSS 3.4 開發 13 個 @iwa/* 共用元件（Card / Layout / Navigation / Stepper / Icon / List / Dialog-Menu），Monorepo 管理四大分類。全面採用 Standalone + input() Signal API，ng-packagr AoT 打包為 .tgz 套件，透過 HFS Registry 分發。建立 SCSS + Tailwind 雙軌主題系統搭配 CSS Layers 分層。導入 Storybook 10 + Chromatic 視覺回歸測試，Compodoc 自動產出 API 文件，80% 覆蓋率門檻。

**IoT 裝置管理應用（iwa-ddc-web-setter）**

設計 13 個功能子專案（Device / Task / Schedule / IO-Setting / Indicator / Brand-and-Model / System-Update 等），各模組獨立路由與部署。建立四層認證架構（AuthStore → AuthService → AuthGuard → AuthInterceptor），JWT 自動刷新 + canMatch Guard。自製 15+ 驗證器（IPv4 / Port Range / 數值精度 / 日期區間），支援 Directive 與 Reactive Forms 雙模式。Angular Signals + RxJS 7.8 混合狀態管理，TypeScript Strict + OnPush。

**AI 自動化開發平台（frontEnd-harness）**

設計 Analysis → Builder → QA 三階段 AI Agent Pipeline，四種執行模式。模組化 Prompt / Skill / Workflow 架構，單一源碼產出 GitHub Copilot / Claude / Gemini 三種平台格式。封裝 9 大 Skill 模組，串接 Angular CLI / PrimeNG / Figma / Atlassian MCP。實現 QA 檢測 → Builder 修復的自修復閉環。

**第二階段成就**

- 主導 Angular 8 → 21 世代遷移，NgModule → Standalone、@Input → Signals 全面升級
- 建構 13 元件 Design System，Storybook + Chromatic 視覺回歸 CI/CD 全流程
- 自主設計跨 AI 平台 Prompt 工程框架，設計稿到程式碼全流程自動化
- 整合 4 組 MCP，領先實踐 AI-augmented 開發模式

---

## 技術演進對照

**元件模式**：從 NgModule + @Input 演進至 Standalone + Signals，消除模組冗餘，以細粒度響應式 API 取代傳統裝飾器。

**狀態管理**：從 RxJS 6 BehaviorSubject 升級為 Signals + RxJS 7.8 互操作，兼顧同步效能與非同步彈性。

**UI 體系**：從 Nebular + PrimeNG 8 + Bootstrap 三套混合，收斂為 PrimeNG 21 + @iwa 元件庫 + Tailwind 統一體系。

**樣式**：從 SCSS + Material Theme，演進至 Tailwind + CSS Layers 分層 + 雙軌主題變數系統。

**即時通訊**：IWA2 階段設計 MQTT 雙通道 + WebSocket 自製重連，支撐毫秒級即時推送；DDC 階段聚焦 HTTP API 整合。

**視覺化**：從 mxGraph + ECharts + Plotly + Fabric.js + BIM 五引擎並行，精簡為 ECharts 5.5 + Chart.js 雙引擎。

**測試**：從 Jasmine + Karma + Protractor，升級為 Jasmine + Jest + Storybook Play + Chromatic 視覺回歸，80% 覆蓋率門檻。

**AI 工效**：從無 AI 輔助，躍進至 Multi-Agent Pipeline + 9 Skill + MCP 整合，實現全流程自動化。

**部署**：從 Docker + Nginx 手動部署，升級為 Jenkins CI/CD + Docker + HFS 私有 Registry。

---

## 核心優勢

1. **十年 IoT 深耕**：完整經歷兩個世代開發週期，深刻理解裝置監視控制的業務場景與技術挑戰
2. **跨世代架構遷移**：主導 Angular 8 → 21 全面升級，駕馭 NgModule → Standalone、BehaviorSubject → Signals 的技術演進
3. **複雜系統交付**：累計交付 30+ 功能模組、50+ 服務、13 個共用元件的企業級 IoT 平台
4. **AI 開發先行者**：獨立建構跨平台 Prompt 工程框架，整合 MCP 實現設計稿到程式碼全流程自動化
5. **全端前端能力**：精通 Angular 框架與原生 JavaScript，依場景靈活選擇最佳方案
6. **IoT 即時通訊**：具備 MQTT 雙通道 / WebSocket 即時通訊的實戰架構設計經驗
7. **工程治理體系**：從元件庫、主題系統、視覺回歸到 AI 自動化，建立完整前端工程化體系
