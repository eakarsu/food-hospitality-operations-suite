export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['locations', 'Locations Records', 'Locations priority queue', 'Open', 'Locations exception list', 'Operations Lead', '$0'],
  ['menus', 'Menus Records', 'Menus priority queue', 'Review', 'Menus exception list', 'Operations Lead', '$0'],
  ['orders', 'Orders Records', 'Orders priority queue', 'Action needed', 'Orders exception list', 'Operations Lead', '$0'],
  ['reservations', 'Reservations Records', 'Reservations priority queue', 'Open', 'Reservations exception list', 'Operations Lead', '$0'],
  ['kitchen', 'Kitchen Records', 'Kitchen priority queue', 'Review', 'Kitchen exception list', 'Operations Lead', '$0'],
  ['inventory', 'Inventory Records', 'Inventory priority queue', 'Action needed', 'Inventory exception list', 'Operations Lead', '$0'],
  ['staffing', 'Staffing Records', 'Staffing priority queue', 'Open', 'Staffing exception list', 'Operations Lead', '$0'],
  ['vendors', 'Vendors Records', 'Vendors priority queue', 'Review', 'Vendors exception list', 'Operations Lead', '$0'],
  ['catering', 'Catering Records', 'Catering priority queue', 'Action needed', 'Catering exception list', 'Governance Lead', '$0'],
  ['revenue', 'Revenue Records', 'Revenue priority queue', 'Open', 'Revenue exception list', 'Governance Lead', '$0'],
  ['reviews', 'Reviews Records', 'Reviews priority queue', 'Review', 'Reviews exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
