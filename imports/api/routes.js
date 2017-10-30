import React from 'react';
import { Translate } from 'react-redux-i18n';

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
    title: <Translate value="nav.dashboard" />,
    component: Dashboard,
    icon: 'fa-tachometer',
    isNavLink: true,
  },
  {
    path: '/contacts',
    exact: true,
    title: <Translate value="nav.contacts" />,
    component: ContactList,
    icon: 'fa-address-book',
    overlay: 'ADD_CONTACT',
    isNavLink: true,
  },
  {
    path: '/companies',
    exact: true,
    title: <Translate value="nav.companies" />,
    component: CompanyList,
    icon: 'fa-building',
    overlay: 'ADD_COMPANY',
    isNavLink: true,
  },
  {
    path: '/opportunities',
    exact: true,
    title: <Translate value="nav.opportunities" />,
    component: OpportunitiesConnect,
    icon: 'fa-money',
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
    title: <Translate value="contacts.addOverlayTitle" />,
    confirmLabel: <Translate value="contacts.addOverlayConfirmButtonText" />,
    cancelButtonText: <Translate value="contacts.addOverlayCancelButtonText" />,
  },
  {
    pathPrefix: 'companies',
    createMethod: 'company.create',
    page: 'ADD_COMPANY',
    title: <Translate value="companies.addOverlayTitle" />,
    confirmLabel: <Translate value="companies.addOverlayConfirmButtonText" />,
    cancelButtonText: (
      <Translate value="companies.addOverlayCancelButtonText" />
    ),
  },
  {
    pathPrefix: 'opportunities',
    createMethod: 'opportunity.create',
    page: 'ADD_OPPORTUNITY',
    title: <Translate value="opportunities.addOverlayTitle" />,
    confirmLabel: (
      <Translate value="opportunities.addOverlayConfirmButtonText" />
    ),
    cancelButtonText: (
      <Translate value="opportunities.addOverlayCancelButtonText" />
    ),
  },
];

export default routes;
