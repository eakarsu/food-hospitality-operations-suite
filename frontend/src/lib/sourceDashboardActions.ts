export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIBakeryProductionManager",
      "AIBreweryCraftBeverageOps",
      "AICommercialKitchenEquipmentMaintenance",
      "AIFoodBankPantryManager",
      "AIGhostKitchenNetworkManager",
      "AIHotelRevenueManager",
      "AIMenuDigitizer",
      "FoodOrderingWebSite",
      "ai-food-flow-order",
      "cateringService",
      "foodTruck",
      "independentRestaurant"
    ],
    "examples": [
      "backend/lib/aiHelpers",
      "backend/openrouter",
      "backend/routes/agenticDirector",
      "backend/routes/agenticKitchenAutomation",
      "backend/routes/ai",
      "backend/routes/aiCenter"
    ],
    "count": 12
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "FoodOrderingWebSite",
      "ai-food-flow-order"
    ],
    "examples": [
      "src/components/shared/BulkActionsToolbar",
      "src/components/ui/tooltip",
      "src/hooks/useCallManagement"
    ],
    "count": 2
  }
];
