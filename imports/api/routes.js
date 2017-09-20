import Dashboard from '../components/Dashboard';
import Companies from '../components/Companies';
import Contacts from '../components/Contacts';

const routes = [
  {
    path: '/',
    title: 'Agility CM',
    component: null,
    exact: true,
    className: 'brand',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: null,
  },
  {
    path: '/contacts',
    title: 'Contacts',
    component: Contacts,
  },
  {
    path: '/companies',
    title: 'Companies',
    component: Companies,
  },
];

export default routes;
