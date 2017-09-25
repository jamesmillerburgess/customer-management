import Dashboard from '../components/pages/Dashboard';
import CompaniesConnect from '../components/pages/companies/CompaniesConnect';
import CompanyConnect from '../components/pages/company/CompanyConnect';
import Contacts from '../components/pages/Contacts';
import ProfileConnect from '../components/pages/profile/ProfileConnect';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Agility CM',
    component: Dashboard,
    className: 'brand',
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
    exact: true,
    title: 'Companies',
    component: CompaniesConnect,
    isNavLink: true,
  },
  {
    path: '/profile',
    component: ProfileConnect,
    isNavLink: false,
  },
  {
    path: '/companies/:companyId',
    component: CompanyConnect,
    isNavLink: false,
  },
];

export default routes;
