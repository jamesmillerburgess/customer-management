import TextField from '../../fields/textField/TextField';
import StatusField from '../../fields/statusField/StatusField';

export const addOpportunityFields = [
  { prop: 'name', label: 'Name', component: TextField },
  { prop: 'status', label: 'Status', component: StatusField },
  { prop: 'amount', label: 'Amount', component: TextField },
  // { prop: 'closeDate', label: 'Close Date' },
  // { prop: 'company', label: 'Company' },
];
