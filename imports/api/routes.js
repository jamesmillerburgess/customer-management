import Dashboard from '../components/pages/Dashboard';
import Companies from '../components/pages/Companies';
import Contacts from '../components/pages/Contacts';
import ProfileConnect from '../components/pages/ProfileConnect';

const routes = [
  {
    path: '/',
    title: 'Agility CM',
    component: Dashboard,
    exact: true,
    className: 'brand',
    isNavLink: true,
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
    isNavLink: true,
  },
  {
    path: '/contacts',
    title: 'Contacts',
    component: Contacts,
    isNavLink: true,
  },
  {
    path: '/companies',
    title: 'Companies',
    component: Companies,
    isNavLink: true,
  },
  {
    path: '/profile',
    component: ProfileConnect,
    isNavLink: false,
  },
];

export default routes;
