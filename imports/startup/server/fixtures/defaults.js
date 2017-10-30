export const FIELD_OPTIONS = [
  {
    type: 'LANGUAGE',
    options: [
      { value: 'en-us', label: 'EN-US – English (United States)' },
      { value: 'ko', label: 'KO – 한국어' },
    ],
  },
  {
    type: 'OPPORTUNITY_STATUS',
    options: [
      {
        value: 'APPOINTMENT_SCHEDULED',
        label: 'opportunityStatuses.APPOINTMENT_SCHEDULED',
      },
      {
        value: 'QUALIFIED_TO_BUY',
        label: 'opportunityStatuses.QUALIFIED_TO_BUY',
      },
      {
        value: 'PRESENTATION_SCHEDULED',
        label: 'opportunityStatuses.PRESENTATION_SCHEDULED',
      },
      {
        value: 'DECISION_MAKER_BOUGHT_IN',
        label: 'opportunityStatuses.DECISION_MAKER_BOUGHT_IN',
      },
      { value: 'CONTRACT_SENT', label: 'opportunityStatuses.CONTRACT_SENT' },
      { value: 'CLOSED_WON', label: 'opportunityStatuses.CLOSED_WON' },
      { value: 'CLOSED_LOST', label: 'opportunityStatuses.CLOSED_LOST' },
    ],
  },
  {
    type: 'COMPANY_LIFECYCLE_STAGE',
    options: [
      { value: '', label: '' },
      { value: 'PARTY', label: 'companyLifecycleStages.PARTY' },
      { value: 'LEAD', label: 'companyLifecycleStages.LEAD' },
      { value: 'PROSPECT', label: 'companyLifecycleStages.PROSPECT' },
      { value: 'CUSTOMER', label: 'companyLifecycleStages.CUSTOMER' },
    ],
  },
  {
    type: 'COMPANY_STATUS',
    options: [
      { value: '', label: '' },
      { value: 'ACTIVE', label: 'companyStatuses.ACTIVE' },
      { value: 'INACTIVE', label: 'companyStatuses.INACTIVE' },
      { value: 'EXITED', label: 'companyStatuses.EXITED' },
    ],
  },
  {
    type: 'CONTACT_TYPE',
    options: [
      { value: '', label: '' },
      { value: 'ADMINISTRATION', label: 'contactTypes.ADMINISTRATION' },
      { value: 'DECISION_MAKER', label: 'contactTypes.DECISION_MAKER' },
      { value: 'FINANCE', label: 'contactTypes.FINANCE' },
      { value: 'INFLUENCER', label: 'contactTypes.INFLUENCER' },
      { value: 'KEY', label: 'contactTypes.KEY' },
      { value: 'OPERATIONS', label: 'contactTypes.OPERATIONS' },
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
      { value: 'NEW_BUSINESS', label: 'opportunityType.NEW_BUSINESS' },
      {
        value: 'EXISTING_BUSINESS',
        label: 'opportunityType.EXISTING_BUSINESS',
      },
    ],
  },
];

export const FIELD_LISTS = [
  {
    page: 'ADD_CONTACT',
    fields: [
      {
        name: 'name',
        label: 'contacts.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'company',
        label: 'contacts.fields.company',
        type: 'COMPANY',
        default: null,
      },
      {
        name: 'position',
        label: 'contacts.fields.position',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'contactType',
        label: 'contacts.fields.contactType',
        type: 'CONTACT_TYPE',
        default: '',
      },
    ],
  },
  {
    page: 'ADD_COMPANY',
    fields: [
      {
        name: 'name',
        label: 'companies.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'lifecycleStage',
        label: 'companies.fields.lifecycleStage',
        type: 'COMPANY_LIFECYCLE_STAGE',
        default: '',
      },
      {
        name: 'status',
        label: 'companies.fields.status',
        type: 'COMPANY_STATUS',
        default: '',
      },
      {
        name: 'website',
        label: 'companies.fields.website',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'industry',
        label: 'companies.fields.industry',
        type: 'TEXT',
        default: '',
      },
    ],
  },
  {
    page: 'ADD_OPPORTUNITY',
    fields: [
      {
        name: 'name',
        label: 'opportunities.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'status',
        label: 'opportunities.fields.status',
        type: 'OPPORTUNITY_STATUS',
        default: 'APPOINTMENT_SCHEDULED',
      },
      {
        name: 'amount',
        label: 'opportunities.fields.amount',
        type: 'NUMBER',
        default: '',
      },
      {
        name: 'closeDate',
        label: 'opportunities.fields.closeDate',
        type: 'DATE',
        default: '',
      },
      {
        name: 'company',
        label: 'opportunities.fields.company',
        type: 'COMPANY',
        default: null,
      },
    ],
  },
  {
    page: 'CONTACT_PROPERTIES',
    fields: [
      {
        name: 'name',
        label: 'contacts.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'company',
        label: 'contacts.fields.company',
        type: 'COMPANY',
        default: null,
      },
      {
        name: 'position',
        label: 'contacts.fields.position',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'contactType',
        label: 'contacts.fields.contactType',
        type: 'CONTACT_TYPE',
        default: '',
      },
      {
        name: 'email',
        label: 'contacts.fields.email',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'phoneNumber',
        label: 'contacts.fields.phoneNumber',
        type: 'TEXT',
        default: '',
      },
    ],
  },
  {
    page: 'COMPANY_PROPERTIES',
    fields: [
      {
        name: 'name',
        label: 'companies.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'lifecycleStage',
        label: 'companies.fields.lifecycleStage',
        type: 'COMPANY_LIFECYCLE_STAGE',
        default: '',
      },
      {
        name: 'status',
        label: 'companies.fields.status',
        type: 'COMPANY_STATUS',
        default: '',
      },
      {
        name: 'website',
        label: 'companies.fields.website',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'industry',
        label: 'companies.fields.industry',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'phoneNumber',
        label: 'companies.fields.phoneNumber',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'streetAddress',
        label: 'companies.fields.streetAddress',
        type: 'text',
      },
      {
        name: 'city',
        label: 'companies.fields.city',
        type: 'TEXT',
      },
      {
        name: 'stateRegion',
        label: 'companies.fields.stateRegion',
        type: 'TEXT',
      },
      {
        name: 'postalCode',
        label: 'companies.fields.postalCode',
        type: 'TEXT',
      },
      {
        name: 'numberOfEmployees',
        label: 'companies.fields.numberOfEmployees',
        type: 'TEXT',
      },
      {
        name: 'annualRevenue',
        label: 'companies.fields.annualRevenue',
        type: 'TEXT',
      },
      {
        name: 'timeZone',
        label: 'companies.fields.timeZone',
        type: 'TEXT',
      },
      {
        name: 'description',
        label: 'companies.fields.description',
        type: 'TEXT',
      },
    ],
  },
  {
    page: 'OPPORTUNITY_PROPERTIES',
    fields: [
      {
        name: 'name',
        label: 'opportunities.fields.name',
        type: 'TEXT',
        default: '',
      },
      {
        name: 'amount',
        label: 'opportunities.fields.amount',
        type: 'NUMBER',
        default: '',
      },
      {
        name: 'closeDate',
        label: 'opportunities.fields.closeDate',
        type: 'DATE',
        default: '',
      },
      {
        name: 'status',
        label: 'opportunities.fields.status',
        type: 'OPPORTUNITY_STATUS',
        default: 'APPOINTMENT_SCHEDULED',
      },
      {
        name: 'company',
        label: 'opportunities.fields.company',
        type: 'COMPANY',
        default: null,
      },
      {
        name: 'opportunityType',
        label: 'opportunities.fields.opportunityType',
        type: 'OPPORTUNITY_TYPE',
        default: '',
      },
    ],
  },
];
