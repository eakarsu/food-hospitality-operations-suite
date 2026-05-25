import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'locations',
    title: 'Locations',
    href: '/locations',
    category: 'Operations',
    icon: BriefcaseBusiness,
    summary: 'Locations workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Locations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Locations', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'menus',
    title: 'Menus',
    href: '/menus',
    category: 'Operations',
    icon: Users,
    summary: 'Menus workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Menus queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Menus', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'orders',
    title: 'Orders',
    href: '/orders',
    category: 'Operations',
    icon: ClipboardList,
    summary: 'Orders workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Orders queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Orders', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'reservations',
    title: 'Reservations',
    href: '/reservations',
    category: 'Operations',
    icon: CalendarCheck,
    summary: 'Reservations workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reservations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reservations', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'kitchen',
    title: 'Kitchen',
    href: '/kitchen',
    category: 'Operations',
    icon: Activity,
    summary: 'Kitchen workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Kitchen queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Kitchen', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    href: '/inventory',
    category: 'Operations',
    icon: Workflow,
    summary: 'Inventory workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Inventory queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Inventory', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'staffing',
    title: 'Staffing',
    href: '/staffing',
    category: 'Operations',
    icon: FileText,
    summary: 'Staffing workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Staffing queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Staffing', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'vendors',
    title: 'Vendors',
    href: '/vendors',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Vendors workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Vendors queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Vendors', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'catering',
    title: 'Catering',
    href: '/catering',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Catering workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Catering queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Catering', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'revenue',
    title: 'Revenue',
    href: '/revenue',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Revenue workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Revenue queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Revenue', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'reviews',
    title: 'Reviews',
    href: '/reviews',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Reviews workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reviews queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reviews', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Food Hospitality Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Food Hospitality Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Food Hospitality Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Food Hospitality Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Food Hospitality Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Food Hospitality Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Operations', features: ['Locations', 'Menus', 'Orders', 'Reservations', 'Kitchen', 'Inventory', 'Staffing', 'Vendors'] },
  { name: 'Operations', features: ['Locations', 'Menus', 'Orders', 'Reservations', 'Kitchen', 'Inventory', 'Staffing', 'Vendors'] },
  { name: 'Governance', features: ['Catering', 'Revenue'] },
  { name: 'Intelligence Layer', features: ['Reviews', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['FoodOrderingWebSite', 'independentRestaurant where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
