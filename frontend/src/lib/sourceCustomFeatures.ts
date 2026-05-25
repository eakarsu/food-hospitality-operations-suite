import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Food Flow Order Source Feature",
    "href": "/features/source-ai-food-flow-order",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ai-food-flow-order: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "44 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Bakery Production Manager Source Feature",
    "href": "/features/source-ai-bakery-production-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBakeryProductionManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Brewery Craft Beverage Ops Source Feature",
    "href": "/features/source-ai-brewery-craft-beverage-ops",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBreweryCraftBeverageOps: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Commercial Kitchen Equipment Maintenance Source Feature",
    "href": "/features/source-ai-commercial-kitchen-equipment-maintenance",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommercialKitchenEquipmentMaintenance: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "24 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Food Bank Pantry Manager Source Feature",
    "href": "/features/source-ai-food-bank-pantry-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFoodBankPantryManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Ghost Kitchen Network Manager Source Feature",
    "href": "/features/source-ai-ghost-kitchen-network-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIGhostKitchenNetworkManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Hotel Revenue Manager Source Feature",
    "href": "/features/source-ai-hotel-revenue-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIHotelRevenueManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Menu Digitizer Source Feature",
    "href": "/features/source-ai-menu-digitizer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMenuDigitizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Catering Service Source Feature",
    "href": "/features/source-catering-service",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in cateringService: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Food Ordering Web Site Source Feature",
    "href": "/features/source-food-ordering-web-site",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in FoodOrderingWebSite: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "10 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Food Truck Source Feature",
    "href": "/features/source-food-truck",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in foodTruck: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Independent Restaurant Source Feature",
    "href": "/features/source-independent-restaurant",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in independentRestaurant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "28 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Food Flow Order Source Feature",
      "AI Bakery Production Manager Source Feature",
      "AI Brewery Craft Beverage Ops Source Feature",
      "AI Commercial Kitchen Equipment Maintenance Source Feature",
      "AI Food Bank Pantry Manager Source Feature",
      "AI Ghost Kitchen Network Manager Source Feature",
      "AI Hotel Revenue Manager Source Feature",
      "AI Menu Digitizer Source Feature",
      "Catering Service Source Feature",
      "Food Ordering Web Site Source Feature",
      "Food Truck Source Feature",
      "Independent Restaurant Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-food-flow-order": {
    "title": "AI Food Flow Order Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from ai-food-flow-order, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ai-food-flow-order: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "44 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "44",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-bakery-production-manager": {
    "title": "AI Bakery Production Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIBakeryProductionManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBakeryProductionManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "16",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-brewery-craft-beverage-ops": {
    "title": "AI Brewery Craft Beverage Ops Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIBreweryCraftBeverageOps, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBreweryCraftBeverageOps: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "14",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-commercial-kitchen-equipment-maintenance": {
    "title": "AI Commercial Kitchen Equipment Maintenance Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICommercialKitchenEquipmentMaintenance, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommercialKitchenEquipmentMaintenance: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "24 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "24",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-food-bank-pantry-manager": {
    "title": "AI Food Bank Pantry Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIFoodBankPantryManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFoodBankPantryManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "11",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-ghost-kitchen-network-manager": {
    "title": "AI Ghost Kitchen Network Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIGhostKitchenNetworkManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIGhostKitchenNetworkManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "20",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-hotel-revenue-manager": {
    "title": "AI Hotel Revenue Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIHotelRevenueManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIHotelRevenueManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-menu-digitizer": {
    "title": "AI Menu Digitizer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMenuDigitizer, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMenuDigitizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "20",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-catering-service": {
    "title": "Catering Service Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from cateringService, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in cateringService: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "13",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-food-ordering-web-site": {
    "title": "Food Ordering Web Site Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from FoodOrderingWebSite, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in FoodOrderingWebSite: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "10 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "10",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-food-truck": {
    "title": "Food Truck Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from foodTruck, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in foodTruck: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "21",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-independent-restaurant": {
    "title": "Independent Restaurant Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from independentRestaurant, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in independentRestaurant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "28 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "28",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Food Flow Order Source Feature": {
    "sourceOwners": [
      "ai-food-flow-order"
    ],
    "operatingQueues": [
      "Use Call Management",
      "Open Router Service",
      "Tool:Tailwind.Config",
      "Main"
    ],
    "outputs": [
      "AI Food Flow Order merged workflow register",
      "AI Food Flow Order API and route coverage map",
      "AI Food Flow Order AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Bakery Production Manager Source Feature": {
    "sourceOwners": [
      "AIBakeryProductionManager"
    ],
    "operatingQueues": [
      "Openrouter",
      "Main",
      "AI Features",
      "No Agentic Supplier Substitution Decisioning Surfa Page"
    ],
    "outputs": [
      "AI Bakery Production Manager merged workflow register",
      "AI Bakery Production Manager API and route coverage map",
      "AI Bakery Production Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Brewery Craft Beverage Ops Source Feature": {
    "sourceOwners": [
      "AIBreweryCraftBeverageOps"
    ],
    "operatingQueues": [
      "Main",
      "AI Feature Page",
      "AI History Page",
      "Agentic Brew Day Assistant Orchestrating Recipe Wa Page"
    ],
    "outputs": [
      "AI Brewery Craft Beverage Ops merged workflow register",
      "AI Brewery Craft Beverage Ops API and route coverage map",
      "AI Brewery Craft Beverage Ops AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Commercial Kitchen Equipment Maintenance Source Feature": {
    "sourceOwners": [
      "AICommercialKitchenEquipmentMaintenance"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tailwind.Config",
      "Main",
      "AI Center Page"
    ],
    "outputs": [
      "AI Commercial Kitchen Equipment Maintenance merged workflow register",
      "AI Commercial Kitchen Equipment Maintenance API and route coverage map",
      "AI Commercial Kitchen Equipment Maintenance AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Food Bank Pantry Manager Source Feature": {
    "sourceOwners": [
      "AIFoodBankPantryManager"
    ],
    "operatingQueues": [
      "Openrouter",
      "Main",
      "AI Advanced Tools",
      "AI History"
    ],
    "outputs": [
      "AI Food Bank Pantry Manager merged workflow register",
      "AI Food Bank Pantry Manager API and route coverage map",
      "AI Food Bank Pantry Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Ghost Kitchen Network Manager Source Feature": {
    "sourceOwners": [
      "AIGhostKitchenNetworkManager"
    ],
    "operatingQueues": [
      "Main",
      "AI Brand Concept",
      "AI Brand Portfolio",
      "AI Cannibalization Detection"
    ],
    "outputs": [
      "AI Ghost Kitchen Network Manager merged workflow register",
      "AI Ghost Kitchen Network Manager API and route coverage map",
      "AI Ghost Kitchen Network Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Hotel Revenue Manager Source Feature": {
    "sourceOwners": [
      "AIHotelRevenueManager"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI War Room",
      "Dynamic Pricing AI",
      "Gap No Competitor Rate AI Recommender"
    ],
    "outputs": [
      "AI Hotel Revenue Manager merged workflow register",
      "AI Hotel Revenue Manager API and route coverage map",
      "AI Hotel Revenue Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Menu Digitizer Source Feature": {
    "sourceOwners": [
      "AIMenuDigitizer"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tailwind.Config",
      "Main",
      "AI Analysis Page"
    ],
    "outputs": [
      "AI Menu Digitizer merged workflow register",
      "AI Menu Digitizer API and route coverage map",
      "AI Menu Digitizer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Catering Service Source Feature": {
    "sourceOwners": [
      "cateringService"
    ],
    "operatingQueues": [
      "Tailwind.Config",
      "Main",
      "AI Assistant",
      "AI Insights"
    ],
    "outputs": [
      "Catering Service merged workflow register",
      "Catering Service API and route coverage map",
      "Catering Service AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Food Ordering Web Site Source Feature": {
    "sourceOwners": [
      "FoodOrderingWebSite"
    ],
    "operatingQueues": [
      "Openai",
      "Tool:Tailwind.Config",
      "Tool:Tailwind.Config",
      "Main"
    ],
    "outputs": [
      "Food Ordering Web Site merged workflow register",
      "Food Ordering Web Site API and route coverage map",
      "Food Ordering Web Site AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Food Truck Source Feature": {
    "sourceOwners": [
      "foodTruck"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tailwind.Config",
      "Main",
      "AI"
    ],
    "outputs": [
      "Food Truck merged workflow register",
      "Food Truck API and route coverage map",
      "Food Truck AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Independent Restaurant Source Feature": {
    "sourceOwners": [
      "independentRestaurant"
    ],
    "operatingQueues": [
      "Tool:Tailwind.Config",
      "AI Helpers",
      "Email",
      "Route"
    ],
    "outputs": [
      "Independent Restaurant merged workflow register",
      "Independent Restaurant API and route coverage map",
      "Independent Restaurant AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-food-flow-order": {
    "workItems": [
      {
        "id": "source-ai-food-flow-order-work-1",
        "item": "Use Call Management",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/hooks/useCallManagement.tsx"
      },
      {
        "id": "source-ai-food-flow-order-work-2",
        "item": "Open Router Service",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/services/openRouterService.ts"
      },
      {
        "id": "source-ai-food-flow-order-work-3",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-ai-food-flow-order-work-4",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/main.tsx"
      },
      {
        "id": "source-ai-food-flow-order-work-5",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/services/api/ai.ts"
      },
      {
        "id": "source-ai-food-flow-order-work-6",
        "item": "Sustainability",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/services/api/sustainability.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-food-flow-order-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-food-flow-order-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-food-flow-order-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-food-flow-order-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-food-flow-order-log-1",
        "message": "Deep-merge feature generated from ai-food-flow-order",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-food-flow-order-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-bakery-production-manager": {
    "workItems": [
      {
        "id": "source-ai-bakery-production-manager-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/services/openrouter.js"
      },
      {
        "id": "source-ai-bakery-production-manager-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-bakery-production-manager-work-3",
        "item": "AI Features",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIFeatures.jsx"
      },
      {
        "id": "source-ai-bakery-production-manager-work-4",
        "item": "No Agentic Supplier Substitution Decisioning Surfa Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAgenticSupplierSubstitutionDecisioningSurfaPage.jsx"
      },
      {
        "id": "source-ai-bakery-production-manager-work-5",
        "item": "No AI Dynamic Pricing For Daily Fresh Goods Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiDynamicPricingForDailyFreshGoodsPage.jsx"
      },
      {
        "id": "source-ai-bakery-production-manager-work-6",
        "item": "No E Commerce Storefront For Retail Orders Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoECommerceStorefrontForRetailOrdersPage.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-bakery-production-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-bakery-production-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-bakery-production-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-bakery-production-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-bakery-production-manager-log-1",
        "message": "Deep-merge feature generated from AIBakeryProductionManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-bakery-production-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-brewery-craft-beverage-ops": {
    "workItems": [
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-1",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-2",
        "item": "AI Feature Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIFeaturePage.jsx"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-3",
        "item": "AI History Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIHistoryPage.jsx"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-4",
        "item": "Agentic Brew Day Assistant Orchestrating Recipe Wa Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AgenticBrewDayAssistantOrchestratingRecipeWaPage.jsx"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-5",
        "item": "No AI Customer Feedback Sentiment Loop Into Recipe Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiCustomerFeedbackSentimentLoopIntoRecipePage.jsx"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-work-6",
        "item": "No AI Tap Room Demand Forecasting Per Hour Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiTapRoomDemandForecastingPerHourPage.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-brewery-craft-beverage-ops-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-brewery-craft-beverage-ops-log-1",
        "message": "Deep-merge feature generated from AIBreweryCraftBeverageOps",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-commercial-kitchen-equipment-maintenance": {
    "workItems": [
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/openrouter.js"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-4",
        "item": "AI Center Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICenterPage.jsx"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-5",
        "item": "AI Lab Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AILabPage.jsx"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-work-6",
        "item": "Agentic Field Service Dispatcher Routing Jobs By S Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AgenticFieldServiceDispatcherRoutingJobsBySPage.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-log-1",
        "message": "Deep-merge feature generated from AICommercialKitchenEquipmentMaintenance",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-food-bank-pantry-manager": {
    "workItems": [
      {
        "id": "source-ai-food-bank-pantry-manager-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/openrouter.js"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-work-3",
        "item": "AI Advanced Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdvancedTools.jsx"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-work-4",
        "item": "AI History",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIHistory.jsx"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-work-5",
        "item": "AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AITools.jsx"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-work-6",
        "item": "Detail Panel",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/DetailPanel.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-food-bank-pantry-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-food-bank-pantry-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-food-bank-pantry-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-food-bank-pantry-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-food-bank-pantry-manager-log-1",
        "message": "Deep-merge feature generated from AIFoodBankPantryManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-ghost-kitchen-network-manager": {
    "workItems": [
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-1",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-2",
        "item": "AI Brand Concept",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBrandConcept.jsx"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-3",
        "item": "AI Brand Portfolio",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBrandPortfolio.jsx"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-4",
        "item": "AI Cannibalization Detection",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICannibalizationDetection.jsx"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-5",
        "item": "AI Demand Forecast",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDemandForecast.jsx"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-work-6",
        "item": "AI Driver Route Optimization",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDriverRouteOptimization.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-ghost-kitchen-network-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-ghost-kitchen-network-manager-log-1",
        "message": "Deep-merge feature generated from AIGhostKitchenNetworkManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-hotel-revenue-manager": {
    "workItems": [
      {
        "id": "source-ai-hotel-revenue-manager-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-hotel-revenue-manager-work-2",
        "item": "AI War Room",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiWarRoom.js"
      },
      {
        "id": "source-ai-hotel-revenue-manager-work-3",
        "item": "Dynamic Pricing AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/dynamicPricingAI.js"
      },
      {
        "id": "source-ai-hotel-revenue-manager-work-4",
        "item": "Gap No Competitor Rate AI Recommender",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-competitor-rate-ai-recommender.js"
      },
      {
        "id": "source-ai-hotel-revenue-manager-work-5",
        "item": "Gap No Guest Segmentation AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-guest-segmentation-ai.js"
      },
      {
        "id": "source-ai-hotel-revenue-manager-work-6",
        "item": "Maintenance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/maintenance.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-hotel-revenue-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-hotel-revenue-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-hotel-revenue-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-hotel-revenue-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-hotel-revenue-manager-log-1",
        "message": "Deep-merge feature generated from AIHotelRevenueManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-hotel-revenue-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-menu-digitizer": {
    "workItems": [
      {
        "id": "source-ai-menu-digitizer-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/services/openrouter.ts"
      },
      {
        "id": "source-ai-menu-digitizer-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-ai-menu-digitizer-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.tsx"
      },
      {
        "id": "source-ai-menu-digitizer-work-4",
        "item": "AI Analysis Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAnalysisPage.tsx"
      },
      {
        "id": "source-ai-menu-digitizer-work-5",
        "item": "AI Cost Analysis Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICostAnalysisPage.tsx"
      },
      {
        "id": "source-ai-menu-digitizer-work-6",
        "item": "Gap Agentic",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAgentic.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-menu-digitizer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-menu-digitizer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-menu-digitizer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-menu-digitizer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-menu-digitizer-log-1",
        "message": "Deep-merge feature generated from AIMenuDigitizer",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-menu-digitizer-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-catering-service": {
    "workItems": [
      {
        "id": "source-catering-service-work-1",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-catering-service-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-catering-service-work-3",
        "item": "AI Assistant",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAssistant.jsx"
      },
      {
        "id": "source-catering-service-work-4",
        "item": "AI Insights",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIInsights.jsx"
      },
      {
        "id": "source-catering-service-work-5",
        "item": "Event Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/EventDetail.jsx"
      },
      {
        "id": "source-catering-service-work-6",
        "item": "AI Delivery Route Optimization Gap AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/Batch09/AiDeliveryRouteOptimizationGapAi.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-catering-service-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-catering-service-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-catering-service-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-catering-service-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-catering-service-log-1",
        "message": "Deep-merge feature generated from cateringService",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-catering-service-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-food-ordering-web-site": {
    "workItems": [
      {
        "id": "source-food-ordering-web-site-work-1",
        "item": "Openai",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/openai.ts"
      },
      {
        "id": "source-food-ordering-web-site-work-2",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.js"
      },
      {
        "id": "source-food-ordering-web-site-work-3",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-food-ordering-web-site-work-4",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/main.tsx"
      },
      {
        "id": "source-food-ordering-web-site-work-5",
        "item": "AI Features Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/pages/AIFeaturesPage.tsx"
      },
      {
        "id": "source-food-ordering-web-site-work-6",
        "item": "AI Services",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai-services.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-food-ordering-web-site-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-food-ordering-web-site-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-food-ordering-web-site-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-food-ordering-web-site-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-food-ordering-web-site-log-1",
        "message": "Deep-merge feature generated from FoodOrderingWebSite",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-food-ordering-web-site-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-food-truck": {
    "workItems": [
      {
        "id": "source-food-truck-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/services/openrouter.js"
      },
      {
        "id": "source-food-truck-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-food-truck-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-food-truck-work-4",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AI.jsx"
      },
      {
        "id": "source-food-truck-work-5",
        "item": "AI Advanced",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdvanced.jsx"
      },
      {
        "id": "source-food-truck-work-6",
        "item": "Cf Crew Scheduling AI Fairness Fatigue Skill",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfCrewSchedulingAiFairnessFatigueSkill.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-food-truck-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-food-truck-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-food-truck-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-food-truck-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-food-truck-log-1",
        "message": "Deep-merge feature generated from foodTruck",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-food-truck-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-independent-restaurant": {
    "workItems": [
      {
        "id": "source-independent-restaurant-work-1",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-independent-restaurant-work-2",
        "item": "AI Helpers",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai-helpers.ts"
      },
      {
        "id": "source-independent-restaurant-work-3",
        "item": "Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/email.ts"
      },
      {
        "id": "source-independent-restaurant-work-4",
        "item": "Route",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/app/api/waitlist/route.ts"
      },
      {
        "id": "source-independent-restaurant-work-5",
        "item": "Route",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/app/api/waitlist/[id]/route.ts"
      },
      {
        "id": "source-independent-restaurant-work-6",
        "item": "Route",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/app/api/gap-no-vendor-supplier-procurement-ai/route.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-independent-restaurant-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-independent-restaurant-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-independent-restaurant-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-independent-restaurant-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-independent-restaurant-log-1",
        "message": "Deep-merge feature generated from independentRestaurant",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-independent-restaurant-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-food-flow-order": {
    "title": "AI Food Flow Order Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-food-flow-order-entity-1",
        "name": "Use Call Management",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-food-flow-order-entity-2",
        "name": "Open Router Service",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-flow-order-entity-3",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-flow-order-entity-4",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-flow-order-entity-5",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-bakery-production-manager": {
    "title": "AI Bakery Production Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-bakery-production-manager-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-bakery-production-manager-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-bakery-production-manager-entity-3",
        "name": "AI Features",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-bakery-production-manager-entity-4",
        "name": "No Agentic Supplier Substitution Decisioning Surfa Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-bakery-production-manager-entity-5",
        "name": "No AI Dynamic Pricing For Daily Fresh Goods Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-brewery-craft-beverage-ops": {
    "title": "AI Brewery Craft Beverage Ops Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-brewery-craft-beverage-ops-entity-1",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-entity-2",
        "name": "AI Feature Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-entity-3",
        "name": "AI History Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-entity-4",
        "name": "Agentic Brew Day Assistant Orchestrating Recipe Wa Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-brewery-craft-beverage-ops-entity-5",
        "name": "No AI Customer Feedback Sentiment Loop Into Recipe Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-commercial-kitchen-equipment-maintenance": {
    "title": "AI Commercial Kitchen Equipment Maintenance Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-entity-4",
        "name": "AI Center Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-commercial-kitchen-equipment-maintenance-entity-5",
        "name": "AI Lab Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-food-bank-pantry-manager": {
    "title": "AI Food Bank Pantry Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-food-bank-pantry-manager-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-entity-3",
        "name": "AI Advanced Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-entity-4",
        "name": "AI History",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-food-bank-pantry-manager-entity-5",
        "name": "AI Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-ghost-kitchen-network-manager": {
    "title": "AI Ghost Kitchen Network Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-ghost-kitchen-network-manager-entity-1",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-entity-2",
        "name": "AI Brand Concept",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-entity-3",
        "name": "AI Brand Portfolio",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-entity-4",
        "name": "AI Cannibalization Detection",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-ghost-kitchen-network-manager-entity-5",
        "name": "AI Demand Forecast",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-hotel-revenue-manager": {
    "title": "AI Hotel Revenue Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-hotel-revenue-manager-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-hotel-revenue-manager-entity-2",
        "name": "AI War Room",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-hotel-revenue-manager-entity-3",
        "name": "Dynamic Pricing AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-hotel-revenue-manager-entity-4",
        "name": "Gap No Competitor Rate AI Recommender",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-hotel-revenue-manager-entity-5",
        "name": "Gap No Guest Segmentation AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-menu-digitizer": {
    "title": "AI Menu Digitizer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-menu-digitizer-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-menu-digitizer-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-menu-digitizer-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-menu-digitizer-entity-4",
        "name": "AI Analysis Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-menu-digitizer-entity-5",
        "name": "AI Cost Analysis Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-catering-service": {
    "title": "Catering Service Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-catering-service-entity-1",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-catering-service-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-catering-service-entity-3",
        "name": "AI Assistant",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-catering-service-entity-4",
        "name": "AI Insights",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-catering-service-entity-5",
        "name": "Event Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-food-ordering-web-site": {
    "title": "Food Ordering Web Site Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-food-ordering-web-site-entity-1",
        "name": "Openai",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-food-ordering-web-site-entity-2",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-ordering-web-site-entity-3",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-ordering-web-site-entity-4",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-ordering-web-site-entity-5",
        "name": "AI Features Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-food-truck": {
    "title": "Food Truck Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-food-truck-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-food-truck-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-truck-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-truck-entity-4",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-food-truck-entity-5",
        "name": "AI Advanced",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-independent-restaurant": {
    "title": "Independent Restaurant Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-independent-restaurant-entity-1",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-independent-restaurant-entity-2",
        "name": "AI Helpers",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-independent-restaurant-entity-3",
        "name": "Email",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-independent-restaurant-entity-4",
        "name": "Route",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-independent-restaurant-entity-5",
        "name": "Route",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "ai-food-flow-order": "/features/source-ai-food-flow-order",
  "AIBakeryProductionManager": "/features/source-ai-bakery-production-manager",
  "AIBreweryCraftBeverageOps": "/features/source-ai-brewery-craft-beverage-ops",
  "AICommercialKitchenEquipmentMaintenance": "/features/source-ai-commercial-kitchen-equipment-maintenance",
  "AIFoodBankPantryManager": "/features/source-ai-food-bank-pantry-manager",
  "AIGhostKitchenNetworkManager": "/features/source-ai-ghost-kitchen-network-manager",
  "AIHotelRevenueManager": "/features/source-ai-hotel-revenue-manager",
  "AIMenuDigitizer": "/features/source-ai-menu-digitizer",
  "cateringService": "/features/source-catering-service",
  "FoodOrderingWebSite": "/features/source-food-ordering-web-site",
  "foodTruck": "/features/source-food-truck",
  "independentRestaurant": "/features/source-independent-restaurant"
};
