export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'FoodOrderingWebSite', ownership: 'Locations source capabilities and workflows', coverage: ['Locations', 'Menus', 'Orders'] },
  { name: 'independentRestaurant', ownership: 'Menus source capabilities and workflows', coverage: ['Reservations', 'Kitchen', 'Inventory'] },
  { name: 'AIHotelRevenueManager', ownership: 'Orders source capabilities and workflows', coverage: ['Staffing', 'Vendors', 'Catering'] },
  { name: 'AIGhostKitchenNetworkManager', ownership: 'Reservations source capabilities and workflows', coverage: ['Revenue', 'Reviews', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Locations', value: '84', note: 'Active' },
  { label: 'Menus', value: '61', note: 'Open' },
  { label: 'Orders', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Locations operating view', 'Menus operating view', 'Orders operating view', 'Reservations operating view', 'Kitchen operating view', 'Inventory operating view', 'Staffing operating view', 'Vendors operating view'];
export const workflowHighlights = ['Locations workflow with records, approvals, audit, and reporting', 'Menus workflow with records, approvals, audit, and reporting', 'Orders workflow with records, approvals, audit, and reporting', 'Reservations workflow with records, approvals, audit, and reporting', 'Kitchen workflow with records, approvals, audit, and reporting'];
