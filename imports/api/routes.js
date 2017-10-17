// List pages
import Dashboard from '../components/pages/Dashboard';
import CompanyList from '../components/pages/companyList/CompanyList';
import ContactList from '../components/pages/contactList/ContactList';
import OpportunitiesConnect from '../components/pages/opportunities/OpportunitiesConnect';

// Object Editiors
import Contact from '../components/pages/contact/Contact';
import Company from '../components/pages/company/Company';
import Opportunity from '../components/pages/opportunity/Opportunity';

import Profile from '../components/pages/profile/Profile';

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
    path: '/',
    navPath: '/contacts',
    exact: false,
    title: 'Contacts',
    component: ContactList,
    overlay: 'ADD_CONTACT',
    isNavLink: true,
  },
  {
    path: '/',
    navPath: '/companies',
    exact: false,
    title: 'Companies',
    component: CompanyList,
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
    component: Profile,
    isNavLink: false,
  },
  {
    path: '/contacts/:objectId',
    component: Contact,
    isNavLink: false,
    props: {
      saveMethod: 'contact.save',
      addNoteMethod: 'contact.addNote',
      uriID: 'objectId',
    },
  },
  {
    path: '/companies/:objectId',
    component: Company,
    isNavLink: false,
    props: {
      saveMethod: 'company.save',
      addNoteMethod: 'company.addNote',
      uriID: 'objectId',
    },
  },
  {
    path: '/opportunities/:objectId',
    component: Opportunity,
    isNavLink: false,
    props: {
      saveMethod: 'opportunity.save',
      addNoteMethod: 'opportunity.addNote',
      uriID: 'objectId',
    },
  },
];

export const overlayRoutes = [
  {
    pathPrefix: 'contacts',
    createMethod: 'contact.create',
    page: 'ADD_CONTACT',
  },
  {
    pathPrefix: 'companies',
    createMethod: 'company.create',
    page: 'ADD_COMPANY',
  },
  {
    pathPrefix: 'opportunities',
    createMethod: 'opportunity.create',
    page: 'ADD_OPPORTUNITY',
  },
];

export default routes;
