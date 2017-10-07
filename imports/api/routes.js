import Dashboard from '../components/pages/Dashboard';
import CompaniesConnect from '../components/pages/companies/CompaniesConnect';
import Contact from '../components/pages/contact/Contact';
import Company from '../components/pages/company/Company';
import Opportunity from '../components/pages/opportunity/Opportunity';
import Contacts from '../components/pages/contacts/Contacts';
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
    exact: true,
    title: 'Contacts',
    component: Contacts,
    overlay: 'ADD_CONTACT',
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
