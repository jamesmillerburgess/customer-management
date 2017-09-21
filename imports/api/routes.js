import Dashboard from '../components/pages/Dashboard';
import Companies from '../components/pages/Companies';
import Contacts from '../components/pages/Contacts';

const routes = [
  {
    path: '/',
    title: 'Agility CM',
    component: Dashboard,
    exact: true,
    className: 'brand',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
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
