## vNEXT

* Meteor Application Performance Management tool activated
* Ability to change opportunity status in mobile layout
* Localized strings, dates, and numbers throughout the application
* Select locale in Edit profile -> Basic info
* Translations added for English (United States), English (United Kingdom),
French (Canada), French (France), and Korean

## v1.1.0 – Mobile Layout

* Format for mobile on screens smaller than 750 pixels in width

## v1.0.0 – Data Entry and Workflow

* Ability to enter all necessary data into the application
* Support of the sales process through object workflows
* Reporting on activity and sales pipeline by `Team`
* Intuitive and simple user interface
* Extremely fast performance, even on slow or spotty internet connections

## Other Changes after v0.9.0

* Add validation to object creation instead of crashing when `Name` is blank
* Gracefully handle long names in the object editors
* Add timeline entries to members joining/leaving teams
* Fixed issue with subscriptions not updating until state has been updated after
loading
* Automated test harness for acceptance tests
* Automated deployment to live site triggered by new passing builds on `devel` 
branch (this is more frequent than the minor version increments like v0.9.0)
* Made async option fields more reliable (`Team` and `Company` fields)

## v0.9.0 – Dashboard

* Team Activity dashboard widget
* Opportunity Forecast dashboard widget
* Use smart caching to eliminate load time between tabs and most object editors
* Greatly improve async search fields such as `company` and `team` so that they 
make use of any previous search results and client-side data and so that they 
handle race conditions on server calls

## v0.8.0 – Teams

* Updated profile page with Basic Info and Owned Teams section
* Change own team from Basic Info
* Create/Delete teams from Owned Teams section

## v0.7.0 – Interactions

* Log call, Log email, and Log meeting interactions
* New interactions display and sort in timeline using specified dates and times

## v0.6.0 – Contacts

* Contacts list page
* Contact page with timeline and properties editor

## v0.5.0 – Opportunities 2

* Opportunity page with visual status flow bar
* Add notes to opportunity and edit properties
* Link to associated company from opportunity page

## v0.4.0 – Opportunities

* Opportunities page with drag and drop workflow
* Opportunity creation overlay form
* Status change on opportunities adds to the timeline of associated companies

## v0.3.0 – Companies

* Company creation overlay form
* Company properties editor
* Add notes to company
* Company timeline display
* Link between companies grid and individual company pages

## v0.2.0 – Accounts

* Placed menu items behind authorized routes
* Login/register page with error handling
* Profile button is a dropdown with edit profile and logout buttons
* Username on profile button reactively responds to changes

## v0.1.0 – Basic Navigation

* Basic UI Theme
* Top level menu navigation
* Page layout for dashboard
* Page layout for grids (contacts and companies)
