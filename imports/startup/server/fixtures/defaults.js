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
    type: 'CONTACT_LEAD_STATUS',
    options: [
      { value: 'LEAD', label: 'Lead' },
      { value: 'MARKETING_QUALIFIED', label: 'Marketing Qualified' },
      { value: 'SALES_QUALIFIED', label: 'Sales Qualified' },
    ],
  },
  {
    type: 'CONTACT_LIFECYCLE_STAGE',
    options: [],
  },
];

export const FIELD_LISTS = [
  {
    page: 'ADD_CONTACT',
    fields: [
      { prop: 'name', label: 'Name', type: 'TEXT', default: '' },
      { prop: 'email', label: 'Email', type: 'TEXT', default: '' },
      {
        prop: 'company',
        label: 'Company',
        type: 'COMPANY',
        default: null,
      },
    ],
  },
  {
    page: 'CONTACT_PROPERTIES',
    fields: [
      { name: 'name', label: 'Name', fieldType: 'TEXT', default: '' },
      { name: 'email', label: 'Email', fieldType: 'TEXT', default: '' },
      {
        name: 'company',
        label: 'Company',
        fieldType: 'COMPANY',
        default: null,
      },
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        fieldType: 'TEXT',
        default: '',
      },
      {
        name: 'lifecycleStage',
        label: 'Lifecycle Stage',
        fieldType: 'TEXT',
        default: '',
      },
      {
        name: 'leadStatus',
        label: 'Lead Status',
        type: 'TEXT',
        default: '',
      },
    ],
  },
];
