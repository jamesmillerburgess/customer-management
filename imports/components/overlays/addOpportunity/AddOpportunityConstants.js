import TextField from '../../fields/textField/TextField';
import NumericField from '../../fields/numericField/NumericField';
import DateField from '../../fields/dateField/DateField';
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
  { prop: 'amount', label: 'Amount', component: NumericField, default: '' },
  { prop: 'closeDate', label: 'Close Date', component: DateField, default: '' },
  { prop: 'company', label: 'Company', component: CompanyField, default: null },
];
