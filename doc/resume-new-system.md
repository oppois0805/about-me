# IWA IoT 裝置管理平台 — AI 驅動前端開發體系

## 專案概述

**角色**：前端架構師 / AI 開發自動化工程師

主導設計以 Angular 21 為核心的企業級 IoT 裝置管理平台，涵蓋三大子系統：共用元件庫（iwa-web-library）、業務應用（iwa-ddc-web-setter）、AI 自動化開發平台（frontEnd-harness）。獨立建構跨 AI 平台的 Prompt 工程體系，實現「設計稿 → 需求分析 → 程式碼生成 → 品質驗證」全流程自動化。

```
frontEnd-harness (AI Prompt 編排)
  Analysis → Builder → QA   Multi-Agent Pipeline
  支援: GitHub Copilot / Claude / Gemini
      │                          │
      ▼                           ▼
iwa-ddc-web-setter           iwa-web-library
Angular 21 + PrimeNG 21      13 個 @iwa/* 元件
13 個功能模組        ◄───     Storybook + Chromatic
```

---

## 核心職責與成果

### 1. AI 自動化開發平台（frontEnd-harness）

- 設計 Analysis → Builder → QA **三階段 AI Agent Pipeline**，支援 Full / Layout Only / Spec Only / Analysis Only 四種模式，自動依輸入選擇最佳流程
- 建立模組化 **Prompt / Skill / Workflow** 架構，單一源碼產出 GitHub Copilot（.agent.md）、Claude（CLAUDE.md）、Gemini 三種平台格式
- 封裝 **9 大 Skill 模組**：Scaffolding、Quality、Verification、Integration（Figma/Confluence）、Incident、Task、Meta 等可複用 AI 知識庫
- 串接 **Angular CLI / PrimeNG / Figma / Atlassian MCP**，AI Agent 直接讀取設計稿、需求文件與框架 API
- 實現 QA 自動檢測 → Builder 修復的**自修復閉環**（最多 2 次迭代），減少人工介入

### 2. 共用 UI 元件庫（iwa-web-library）

- 基於 Angular 21 + PrimeNG 21 + Tailwind CSS 3.4 開發 **13 個 @iwa/\* 共用元件**（Card / Layout / Navigation / Stepper / Icon / List / Dialog-Menu），涵蓋 4 大分類
- 建立 **SCSS Variables + Tailwind CSS Variables 雙軌主題系統**，搭配 PrimeNG Aura Preset + CSS Layers 分層管理
- 導入 **Storybook 10 + Chromatic** 雲端視覺回歸測試，整合 Compodoc 自動產出 API 文件
- 使用 **ng-packagr AoT 編譯**打包為獨立 .tgz 套件，透過內部 HFS Registry 分發

### 3. IoT 裝置管理應用（iwa-ddc-web-setter）

- 設計 **13 個功能子專案**（Device / Task / Schedule / IO-Setting / Indicator / Brand-and-Model / System-Update 等），各模組獨立路由、建構與部署
- 建立 AuthStore → AuthService → AuthGuard → AuthInterceptor **四層認證架構**，整合 JWT Token 自動刷新與 canMatch Guard
- 自製 **15+ 自訂驗證器**（IPv4 / Port Range / 數值精度 / 半形字元 / 日期區間等），支援 Directive 與 Reactive Forms 雙模式
- 採用 **Angular Signals + RxJS 7.8** 混合狀態管理，全面啟用 TypeScript Strict Mode + OnPush 變更偵測

---

## 技術棧

| 維度 | 技術 |
|---|---|
| **框架** | Angular 21.0.6（Standalone + Signals + OnPush）、TypeScript 5.9.3 Strict |
| **UI** | PrimeNG 21 + @iwa/\* 13 元件 + Tailwind CSS 3.4 + PrimeFlex 4 + SCSS |
| **狀態** | Angular Signals + RxJS 7.8（toSignal/toObservable 互操作）|
| **圖表** | ECharts 5.5 + Chart.js 3.3 |
| **國際化** | @ngx-translate（API 驅動動態語系載入）|
| **AI** | Multi-Agent Pipeline + 9 Skill 模組 + MCP（Angular CLI / PrimeNG / Figma / Atlassian）|
| **元件庫** | Storybook 10 + Chromatic + Compodoc + ng-packagr + @swc/core |
| **測試** | Jasmine 5.8 + Karma + Jest 30 + Storybook Play Tests + Istanbul 覆蓋率 |
| **工具鏈** | Angular CLI 21（esbuild）+ Rollup + Prettier + ESLint |
| **DevOps** | Jenkins CI/CD + Docker + HFS 私有 npm Registry |

---

## 技術亮點

| 維度 | 關鍵能力 |
|---|---|
| **AI 工程** | 跨平台 Prompt 工程、Multi-Agent Pipeline、MCP 整合、自修復迴圈、Skill 模組化封裝 |
| **前端架構** | Angular 21 Standalone + Signals、Design System、元件庫打包發佈、雙軌主題系統 |
| **品質保證** | Storybook 視覺測試、Chromatic 回歸、Jasmine/Karma 單元測試、TypeScript Strict |
| **工程效能** | AI 驅動 Code Generation、Figma → Code 自動化、需求分析自動化、跨專案規範分發 |
