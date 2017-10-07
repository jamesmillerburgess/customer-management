export const FIELD_OPTIONS = [
  {
    type: 'OPPORTUNITY_STATUS',
    options: [
      { value: 'APPOINTMENT_SCHEDULED', label: 'Appointment Scheduled' },
      { value: 'QUALIFIED_TO_BUY', label: 'Qualified to Buy' },
      { value: 'PRESENTATION_SCHEDULED', label: 'Presentation Scheduled' },
      { value: 'DECISION_MAKER_BOUGHT_IN', label: 'Decision Maker Bought-In' },
      { value: 'CONTRACT_SENT', label: 'Contract Sent' },
      { value: 'CLOSED_WON', label: 'Closed Won' },
      { value: 'CLOSED_LOST', label: 'Closed Lost' },
    ],
  },
  {
    type: 'CONTACT_LIFECYCLE_STAGE',
    options: [
      { value: '', label: '' },
      { value: 'SUBSCRIBER', label: 'Subscriber' },
      { value: 'LEAD', label: 'Lead' },
      { value: 'MARKETING_QUALIFIED_LEAD', label: 'Marketing Qualified Lead' },
      { value: 'SALES_QUALIFIED_LEAD', label: 'Sales Qualified Lead' },
      { value: 'OPPORTUNITY', label: 'Opportunity' },
      { value: 'CUSTOMER', label: 'Customer' },
      { value: 'EVANGELIST', label: 'Evangelist' },
      { value: 'OTHER', label: 'Other' },
    ],
  },
  {
    type: 'CONTACT_LEAD_STATUS',
    options: [
      { value: '', label: '' },
      { value: 'NEW', label: 'New' },
      { value: 'OPEN', label: 'Open' },
      { value: 'IN_PROGRESS', label: 'In Progress' },
      { value: 'OPEN_DEAL', label: 'Open Deal' },
      { value: 'UNQUALIFIED', label: 'Unqualified' },
    ],
  },
  {
    type: 'OPPORTUNITY_TYPE',
    options: [
      { value: '', label: '' },
      { value: 'NEW_BUSINESS', label: 'New Business' },
      { value: 'EXISTING_BUSINESS', label: 'Existing Business' },
    ],
  },
];

export const FIELD_LISTS = [
  {
    page: 'ADD_CONTACT',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      { name: 'email', label: 'Email', type: 'TEXT', default: '' },
      {
        name: 'company',
        label: 'Company',
        type: 'COMPANY',
        default: null,
      },
    ],
  },
  {
    page: 'ADD_COMPANY',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      { name: 'website', label: 'Website', type: 'TEXT', default: '' },
    ],
  },
  {
    page: 'ADD_OPPORTUNITY',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      {
        name: 'status',
        label: 'Status',
        type: 'OPPORTUNITY_STATUS',
        default: 'APPOINTMENT_SCHEDULED',
      },
      { name: 'amount', label: 'Amount', type: 'NUMBER', default: '' },
      { name: 'closeDate', label: 'Close Date', type: 'DATE', default: '' },
      { name: 'company', label: 'Company', type: 'COMPANY', default: null },
    ],
  },
  {
    page: 'CONTACT_PROPERTIES',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      { name: 'email', label: 'Email', type: 'TEXT', default: '' },
      {
        name: 'company',
        label: 'Company',
        type: 'COMPANY',
        default: null,
      },
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'lifecycleStage',
        label: 'Lifecycle Stage',
        type: 'CONTACT_LIFECYCLE_STAGE',
        default: '',
      },
      {
        name: 'leadStatus',
        label: 'Lead Status',
        type: 'CONTACT_LEAD_STATUS',
        default: '',
      },
    ],
  },
  {
    page: 'COMPANY_PROPERTIES',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      { name: 'website', label: 'Website', type: 'TEXT', default: '' },
      {
        name: 'industry',
        label: 'Industry',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'streetAddress',
        label: 'Street Address',
        type: 'text',
      },
      {
        name: 'city',
        label: 'City',
        type: 'TEXT',
      },
      {
        name: 'stateRegion',
        label: 'State/Region',
        type: 'TEXT',
      },
      {
        name: 'postalCode',
        label: 'Postal Code',
        type: 'TEXT',
      },
      {
        name: 'numberOfEmployees',
        label: 'Number of Employees',
        type: 'TEXT',
      },
      {
        name: 'annualRevenue',
        label: 'Annual Revenue',
        type: 'TEXT',
      },
      {
        name: 'timeZone',
        label: 'Time Zone',
        type: 'TEXT',
      },
      {
        name: 'description',
        label: 'Description',
        type: 'TEXT',
      },
    ],
  },
  {
    page: 'OPPORTUNITY_PROPERTIES',
    fields: [
      { name: 'name', label: 'Name', type: 'TEXT', default: '' },
      { name: 'amount', label: 'Amount', type: 'NUMBER', default: '' },
      {
        name: 'closeDate',
        label: 'Close Date',
        type: 'DATE',
        default: '',
      },
      {
        name: 'company',
        label: 'Company',
        type: 'COMPANY',
        default: null,
      },
      {
        name: 'opportunityType',
        label: 'Opportunity Type',
        type: 'OPPORTUNITY_TYPE',
        default: '',
      },
    ],
  },
];
