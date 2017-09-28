import Dashboard from '../components/pages/Dashboard';
import CompaniesConnect from '../components/pages/companies/CompaniesConnect';
import CompanyConnect from '../components/pages/company/CompanyConnect';
import Contacts from '../components/pages/Contacts';
import OpportunitiesConnect from '../components/pages/opportunities/OpportunitiesConnect';
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
    overlay: 'ADD_COMPANY',
    isNavLink: true,
  },
  {
    path: '/opportunities',
    exact: true,
    title: 'Opportunities',
    component: OpportunitiesConnect,
    overlay: 'ADD_OPPORTUNITY',
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
