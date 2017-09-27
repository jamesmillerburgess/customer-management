import TextField from '../../fields/textField/TextField';
import StatusField from '../../fields/statusField/StatusField';
import CompanyField from '../../fields/companyField/CompanyField';

export const addOpportunityFields = [
  { prop: 'name', label: 'Name', component: TextField, default: '' },
  {
    prop: 'status',
    label: 'Status',
    component: StatusField,
    default: 'APPOINTMENT_SCHEDULED',
  },
  { prop: 'amount', label: 'Amount', component: TextField, default: '' },
  // { prop: 'closeDate', label: 'Close Date' },
  { prop: 'company', label: 'Company', component: CompanyField, default: null },
];
