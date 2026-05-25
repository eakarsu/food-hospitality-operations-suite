export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-food-flow-order-ai-ylyuov-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "src/services/api/ai.ts"
    }
  ],
  "ai-food-flow-order-sustainability-1jzw8j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability source input context",
      "options": [],
      "required": false,
      "source": "src/services/api/sustainability.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-churn-prediction-pa5k0v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Churn Prediction source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiChurnPrediction.tsx"
    }
  ],
  "ai-food-flow-order-gap-ai-demand-forecasting-restaurant-time-qypik-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Demand Forecasting Restaurant Time source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiDemandForecastingRestaurantTime.tsx"
    }
  ],
  "ai-food-flow-order-gap-ai-driver-route-optimization-tsp-17kqb6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Driver Route Optimization Tsp source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiDriverRouteOptimizationTsp.tsx"
    }
  ],
  "ai-food-flow-order-gap-ai-dynamic-pricing-engine-m4c8cb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Dynamic Pricing Engine source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiDynamicPricingEngine.tsx"
    }
  ],
  "ai-food-flow-order-gap-ai-fraud-detection-payment-anomalies-4yllra-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Fraud Detection Payment Anomalies source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiFraudDetectionPaymentAnomalies.tsx"
    }
  ],
  "ai-food-flow-order-gap-ai-menu-recommendation-engine-cold-7ea2k8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Menu Recommendation Engine Cold source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapAiMenuRecommendationEngineCold.tsx"
    }
  ],
  "ai-food-flow-order-gap-driver-incentive-optimization-that-ai-hr47hb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Driver Incentive Optimization That AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapDriverIncentiveOptimizationThatAi.tsx"
    }
  ],
  "ai-food-flow-order-gap-supply-chain-risk-warnings-when-1fo1i2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Supply Chain Risk Warnings When source input context",
      "options": [],
      "required": false,
      "source": "src/pages/GapSupplyChainRiskWarningsWhen.tsx"
    }
  ],
  "ai-food-flow-order-wait-time-page-86099j-exact-ai": [
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/pages/wait-time/WaitTimePage.tsx"
    }
  ],
  "ai-food-flow-order-sustainability-page-18w2fh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability Page source input context",
      "options": [],
      "required": false,
      "source": "src/pages/sustainability/SustainabilityPage.tsx"
    }
  ],
  "ai-food-flow-order-schedule-detail-1lnmm3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Schedule Detail source input context",
      "options": [],
      "required": false,
      "source": "src/pages/staff/ScheduleDetail.tsx"
    }
  ],
  "ai-food-flow-order-staff-detail-1hag8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Staff Detail source input context",
      "options": [],
      "required": false,
      "source": "src/pages/staff/StaffDetail.tsx"
    }
  ],
  "ai-food-flow-order-review-detail-u10ce3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Review Detail source input context",
      "options": [],
      "required": false,
      "source": "src/pages/reviews/ReviewDetail.tsx"
    }
  ],
  "ai-food-flow-order-inventory-detail-12xv6c-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Inventory Detail source input context",
      "options": [],
      "required": false,
      "source": "src/pages/inventory/InventoryDetail.tsx"
    }
  ],
  "ai-food-flow-order-ai-14x2m0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-churn-prediction-17rvtq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Churn Prediction source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_churn_prediction.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-demand-forecasting-restaurant-time-1riqz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Demand Forecasting Restaurant Time source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_demand_forecasting_restaurant_time.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-driver-route-optimization-tsp-pba7y6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Driver Route Optimization Tsp source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_driver_route_optimization_tsp.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-dynamic-pricing-engine-6bgh0j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Dynamic Pricing Engine source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_dynamic_pricing_engine.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-fraud-detection-payment-anomalies-1e8826-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Fraud Detection Payment Anomalies source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_fraud_detection_payment_anomalies.ts"
    }
  ],
  "ai-food-flow-order-gap-ai-menu-recommendation-engine-cold-wu6by7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Menu Recommendation Engine Cold source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gap_ai_menu_recommendation_engine_cold.ts"
    }
  ],
  "ai-food-flow-order-sustainability-ygue8b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/sustainability.ts"
    }
  ],
  "ai-food-flow-order-capacitor-plugins-jrqzfs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Capacitor.Plugins source input context",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/capacitor.plugins.json"
    }
  ],
  "ai-food-flow-order-cordova-rn1q5d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cordova source input context",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/cordova.js"
    }
  ],
  "ai-food-flow-order-cordova-plugins-1o45ft-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cordova Plugins source input context",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/cordova_plugins.js"
    }
  ],
  "ai-food-flow-order-web-bve-d-unw-an7xis-exact-ai": [
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/assets/web-Bve_dUNW.js"
    }
  ],
  "ai-food-flow-order-web-dx-pgd4il-ivhwcs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Web Dx PGD4il source input context",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/assets/web-DxPGD4il.js"
    }
  ],
  "ai-food-flow-order-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "src/services/api/ai.ts"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/pages/wait-time/WaitTimePage.tsx"
    },
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/assets/web-Bve_dUNW.js"
    }
  ],
  "ai-food-flow-order-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "src/services/api/ai.ts"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/pages/wait-time/WaitTimePage.tsx"
    },
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "android/app/src/main/assets/public/assets/web-Bve_dUNW.js"
    }
  ],
  "ai-bakery-production-manager-ai-features-r1w8me-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    }
  ],
  "ai-bakery-production-manager-no-agentic-supplier-substitution-decisioning-surfa-page-1bnhu4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No Agentic Supplier Substitution Decisioning Surfa Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage.jsx"
    }
  ],
  "ai-bakery-production-manager-no-ai-dynamic-pricing-for-daily-fresh-goods-page-5qp0c6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Dynamic Pricing For Daily Fresh Goods Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage.jsx"
    }
  ],
  "ai-bakery-production-manager-no-e-commerce-storefront-for-retail-orders-page-1ojo13-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No E Commerce Storefront For Retail Orders Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage.jsx"
    }
  ],
  "ai-bakery-production-manager-no-notification-system-no-email-sms-delivery-chann-page-iqbchx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No Notification System No Email Sms Delivery Chann Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoNotificationSystemNoEmailSmsDeliveryChannPage.jsx"
    }
  ],
  "ai-bakery-production-manager-supply-chain-agent-predicting-ingredient-shortages-page-sf4jt3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Supply Chain Agent Predicting Ingredient Shortages Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SupplyChainAgentPredictingIngredientShortagesPage.jsx"
    }
  ],
  "ai-bakery-production-manager-ai-5cuwes-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryNeeds",
      "label": "Dietary Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "months_ahead = 3",
      "label": "Months Ahead = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_id",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipeId",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetYield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-bakery-production-manager-ai-new-7q6oy0-exact-ai": [
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-bakery-production-manager-gap-no-agentic-supplier-substitution-decisioning-surfa-12ueem-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Agentic Supplier Substitution Decisioning Surfa source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_agentic_supplier_substitution_decisioning_surfa.js"
    }
  ],
  "ai-bakery-production-manager-gap-no-ai-dynamic-pricing-for-daily-fresh-goods-18lgsh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Dynamic Pricing For Daily Fresh Goods source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_dynamic_pricing_for_daily_fresh_goods.js"
    }
  ],
  "ai-bakery-production-manager-gap-no-e-commerce-storefront-for-retail-orders-6vfhjn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No E Commerce Storefront For Retail Orders source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_e_commerce_storefront_for_retail_orders.js"
    }
  ],
  "ai-bakery-production-manager-gap-no-notification-system-no-email-sms-delivery-chann-9fhbat-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Notification System No Email Sms Delivery Chann source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_notification_system_no_email_sms_delivery_chann.js"
    }
  ],
  "ai-bakery-production-manager-supply-chain-agent-1xco7k-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Supply Chain Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/supplyChainAgent.js"
    }
  ],
  "ai-bakery-production-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryNeeds",
      "label": "Dietary Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "months_ahead = 3",
      "label": "Months Ahead = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_id",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipeId",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetYield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-bakery-production-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.jsx"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryNeeds",
      "label": "Dietary Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "months_ahead = 3",
      "label": "Months Ahead = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_id",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipeId",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetYield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-ai-feature-page-vlvcau-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-ai-history-page-yygxe8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistoryPage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-agentic-brew-day-assistant-orchestrating-recipe-wa-page-1piz5v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Brew Day Assistant Orchestrating Recipe Wa Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-no-ai-customer-feedback-sentiment-loop-into-recipe-page-1xp8no-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Customer Feedback Sentiment Loop Into Recipe Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-no-ai-tap-room-demand-forecasting-per-hour-page-1smk8s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Tap Room Demand Forecasting Per Hour Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-no-ai-tasting-note-generator-for-marketing-page-tnapj1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Tasting Note Generator For Marketing Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiTastingNoteGeneratorForMarketingPage.jsx"
    }
  ],
  "ai-brewery-craft-beverage-ops-ai-5cuwes-exact-ai": [
    {
      "name": "abv",
      "label": "Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "abv_target",
      "label": "Abv Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_temp",
      "label": "Actual Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_time",
      "label": "Actual Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "annual_production_bbl",
      "label": "Annual Production Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "appearance",
      "label": "Appearance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma",
      "label": "Aroma",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma_notes",
      "label": "Aroma Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_size_bbl",
      "label": "Batch Size Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_name",
      "label": "Beer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_style",
      "label": "Beer Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brewery_name",
      "label": "Brewery Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "climate",
      "label": "Climate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_cost_per_bbl",
      "label": "Current Cost Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_lineup",
      "label": "Current Lineup",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_step",
      "label": "Current Step",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deviations",
      "label": "Deviations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_source",
      "label": "Energy Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fermentation_temp",
      "label": "Fermentation Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fg",
      "label": "Fg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor",
      "label": "Flavor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_notes",
      "label": "Flavor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_profile",
      "label": "Flavor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_sales",
      "label": "Historical Sales",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hop_variety",
      "label": "Hop Variety",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ibu",
      "label": "Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "local_events",
      "label": "Local Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "month",
      "label": "Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mouthfeel",
      "label": "Mouthfeel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "og",
      "label": "Og",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_alpha_acid_pct",
      "label": "Original Alpha Acid Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "packaging_mix",
      "label": "Packaging Mix",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_grain_bill",
      "label": "Recipe Grain Bill",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_hop_schedule",
      "label": "Recipe Hop Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_target_ibu",
      "label": "Recipe Target Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_water_profile",
      "label": "Source Water Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "srm",
      "label": "Srm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "storage_condition",
      "label": "Storage Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taproom_capacity_bbl_per_month",
      "label": "Taproom Capacity Bbl Per Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_abv",
      "label": "Target Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_savings_pct",
      "label": "Target Savings Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_style",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_temp",
      "label": "Target Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_time",
      "label": "Target Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transportation_radius_miles",
      "label": "Transportation Radius Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_usage_gal_per_bbl",
      "label": "Water Usage Gal Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "yeast_strain",
      "label": "Yeast Strain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-brew-day-agent-e3xdh7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Brew Day Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/brewDayAgent.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-gap-no-ai-customer-feedback-sentiment-loop-into-recipe-1vtu4x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Customer Feedback Sentiment Loop Into Recipe source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_customer_feedback_sentiment_loop_into_recipe.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-gap-no-ai-tap-room-demand-forecasting-per-hour-1obh3o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Tap Room Demand Forecasting Per Hour source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_tap_room_demand_forecasting_per_hour.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-gap-no-ai-tasting-note-generator-for-marketing-qpavm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Tasting Note Generator For Marketing source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_tasting_note_generator_for_marketing.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.jsx"
    },
    {
      "name": "abv",
      "label": "Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "abv_target",
      "label": "Abv Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_temp",
      "label": "Actual Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_time",
      "label": "Actual Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "annual_production_bbl",
      "label": "Annual Production Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "appearance",
      "label": "Appearance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma",
      "label": "Aroma",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma_notes",
      "label": "Aroma Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_size_bbl",
      "label": "Batch Size Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_name",
      "label": "Beer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_style",
      "label": "Beer Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brewery_name",
      "label": "Brewery Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "climate",
      "label": "Climate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_cost_per_bbl",
      "label": "Current Cost Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_lineup",
      "label": "Current Lineup",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_step",
      "label": "Current Step",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deviations",
      "label": "Deviations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_source",
      "label": "Energy Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fermentation_temp",
      "label": "Fermentation Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fg",
      "label": "Fg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor",
      "label": "Flavor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_notes",
      "label": "Flavor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_profile",
      "label": "Flavor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_sales",
      "label": "Historical Sales",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hop_variety",
      "label": "Hop Variety",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ibu",
      "label": "Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "local_events",
      "label": "Local Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "month",
      "label": "Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mouthfeel",
      "label": "Mouthfeel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "og",
      "label": "Og",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_alpha_acid_pct",
      "label": "Original Alpha Acid Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "packaging_mix",
      "label": "Packaging Mix",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_grain_bill",
      "label": "Recipe Grain Bill",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_hop_schedule",
      "label": "Recipe Hop Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_target_ibu",
      "label": "Recipe Target Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_water_profile",
      "label": "Source Water Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "srm",
      "label": "Srm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "storage_condition",
      "label": "Storage Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taproom_capacity_bbl_per_month",
      "label": "Taproom Capacity Bbl Per Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_abv",
      "label": "Target Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_savings_pct",
      "label": "Target Savings Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_style",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_temp",
      "label": "Target Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_time",
      "label": "Target Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transportation_radius_miles",
      "label": "Transportation Radius Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_usage_gal_per_bbl",
      "label": "Water Usage Gal Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "yeast_strain",
      "label": "Yeast Strain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-brewery-craft-beverage-ops-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeaturePage.jsx"
    },
    {
      "name": "abv",
      "label": "Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "abv_target",
      "label": "Abv Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_temp",
      "label": "Actual Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "actual_time",
      "label": "Actual Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "annual_production_bbl",
      "label": "Annual Production Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "appearance",
      "label": "Appearance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma",
      "label": "Aroma",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "aroma_notes",
      "label": "Aroma Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_size_bbl",
      "label": "Batch Size Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_name",
      "label": "Beer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beer_style",
      "label": "Beer Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brewery_name",
      "label": "Brewery Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "climate",
      "label": "Climate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_cost_per_bbl",
      "label": "Current Cost Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_lineup",
      "label": "Current Lineup",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_step",
      "label": "Current Step",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deviations",
      "label": "Deviations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_source",
      "label": "Energy Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fermentation_temp",
      "label": "Fermentation Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fg",
      "label": "Fg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor",
      "label": "Flavor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_notes",
      "label": "Flavor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "flavor_profile",
      "label": "Flavor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_sales",
      "label": "Historical Sales",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hop_variety",
      "label": "Hop Variety",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ibu",
      "label": "Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "local_events",
      "label": "Local Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "month",
      "label": "Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mouthfeel",
      "label": "Mouthfeel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "og",
      "label": "Og",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_alpha_acid_pct",
      "label": "Original Alpha Acid Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "packaging_mix",
      "label": "Packaging Mix",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_grain_bill",
      "label": "Recipe Grain Bill",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_hop_schedule",
      "label": "Recipe Hop Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_target_ibu",
      "label": "Recipe Target Ibu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_water_profile",
      "label": "Source Water Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "srm",
      "label": "Srm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "storage_condition",
      "label": "Storage Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taproom_capacity_bbl_per_month",
      "label": "Taproom Capacity Bbl Per Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_abv",
      "label": "Target Abv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_savings_pct",
      "label": "Target Savings Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_style",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_temp",
      "label": "Target Temp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_time",
      "label": "Target Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transportation_radius_miles",
      "label": "Transportation Radius Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_usage_gal_per_bbl",
      "label": "Water Usage Gal Per Bbl",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "yeast_strain",
      "label": "Yeast Strain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-ai-center-page-1dtw93-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenterPage.jsx"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-ai-lab-page-1dcqnt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Lab Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILabPage.jsx"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-gap0-mounted-chat-style-ai-endpoints-despite-aicenter-page-1wl2i9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap0 Mounted Chat Style AI Endpoints Despite Aicenter Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Gap0MountedChatStyleAiEndpointsDespiteAicenterPage.jsx"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-no-ai-diagnostic-from-photo-error-code-lookup-page-17102u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Diagnostic From Photo Error Code Lookup Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiDiagnosticFromPhotoErrorCodeLookupPage.jsx"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-no-ai-predictive-failure-model-from-equipment-tele-page-8ghbbz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Predictive Failure Model From Equipment Tele Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiPredictiveFailureModelFromEquipmentTelePage.jsx"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-ai-center-16xrrz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_ids",
      "label": "Equipment Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_type",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-ai-new-7q6oy0-exact-ai": [
    {
      "name": "budget_ceiling",
      "label": "Budget Ceiling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "downtime_hours",
      "label": "Downtime Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "equipment_type",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "failure_description",
      "label": "Failure Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "part_on_hand",
      "label": "Part On Hand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "parts_list",
      "label": "Parts List",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rush_shipping_available",
      "label": "Rush Shipping Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "status_filter",
      "label": "Status Filter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "symptom",
      "label": "Symptom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-gap-0-mounted-chat-style-ai-endpoints-despite-aicenter-1az3sv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap 0 Mounted Chat Style AI Endpoints Despite Aicenter source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_0_mounted_chat_style_ai_endpoints_despite_aicenter.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-gap-no-ai-diagnostic-from-photo-error-code-lookup-1tkhw9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Diagnostic From Photo Error Code Lookup source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_diagnostic_from_photo_error_code_lookup.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-gap-no-ai-predictive-failure-model-from-equipment-tele-dbwiy7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Predictive Failure Model From Equipment Tele source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_predictive_failure_model_from_equipment_tele.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenterPage.jsx"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_ids",
      "label": "Equipment Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_type",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "budget_ceiling",
      "label": "Budget Ceiling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "downtime_hours",
      "label": "Downtime Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "failure_description",
      "label": "Failure Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "part_on_hand",
      "label": "Part On Hand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "parts_list",
      "label": "Parts List",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rush_shipping_available",
      "label": "Rush Shipping Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "status_filter",
      "label": "Status Filter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "symptom",
      "label": "Symptom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-commercial-kitchen-equipment-maintenance-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenterPage.jsx"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_ids",
      "label": "Equipment Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "equipment_type",
      "label": "Equipment Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCenter.js"
    },
    {
      "name": "budget_ceiling",
      "label": "Budget Ceiling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "downtime_hours",
      "label": "Downtime Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "failure_description",
      "label": "Failure Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "part_on_hand",
      "label": "Part On Hand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "parts_list",
      "label": "Parts List",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rush_shipping_available",
      "label": "Rush Shipping Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "status_filter",
      "label": "Status Filter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "symptom",
      "label": "Symptom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-food-bank-pantry-manager-ai-advanced-tools-vga4ac-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedTools.jsx"
    }
  ],
  "ai-food-bank-pantry-manager-ai-history-67q48z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    }
  ],
  "ai-food-bank-pantry-manager-ai-tools-zzepmy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITools.jsx"
    }
  ],
  "ai-food-bank-pantry-manager-agentic-director-qw3iin-exact-ai": [
    {
      "name": "clients_count",
      "label": "Clients Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    },
    {
      "name": "inventory = []",
      "label": "Inventory = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    }
  ],
  "ai-food-bank-pantry-manager-ai-5cuwes-exact-ai": [
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids",
      "label": "Client Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids = []",
      "label": "Client Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "distribution_id",
      "label": "Distribution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_segment = ''",
      "label": "Focus Segment = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 90",
      "label": "Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "household_size",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_info",
      "label": "Organization Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority_rules = []",
      "label": "Priority Rules = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vehicle_id",
      "label": "Vehicle Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-food-bank-pantry-manager-training-1iusxl-exact-ai": [
    {
      "name": "module_id",
      "label": "Module Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "track_id",
      "label": "Track Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "volunteer_id",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "ai-food-bank-pantry-manager-volunteer-training-2rctzo-exact-ai": [
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    },
    {
      "name": "volunteer_id",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    }
  ],
  "ai-food-bank-pantry-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedTools.jsx"
    },
    {
      "name": "clients_count",
      "label": "Clients Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    },
    {
      "name": "inventory = []",
      "label": "Inventory = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    },
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids",
      "label": "Client Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids = []",
      "label": "Client Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "distribution_id",
      "label": "Distribution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_segment = ''",
      "label": "Focus Segment = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 90",
      "label": "Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "household_size",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_info",
      "label": "Organization Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority_rules = []",
      "label": "Priority Rules = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vehicle_id",
      "label": "Vehicle Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "module_id",
      "label": "Module Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "track_id",
      "label": "Track Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "volunteer_id",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    }
  ],
  "ai-food-bank-pantry-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedTools.jsx"
    },
    {
      "name": "clients_count",
      "label": "Clients Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    },
    {
      "name": "inventory = []",
      "label": "Inventory = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDirector.js"
    },
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids",
      "label": "Client Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_ids = []",
      "label": "Client Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "distribution_id",
      "label": "Distribution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_segment = ''",
      "label": "Focus Segment = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_days = 90",
      "label": "Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "household_size",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization_info",
      "label": "Organization Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority_rules = []",
      "label": "Priority Rules = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vehicle_id",
      "label": "Vehicle Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "module_id",
      "label": "Module Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "track_id",
      "label": "Track Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "volunteer_id",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/volunteerTraining.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-brand-concept-kc6il6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Brand Concept source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandConcept.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-brand-portfolio-1b8srd-exact-ai": [
    {
      "name": "candidate_brands",
      "label": "Candidate brands to test (optional)",
      "type": "textarea",
      "defaultValue": "Sakura Sushi House (rising search volume), Falafel Kingdom (high lunch demand in zone), Green Garden Vegan (ESG narrative + delivery margin >25% in similar markets)",
      "placeholder": "Brands with positive market signals worth testing...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "current_brands",
      "label": "Current brand performance",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express - 320/wk, $11.5k revenue, 18% margin\\nBurger Republic - 240/wk, $7.8k, 22% margin\\nBella Napoli Pizza - 180/wk, $6.4k, 14% margin\\nMediterranean Bliss - 90/wk, $3.4k, 12% margin\\nCaribbean Flame - 50/wk, $1.9k, 9% margin",
      "placeholder": "List active brands with weekly orders / revenue / margin...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "kitchen_constraints",
      "label": "Kitchen / station constraints",
      "type": "textarea",
      "defaultValue": "3 stations: wok, grill, oven. Peak throughput ~80 orders/hour. Limited prep cooler space.",
      "placeholder": "Number of stations, prep capacity, peak throughput limit...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-cannibalization-detection-6aurb8-exact-ai": [
    {
      "name": "lookback_days",
      "label": "Lookback (days)",
      "type": "number",
      "defaultValue": "60",
      "placeholder": "60",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICannibalizationDetection.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-demand-forecast-5tvqql-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Demand Forecast source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDemandForecast.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-driver-route-optimization-ka727b-exact-ai": [
    {
      "name": "constraints",
      "label": "Constraints (free text)",
      "type": "textarea",
      "defaultValue": "Avoid bridges with current congestion. Prioritize hot-food orders. Respect driver max 6 stops per route.",
      "placeholder": "Notes about traffic, weather, special events, brand SLAs, vehicle restrictions...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "next 2 hours",
      "placeholder": "e.g. next 2 hours, next dinner rush",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-dynamic-pricing-no5na4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Dynamic Pricing source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDynamicPricing.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-ingredient-substitution-io9v03-exact-ai": [
    {
      "name": "budget_constraint",
      "label": "Budget constraint (optional)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., keep cost-per-portion under $0.40",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary / regulatory restrictions",
      "type": "text",
      "defaultValue": "halal (no alcohol)",
      "placeholder": "e.g., halal, kosher, peanut-free, gluten-free",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "missing_ingredient",
      "label": "Missing ingredient",
      "type": "text",
      "defaultValue": "Shaoxing wine",
      "placeholder": "e.g., Shaoxing wine, peanuts, Chinese black vinegar",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "recipe",
      "label": "Recipe",
      "type": "textarea",
      "defaultValue": "Kung Pao Chicken (serves 4)\\n- 500g chicken thigh, diced\\n- 1/2 cup roasted peanuts\\n- 4 dried red chilies\\n- 3 tbsp soy sauce\\n- 1 tbsp Shaoxing wine\\n- 1 tbsp Chinese black vinegar\\n- 1 tsp Sichuan peppercorns",
      "placeholder": "Paste the recipe with quantities...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-menu-optimization-n84vqr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Menu Optimization source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMenuOptimization.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-sentiment-analysis-2iz1hg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sentiment Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISentimentAnalysis.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-site-selection-1rrexk-exact-ai": [
    {
      "name": "candidate_locations",
      "label": "Candidate Locations",
      "type": "textarea",
      "defaultValue": "1) 200 W 42nd St (Times Square area) - 1800 sqft, $14k/mo rent, dense office workers\\n2) 411 Bedford Ave (Williamsburg) - 1200 sqft, $9k/mo, young professionals\\n3) 86-12 Roosevelt Ave (Jackson Heights) - 2400 sqft, $7k/mo, dense residential, multi-cuisine demand",
      "placeholder": "List candidate sites with key context (rent, sqft, neighborhood, demographics)...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "demand_signals",
      "label": "Demand signals (search trends, competitor density, courier supply)",
      "type": "textarea",
      "defaultValue": "High lunch demand near office cluster; weak dinner. Top searches: chicken, noodles, salads. 12 active competitors within 1 mile.",
      "placeholder": "Pull from internal analytics, DoorDash heatmaps, or simple notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "fleet_brands",
      "label": "Brands you would operate from this site",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express (300/wk), Burger Republic (200/wk), Mediterranean Bliss (150/wk)",
      "placeholder": "Brands and target order volume...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-social-media-v58uzi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Social Media source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISocialMedia.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-cf-agentic-kitchen-automation-prioritizing-lqnlse-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Kitchen Automation Prioritizing source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticKitchenAutomationPrioritizing.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-gap-no-ghost-kitchen-site-selection-ai-1cxa78-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Ghost Kitchen Site Selection AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoGhostKitchenSiteSelectionAi.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-gap-no-ingredient-substitution-ai-6il1g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Ingredient Substitution AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoIngredientSubstitutionAi.jsx"
    }
  ],
  "ai-ghost-kitchen-network-manager-agentic-kitchen-automation-d91zpi-exact-ai": [
    {
      "name": "snapshot_minutes = 60",
      "label": "Snapshot Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticKitchenAutomation.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-5cuwes-exact-ai": [
    {
      "name": "available_brands = []",
      "label": "Available Brands = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_concept",
      "label": "Brand Concept",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_locations = []",
      "label": "Candidate Locations = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cuisine_type",
      "label": "Cuisine Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_menu",
      "label": "Current Menu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "delivery_radius_miles = 5",
      "label": "Delivery Radius Miles = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demand_data",
      "label": "Demand Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions = []",
      "label": "Dietary Restrictions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "kitchen_capacity_orders_per_day",
      "label": "Kitchen Capacity Orders Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookback_days = 60",
      "label": "Lookback Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "menu_items",
      "label": "Menu Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "missing_ingredient",
      "label": "Missing Ingredient",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform_data",
      "label": "Platform Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_cuisines = []",
      "label": "Target Cuisines = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_market",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_horizon_days = 90",
      "label": "Time Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-gap-no-ghost-kitchen-site-selection-ai-1bo8tz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ghost-kitchen-site-selection-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ghost-kitchen-site-selection-ai.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-gap-no-ingredient-substitution-ai-11f30e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ingredient-substitution-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ingredient-substitution-ai.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Brand Concept source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandConcept.jsx"
    },
    {
      "name": "candidate_brands",
      "label": "Candidate brands to test (optional)",
      "type": "textarea",
      "defaultValue": "Sakura Sushi House (rising search volume), Falafel Kingdom (high lunch demand in zone), Green Garden Vegan (ESG narrative + delivery margin >25% in similar markets)",
      "placeholder": "Brands with positive market signals worth testing...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "current_brands",
      "label": "Current brand performance",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express - 320/wk, $11.5k revenue, 18% margin\\nBurger Republic - 240/wk, $7.8k, 22% margin\\nBella Napoli Pizza - 180/wk, $6.4k, 14% margin\\nMediterranean Bliss - 90/wk, $3.4k, 12% margin\\nCaribbean Flame - 50/wk, $1.9k, 9% margin",
      "placeholder": "List active brands with weekly orders / revenue / margin...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "kitchen_constraints",
      "label": "Kitchen / station constraints",
      "type": "textarea",
      "defaultValue": "3 stations: wok, grill, oven. Peak throughput ~80 orders/hour. Limited prep cooler space.",
      "placeholder": "Number of stations, prep capacity, peak throughput limit...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "lookback_days",
      "label": "Lookback (days)",
      "type": "number",
      "defaultValue": "60",
      "placeholder": "60",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICannibalizationDetection.jsx"
    },
    {
      "name": "constraints",
      "label": "Constraints (free text)",
      "type": "textarea",
      "defaultValue": "Avoid bridges with current congestion. Prioritize hot-food orders. Respect driver max 6 stops per route.",
      "placeholder": "Notes about traffic, weather, special events, brand SLAs, vehicle restrictions...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "next 2 hours",
      "placeholder": "e.g. next 2 hours, next dinner rush",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    },
    {
      "name": "budget_constraint",
      "label": "Budget constraint (optional)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., keep cost-per-portion under $0.40",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary / regulatory restrictions",
      "type": "text",
      "defaultValue": "halal (no alcohol)",
      "placeholder": "e.g., halal, kosher, peanut-free, gluten-free",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "missing_ingredient",
      "label": "Missing ingredient",
      "type": "text",
      "defaultValue": "Shaoxing wine",
      "placeholder": "e.g., Shaoxing wine, peanuts, Chinese black vinegar",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "recipe",
      "label": "Recipe",
      "type": "textarea",
      "defaultValue": "Kung Pao Chicken (serves 4)\\n- 500g chicken thigh, diced\\n- 1/2 cup roasted peanuts\\n- 4 dried red chilies\\n- 3 tbsp soy sauce\\n- 1 tbsp Shaoxing wine\\n- 1 tbsp Chinese black vinegar\\n- 1 tsp Sichuan peppercorns",
      "placeholder": "Paste the recipe with quantities...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "candidate_locations",
      "label": "Candidate Locations",
      "type": "textarea",
      "defaultValue": "1) 200 W 42nd St (Times Square area) - 1800 sqft, $14k/mo rent, dense office workers\\n2) 411 Bedford Ave (Williamsburg) - 1200 sqft, $9k/mo, young professionals\\n3) 86-12 Roosevelt Ave (Jackson Heights) - 2400 sqft, $7k/mo, dense residential, multi-cuisine demand",
      "placeholder": "List candidate sites with key context (rent, sqft, neighborhood, demographics)...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "demand_signals",
      "label": "Demand signals (search trends, competitor density, courier supply)",
      "type": "textarea",
      "defaultValue": "High lunch demand near office cluster; weak dinner. Top searches: chicken, noodles, salads. 12 active competitors within 1 mile.",
      "placeholder": "Pull from internal analytics, DoorDash heatmaps, or simple notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "fleet_brands",
      "label": "Brands you would operate from this site",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express (300/wk), Burger Republic (200/wk), Mediterranean Bliss (150/wk)",
      "placeholder": "Brands and target order volume...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "snapshot_minutes = 60",
      "label": "Snapshot Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticKitchenAutomation.js"
    },
    {
      "name": "available_brands = []",
      "label": "Available Brands = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_concept",
      "label": "Brand Concept",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_locations = []",
      "label": "Candidate Locations = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cuisine_type",
      "label": "Cuisine Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_menu",
      "label": "Current Menu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "delivery_radius_miles = 5",
      "label": "Delivery Radius Miles = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demand_data",
      "label": "Demand Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions = []",
      "label": "Dietary Restrictions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "kitchen_capacity_orders_per_day",
      "label": "Kitchen Capacity Orders Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookback_days = 60",
      "label": "Lookback Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "menu_items",
      "label": "Menu Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform_data",
      "label": "Platform Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_cuisines = []",
      "label": "Target Cuisines = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_market",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_horizon_days = 90",
      "label": "Time Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ghost-kitchen-site-selection-ai.js"
    }
  ],
  "ai-ghost-kitchen-network-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Brand Concept source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandConcept.jsx"
    },
    {
      "name": "candidate_brands",
      "label": "Candidate brands to test (optional)",
      "type": "textarea",
      "defaultValue": "Sakura Sushi House (rising search volume), Falafel Kingdom (high lunch demand in zone), Green Garden Vegan (ESG narrative + delivery margin >25% in similar markets)",
      "placeholder": "Brands with positive market signals worth testing...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "current_brands",
      "label": "Current brand performance",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express - 320/wk, $11.5k revenue, 18% margin\\nBurger Republic - 240/wk, $7.8k, 22% margin\\nBella Napoli Pizza - 180/wk, $6.4k, 14% margin\\nMediterranean Bliss - 90/wk, $3.4k, 12% margin\\nCaribbean Flame - 50/wk, $1.9k, 9% margin",
      "placeholder": "List active brands with weekly orders / revenue / margin...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "kitchen_constraints",
      "label": "Kitchen / station constraints",
      "type": "textarea",
      "defaultValue": "3 stations: wok, grill, oven. Peak throughput ~80 orders/hour. Limited prep cooler space.",
      "placeholder": "Number of stations, prep capacity, peak throughput limit...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBrandPortfolio.jsx"
    },
    {
      "name": "lookback_days",
      "label": "Lookback (days)",
      "type": "number",
      "defaultValue": "60",
      "placeholder": "60",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICannibalizationDetection.jsx"
    },
    {
      "name": "constraints",
      "label": "Constraints (free text)",
      "type": "textarea",
      "defaultValue": "Avoid bridges with current congestion. Prioritize hot-food orders. Respect driver max 6 stops per route.",
      "placeholder": "Notes about traffic, weather, special events, brand SLAs, vehicle restrictions...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "next 2 hours",
      "placeholder": "e.g. next 2 hours, next dinner rush",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDriverRouteOptimization.jsx"
    },
    {
      "name": "budget_constraint",
      "label": "Budget constraint (optional)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., keep cost-per-portion under $0.40",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary / regulatory restrictions",
      "type": "text",
      "defaultValue": "halal (no alcohol)",
      "placeholder": "e.g., halal, kosher, peanut-free, gluten-free",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "missing_ingredient",
      "label": "Missing ingredient",
      "type": "text",
      "defaultValue": "Shaoxing wine",
      "placeholder": "e.g., Shaoxing wine, peanuts, Chinese black vinegar",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "recipe",
      "label": "Recipe",
      "type": "textarea",
      "defaultValue": "Kung Pao Chicken (serves 4)\\n- 500g chicken thigh, diced\\n- 1/2 cup roasted peanuts\\n- 4 dried red chilies\\n- 3 tbsp soy sauce\\n- 1 tbsp Shaoxing wine\\n- 1 tbsp Chinese black vinegar\\n- 1 tsp Sichuan peppercorns",
      "placeholder": "Paste the recipe with quantities...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIngredientSubstitution.jsx"
    },
    {
      "name": "candidate_locations",
      "label": "Candidate Locations",
      "type": "textarea",
      "defaultValue": "1) 200 W 42nd St (Times Square area) - 1800 sqft, $14k/mo rent, dense office workers\\n2) 411 Bedford Ave (Williamsburg) - 1200 sqft, $9k/mo, young professionals\\n3) 86-12 Roosevelt Ave (Jackson Heights) - 2400 sqft, $7k/mo, dense residential, multi-cuisine demand",
      "placeholder": "List candidate sites with key context (rent, sqft, neighborhood, demographics)...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "demand_signals",
      "label": "Demand signals (search trends, competitor density, courier supply)",
      "type": "textarea",
      "defaultValue": "High lunch demand near office cluster; weak dinner. Top searches: chicken, noodles, salads. 12 active competitors within 1 mile.",
      "placeholder": "Pull from internal analytics, DoorDash heatmaps, or simple notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "fleet_brands",
      "label": "Brands you would operate from this site",
      "type": "textarea",
      "defaultValue": "Dragon Wok Express (300/wk), Burger Republic (200/wk), Mediterranean Bliss (150/wk)",
      "placeholder": "Brands and target order volume...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISiteSelection.jsx"
    },
    {
      "name": "snapshot_minutes = 60",
      "label": "Snapshot Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticKitchenAutomation.js"
    },
    {
      "name": "available_brands = []",
      "label": "Available Brands = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_concept",
      "label": "Brand Concept",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_locations = []",
      "label": "Candidate Locations = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cuisine_type",
      "label": "Cuisine Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_menu",
      "label": "Current Menu",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "delivery_radius_miles = 5",
      "label": "Delivery Radius Miles = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demand_data",
      "label": "Demand Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dietary_restrictions = []",
      "label": "Dietary Restrictions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "kitchen_capacity_orders_per_day",
      "label": "Kitchen Capacity Orders Per Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookback_days = 60",
      "label": "Lookback Days = 60",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "menu_items",
      "label": "Menu Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform_data",
      "label": "Platform Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recipe_id",
      "label": "Recipe Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_cuisines = []",
      "label": "Target Cuisines = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_market",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_horizon_days = 90",
      "label": "Time Horizon Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ghost-kitchen-site-selection-ai.js"
    }
  ],
  "ai-hotel-revenue-manager-ai-war-room-43dzvy-exact-ai": [
    {
      "name": "ancillary_spend",
      "label": "Ancillary Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "food_beverage_spend",
      "label": "Food Beverage Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "group_size",
      "label": "Group Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "guest_id",
      "label": "Guest Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_dates",
      "label": "Requested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_rate",
      "label": "Requested Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    }
  ],
  "ai-hotel-revenue-manager-dynamic-pricing-ai-1d5tnb-exact-ai": [
    {
      "name": "channel_focus = 'all'",
      "label": "Channel Focus = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    }
  ],
  "ai-hotel-revenue-manager-gap-no-competitor-rate-ai-recommender-15glff-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    }
  ],
  "ai-hotel-revenue-manager-gap-no-guest-segmentation-ai-1b8zv5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-guest-segmentation-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-guest-segmentation-ai.js"
    }
  ],
  "ai-hotel-revenue-manager-review-response-ai-epnjvw-exact-ai": [
    {
      "name": "guest_name",
      "label": "Guest Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_id",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_text",
      "label": "Review Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "source = 'unspecified'",
      "label": "Source = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    }
  ],
  "ai-hotel-revenue-manager-ai-history-page-kxfx0n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.jsx"
    }
  ],
  "ai-hotel-revenue-manager-cf-agentic-revenue-manager-continuously-opt-15cwes-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Revenue Manager Continuously Opt source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticRevenueManagerContinuouslyOpt.jsx"
    }
  ],
  "ai-hotel-revenue-manager-cf-guest-lifecycle-ai-predicting-ltv-and-ganivh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Guest Lifecycle AI Predicting Ltv And source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfGuestLifecycleAiPredictingLtvAnd.jsx"
    }
  ],
  "ai-hotel-revenue-manager-gap-no-competitor-rate-ai-recommender-1pm9r9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Competitor Rate AI Recommender source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoCompetitorRateAiRecommender.jsx"
    }
  ],
  "ai-hotel-revenue-manager-gap-no-guest-segmentation-ai-acqu8f-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Guest Segmentation AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoGuestSegmentationAi.jsx"
    }
  ],
  "ai-hotel-revenue-manager-source-workflow": [
    {
      "name": "ancillary_spend",
      "label": "Ancillary Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "food_beverage_spend",
      "label": "Food Beverage Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "group_size",
      "label": "Group Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "guest_id",
      "label": "Guest Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_dates",
      "label": "Requested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_rate",
      "label": "Requested Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "channel_focus = 'all'",
      "label": "Channel Focus = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    },
    {
      "name": "guest_name",
      "label": "Guest Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_id",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_text",
      "label": "Review Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "source = 'unspecified'",
      "label": "Source = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    }
  ],
  "ai-hotel-revenue-manager-ai-tools": [
    {
      "name": "ancillary_spend",
      "label": "Ancillary Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "food_beverage_spend",
      "label": "Food Beverage Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "group_size",
      "label": "Group Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "guest_id",
      "label": "Guest Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_dates",
      "label": "Requested Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "requested_rate",
      "label": "Requested Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiWarRoom.js"
    },
    {
      "name": "channel_focus = 'all'",
      "label": "Channel Focus = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dynamicPricingAI.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-competitor-rate-ai-recommender.js"
    },
    {
      "name": "guest_name",
      "label": "Guest Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_id",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "review_text",
      "label": "Review Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "source = 'unspecified'",
      "label": "Source = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    },
    {
      "name": "stars",
      "label": "Stars",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/reviewResponseAI.js"
    }
  ],
  "ai-menu-digitizer-ai-analysis-page-cmb8f2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysisPage.tsx"
    }
  ],
  "ai-menu-digitizer-ai-cost-analysis-page-1thhf3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Cost Analysis Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICostAnalysisPage.tsx"
    }
  ],
  "ai-menu-digitizer-gap-agentic-h0nlt8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-menu-digitizer-menu-detail-gny179-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "current",
      "label": "Current",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_gluten_free",
      "label": "Is Gluten Free",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegan",
      "label": "Is Vegan",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegetarian",
      "label": "Is Vegetarian",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "spice_level",
      "label": "Spice Level",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    }
  ],
  "ai-menu-digitizer-verify-email-1s7w18-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/VerifyEmail.tsx"
    }
  ],
  "ai-menu-digitizer-ai-1lp99q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    }
  ],
  "ai-menu-digitizer-ai-cost-analysis-gqbpz2-exact-ai": [
    {
      "name": "menuId",
      "label": "Menu Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCostAnalysis.ts"
    }
  ],
  "ai-menu-digitizer-menu-optimization-agent-16cmj7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Menu Optimization Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/menu-optimization-agent.ts"
    }
  ],
  "ai-menu-digitizer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysisPage.tsx"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "current",
      "label": "Current",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_gluten_free",
      "label": "Is Gluten Free",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegan",
      "label": "Is Vegan",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegetarian",
      "label": "Is Vegetarian",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "spice_level",
      "label": "Spice Level",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "menuId",
      "label": "Menu Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCostAnalysis.ts"
    }
  ],
  "ai-menu-digitizer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysisPage.tsx"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "current",
      "label": "Current",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_gluten_free",
      "label": "Is Gluten Free",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegan",
      "label": "Is Vegan",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "is_vegetarian",
      "label": "Is Vegetarian",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "spice_level",
      "label": "Spice Level",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MenuDetail.tsx"
    },
    {
      "name": "menuId",
      "label": "Menu Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCostAnalysis.ts"
    }
  ],
  "catering-service-ai-assistant-s3rdmd-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "standard",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "CORPORATE",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    }
  ],
  "catering-service-ai-insights-iqre9g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsights.jsx"
    }
  ],
  "catering-service-event-detail-wlruqc-exact-ai": [
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    }
  ],
  "catering-service-ai-delivery-route-optimization-gap-ai-hq1llt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Delivery Route Optimization Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi.jsx"
    }
  ],
  "catering-service-ai-dietary-restriction-substitution-suggestions-gap-ai-1uj0rl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Dietary Restriction Substitution Suggestions Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiDietaryRestrictionSubstitutionSuggestionsGapAi.jsx"
    }
  ],
  "catering-service-ai-proposal-to-win-conversion-modeling-gap-ai-ljdv9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Proposal To Win Conversion Modeling Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiProposalToWinConversionModelingGapAi.jsx"
    }
  ],
  "catering-service-detailed-dietary-restriction-tagging-on-menus-gap-non-1niwgt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Detailed Dietary Restriction Tagging On Menus Gap Non source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/DetailedDietaryRestrictionTaggingOnMenusGapNon.jsx"
    }
  ],
  "catering-service-ai-1lp99l-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "clientProfile",
      "label": "Client Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitiveContext",
      "label": "Competitive Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventStartTime",
      "label": "Event Start Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuPackageId",
      "label": "Menu Package Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "proposalId",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "returnToStart",
      "label": "Return To Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startAddress",
      "label": "Start Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "stops",
      "label": "Stops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "catering-service-batch09-gap-ai-1er5ku-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/batch09GapAi.js"
    }
  ],
  "catering-service-batch09-gap-nonai-1ktbm7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/batch09GapNonai.js"
    }
  ],
  "catering-service-source-workflow": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "standard",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "CORPORATE",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsights.jsx"
    },
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "clientProfile",
      "label": "Client Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitiveContext",
      "label": "Competitive Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventStartTime",
      "label": "Event Start Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuPackageId",
      "label": "Menu Package Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "proposalId",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "returnToStart",
      "label": "Return To Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startAddress",
      "label": "Start Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "stops",
      "label": "Stops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "catering-service-ai-tools": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "standard",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "CORPORATE",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "guestCount",
      "label": "Guest Count",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsights.jsx"
    },
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EventDetail.jsx"
    },
    {
      "name": "clientProfile",
      "label": "Client Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitiveContext",
      "label": "Competitive Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dietaryRestrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventStartTime",
      "label": "Event Start Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuPackageId",
      "label": "Menu Package Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "proposalId",
      "label": "Proposal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "returnToStart",
      "label": "Return To Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startAddress",
      "label": "Start Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "stops",
      "label": "Stops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "food-ordering-web-site-ai-features-page-yuyp1m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features Page source input context",
      "options": [],
      "required": false,
      "source": "src/pages/AIFeaturesPage.tsx"
    }
  ],
  "food-ordering-web-site-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features Page source input context",
      "options": [],
      "required": false,
      "source": "src/pages/AIFeaturesPage.tsx"
    }
  ],
  "food-ordering-web-site-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features Page source input context",
      "options": [],
      "required": false,
      "source": "src/pages/AIFeaturesPage.tsx"
    }
  ],
  "food-truck-ai-mivtup-exact-ai": [
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "menu",
      "label": "Menu",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    }
  ],
  "food-truck-ai-advanced-w0lkpr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    }
  ],
  "food-truck-cf-crew-scheduling-ai-fairness-fatigue-skill-ii05po-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Crew Scheduling AI Fairness Fatigue Skill source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill.jsx"
    }
  ],
  "food-truck-cf-loyalty-program-with-ai-personalized-offers-1ig3o4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Loyalty Program With AI Personalized Offers source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfLoyaltyProgramWithAiPersonalizedOffers.jsx"
    }
  ],
  "food-truck-cf-supplier-ordering-agent-auto-po-based-1mxuax-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Supplier Ordering Agent Auto Po Based source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSupplierOrderingAgentAutoPoBased.jsx"
    }
  ],
  "food-truck-gap-no-customer-loyalty-churn-ai-1wnnvv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Customer Loyalty Churn AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoCustomerLoyaltyChurnAi.jsx"
    }
  ],
  "food-truck-gap-no-dynamic-pricing-ai-despite-demand-1o06fr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Dynamic Pricing AI Despite Demand source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoDynamicPricingAiDespiteDemand.jsx"
    }
  ],
  "food-truck-gap-no-voice-ordering-agent-5dcpkv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Voice Ordering Agent source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoVoiceOrderingAgent.jsx"
    }
  ],
  "food-truck-verify-email-1s7wix-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/VerifyEmail.jsx"
    }
  ],
  "food-truck-ai-1lp99l-exact-ai": [
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "crew",
      "label": "Crew",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerMessage",
      "label": "Customer Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dayOfWeek",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "hourOfDay",
      "label": "Hour Of Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationId",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationInfo",
      "label": "Location Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuInfo",
      "label": "Menu Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "shifts",
      "label": "Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "weatherOverride",
      "label": "Weather Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "food-truck-gap-no-customer-loyalty-churn-ai-1vzgyl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Customer Loyalty Churn AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_customer_loyalty_churn_ai.js"
    }
  ],
  "food-truck-gap-no-dynamic-pricing-ai-despite-demand-tzzk8e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Dynamic Pricing AI Despite Demand source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_dynamic_pricing_ai_despite_demand.js"
    }
  ],
  "food-truck-gap-no-voice-ordering-agent-kcxow7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Voice Ordering Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_no_voice_ordering_agent.js"
    }
  ],
  "food-truck-loyalty-ai-1xyb82-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "orderId",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    }
  ],
  "food-truck-source-workflow": [
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "menu",
      "label": "Menu",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "crew",
      "label": "Crew",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerMessage",
      "label": "Customer Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dayOfWeek",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "hourOfDay",
      "label": "Hour Of Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationId",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationInfo",
      "label": "Location Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuInfo",
      "label": "Menu Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "shifts",
      "label": "Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "weatherOverride",
      "label": "Weather Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "orderId",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    }
  ],
  "food-truck-ai-tools": [
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "menu",
      "label": "Menu",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AI.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "crew",
      "label": "Crew",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "customerMessage",
      "label": "Customer Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dayOfWeek",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "hourOfDay",
      "label": "Hour Of Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationId",
      "label": "Location Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "locationInfo",
      "label": "Location Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "menuInfo",
      "label": "Menu Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "shifts",
      "label": "Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "weatherOverride",
      "label": "Weather Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "orderId",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    },
    {
      "name": "truckId",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/loyaltyAI.js"
    }
  ],
  "independent-restaurant-route-ns90h3-exact-ai": [
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "customerPhone",
      "label": "Customer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "estimatedWait",
      "label": "Estimated Wait",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "partySize",
      "label": "Party Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "quotedTime",
      "label": "Quoted Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    }
  ],
  "independent-restaurant-route-1ucwz6-exact-ai": [
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "customerPhone",
      "label": "Customer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "estimatedWait",
      "label": "Estimated Wait",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "partySize",
      "label": "Party Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "quotedTime",
      "label": "Quoted Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    }
  ],
  "independent-restaurant-route-ovuoc2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts"
    }
  ],
  "independent-restaurant-route-7nw1ws-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-marketing-email-campaign-engine/route.ts"
    }
  ],
  "independent-restaurant-route-179t62-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-guest-flow-wait-time-prediction/route.ts"
    }
  ],
  "independent-restaurant-route-rjdstc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-catering-bulk-order-quoting-agent/route.ts"
    }
  ],
  "independent-restaurant-route-1hu7oa-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    }
  ],
  "independent-restaurant-route-7vapkk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/waste-vision/route.ts"
    }
  ],
  "independent-restaurant-route-19wb3b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/waste-recipe/route.ts"
    }
  ],
  "independent-restaurant-route-eqtsak-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "totalUSD",
      "label": "Total USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    }
  ],
  "independent-restaurant-route-3c4ise-exact-ai": [
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    }
  ],
  "independent-restaurant-route-xt45lv-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "fatigue",
      "label": "Fatigue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "note",
      "label": "Note",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "shifts = []",
      "label": "Shifts = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "staffId",
      "label": "Staff Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    }
  ],
  "independent-restaurant-route-1x0509-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "deltaPct = 10",
      "label": "Delta Pct = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "ingredientName",
      "label": "Ingredient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    }
  ],
  "independent-restaurant-route-fk6ssr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/no-show-predictor/route.ts"
    }
  ],
  "independent-restaurant-route-eijqrd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dynamic-pricing/route.ts"
    }
  ],
  "independent-restaurant-route-96yum5-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dynamic-pricing/[id]/route.ts"
    }
  ],
  "independent-restaurant-route-h05av8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/delivery-routing/route.ts"
    }
  ],
  "independent-restaurant-route-1mmikp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/catering-quote/route.ts"
    }
  ],
  "independent-restaurant-page-1f07j0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/batch10/gap-no-vendor-supplier-procurement-ai/page.tsx"
    }
  ],
  "independent-restaurant-page-1qgbgh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/batch10/gap-no-marketing-email-campaign-engine/page.tsx"
    }
  ],
  "independent-restaurant-page-1yucsj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/batch10/gap-no-guest-flow-wait-time-prediction/page.tsx"
    }
  ],
  "independent-restaurant-page-1o3nei-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/batch10/gap-no-catering-bulk-order-quoting-agent/page.tsx"
    }
  ],
  "independent-restaurant-page-po57l8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/batch10/cf-catering-quote-agent-with-menu-recommendation/page.tsx"
    }
  ],
  "independent-restaurant-page-1lnk7w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai-suite/page.tsx"
    }
  ],
  "independent-restaurant-page-vngytl-exact-ai": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "Guest",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "promotion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    }
  ],
  "independent-restaurant-source-workflow": [
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "Guest",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "customerPhone",
      "label": "Customer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "estimatedWait",
      "label": "Estimated Wait",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "partySize",
      "label": "Party Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "quotedTime",
      "label": "Quoted Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "totalUSD",
      "label": "Total USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    },
    {
      "name": "fatigue",
      "label": "Fatigue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "note",
      "label": "Note",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "shifts = []",
      "label": "Shifts = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "staffId",
      "label": "Staff Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "deltaPct = 10",
      "label": "Delta Pct = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "ingredientName",
      "label": "Ingredient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "promotion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    }
  ],
  "independent-restaurant-ai-tools": [
    {
      "name": "customerName",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "Guest",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "customerPhone",
      "label": "Customer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "estimatedWait",
      "label": "Estimated Wait",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "partySize",
      "label": "Party Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "quotedTime",
      "label": "Quoted Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/waitlist/[id]/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "totalUSD",
      "label": "Total USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/voice-ordering/route.ts"
    },
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/tip-fairness/route.ts"
    },
    {
      "name": "fatigue",
      "label": "Fatigue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "note",
      "label": "Note",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "shifts = []",
      "label": "Shifts = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "staffId",
      "label": "Staff Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/staff-schedule-mood/route.ts"
    },
    {
      "name": "deltaPct = 10",
      "label": "Delta Pct = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "ingredientName",
      "label": "Ingredient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recipe-cost-optimizer/route.ts"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "promotion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    }
  ]
};
