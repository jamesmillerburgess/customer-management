import TextField from '../../fields/textField/TextField';
import NumberField from '../../fields/numberField/NumberField';
import DateField from '../../fields/dateField/DateField';
import StatusField from '../../fields/statusField/StatusField';
import CompanyField from '../../fields/companyField/CompanyField';

export const OPPORTUNITY_FIELDS = [
  { prop: 'name', label: 'Name', component: TextField, default: '' },
  {
    prop: 'status',
    label: 'Status',
    component: StatusField,
    default: 'APPOINTMENT_SCHEDULED',
  },
  { prop: 'amount', label: 'Amount', component: NumberField, default: '' },
  { prop: 'closeDate', label: 'Close Date', component: DateField, default: '' },
  { prop: 'company', label: 'Company', component: CompanyField, default: null },
];