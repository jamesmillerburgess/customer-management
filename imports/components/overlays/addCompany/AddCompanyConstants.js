import TextField from '../../fields/textField/TextField';
import NumericField from '../../fields/numericField/NumericField';
import DateField from '../../fields/dateField/DateField';
import StatusField from '../../fields/statusField/StatusField';
import CompanyField from '../../fields/companyField/CompanyField';

export const addCompanyFields = [
  { prop: 'name', label: 'Name', component: TextField, default: '' },
  { prop: 'website', label: 'Website', component: TextField, default: '' },
];
