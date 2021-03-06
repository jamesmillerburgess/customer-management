const dede = {
  app: {
    title: 'Agility Customer Management',
  },
  nav: {
    dashboard: 'Dashboard',
    contacts: 'Contacts',
    companies: 'Companies',
    opportunities: 'Opportunities',
    search: 'Search',
    profile: 'Profile',
    editProfile: 'Edit profile',
    logIn: 'Log in',
    logOut: 'Log out',
  },
  home: {
    username: 'Username',
    password: 'Password',
    passwordAgain: 'Password again',
    register: 'Register',
    logIn: 'Log in',
    passwordsDoNotMatch: 'Passwords do not match',
  },
  dashboard: {
    title: 'Dashboard',
    searchPlaceholder: 'Search for a report',
    addReport: 'Add report',
    teamActivity: 'Team Activity',
    opportunityForecast: 'Opportunity Forecast (USD)',
    dateFormat: 'MMMM YYYY',
  },
  teamActivity: {
    placeholderTitle: 'Work as a team',
    placeholderText: [
      'Gain insight into the contacts, companies, and opportunities \n' +
        'created, and the interaction with your sales team afterwards.',
      'Once there has been some activity by you or someone on your team,\n' +
        'it will display in this widget.',
      "If you don't have a team yet, you can add one from your profile page.",
    ],
    placeholderButtonText: 'Go to profile',
  },
  opportunityForecast: {
    placeholderTitle: 'Forecast your sales',
    placeholderText: [
      "Keep up to date with your team's progress towards its quota each month.",
      'Once your team has an opportunity closing this month, a graph of \n' +
        'your forecast will display in this widget.',
      "If you don't have any opportunities yet, you can create one from \n" +
        'the opportunities page.',
    ],
    placeholderButtonText: 'Go to opportunities',
  },
  timeline: {
    creation: ['%{username} created ', ' '],
    note: ['%{username} left a note on ', ' '],
    call: ['%{username} logged a call to ', ' '],
    email: ['%{username} logged an email to ', ' '],
    meeting: ['%{username} logged a meeting with ', ' '],
    quote: ['%{username} logged a quote to ', ' ', ' '],
    joinTeam: ['%{username} joined ', ' '],
    leaveTeam: ['%{username} left ', ' '],
    statusChange: ['%{username} changed the status of ', ' '],
    dateFormat: 'YYYY[,] MMMM Do [at] h:mm a',
    callOutcome: 'Call outcome',
    quoteNumber: 'Quote number',
    newStatus: 'New status',
  },
  contacts: {
    title: 'Contacts',
    addButtonText: 'Add contact',
    addOverlayTitle: 'Add contacts',
    addOverlayConfirmButtonText: 'Create contact',
    addOverlayCancelButtonText: 'Cancel',
    allSidebarText: 'All contacts',
    nameColumn: 'Name',
    createDateColumn: 'Create date',
    dateFormat: 'MMM DD[,] YYYY',
    noDataText: 'No contacts yet!',
    fields: {
      name: 'Name',
      company: 'Company',
      position: 'Position',
      contactType: 'Contact type',
      email: 'Email',
      phoneNumber: 'Phone number',
    },
  },
  companies: {
    title: 'Companies',
    addButtonText: 'Add company',
    addOverlayTitle: 'Add companies',
    addOverlayConfirmButtonText: 'Create company',
    addOverlayCancelButtonText: 'Cancel',
    allSidebarText: 'All companies',
    nameColumn: 'Name',
    createDateColumn: 'Create date',
    dateFormat: 'MMM DD[,] YYYY',
    noDataText: 'No companies yet!',
    fields: {
      name: 'Name',
      lifecycleStage: 'Lifecycle stage',
      status: 'Status',
      website: 'Website',
      industry: 'Industry',
      phoneNumber: 'Phone number',
      streetAddress: 'Street address',
      city: 'City',
      stateRegion: 'State/Region',
      postalCode: 'Postal code',
      numberOfEmployees: 'Number of employees',
      annualRevenue: 'Annual revenue',
      timeZone: 'Time zone',
      description: 'Description',
    },
  },
  opportunities: {
    title: 'Opportunities',
    addButtonText: 'Add opportunities',
    addOverlayTitle: 'Add opportunities',
    addOverlayConfirmButtonText: 'Create opportunity',
    addOverlayCancelButtonText: 'Cancel',
    total: 'Total',
    fields: {
      name: 'Name',
      amount: 'Amount',
      amountPlaceholder: 'Opportunity amount',
      closeDate: 'Close date',
      closeDatePlaceholder: 'Opportunity close date',
      status: 'Status',
      company: 'Company',
      opportunityType: 'Opportunity type',
    },
  },
  profile: {
    title: 'Profile',
    basicInfo: 'Basic info',
    ownedTeams: 'Owned teams',
    username: 'Username',
    team: 'Team',
    locale: 'Locale',
    teamName: 'Team name',
    createTeamButtonText: 'Create team',
    noTeams: 'No teams yet!',
    nameColumn: 'Name',
    membersColumn: 'Members',
    createDateColumn: 'Create date',
  },
  interactionMenu: {
    newNote: 'New note',
    logCall: 'Log call',
    logEmail: 'Log email',
    logMeeting: 'Log meeting',
    logQuote: 'Log quote',
  },
  interaction: {
    dateAndTime: 'Date and time',
    outcome: 'Outcome',
    outcomePlaceholder: 'Select an outcome...',
    quoteNumber: 'Quote number',
    noteTextPlaceholder: 'Start typing to leave a note...',
    callTextPlaceholder: 'Start typing to describe a call...',
    emailTextPlaceholder: 'Start typing to describe an email...',
    meetingTextPlaceholder: 'Start typing to describe a meeting...',
    quoteTextPlaceholder: 'Start typing to describe a quote...',
    noteConfirmText: 'Add note',
    callConfirmText: 'Log call',
    emailConfirmText: 'Log email',
    meetingConfirmText: 'Log meeting',
    quoteConfirmText: 'Log quote',
    cancelButtonText: 'Cancel',
  },
  editProperties: {
    aboutText: 'about %{name}',
    saveButtonText: 'Save',
    cancelButtonText: 'Cancel',
    singularPropertiesChangedText: "You've changed 1 property",
    pluralPropertiesChangedText:
      "You've changed %{numEditedProperties} properties",
  },
  callOutcomes: {
    NO_ANSWER: 'No answer',
    BUSY: 'Busy',
    WRONG_NUMBER: 'Wrong number',
    LEFT_LIVE_MESSAGE: 'Left live message',
    LEFT_VOICEMAIL: 'Left voicemail',
    CONNECTED: 'Connected',
  },
  opportunityStatuses: {
    APPOINTMENT_SCHEDULED: 'Appointment Scheduled',
    QUALIFIED_TO_BUY: 'Qualified to Buy',
    PRESENTATION_SCHEDULED: 'Presentation Scheduled',
    DECISION_MAKER_BOUGHT_IN: 'Decision Maker Bought-In',
    CONTRACT_SENT: 'Contract Sent',
    CLOSED_WON: 'Closed Won',
    CLOSED_LOST: 'Closed Lost',
  },
  opportunityType: {
    NEW_BUSINESS: 'New business',
    EXISTING_BUSINESS: 'Existing business',
  },
  contactTypes: {
    ADMINISTRATION: 'Administration',
    DECISION_MAKER: 'Decision maker',
    FINANCE: 'Finance',
    INFLUENCER: 'Influencer',
    KEY: 'Key',
    OPERATIONS: 'Operations',
  },
  companyLifecycleStages: {
    PARTY: 'Party',
    LEAD: 'Lead',
    PROSPECT: 'Prospect',
    CUSTOMER: 'Customer',
  },
  companyStatuses: {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    EXITED: 'Exited',
  },
  dateFieldFormat: 'DD MMM YYYY',
  tableEditor: {
    delete: 'Delete',
    singularSelectedText: "You've selected 1 row",
    pluralSelectedText: "You've selected %{numSelectedRows} rows",
  },
};

export default dede;
