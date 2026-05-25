export const sourceProjectTools = [
  {
    "id": "ai-food-flow-order-source-workflow",
    "title": "AI Food Flow Order Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from ai-food-flow-order.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from ai-food-flow-order to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Food Flow Order source context",
    "outputLabel": "AI Food Flow Order source analysis",
    "signals": [
      "src/hooks/useCallManagement",
      "server/src/services/openRouterService",
      "tailwind.config",
      "src/main",
      "src/services/api/ai",
      "src/services/api/sustainability",
      "src/pages/GapAiChurnPrediction",
      "src/pages/GapAiDemandForecastingRestaurantTime"
    ]
  },
  {
    "id": "ai-food-flow-order-ai-tools",
    "title": "AI Food Flow Order AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from ai-food-flow-order.",
    "defaultPrompt": "Review ai-food-flow-order AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Food Flow Order AI prompt or tool context",
    "outputLabel": "AI Food Flow Order AI tool response",
    "signals": [
      "src/hooks/useCallManagement.tsx",
      "server/src/services/openRouterService.ts",
      "tailwind.config.ts",
      "src/main.tsx",
      "src/services/api/ai.ts",
      "src/services/api/sustainability.ts",
      "src/pages/GapAiChurnPrediction.tsx",
      "src/pages/GapAiDemandForecastingRestaurantTime.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-ai-ylyuov-exact-ai",
    "title": "AI Food Flow Order: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/services/api/ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "src/services/api/ai.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-sustainability-1jzw8j-exact-ai",
    "title": "AI Food Flow Order: Sustainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/services/api/sustainability.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability donor inputs",
    "outputLabel": "Sustainability AI response",
    "signals": [
      "src/services/api/sustainability.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-churn-prediction-pa5k0v-exact-ai",
    "title": "AI Food Flow Order: Gap AI Churn Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiChurnPrediction.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Churn Prediction\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Churn Prediction donor inputs",
    "outputLabel": "Gap AI Churn Prediction AI response",
    "signals": [
      "src/pages/GapAiChurnPrediction.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-demand-forecasting-restaurant-time-qypik-exact-ai",
    "title": "AI Food Flow Order: Gap AI Demand Forecasting Restaurant Time",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiDemandForecastingRestaurantTime.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Demand Forecasting Restaurant Time\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Demand Forecasting Restaurant Time donor inputs",
    "outputLabel": "Gap AI Demand Forecasting Restaurant Time AI response",
    "signals": [
      "src/pages/GapAiDemandForecastingRestaurantTime.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-driver-route-optimization-tsp-17kqb6-exact-ai",
    "title": "AI Food Flow Order: Gap AI Driver Route Optimization Tsp",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiDriverRouteOptimizationTsp.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Driver Route Optimization Tsp\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Driver Route Optimization Tsp donor inputs",
    "outputLabel": "Gap AI Driver Route Optimization Tsp AI response",
    "signals": [
      "src/pages/GapAiDriverRouteOptimizationTsp.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-dynamic-pricing-engine-m4c8cb-exact-ai",
    "title": "AI Food Flow Order: Gap AI Dynamic Pricing Engine",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiDynamicPricingEngine.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dynamic Pricing Engine\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dynamic Pricing Engine donor inputs",
    "outputLabel": "Gap AI Dynamic Pricing Engine AI response",
    "signals": [
      "src/pages/GapAiDynamicPricingEngine.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-fraud-detection-payment-anomalies-4yllra-exact-ai",
    "title": "AI Food Flow Order: Gap AI Fraud Detection Payment Anomalies",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiFraudDetectionPaymentAnomalies.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Fraud Detection Payment Anomalies\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Fraud Detection Payment Anomalies donor inputs",
    "outputLabel": "Gap AI Fraud Detection Payment Anomalies AI response",
    "signals": [
      "src/pages/GapAiFraudDetectionPaymentAnomalies.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-menu-recommendation-engine-cold-7ea2k8-exact-ai",
    "title": "AI Food Flow Order: Gap AI Menu Recommendation Engine Cold",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapAiMenuRecommendationEngineCold.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Menu Recommendation Engine Cold\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Menu Recommendation Engine Cold donor inputs",
    "outputLabel": "Gap AI Menu Recommendation Engine Cold AI response",
    "signals": [
      "src/pages/GapAiMenuRecommendationEngineCold.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-driver-incentive-optimization-that-ai-hr47hb-exact-ai",
    "title": "AI Food Flow Order: Gap Driver Incentive Optimization That AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapDriverIncentiveOptimizationThatAi.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Driver Incentive Optimization That AI\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Driver Incentive Optimization That AI donor inputs",
    "outputLabel": "Gap Driver Incentive Optimization That AI AI response",
    "signals": [
      "src/pages/GapDriverIncentiveOptimizationThatAi.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-supply-chain-risk-warnings-when-1fo1i2-exact-ai",
    "title": "AI Food Flow Order: Gap Supply Chain Risk Warnings When",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/GapSupplyChainRiskWarningsWhen.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Supply Chain Risk Warnings When\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Supply Chain Risk Warnings When donor inputs",
    "outputLabel": "Gap Supply Chain Risk Warnings When AI response",
    "signals": [
      "src/pages/GapSupplyChainRiskWarningsWhen.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-wait-time-page-86099j-exact-ai",
    "title": "AI Food Flow Order: Wait Time Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/wait-time/WaitTimePage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Wait Time Page\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Wait Time Page donor inputs",
    "outputLabel": "Wait Time Page AI response",
    "signals": [
      "Open"
    ]
  },
  {
    "id": "ai-food-flow-order-sustainability-page-18w2fh-exact-ai",
    "title": "AI Food Flow Order: Sustainability Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/sustainability/SustainabilityPage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability Page\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability Page donor inputs",
    "outputLabel": "Sustainability Page AI response",
    "signals": [
      "src/pages/sustainability/SustainabilityPage.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-schedule-detail-1lnmm3-exact-ai",
    "title": "AI Food Flow Order: Schedule Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/staff/ScheduleDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Schedule Detail\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Schedule Detail donor inputs",
    "outputLabel": "Schedule Detail AI response",
    "signals": [
      "src/pages/staff/ScheduleDetail.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-staff-detail-1hag8-exact-ai",
    "title": "AI Food Flow Order: Staff Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/staff/StaffDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Staff Detail\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Staff Detail donor inputs",
    "outputLabel": "Staff Detail AI response",
    "signals": [
      "src/pages/staff/StaffDetail.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-review-detail-u10ce3-exact-ai",
    "title": "AI Food Flow Order: Review Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/reviews/ReviewDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Review Detail\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Review Detail donor inputs",
    "outputLabel": "Review Detail AI response",
    "signals": [
      "src/pages/reviews/ReviewDetail.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-inventory-detail-12xv6c-exact-ai",
    "title": "AI Food Flow Order: Inventory Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/inventory/InventoryDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Inventory Detail\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Inventory Detail donor inputs",
    "outputLabel": "Inventory Detail AI response",
    "signals": [
      "src/pages/inventory/InventoryDetail.tsx"
    ]
  },
  {
    "id": "ai-food-flow-order-ai-14x2m0-exact-ai",
    "title": "AI Food Flow Order: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "server/src/routes/ai.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-churn-prediction-17rvtq-exact-ai",
    "title": "AI Food Flow Order: Gap AI Churn Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_churn_prediction.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Churn Prediction\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Churn Prediction donor inputs",
    "outputLabel": "Gap AI Churn Prediction AI response",
    "signals": [
      "server/src/routes/gap_ai_churn_prediction.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-demand-forecasting-restaurant-time-1riqz-exact-ai",
    "title": "AI Food Flow Order: Gap AI Demand Forecasting Restaurant Time",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_demand_forecasting_restaurant_time.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Demand Forecasting Restaurant Time\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Demand Forecasting Restaurant Time donor inputs",
    "outputLabel": "Gap AI Demand Forecasting Restaurant Time AI response",
    "signals": [
      "server/src/routes/gap_ai_demand_forecasting_restaurant_time.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-driver-route-optimization-tsp-pba7y6-exact-ai",
    "title": "AI Food Flow Order: Gap AI Driver Route Optimization Tsp",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_driver_route_optimization_tsp.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Driver Route Optimization Tsp\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Driver Route Optimization Tsp donor inputs",
    "outputLabel": "Gap AI Driver Route Optimization Tsp AI response",
    "signals": [
      "server/src/routes/gap_ai_driver_route_optimization_tsp.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-dynamic-pricing-engine-6bgh0j-exact-ai",
    "title": "AI Food Flow Order: Gap AI Dynamic Pricing Engine",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_dynamic_pricing_engine.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dynamic Pricing Engine\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dynamic Pricing Engine donor inputs",
    "outputLabel": "Gap AI Dynamic Pricing Engine AI response",
    "signals": [
      "server/src/routes/gap_ai_dynamic_pricing_engine.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-fraud-detection-payment-anomalies-1e8826-exact-ai",
    "title": "AI Food Flow Order: Gap AI Fraud Detection Payment Anomalies",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_fraud_detection_payment_anomalies.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Fraud Detection Payment Anomalies\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Fraud Detection Payment Anomalies donor inputs",
    "outputLabel": "Gap AI Fraud Detection Payment Anomalies AI response",
    "signals": [
      "server/src/routes/gap_ai_fraud_detection_payment_anomalies.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-gap-ai-menu-recommendation-engine-cold-wu6by7-exact-ai",
    "title": "AI Food Flow Order: Gap AI Menu Recommendation Engine Cold",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gap_ai_menu_recommendation_engine_cold.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Menu Recommendation Engine Cold\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Menu Recommendation Engine Cold donor inputs",
    "outputLabel": "Gap AI Menu Recommendation Engine Cold AI response",
    "signals": [
      "server/src/routes/gap_ai_menu_recommendation_engine_cold.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-sustainability-ygue8b-exact-ai",
    "title": "AI Food Flow Order: Sustainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/sustainability.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability donor inputs",
    "outputLabel": "Sustainability AI response",
    "signals": [
      "server/src/routes/sustainability.ts"
    ]
  },
  {
    "id": "ai-food-flow-order-capacitor-plugins-jrqzfs-exact-ai",
    "title": "AI Food Flow Order: Capacitor.Plugins",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from android/app/src/main/assets/capacitor.plugins.json. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Capacitor.Plugins\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Capacitor.Plugins donor inputs",
    "outputLabel": "Capacitor.Plugins AI response",
    "signals": [
      "android/app/src/main/assets/capacitor.plugins.json"
    ]
  },
  {
    "id": "ai-food-flow-order-cordova-rn1q5d-exact-ai",
    "title": "AI Food Flow Order: Cordova",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from android/app/src/main/assets/public/cordova.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cordova\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cordova donor inputs",
    "outputLabel": "Cordova AI response",
    "signals": [
      "android/app/src/main/assets/public/cordova.js"
    ]
  },
  {
    "id": "ai-food-flow-order-cordova-plugins-1o45ft-exact-ai",
    "title": "AI Food Flow Order: Cordova Plugins",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from android/app/src/main/assets/public/cordova_plugins.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cordova Plugins\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cordova Plugins donor inputs",
    "outputLabel": "Cordova Plugins AI response",
    "signals": [
      "android/app/src/main/assets/public/cordova_plugins.js"
    ]
  },
  {
    "id": "ai-food-flow-order-web-bve-d-unw-an7xis-exact-ai",
    "title": "AI Food Flow Order: Web Bve D UNW",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from android/app/src/main/assets/public/assets/web-Bve_dUNW.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Web Bve D UNW\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Web Bve D UNW donor inputs",
    "outputLabel": "Web Bve D UNW AI response",
    "signals": [
      "Get Reader"
    ]
  },
  {
    "id": "ai-food-flow-order-web-dx-pgd4il-ivhwcs-exact-ai",
    "title": "AI Food Flow Order: Web Dx PGD4il",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from android/app/src/main/assets/public/assets/web-DxPGD4il.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Web Dx PGD4il\" from ai-food-flow-order. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Web Dx PGD4il donor inputs",
    "outputLabel": "Web Dx PGD4il AI response",
    "signals": [
      "android/app/src/main/assets/public/assets/web-DxPGD4il.js"
    ]
  },
  {
    "id": "ai-bakery-production-manager-source-workflow",
    "title": "AI Bakery Production Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIBakeryProductionManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIBakeryProductionManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Bakery Production Manager source context",
    "outputLabel": "AI Bakery Production Manager source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/src/main",
      "frontend/src/pages/AIFeatures",
      "frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage",
      "frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage",
      "frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage",
      "frontend/src/pages/NoNotificationSystemNoEmailSmsDeliveryChannPage",
      "frontend/src/pages/SupplyChainAgentPredictingIngredientShortagesPage"
    ]
  },
  {
    "id": "ai-bakery-production-manager-ai-tools",
    "title": "AI Bakery Production Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIBakeryProductionManager.",
    "defaultPrompt": "Review AIBakeryProductionManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Bakery Production Manager AI prompt or tool context",
    "outputLabel": "AI Bakery Production Manager AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AIFeatures.jsx",
      "frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage.jsx",
      "frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage.jsx",
      "frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage.jsx",
      "frontend/src/pages/NoNotificationSystemNoEmailSmsDeliveryChannPage.jsx",
      "frontend/src/pages/SupplyChainAgentPredictingIngredientShortagesPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-ai-features-r1w8me-exact-ai",
    "title": "AI Bakery Production Manager: AI Features",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFeatures.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Features\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Features donor inputs",
    "outputLabel": "AI Features AI response",
    "signals": [
      "frontend/src/pages/AIFeatures.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-no-agentic-supplier-substitution-decisioning-surfa-page-1bnhu4-exact-ai",
    "title": "AI Bakery Production Manager: No Agentic Supplier Substitution Decisioning Surfa Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No Agentic Supplier Substitution Decisioning Surfa Page\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No Agentic Supplier Substitution Decisioning Surfa Page donor inputs",
    "outputLabel": "No Agentic Supplier Substitution Decisioning Surfa Page AI response",
    "signals": [
      "frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-no-ai-dynamic-pricing-for-daily-fresh-goods-page-5qp0c6-exact-ai",
    "title": "AI Bakery Production Manager: No AI Dynamic Pricing For Daily Fresh Goods Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Dynamic Pricing For Daily Fresh Goods Page\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Dynamic Pricing For Daily Fresh Goods Page donor inputs",
    "outputLabel": "No AI Dynamic Pricing For Daily Fresh Goods Page AI response",
    "signals": [
      "frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-no-e-commerce-storefront-for-retail-orders-page-1ojo13-exact-ai",
    "title": "AI Bakery Production Manager: No E Commerce Storefront For Retail Orders Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No E Commerce Storefront For Retail Orders Page\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No E Commerce Storefront For Retail Orders Page donor inputs",
    "outputLabel": "No E Commerce Storefront For Retail Orders Page AI response",
    "signals": [
      "frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-no-notification-system-no-email-sms-delivery-chann-page-iqbchx-exact-ai",
    "title": "AI Bakery Production Manager: No Notification System No Email Sms Delivery Chann Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoNotificationSystemNoEmailSmsDeliveryChannPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No Notification System No Email Sms Delivery Chann Page\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No Notification System No Email Sms Delivery Chann Page donor inputs",
    "outputLabel": "No Notification System No Email Sms Delivery Chann Page AI response",
    "signals": [
      "frontend/src/pages/NoNotificationSystemNoEmailSmsDeliveryChannPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-supply-chain-agent-predicting-ingredient-shortages-page-sf4jt3-exact-ai",
    "title": "AI Bakery Production Manager: Supply Chain Agent Predicting Ingredient Shortages Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/SupplyChainAgentPredictingIngredientShortagesPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Supply Chain Agent Predicting Ingredient Shortages Page\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Supply Chain Agent Predicting Ingredient Shortages Page donor inputs",
    "outputLabel": "Supply Chain Agent Predicting Ingredient Shortages Page AI response",
    "signals": [
      "frontend/src/pages/SupplyChainAgentPredictingIngredientShortagesPage.jsx"
    ]
  },
  {
    "id": "ai-bakery-production-manager-ai-5cuwes-exact-ai",
    "title": "AI Bakery Production Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Budget",
      "Dietary Needs",
      "Dietary Restrictions",
      "Guest Count",
      "Items",
      "Months Ahead = 3",
      "Occasion",
      "Platform"
    ]
  },
  {
    "id": "ai-bakery-production-manager-ai-new-7q6oy0-exact-ai",
    "title": "AI Bakery Production Manager: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Recipe Id"
    ]
  },
  {
    "id": "ai-bakery-production-manager-gap-no-agentic-supplier-substitution-decisioning-surfa-12ueem-exact-ai",
    "title": "AI Bakery Production Manager: Gap No Agentic Supplier Substitution Decisioning Surfa",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_agentic_supplier_substitution_decisioning_surfa.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Agentic Supplier Substitution Decisioning Surfa\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Agentic Supplier Substitution Decisioning Surfa donor inputs",
    "outputLabel": "Gap No Agentic Supplier Substitution Decisioning Surfa AI response",
    "signals": [
      "backend/routes/gap_no_agentic_supplier_substitution_decisioning_surfa.js"
    ]
  },
  {
    "id": "ai-bakery-production-manager-gap-no-ai-dynamic-pricing-for-daily-fresh-goods-18lgsh-exact-ai",
    "title": "AI Bakery Production Manager: Gap No AI Dynamic Pricing For Daily Fresh Goods",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_dynamic_pricing_for_daily_fresh_goods.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Dynamic Pricing For Daily Fresh Goods\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Dynamic Pricing For Daily Fresh Goods donor inputs",
    "outputLabel": "Gap No AI Dynamic Pricing For Daily Fresh Goods AI response",
    "signals": [
      "backend/routes/gap_no_ai_dynamic_pricing_for_daily_fresh_goods.js"
    ]
  },
  {
    "id": "ai-bakery-production-manager-gap-no-e-commerce-storefront-for-retail-orders-6vfhjn-exact-ai",
    "title": "AI Bakery Production Manager: Gap No E Commerce Storefront For Retail Orders",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_e_commerce_storefront_for_retail_orders.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No E Commerce Storefront For Retail Orders\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No E Commerce Storefront For Retail Orders donor inputs",
    "outputLabel": "Gap No E Commerce Storefront For Retail Orders AI response",
    "signals": [
      "backend/routes/gap_no_e_commerce_storefront_for_retail_orders.js"
    ]
  },
  {
    "id": "ai-bakery-production-manager-gap-no-notification-system-no-email-sms-delivery-chann-9fhbat-exact-ai",
    "title": "AI Bakery Production Manager: Gap No Notification System No Email Sms Delivery Chann",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_notification_system_no_email_sms_delivery_chann.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Notification System No Email Sms Delivery Chann\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Notification System No Email Sms Delivery Chann donor inputs",
    "outputLabel": "Gap No Notification System No Email Sms Delivery Chann AI response",
    "signals": [
      "backend/routes/gap_no_notification_system_no_email_sms_delivery_chann.js"
    ]
  },
  {
    "id": "ai-bakery-production-manager-supply-chain-agent-1xco7k-exact-ai",
    "title": "AI Bakery Production Manager: Supply Chain Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/supplyChainAgent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Supply Chain Agent\" from AIBakeryProductionManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Supply Chain Agent donor inputs",
    "outputLabel": "Supply Chain Agent AI response",
    "signals": [
      "backend/routes/supplyChainAgent.js"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-source-workflow",
    "title": "AI Brewery Craft Beverage Ops Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIBreweryCraftBeverageOps.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIBreweryCraftBeverageOps to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Brewery Craft Beverage Ops source context",
    "outputLabel": "AI Brewery Craft Beverage Ops source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIFeaturePage",
      "frontend/src/pages/AIHistoryPage",
      "frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage",
      "frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage",
      "frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage",
      "frontend/src/pages/NoAiTastingNoteGeneratorForMarketingPage",
      "frontend/src/components/DetailPanel"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-ai-tools",
    "title": "AI Brewery Craft Beverage Ops AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIBreweryCraftBeverageOps.",
    "defaultPrompt": "Review AIBreweryCraftBeverageOps AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Brewery Craft Beverage Ops AI prompt or tool context",
    "outputLabel": "AI Brewery Craft Beverage Ops AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIFeaturePage.jsx",
      "frontend/src/pages/AIHistoryPage.jsx",
      "frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage.jsx",
      "frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage.jsx",
      "frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage.jsx",
      "frontend/src/pages/NoAiTastingNoteGeneratorForMarketingPage.jsx",
      "frontend/src/components/DetailPanel.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-ai-feature-page-vlvcau-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: AI Feature Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFeaturePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Feature Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Feature Page donor inputs",
    "outputLabel": "AI Feature Page AI response",
    "signals": [
      "frontend/src/pages/AIFeaturePage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-ai-history-page-yygxe8-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: AI History Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHistoryPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History Page donor inputs",
    "outputLabel": "AI History Page AI response",
    "signals": [
      "frontend/src/pages/AIHistoryPage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-agentic-brew-day-assistant-orchestrating-recipe-wa-page-1piz5v-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: Agentic Brew Day Assistant Orchestrating Recipe Wa Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Brew Day Assistant Orchestrating Recipe Wa Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Brew Day Assistant Orchestrating Recipe Wa Page donor inputs",
    "outputLabel": "Agentic Brew Day Assistant Orchestrating Recipe Wa Page AI response",
    "signals": [
      "frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-no-ai-customer-feedback-sentiment-loop-into-recipe-page-1xp8no-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: No AI Customer Feedback Sentiment Loop Into Recipe Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Customer Feedback Sentiment Loop Into Recipe Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Customer Feedback Sentiment Loop Into Recipe Page donor inputs",
    "outputLabel": "No AI Customer Feedback Sentiment Loop Into Recipe Page AI response",
    "signals": [
      "frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-no-ai-tap-room-demand-forecasting-per-hour-page-1smk8s-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: No AI Tap Room Demand Forecasting Per Hour Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Tap Room Demand Forecasting Per Hour Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Tap Room Demand Forecasting Per Hour Page donor inputs",
    "outputLabel": "No AI Tap Room Demand Forecasting Per Hour Page AI response",
    "signals": [
      "frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-no-ai-tasting-note-generator-for-marketing-page-tnapj1-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: No AI Tasting Note Generator For Marketing Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiTastingNoteGeneratorForMarketingPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Tasting Note Generator For Marketing Page\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Tasting Note Generator For Marketing Page donor inputs",
    "outputLabel": "No AI Tasting Note Generator For Marketing Page AI response",
    "signals": [
      "frontend/src/pages/NoAiTastingNoteGeneratorForMarketingPage.jsx"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-ai-5cuwes-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Abv",
      "Abv Target",
      "Actual Temp",
      "Actual Time",
      "Annual Production Bbl",
      "Appearance",
      "Aroma",
      "Aroma Notes"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-brew-day-agent-e3xdh7-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: Brew Day Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/brewDayAgent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Brew Day Agent\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Brew Day Agent donor inputs",
    "outputLabel": "Brew Day Agent AI response",
    "signals": [
      "backend/routes/brewDayAgent.js"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-gap-no-ai-customer-feedback-sentiment-loop-into-recipe-1vtu4x-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: Gap No AI Customer Feedback Sentiment Loop Into Recipe",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_customer_feedback_sentiment_loop_into_recipe.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Customer Feedback Sentiment Loop Into Recipe\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Customer Feedback Sentiment Loop Into Recipe donor inputs",
    "outputLabel": "Gap No AI Customer Feedback Sentiment Loop Into Recipe AI response",
    "signals": [
      "backend/routes/gap_no_ai_customer_feedback_sentiment_loop_into_recipe.js"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-gap-no-ai-tap-room-demand-forecasting-per-hour-1obh3o-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: Gap No AI Tap Room Demand Forecasting Per Hour",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_tap_room_demand_forecasting_per_hour.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Tap Room Demand Forecasting Per Hour\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Tap Room Demand Forecasting Per Hour donor inputs",
    "outputLabel": "Gap No AI Tap Room Demand Forecasting Per Hour AI response",
    "signals": [
      "backend/routes/gap_no_ai_tap_room_demand_forecasting_per_hour.js"
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-gap-no-ai-tasting-note-generator-for-marketing-qpavm-exact-ai",
    "title": "AI Brewery Craft Beverage Ops: Gap No AI Tasting Note Generator For Marketing",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_tasting_note_generator_for_marketing.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Tasting Note Generator For Marketing\" from AIBreweryCraftBeverageOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Tasting Note Generator For Marketing donor inputs",
    "outputLabel": "Gap No AI Tasting Note Generator For Marketing AI response",
    "signals": [
      "backend/routes/gap_no_ai_tasting_note_generator_for_marketing.js"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-source-workflow",
    "title": "AI Commercial Kitchen Equipment Maintenance Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICommercialKitchenEquipmentMaintenance.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICommercialKitchenEquipmentMaintenance to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Commercial Kitchen Equipment Maintenance source context",
    "outputLabel": "AI Commercial Kitchen Equipment Maintenance source analysis",
    "signals": [
      "backend/openrouter",
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AICenterPage",
      "frontend/src/pages/AILabPage",
      "frontend/src/pages/AgenticFieldServiceDispatcherRoutingJobsBySPage",
      "frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAicenterPage",
      "frontend/src/pages/MaintenancePage"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-ai-tools",
    "title": "AI Commercial Kitchen Equipment Maintenance AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICommercialKitchenEquipmentMaintenance.",
    "defaultPrompt": "Review AICommercialKitchenEquipmentMaintenance AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Commercial Kitchen Equipment Maintenance AI prompt or tool context",
    "outputLabel": "AI Commercial Kitchen Equipment Maintenance AI tool response",
    "signals": [
      "backend/openrouter.js",
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AICenterPage.jsx",
      "frontend/src/pages/AILabPage.jsx",
      "frontend/src/pages/AgenticFieldServiceDispatcherRoutingJobsBySPage.jsx",
      "frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAicenterPage.jsx",
      "frontend/src/pages/MaintenancePage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-ai-center-page-1dtw93-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: AI Center Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICenterPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center Page\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center Page donor inputs",
    "outputLabel": "AI Center Page AI response",
    "signals": [
      "frontend/src/pages/AICenterPage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-ai-lab-page-1dcqnt-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: AI Lab Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILabPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lab Page\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lab Page donor inputs",
    "outputLabel": "AI Lab Page AI response",
    "signals": [
      "frontend/src/pages/AILabPage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-gap0-mounted-chat-style-ai-endpoints-despite-aicenter-page-1wl2i9-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: Gap0 Mounted Chat Style AI Endpoints Despite Aicenter Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAicenterPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap0 Mounted Chat Style AI Endpoints Despite Aicenter Page\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap0 Mounted Chat Style AI Endpoints Despite Aicenter Page donor inputs",
    "outputLabel": "Gap0 Mounted Chat Style AI Endpoints Despite Aicenter Page AI response",
    "signals": [
      "frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAicenterPage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-no-ai-diagnostic-from-photo-error-code-lookup-page-17102u-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: No AI Diagnostic From Photo Error Code Lookup Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiDiagnosticFromPhotoErrorCodeLookupPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Diagnostic From Photo Error Code Lookup Page\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Diagnostic From Photo Error Code Lookup Page donor inputs",
    "outputLabel": "No AI Diagnostic From Photo Error Code Lookup Page AI response",
    "signals": [
      "frontend/src/pages/NoAiDiagnosticFromPhotoErrorCodeLookupPage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-no-ai-predictive-failure-model-from-equipment-tele-page-8ghbbz-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: No AI Predictive Failure Model From Equipment Tele Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiPredictiveFailureModelFromEquipmentTelePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Predictive Failure Model From Equipment Tele Page\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Predictive Failure Model From Equipment Tele Page donor inputs",
    "outputLabel": "No AI Predictive Failure Model From Equipment Tele Page AI response",
    "signals": [
      "frontend/src/pages/NoAiPredictiveFailureModelFromEquipmentTelePage.jsx"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-ai-center-16xrrz-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiCenter.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "Context",
      "Date Range",
      "Equipment Id",
      "Equipment Ids",
      "Equipment Type",
      "Message",
      "Query",
      "Report Type"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-ai-new-7q6oy0-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Budget Ceiling",
      "Date Range",
      "Downtime Hours",
      "Equipment Id",
      "Equipment Type",
      "Failure Description",
      "Maintenance History",
      "Part On Hand"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-gap-0-mounted-chat-style-ai-endpoints-despite-aicenter-1az3sv-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: Gap 0 Mounted Chat Style AI Endpoints Despite Aicenter",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_0_mounted_chat_style_ai_endpoints_despite_aicenter.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap 0 Mounted Chat Style AI Endpoints Despite Aicenter\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap 0 Mounted Chat Style AI Endpoints Despite Aicenter donor inputs",
    "outputLabel": "Gap 0 Mounted Chat Style AI Endpoints Despite Aicenter AI response",
    "signals": [
      "backend/routes/gap_0_mounted_chat_style_ai_endpoints_despite_aicenter.js"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-gap-no-ai-diagnostic-from-photo-error-code-lookup-1tkhw9-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: Gap No AI Diagnostic From Photo Error Code Lookup",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_diagnostic_from_photo_error_code_lookup.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Diagnostic From Photo Error Code Lookup\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Diagnostic From Photo Error Code Lookup donor inputs",
    "outputLabel": "Gap No AI Diagnostic From Photo Error Code Lookup AI response",
    "signals": [
      "backend/routes/gap_no_ai_diagnostic_from_photo_error_code_lookup.js"
    ]
  },
  {
    "id": "ai-commercial-kitchen-equipment-maintenance-gap-no-ai-predictive-failure-model-from-equipment-tele-dbwiy7-exact-ai",
    "title": "AI Commercial Kitchen Equipment Maintenance: Gap No AI Predictive Failure Model From Equipment Tele",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_predictive_failure_model_from_equipment_tele.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Predictive Failure Model From Equipment Tele\" from AICommercialKitchenEquipmentMaintenance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Predictive Failure Model From Equipment Tele donor inputs",
    "outputLabel": "Gap No AI Predictive Failure Model From Equipment Tele AI response",
    "signals": [
      "backend/routes/gap_no_ai_predictive_failure_model_from_equipment_tele.js"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-source-workflow",
    "title": "AI Food Bank Pantry Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIFoodBankPantryManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIFoodBankPantryManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Food Bank Pantry Manager source context",
    "outputLabel": "AI Food Bank Pantry Manager source analysis",
    "signals": [
      "backend/openrouter",
      "frontend/src/main",
      "frontend/src/pages/AIAdvancedTools",
      "frontend/src/pages/AIHistory",
      "frontend/src/pages/AITools",
      "frontend/src/components/DetailPanel",
      "backend/routes/agenticDirector",
      "backend/routes/ai"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-ai-tools",
    "title": "AI Food Bank Pantry Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIFoodBankPantryManager.",
    "defaultPrompt": "Review AIFoodBankPantryManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Food Bank Pantry Manager AI prompt or tool context",
    "outputLabel": "AI Food Bank Pantry Manager AI tool response",
    "signals": [
      "backend/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAdvancedTools.jsx",
      "frontend/src/pages/AIHistory.jsx",
      "frontend/src/pages/AITools.jsx",
      "frontend/src/components/DetailPanel.jsx",
      "backend/routes/agenticDirector.js",
      "backend/routes/ai.js"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-ai-advanced-tools-vga4ac-exact-ai",
    "title": "AI Food Bank Pantry Manager: AI Advanced Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdvancedTools.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced Tools\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced Tools donor inputs",
    "outputLabel": "AI Advanced Tools AI response",
    "signals": [
      "frontend/src/pages/AIAdvancedTools.jsx"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-ai-history-67q48z-exact-ai",
    "title": "AI Food Bank Pantry Manager: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHistory.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "frontend/src/pages/AIHistory.jsx"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-ai-tools-zzepmy-exact-ai",
    "title": "AI Food Bank Pantry Manager: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITools.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "frontend/src/pages/AITools.jsx"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-agentic-director-qw3iin-exact-ai",
    "title": "AI Food Bank Pantry Manager: Agentic Director",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticDirector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Director\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Director donor inputs",
    "outputLabel": "Agentic Director AI response",
    "signals": [
      "Clients Count",
      "Inventory = []"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-ai-5cuwes-exact-ai",
    "title": "AI Food Bank Pantry Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Amount Requested",
      "Campaign Name",
      "Client Id",
      "Client Ids",
      "Client Ids = []",
      "Date",
      "Dietary Restrictions",
      "Distribution Id"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-training-1iusxl-exact-ai",
    "title": "AI Food Bank Pantry Manager: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Module Id",
      "Track Id",
      "Volunteer Id"
    ]
  },
  {
    "id": "ai-food-bank-pantry-manager-volunteer-training-2rctzo-exact-ai",
    "title": "AI Food Bank Pantry Manager: Volunteer Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/volunteerTraining.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Volunteer Training\" from AIFoodBankPantryManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Volunteer Training donor inputs",
    "outputLabel": "Volunteer Training AI response",
    "signals": [
      "Module",
      "Score",
      "Volunteer Id"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-source-workflow",
    "title": "AI Ghost Kitchen Network Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIGhostKitchenNetworkManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIGhostKitchenNetworkManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Ghost Kitchen Network Manager source context",
    "outputLabel": "AI Ghost Kitchen Network Manager source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIBrandConcept",
      "frontend/src/pages/AIBrandPortfolio",
      "frontend/src/pages/AICannibalizationDetection",
      "frontend/src/pages/AIDemandForecast",
      "frontend/src/pages/AIDriverRouteOptimization",
      "frontend/src/pages/AIDynamicPricing",
      "frontend/src/pages/AIIngredientSubstitution"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-tools",
    "title": "AI Ghost Kitchen Network Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIGhostKitchenNetworkManager.",
    "defaultPrompt": "Review AIGhostKitchenNetworkManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Ghost Kitchen Network Manager AI prompt or tool context",
    "outputLabel": "AI Ghost Kitchen Network Manager AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIBrandConcept.jsx",
      "frontend/src/pages/AIBrandPortfolio.jsx",
      "frontend/src/pages/AICannibalizationDetection.jsx",
      "frontend/src/pages/AIDemandForecast.jsx",
      "frontend/src/pages/AIDriverRouteOptimization.jsx",
      "frontend/src/pages/AIDynamicPricing.jsx",
      "frontend/src/pages/AIIngredientSubstitution.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-brand-concept-kc6il6-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Brand Concept",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBrandConcept.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Brand Concept\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Brand Concept donor inputs",
    "outputLabel": "AI Brand Concept AI response",
    "signals": [
      "frontend/src/pages/AIBrandConcept.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-brand-portfolio-1b8srd-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Brand Portfolio",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBrandPortfolio.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Brand Portfolio\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Brand Portfolio donor inputs",
    "outputLabel": "AI Brand Portfolio AI response",
    "signals": [
      "Candidate brands to test (optional)",
      "Current brand performance",
      "Kitchen / station constraints"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-cannibalization-detection-6aurb8-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Cannibalization Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICannibalizationDetection.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Cannibalization Detection\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Cannibalization Detection donor inputs",
    "outputLabel": "AI Cannibalization Detection AI response",
    "signals": [
      "Lookback (days)"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-demand-forecast-5tvqql-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Demand Forecast",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDemandForecast.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Demand Forecast\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Demand Forecast donor inputs",
    "outputLabel": "AI Demand Forecast AI response",
    "signals": [
      "frontend/src/pages/AIDemandForecast.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-driver-route-optimization-ka727b-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Driver Route Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDriverRouteOptimization.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Driver Route Optimization\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Driver Route Optimization donor inputs",
    "outputLabel": "AI Driver Route Optimization AI response",
    "signals": [
      "Constraints (free text)",
      "Time Window"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-dynamic-pricing-no5na4-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Dynamic Pricing",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDynamicPricing.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Dynamic Pricing\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Dynamic Pricing donor inputs",
    "outputLabel": "AI Dynamic Pricing AI response",
    "signals": [
      "frontend/src/pages/AIDynamicPricing.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-ingredient-substitution-io9v03-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Ingredient Substitution",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIngredientSubstitution.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ingredient Substitution\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ingredient Substitution donor inputs",
    "outputLabel": "AI Ingredient Substitution AI response",
    "signals": [
      "Budget constraint (optional)",
      "Dietary / regulatory restrictions",
      "Missing ingredient",
      "Recipe"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-menu-optimization-n84vqr-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Menu Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMenuOptimization.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Menu Optimization\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Menu Optimization donor inputs",
    "outputLabel": "AI Menu Optimization AI response",
    "signals": [
      "frontend/src/pages/AIMenuOptimization.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-sentiment-analysis-2iz1hg-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Sentiment Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISentimentAnalysis.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sentiment Analysis\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sentiment Analysis donor inputs",
    "outputLabel": "AI Sentiment Analysis AI response",
    "signals": [
      "frontend/src/pages/AISentimentAnalysis.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-site-selection-1rrexk-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Site Selection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISiteSelection.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Site Selection\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Site Selection donor inputs",
    "outputLabel": "AI Site Selection AI response",
    "signals": [
      "Candidate Locations",
      "Demand signals (search trends, competitor density, courier supply)",
      "Brands you would operate from this site"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-social-media-v58uzi-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI Social Media",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISocialMedia.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Social Media\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Social Media donor inputs",
    "outputLabel": "AI Social Media AI response",
    "signals": [
      "frontend/src/pages/AISocialMedia.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-cf-agentic-kitchen-automation-prioritizing-lqnlse-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Cf Agentic Kitchen Automation Prioritizing",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAgenticKitchenAutomationPrioritizing.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Kitchen Automation Prioritizing\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Kitchen Automation Prioritizing donor inputs",
    "outputLabel": "Cf Agentic Kitchen Automation Prioritizing AI response",
    "signals": [
      "frontend/src/pages/CfAgenticKitchenAutomationPrioritizing.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-gap-no-ghost-kitchen-site-selection-ai-1cxa78-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Gap No Ghost Kitchen Site Selection AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoGhostKitchenSiteSelectionAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Ghost Kitchen Site Selection AI\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Ghost Kitchen Site Selection AI donor inputs",
    "outputLabel": "Gap No Ghost Kitchen Site Selection AI AI response",
    "signals": [
      "frontend/src/pages/GapNoGhostKitchenSiteSelectionAi.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-gap-no-ingredient-substitution-ai-6il1g-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Gap No Ingredient Substitution AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoIngredientSubstitutionAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Ingredient Substitution AI\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Ingredient Substitution AI donor inputs",
    "outputLabel": "Gap No Ingredient Substitution AI AI response",
    "signals": [
      "frontend/src/pages/GapNoIngredientSubstitutionAi.jsx"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-agentic-kitchen-automation-d91zpi-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Agentic Kitchen Automation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticKitchenAutomation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Kitchen Automation\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Kitchen Automation donor inputs",
    "outputLabel": "Agentic Kitchen Automation AI response",
    "signals": [
      "Snapshot Minutes = 60"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-ai-5cuwes-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Available Brands = []",
      "Brand Concept",
      "Brand Name",
      "Candidate Locations = []",
      "Competitor Prices",
      "Cuisine Type",
      "Current Menu",
      "Delivery Radius Miles = 5"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-gap-no-ghost-kitchen-site-selection-ai-1bo8tz-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Gap No Ghost Kitchen Site Selection AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ghost-kitchen-site-selection-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Ghost Kitchen Site Selection AI\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Ghost Kitchen Site Selection AI donor inputs",
    "outputLabel": "Gap No Ghost Kitchen Site Selection AI AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-ghost-kitchen-network-manager-gap-no-ingredient-substitution-ai-11f30e-exact-ai",
    "title": "AI Ghost Kitchen Network Manager: Gap No Ingredient Substitution AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ingredient-substitution-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Ingredient Substitution AI\" from AIGhostKitchenNetworkManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Ingredient Substitution AI donor inputs",
    "outputLabel": "Gap No Ingredient Substitution AI AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-source-workflow",
    "title": "AI Hotel Revenue Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIHotelRevenueManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIHotelRevenueManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Hotel Revenue Manager source context",
    "outputLabel": "AI Hotel Revenue Manager source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/aiWarRoom",
      "server/routes/dynamicPricingAI",
      "server/routes/gap-no-competitor-rate-ai-recommender",
      "server/routes/gap-no-guest-segmentation-ai",
      "server/routes/maintenance",
      "server/routes/reviewResponseAI",
      "client/src/main"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-ai-tools",
    "title": "AI Hotel Revenue Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIHotelRevenueManager.",
    "defaultPrompt": "Review AIHotelRevenueManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Hotel Revenue Manager AI prompt or tool context",
    "outputLabel": "AI Hotel Revenue Manager AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/aiWarRoom.js",
      "server/routes/dynamicPricingAI.js",
      "server/routes/gap-no-competitor-rate-ai-recommender.js",
      "server/routes/gap-no-guest-segmentation-ai.js",
      "server/routes/maintenance.js",
      "server/routes/reviewResponseAI.js",
      "client/src/main.jsx"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-ai-war-room-43dzvy-exact-ai",
    "title": "AI Hotel Revenue Manager: AI War Room",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiWarRoom.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI War Room\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI War Room donor inputs",
    "outputLabel": "AI War Room AI response",
    "signals": [
      "Ancillary Spend",
      "Event Type",
      "Food Beverage Spend",
      "Group Size",
      "Guest Id",
      "Notes",
      "Requested Dates",
      "Requested Rate"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-dynamic-pricing-ai-1d5tnb-exact-ai",
    "title": "AI Hotel Revenue Manager: Dynamic Pricing AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/dynamicPricingAI.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Dynamic Pricing AI\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Dynamic Pricing AI donor inputs",
    "outputLabel": "Dynamic Pricing AI AI response",
    "signals": [
      "Channel Focus = 'All'",
      "Horizon Days = 14"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-gap-no-competitor-rate-ai-recommender-15glff-exact-ai",
    "title": "AI Hotel Revenue Manager: Gap No Competitor Rate AI Recommender",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-competitor-rate-ai-recommender.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Competitor Rate AI Recommender\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Competitor Rate AI Recommender donor inputs",
    "outputLabel": "Gap No Competitor Rate AI Recommender AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-gap-no-guest-segmentation-ai-1b8zv5-exact-ai",
    "title": "AI Hotel Revenue Manager: Gap No Guest Segmentation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-guest-segmentation-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Guest Segmentation AI\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Guest Segmentation AI donor inputs",
    "outputLabel": "Gap No Guest Segmentation AI AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-review-response-ai-epnjvw-exact-ai",
    "title": "AI Hotel Revenue Manager: Review Response AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/reviewResponseAI.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Review Response AI\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Review Response AI donor inputs",
    "outputLabel": "Review Response AI AI response",
    "signals": [
      "Guest Name",
      "Review Id",
      "Review Text",
      "Source = 'Unspecified'",
      "Stars"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-ai-history-page-kxfx0n-exact-ai",
    "title": "AI Hotel Revenue Manager: AI History Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIHistoryPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History Page\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History Page donor inputs",
    "outputLabel": "AI History Page AI response",
    "signals": [
      "client/src/pages/AIHistoryPage.jsx"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-cf-agentic-revenue-manager-continuously-opt-15cwes-exact-ai",
    "title": "AI Hotel Revenue Manager: Cf Agentic Revenue Manager Continuously Opt",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfAgenticRevenueManagerContinuouslyOpt.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Revenue Manager Continuously Opt\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Revenue Manager Continuously Opt donor inputs",
    "outputLabel": "Cf Agentic Revenue Manager Continuously Opt AI response",
    "signals": [
      "client/src/pages/CfAgenticRevenueManagerContinuouslyOpt.jsx"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-cf-guest-lifecycle-ai-predicting-ltv-and-ganivh-exact-ai",
    "title": "AI Hotel Revenue Manager: Cf Guest Lifecycle AI Predicting Ltv And",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfGuestLifecycleAiPredictingLtvAnd.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Guest Lifecycle AI Predicting Ltv And\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Guest Lifecycle AI Predicting Ltv And donor inputs",
    "outputLabel": "Cf Guest Lifecycle AI Predicting Ltv And AI response",
    "signals": [
      "client/src/pages/CfGuestLifecycleAiPredictingLtvAnd.jsx"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-gap-no-competitor-rate-ai-recommender-1pm9r9-exact-ai",
    "title": "AI Hotel Revenue Manager: Gap No Competitor Rate AI Recommender",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoCompetitorRateAiRecommender.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Competitor Rate AI Recommender\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Competitor Rate AI Recommender donor inputs",
    "outputLabel": "Gap No Competitor Rate AI Recommender AI response",
    "signals": [
      "client/src/pages/GapNoCompetitorRateAiRecommender.jsx"
    ]
  },
  {
    "id": "ai-hotel-revenue-manager-gap-no-guest-segmentation-ai-acqu8f-exact-ai",
    "title": "AI Hotel Revenue Manager: Gap No Guest Segmentation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoGuestSegmentationAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Guest Segmentation AI\" from AIHotelRevenueManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Guest Segmentation AI donor inputs",
    "outputLabel": "Gap No Guest Segmentation AI AI response",
    "signals": [
      "client/src/pages/GapNoGuestSegmentationAi.jsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-source-workflow",
    "title": "AI Menu Digitizer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIMenuDigitizer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIMenuDigitizer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Menu Digitizer source context",
    "outputLabel": "AI Menu Digitizer source analysis",
    "signals": [
      "backend/src/services/openrouter",
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AIAnalysisPage",
      "frontend/src/pages/AICostAnalysisPage",
      "frontend/src/pages/GapAgentic",
      "frontend/src/pages/MenuDetail",
      "frontend/src/pages/VerifyEmail"
    ]
  },
  {
    "id": "ai-menu-digitizer-ai-tools",
    "title": "AI Menu Digitizer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIMenuDigitizer.",
    "defaultPrompt": "Review AIMenuDigitizer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Menu Digitizer AI prompt or tool context",
    "outputLabel": "AI Menu Digitizer AI tool response",
    "signals": [
      "backend/src/services/openrouter.ts",
      "frontend/tailwind.config.js",
      "frontend/src/main.tsx",
      "frontend/src/pages/AIAnalysisPage.tsx",
      "frontend/src/pages/AICostAnalysisPage.tsx",
      "frontend/src/pages/GapAgentic.jsx",
      "frontend/src/pages/MenuDetail.tsx",
      "frontend/src/pages/VerifyEmail.tsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-ai-analysis-page-cmb8f2-exact-ai",
    "title": "AI Menu Digitizer: AI Analysis Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAnalysisPage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analysis Page\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analysis Page donor inputs",
    "outputLabel": "AI Analysis Page AI response",
    "signals": [
      "frontend/src/pages/AIAnalysisPage.tsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-ai-cost-analysis-page-1thhf3-exact-ai",
    "title": "AI Menu Digitizer: AI Cost Analysis Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICostAnalysisPage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Cost Analysis Page\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Cost Analysis Page donor inputs",
    "outputLabel": "AI Cost Analysis Page AI response",
    "signals": [
      "frontend/src/pages/AICostAnalysisPage.tsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-gap-agentic-h0nlt8-exact-ai",
    "title": "AI Menu Digitizer: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "frontend/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-menu-detail-gny179-exact-ai",
    "title": "AI Menu Digitizer: Menu Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/MenuDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Menu Detail\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Menu Detail donor inputs",
    "outputLabel": "Menu Detail AI response",
    "signals": [
      "Category",
      "Current",
      "Description",
      "Is Gluten Free",
      "Is Vegan",
      "Is Vegetarian",
      "Item",
      "Name"
    ]
  },
  {
    "id": "ai-menu-digitizer-verify-email-1s7w18-exact-ai",
    "title": "AI Menu Digitizer: Verify Email",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/VerifyEmail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Verify Email\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Verify Email donor inputs",
    "outputLabel": "Verify Email AI response",
    "signals": [
      "frontend/src/pages/VerifyEmail.tsx"
    ]
  },
  {
    "id": "ai-menu-digitizer-ai-1lp99q-exact-ai",
    "title": "AI Menu Digitizer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "backend/src/routes/ai.ts"
    ]
  },
  {
    "id": "ai-menu-digitizer-ai-cost-analysis-gqbpz2-exact-ai",
    "title": "AI Menu Digitizer: AI Cost Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiCostAnalysis.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Cost Analysis\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Cost Analysis donor inputs",
    "outputLabel": "AI Cost Analysis AI response",
    "signals": [
      "Menu Id"
    ]
  },
  {
    "id": "ai-menu-digitizer-menu-optimization-agent-16cmj7-exact-ai",
    "title": "AI Menu Digitizer: Menu Optimization Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/menu-optimization-agent.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Menu Optimization Agent\" from AIMenuDigitizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Menu Optimization Agent donor inputs",
    "outputLabel": "Menu Optimization Agent AI response",
    "signals": [
      "backend/src/routes/menu-optimization-agent.ts"
    ]
  },
  {
    "id": "catering-service-source-workflow",
    "title": "Catering Service Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from cateringService.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from cateringService to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Catering Service source context",
    "outputLabel": "Catering Service source analysis",
    "signals": [
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AIAssistant",
      "frontend/src/pages/AIInsights",
      "frontend/src/pages/EventDetail",
      "frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi",
      "frontend/src/pages/Batch09/AiDietaryRestrictionSubstitutionSuggestionsGapAi",
      "frontend/src/pages/Batch09/AiMenuSuccessPredictionByClientProfileGapAi"
    ]
  },
  {
    "id": "catering-service-ai-tools",
    "title": "Catering Service AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from cateringService.",
    "defaultPrompt": "Review cateringService AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Catering Service AI prompt or tool context",
    "outputLabel": "Catering Service AI tool response",
    "signals": [
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAssistant.jsx",
      "frontend/src/pages/AIInsights.jsx",
      "frontend/src/pages/EventDetail.jsx",
      "frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi.jsx",
      "frontend/src/pages/Batch09/AiDietaryRestrictionSubstitutionSuggestionsGapAi.jsx",
      "frontend/src/pages/Batch09/AiMenuSuccessPredictionByClientProfileGapAi.jsx"
    ]
  },
  {
    "id": "catering-service-ai-assistant-s3rdmd-exact-ai",
    "title": "Catering Service: AI Assistant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssistant.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Assistant\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Assistant donor inputs",
    "outputLabel": "AI Assistant AI response",
    "signals": [
      "Budget",
      "Event Type",
      "Guest Count"
    ]
  },
  {
    "id": "catering-service-ai-insights-iqre9g-exact-ai",
    "title": "Catering Service: AI Insights",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIInsights.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Insights\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Insights donor inputs",
    "outputLabel": "AI Insights AI response",
    "signals": [
      "frontend/src/pages/AIInsights.jsx"
    ]
  },
  {
    "id": "catering-service-event-detail-wlruqc-exact-ai",
    "title": "Catering Service: Event Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/EventDetail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Event Detail\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Event Detail donor inputs",
    "outputLabel": "Event Detail AI response",
    "signals": [
      "Activity",
      "Notes",
      "Time"
    ]
  },
  {
    "id": "catering-service-ai-delivery-route-optimization-gap-ai-hq1llt-exact-ai",
    "title": "Catering Service: AI Delivery Route Optimization Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Delivery Route Optimization Gap AI\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Delivery Route Optimization Gap AI donor inputs",
    "outputLabel": "AI Delivery Route Optimization Gap AI AI response",
    "signals": [
      "frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi.jsx"
    ]
  },
  {
    "id": "catering-service-ai-dietary-restriction-substitution-suggestions-gap-ai-1uj0rl-exact-ai",
    "title": "Catering Service: AI Dietary Restriction Substitution Suggestions Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Batch09/AiDietaryRestrictionSubstitutionSuggestionsGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Dietary Restriction Substitution Suggestions Gap AI\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Dietary Restriction Substitution Suggestions Gap AI donor inputs",
    "outputLabel": "AI Dietary Restriction Substitution Suggestions Gap AI AI response",
    "signals": [
      "frontend/src/pages/Batch09/AiDietaryRestrictionSubstitutionSuggestionsGapAi.jsx"
    ]
  },
  {
    "id": "catering-service-ai-proposal-to-win-conversion-modeling-gap-ai-ljdv9-exact-ai",
    "title": "Catering Service: AI Proposal To Win Conversion Modeling Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Batch09/AiProposalToWinConversionModelingGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Proposal To Win Conversion Modeling Gap AI\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Proposal To Win Conversion Modeling Gap AI donor inputs",
    "outputLabel": "AI Proposal To Win Conversion Modeling Gap AI AI response",
    "signals": [
      "frontend/src/pages/Batch09/AiProposalToWinConversionModelingGapAi.jsx"
    ]
  },
  {
    "id": "catering-service-detailed-dietary-restriction-tagging-on-menus-gap-non-1niwgt-exact-ai",
    "title": "Catering Service: Detailed Dietary Restriction Tagging On Menus Gap Non",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Batch09/DetailedDietaryRestrictionTaggingOnMenusGapNon.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Detailed Dietary Restriction Tagging On Menus Gap Non\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Detailed Dietary Restriction Tagging On Menus Gap Non donor inputs",
    "outputLabel": "Detailed Dietary Restriction Tagging On Menus Gap Non AI response",
    "signals": [
      "frontend/src/pages/Batch09/DetailedDietaryRestrictionTaggingOnMenusGapNon.jsx"
    ]
  },
  {
    "id": "catering-service-ai-1lp99l-exact-ai",
    "title": "Catering Service: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Budget",
      "Client Profile",
      "Competitive Context",
      "Context",
      "Dietary Restrictions",
      "Event Start Time",
      "Event Type",
      "Feature"
    ]
  },
  {
    "id": "catering-service-batch09-gap-ai-1er5ku-exact-ai",
    "title": "Catering Service: Batch09 Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/batch09GapAi.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Batch09 Gap AI\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Batch09 Gap AI donor inputs",
    "outputLabel": "Batch09 Gap AI AI response",
    "signals": [
      "backend/src/routes/batch09GapAi.js"
    ]
  },
  {
    "id": "catering-service-batch09-gap-nonai-1ktbm7-exact-ai",
    "title": "Catering Service: Batch09 Gap Nonai",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/batch09GapNonai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Batch09 Gap Nonai\" from cateringService. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Batch09 Gap Nonai donor inputs",
    "outputLabel": "Batch09 Gap Nonai AI response",
    "signals": [
      "backend/src/routes/batch09GapNonai.js"
    ]
  },
  {
    "id": "food-ordering-web-site-source-workflow",
    "title": "Food Ordering Web Site Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from FoodOrderingWebSite.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from FoodOrderingWebSite to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Food Ordering Web Site source context",
    "outputLabel": "Food Ordering Web Site source analysis",
    "signals": [
      "src/lib/openai",
      "tailwind.config",
      "tailwind.config",
      "src/main",
      "src/pages/AIFeaturesPage",
      "src/lib/ai-services",
      "src/lib/autonomous-agents",
      "src/lib/openai"
    ]
  },
  {
    "id": "food-ordering-web-site-ai-tools",
    "title": "Food Ordering Web Site AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from FoodOrderingWebSite.",
    "defaultPrompt": "Review FoodOrderingWebSite AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Food Ordering Web Site AI prompt or tool context",
    "outputLabel": "Food Ordering Web Site AI tool response",
    "signals": [
      "src/lib/openai.ts",
      "tailwind.config.js",
      "tailwind.config.ts",
      "src/main.tsx",
      "src/pages/AIFeaturesPage.tsx",
      "src/lib/ai-services.ts",
      "src/lib/autonomous-agents.ts",
      "src/lib/openai.ts"
    ]
  },
  {
    "id": "food-ordering-web-site-ai-features-page-yuyp1m-exact-ai",
    "title": "Food Ordering Web Site: AI Features Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/AIFeaturesPage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Features Page\" from FoodOrderingWebSite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Features Page donor inputs",
    "outputLabel": "AI Features Page AI response",
    "signals": [
      "src/pages/AIFeaturesPage.tsx"
    ]
  },
  {
    "id": "food-truck-source-workflow",
    "title": "Food Truck Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from foodTruck.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from foodTruck to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Food Truck source context",
    "outputLabel": "Food Truck source analysis",
    "signals": [
      "backend/src/services/openrouter",
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AI",
      "frontend/src/pages/AIAdvanced",
      "frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill",
      "frontend/src/pages/CfLoyaltyProgramWithAiPersonalizedOffers",
      "frontend/src/pages/CfSupplierOrderingAgentAutoPoBased"
    ]
  },
  {
    "id": "food-truck-ai-tools",
    "title": "Food Truck AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from foodTruck.",
    "defaultPrompt": "Review foodTruck AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Food Truck AI prompt or tool context",
    "outputLabel": "Food Truck AI tool response",
    "signals": [
      "backend/src/services/openrouter.js",
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AI.jsx",
      "frontend/src/pages/AIAdvanced.jsx",
      "frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill.jsx",
      "frontend/src/pages/CfLoyaltyProgramWithAiPersonalizedOffers.jsx",
      "frontend/src/pages/CfSupplierOrderingAgentAutoPoBased.jsx"
    ]
  },
  {
    "id": "food-truck-ai-mivtup-exact-ai",
    "title": "Food Truck: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AI.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Demand",
      "Location",
      "Menu",
      "Recommendations"
    ]
  },
  {
    "id": "food-truck-ai-advanced-w0lkpr-exact-ai",
    "title": "Food Truck: AI Advanced",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdvanced.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced donor inputs",
    "outputLabel": "AI Advanced AI response",
    "signals": [
      "frontend/src/pages/AIAdvanced.jsx"
    ]
  },
  {
    "id": "food-truck-cf-crew-scheduling-ai-fairness-fatigue-skill-ii05po-exact-ai",
    "title": "Food Truck: Cf Crew Scheduling AI Fairness Fatigue Skill",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Crew Scheduling AI Fairness Fatigue Skill\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Crew Scheduling AI Fairness Fatigue Skill donor inputs",
    "outputLabel": "Cf Crew Scheduling AI Fairness Fatigue Skill AI response",
    "signals": [
      "frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill.jsx"
    ]
  },
  {
    "id": "food-truck-cf-loyalty-program-with-ai-personalized-offers-1ig3o4-exact-ai",
    "title": "Food Truck: Cf Loyalty Program With AI Personalized Offers",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfLoyaltyProgramWithAiPersonalizedOffers.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Loyalty Program With AI Personalized Offers\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Loyalty Program With AI Personalized Offers donor inputs",
    "outputLabel": "Cf Loyalty Program With AI Personalized Offers AI response",
    "signals": [
      "frontend/src/pages/CfLoyaltyProgramWithAiPersonalizedOffers.jsx"
    ]
  },
  {
    "id": "food-truck-cf-supplier-ordering-agent-auto-po-based-1mxuax-exact-ai",
    "title": "Food Truck: Cf Supplier Ordering Agent Auto Po Based",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfSupplierOrderingAgentAutoPoBased.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Supplier Ordering Agent Auto Po Based\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Supplier Ordering Agent Auto Po Based donor inputs",
    "outputLabel": "Cf Supplier Ordering Agent Auto Po Based AI response",
    "signals": [
      "frontend/src/pages/CfSupplierOrderingAgentAutoPoBased.jsx"
    ]
  },
  {
    "id": "food-truck-gap-no-customer-loyalty-churn-ai-1wnnvv-exact-ai",
    "title": "Food Truck: Gap No Customer Loyalty Churn AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoCustomerLoyaltyChurnAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Customer Loyalty Churn AI\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Customer Loyalty Churn AI donor inputs",
    "outputLabel": "Gap No Customer Loyalty Churn AI AI response",
    "signals": [
      "frontend/src/pages/GapNoCustomerLoyaltyChurnAi.jsx"
    ]
  },
  {
    "id": "food-truck-gap-no-dynamic-pricing-ai-despite-demand-1o06fr-exact-ai",
    "title": "Food Truck: Gap No Dynamic Pricing AI Despite Demand",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoDynamicPricingAiDespiteDemand.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Dynamic Pricing AI Despite Demand\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Dynamic Pricing AI Despite Demand donor inputs",
    "outputLabel": "Gap No Dynamic Pricing AI Despite Demand AI response",
    "signals": [
      "frontend/src/pages/GapNoDynamicPricingAiDespiteDemand.jsx"
    ]
  },
  {
    "id": "food-truck-gap-no-voice-ordering-agent-5dcpkv-exact-ai",
    "title": "Food Truck: Gap No Voice Ordering Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoVoiceOrderingAgent.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Voice Ordering Agent\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Voice Ordering Agent donor inputs",
    "outputLabel": "Gap No Voice Ordering Agent AI response",
    "signals": [
      "frontend/src/pages/GapNoVoiceOrderingAgent.jsx"
    ]
  },
  {
    "id": "food-truck-verify-email-1s7wix-exact-ai",
    "title": "Food Truck: Verify Email",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/VerifyEmail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Verify Email\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Verify Email donor inputs",
    "outputLabel": "Verify Email AI response",
    "signals": [
      "frontend/src/pages/VerifyEmail.jsx"
    ]
  },
  {
    "id": "food-truck-ai-1lp99l-exact-ai",
    "title": "Food Truck: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Constraints",
      "Crew",
      "Customer Message",
      "Day Of Week",
      "End Date",
      "Equipment",
      "Hour Of Day",
      "Location Id"
    ]
  },
  {
    "id": "food-truck-gap-no-customer-loyalty-churn-ai-1vzgyl-exact-ai",
    "title": "Food Truck: Gap No Customer Loyalty Churn AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_no_customer_loyalty_churn_ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Customer Loyalty Churn AI\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Customer Loyalty Churn AI donor inputs",
    "outputLabel": "Gap No Customer Loyalty Churn AI AI response",
    "signals": [
      "backend/src/routes/gap_no_customer_loyalty_churn_ai.js"
    ]
  },
  {
    "id": "food-truck-gap-no-dynamic-pricing-ai-despite-demand-tzzk8e-exact-ai",
    "title": "Food Truck: Gap No Dynamic Pricing AI Despite Demand",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_no_dynamic_pricing_ai_despite_demand.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Dynamic Pricing AI Despite Demand\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Dynamic Pricing AI Despite Demand donor inputs",
    "outputLabel": "Gap No Dynamic Pricing AI Despite Demand AI response",
    "signals": [
      "backend/src/routes/gap_no_dynamic_pricing_ai_despite_demand.js"
    ]
  },
  {
    "id": "food-truck-gap-no-voice-ordering-agent-kcxow7-exact-ai",
    "title": "Food Truck: Gap No Voice Ordering Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_no_voice_ordering_agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Voice Ordering Agent\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Voice Ordering Agent donor inputs",
    "outputLabel": "Gap No Voice Ordering Agent AI response",
    "signals": [
      "backend/src/routes/gap_no_voice_ordering_agent.js"
    ]
  },
  {
    "id": "food-truck-loyalty-ai-1xyb82-exact-ai",
    "title": "Food Truck: Loyalty AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/loyaltyAI.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Loyalty AI\" from foodTruck. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Loyalty AI donor inputs",
    "outputLabel": "Loyalty AI AI response",
    "signals": [
      "Amount",
      "Customer Id",
      "Order Id",
      "Truck Id"
    ]
  },
  {
    "id": "independent-restaurant-source-workflow",
    "title": "Independent Restaurant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from independentRestaurant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from independentRestaurant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Independent Restaurant source context",
    "outputLabel": "Independent Restaurant source analysis",
    "signals": [
      "tailwind.config",
      "src/lib/ai-helpers",
      "src/lib/email",
      "src/app/api/waitlist/route",
      "src/app/api/waitlist/[id]/route",
      "src/app/api/gap-no-vendor-supplier-procurement-ai/route",
      "src/app/api/gap-no-marketing-email-campaign-engine/route",
      "src/app/api/gap-no-guest-flow-wait-time-prediction/route"
    ]
  },
  {
    "id": "independent-restaurant-ai-tools",
    "title": "Independent Restaurant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from independentRestaurant.",
    "defaultPrompt": "Review independentRestaurant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Independent Restaurant AI prompt or tool context",
    "outputLabel": "Independent Restaurant AI tool response",
    "signals": [
      "tailwind.config.ts",
      "src/lib/ai-helpers.ts",
      "src/lib/email.ts",
      "src/app/api/waitlist/route.ts",
      "src/app/api/waitlist/[id]/route.ts",
      "src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts",
      "src/app/api/gap-no-marketing-email-campaign-engine/route.ts",
      "src/app/api/gap-no-guest-flow-wait-time-prediction/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-ns90h3-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/waitlist/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Customer Name",
      "Customer Phone",
      "Estimated Wait",
      "Notes",
      "Party Size",
      "Quoted Time"
    ]
  },
  {
    "id": "independent-restaurant-route-1ucwz6-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/waitlist/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Customer Name",
      "Customer Phone",
      "Estimated Wait",
      "Notes",
      "Party Size",
      "Quoted Time",
      "Status"
    ]
  },
  {
    "id": "independent-restaurant-route-ovuoc2-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-7nw1ws-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-no-marketing-email-campaign-engine/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-no-marketing-email-campaign-engine/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-179t62-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-no-guest-flow-wait-time-prediction/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-no-guest-flow-wait-time-prediction/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-rjdstc-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-no-catering-bulk-order-quoting-agent/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-no-catering-bulk-order-quoting-agent/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-1hu7oa-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Data"
    ]
  },
  {
    "id": "independent-restaurant-route-7vapkk-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/waste-vision/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/waste-vision/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-19wb3b-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/waste-recipe/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/waste-recipe/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-eqtsak-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/voice-ordering/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Session Id",
      "Text",
      "Total USD"
    ]
  },
  {
    "id": "independent-restaurant-route-3c4ise-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/tip-fairness/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Period End",
      "Period Start"
    ]
  },
  {
    "id": "independent-restaurant-route-xt45lv-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/staff-schedule-mood/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Fatigue",
      "Mood",
      "Note",
      "Shifts = []",
      "Staff Id"
    ]
  },
  {
    "id": "independent-restaurant-route-1x0509-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/recipe-cost-optimizer/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Delta Pct = 10",
      "Ingredient Name"
    ]
  },
  {
    "id": "independent-restaurant-route-fk6ssr-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/no-show-predictor/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/no-show-predictor/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-eijqrd-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/dynamic-pricing/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/dynamic-pricing/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-96yum5-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/dynamic-pricing/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action"
    ]
  },
  {
    "id": "independent-restaurant-route-h05av8-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/delivery-routing/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/delivery-routing/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-route-1mmikp-exact-ai",
    "title": "Independent Restaurant: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/catering-quote/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/catering-quote/route.ts"
    ]
  },
  {
    "id": "independent-restaurant-page-1f07j0-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/batch10/gap-no-vendor-supplier-procurement-ai/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/batch10/gap-no-vendor-supplier-procurement-ai/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-1qgbgh-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/batch10/gap-no-marketing-email-campaign-engine/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/batch10/gap-no-marketing-email-campaign-engine/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-1yucsj-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/batch10/gap-no-guest-flow-wait-time-prediction/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/batch10/gap-no-guest-flow-wait-time-prediction/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-1o3nei-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/batch10/gap-no-catering-bulk-order-quoting-agent/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/batch10/gap-no-catering-bulk-order-quoting-agent/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-po57l8-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/batch10/cf-catering-quote-agent-with-menu-recommendation/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/batch10/cf-catering-quote-agent-with-menu-recommendation/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-1lnk7w-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai-suite/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai-suite/page.tsx"
    ]
  },
  {
    "id": "independent-restaurant-page-vngytl-exact-ai",
    "title": "Independent Restaurant: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from independentRestaurant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Comment",
      "Customer Name",
      "Occasion",
      "Rating"
    ]
  }
];
