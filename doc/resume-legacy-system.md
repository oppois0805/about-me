# IWA 智慧建築管理系統（IWA2 BMS 系列）

## 專案概述

**角色**：前端開發工程師

負責企業級智慧建築管理系統（Building Management System）三大核心子系統的前端架構設計與功能實作，涵蓋設備設定後台、生產監控儀表板與圖控即時編輯器，支撐 IoT 設備的全生命週期管理與即時監控。

```
iwa2-web-bms                iwa2-web-bms-portal
(設定管理後台)               (生產監控入口)
Angular 8 + Nebular         Angular 8 + PrimeNG
20+ 功能模組 / 50+ 服務      雙通道 MQTT 即時通訊
Handsontable / Leaflet      ECharts / Plotly / mxGraph
        │                          │
        └──────────┬───────────────┘
                   │
        iwa2-web-realtime-editor
        (即時圖控編輯器)
        Vanilla JS + jQuery + mxGraph
        Gulp 4 + Webpack 5
        Docker + Nginx
```

---

## 核心職責與成果

### 1. BMS 設定管理平台（iwa2-web-bms）

- 開發含 **20+ 功能模組** 的大型 SPA：設備管理、BIM 3D 設定、碳排放追蹤、電力計價、報表系統、排程告警、權限管理、動態選單配置、虛擬電錶、群組控制指令等
- 建立 **50+ 服務層**（BaseService 全域狀態 / WebsocketService 重連機制 / MqttDefaultService 雙模組 / TokenService 輪詢刷新），搭配 BehaviorSubject 實現 Service-based 狀態管理
- 實作 **多層 Route Guard**（AppGuard → TokenGuard → MqttGuard → LogoutGuard），確保認證 → Token 驗證 → MQTT 連線就緒的完整安全鏈路
- 整合 **Nebular 2.0** 全套 UI 框架（Auth / Security / Theme / Layout），搭配 PrimeNG 8 的 150+ 模組、Handsontable 試算表編輯、Leaflet 地圖、Angular Tree 階層資料
- 自製 **50+ 驗證器與指令**（IPv4 / 數值範圍 / 日期驗證等），搭配 angular2-query-builder 實現 SQL-like 查詢建構

### 2. BMS 生產監控入口（iwa2-web-bms-portal）

- 開發面向終端使用者的 **Production Dashboard**，透過 Angular Gridster2 實現可拖曳式儀表板佈局
- 設計 **雙通道 MQTT 架構**（webMqtt / parentMqtt），透過 Dependency Injection Token 注入，實現設備控制指令的即時雙向推送
- 整合 **ECharts + Plotly.js + ngx-echarts** 多維圖表引擎，搭配 mxGraph 拓撲圖與 Fabric.js 畫布操作，呈現完整的設備監控視覺化
- 實作 **ConfigService + APP_INITIALIZER** 動態環境配置，不需重新打包即可切換部署環境
- 支援 **四國語系**（繁中 / 英文 / 簡中 / 日文），透過 ngx-translate 實現執行階段語言切換
- 建立 **Global Error Handler** 統一例外捕獲、TokenInterceptor / ErrorInterceptor HTTP 攔截機制

### 3. 即時圖控編輯器（iwa2-web-realtime-editor）

- 以 **原生 JavaScript + jQuery + mxGraph** 獨立開發非 Angular 架構的圖形化即時編輯器，實現設備拓撲的視覺化拖拉設計與即時預覽
- 採用 **Gulp 4 + Webpack 5 + Babel 7** 建構工具鏈，搭配 BrowserSync 即時重載開發環境
- 封裝 **12+ 領域服務**（deviceService / layoutService / chartService / panelService / indicatorService / infographicService 等），透過 AxiosService 統一 HTTP 通訊
- 實現 **SVG 匯出**（saveSvgAsPng）、拖放操作（Dragula）、圓形控制滑桿（RoundSlider）、通知系統（iziToast）等互動功能
- 部署於 **Docker + Nginx** 環境，支援 Hash-based 版本控制與反向代理配置

---

## 技術棧

| 維度 | BMS 設定後台 | BMS 監控入口 | 圖控編輯器 |
|---|---|---|---|
| **框架** | Angular 8.2.14 | Angular 8.2.14 | Vanilla JS + jQuery |
| **UI** | Nebular 2.0 + PrimeNG 8 + ng-bootstrap | PrimeNG 8 + Bootstrap 4 + Material | jQuery UI + Select2 |
| **即時通訊** | MQTT + WebSocket（自製重連） | 雙通道 MQTT（webMqtt / parentMqtt） | Axios HTTP |
| **圖表** | ngx-charts + ECharts 4 + Chart.js | ECharts 4 + Plotly.js | 自製圖表 |
| **圖形引擎** | Fabric.js 3.6 | mxGraph 4.0 + Fabric.js 3.6 | mxGraph 4.0 |
| **資料呈現** | Handsontable + Angular Tree + Leaflet | Angular Gridster2 拖曳佈局 | 自製面板系統 |
| **認證** | Nebular OAuth + JWT + 四層 Guard | JWT + TokenInterceptor | — |
| **國際化** | ngx-translate | ngx-translate（四國語系） | 自製 translateService |
| **狀態管理** | RxJS 6.4 BehaviorSubject | RxJS 6.4 BehaviorSubject | 基礎 JS 狀態 |
| **建構** | Angular CLI 8 | Angular CLI 8（AOT） | Gulp 4 + Webpack 5 + Babel 7 |
| **部署** | — | — | Docker + Nginx |

---

## 技術亮點

| 維度 | 關鍵能力 |
|---|---|
| **IoT 即時通訊** | MQTT 雙通道架構設計、WebSocket 自製重連機制、設備控制指令即時雙向推送 |
| **複雜系統治理** | 20+ 功能模組 + 50+ 服務的大型 SPA 架構、多層 Route Guard 安全鏈路 |
| **視覺化能力** | mxGraph 拓撲圖 + ECharts/Plotly 多維圖表 + Fabric.js 畫布 + BIM 3D 模型 |
| **全端前端** | 同時精通 Angular 框架與原生 JavaScript 開發，依需求靈活選擇技術方案 |
| **國際化交付** | 四國語系（繁中 / 英文 / 簡中 / 日文）完整落地、動態環境配置免重建部署 |
