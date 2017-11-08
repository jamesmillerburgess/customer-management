
# Agility Customer Management Vision

### Vision Statement
> Agility Customer Management is a web-based, mobile-first tool for Agility's sales organization, that records and supplies both external and internal data in a way that makes the sales process more efficient, pleasant, and profitable.

### Illustrations
> The sales person should not have to come into the office on Friday and manually update their past and planned activity in the system thanks to automatic population of data and on-site check-ins on their mobile device.

> The sales person is able to more strategically plans his/her activity thanks to dynamically supplied information based on a combination of geolocation, applicable sales initiatives, and comprehensive profiles of companies.

## Lead Management

- Quickly input leads using only address/name (Google Places integration to autopopulate more)
- Find companies ‘near me’ (geolocation)
- Find contacts at company (LinkedIn, etc.)
- Introductory auto-email (from marketing material), auto-schedule follow-up if they click on it/respond
- While on customer visit, check nearby customers to optimize my time and get quick face-time (opportunities that wouldn’t be noticed otherwise)
- Interactive map to visualize potential opportunities
- Country customer profile / optional customer profile (sales manager can target X type of customer or X trade lane or minimum shipment volume/TEU based on existing data)
- Link to external pages stored on company profile (LinkedIn / homepage / etc.)

## Customers
- While on scheduled visit with customer - single button press on mobile to ‘check in’ and ‘check out’ to record
- Upon checkout can leave some notes (enter data when it’s fresh, rather than back at the office)
- Manager gets visibility into live activity
- Pull up profile from SMDM (data fields, current shipments, exceptional shipments)
- Ability to tag customer for other types of opportunities (contract logistics, warehousing, etc.)
- E.g. tag customer with ‘Houston’ when they talk about building a warehouse there (notify/make visible to Houston office)
- Display trade lane tariff based on just origin/destination for quick discussions with customer (“Quick Quote”)
- Get fast feedback on service level / transit time / carrier and then move to full quote
- Based on geolocation data fill in as much of the quote fields as possible (e.g. closest port)
- Put everyday sales activity into an application as easily as possible, and if done smartly, it provides us with insights into our data
- The application must allow salesperson to generate a quote (even on mobile) - integration into SMDM/QM database

## Solution/Opportunity Management
- Create and manage a customer development plan and supporting opportunities
- E.g. 3mil existing business, 1mil new => track our progress against the 4mil plan (existing and new business separate)
- Which opportunities are there / how realistic?
- Some customers are just getting spot quotes, but may need solution management instead
- Auto-flag certain customers that have the right profile to warrant solution management
- Link to operational data in FOCiS should be seamless to connect this data
- E.g. more than 1 product, more that 5 origins => auto-flag for solution management


## Sales Expenses
- E.g. take customer out for dinner (check-in, tag who is there, check-out, notes, photograph of expense => auto expense form)
- Tie in expenses to individual customers => Cost to serve, return on sales costs
- Can also analyze sales expense of individual reps
- Calculate conversion rates (how many activities/actions/touch-points, what did it take to get customer from lead to prospect to customer)
- More accurately project revenue/assess pipeline


## Marketing
- Able to poll and mine data from existing leads/customers (we know these customers are on the TLX lane => create campaign and system gathers up applicable customers)
- OneView has some version like this (mailchimp-type functionality)
- While profiling customers the marketing profile runs in the background to assess for targeting
- Auto-send marketing material when matching
- Track responses (click / unsubscribe / opened / how long on page / etc.)
- If message gets forwarded can we track?
- This customer has read article 3 times and clicked on X campaign => Auto-schedule call with sales person
- Need tracking code for CM embedded in marketing site
- If we know customer had quotes TH-PL and there is a flash price => Auto-send email with flash price and link them to self-serve quote page

## Self-Serve Portal
- Ability for customer to go in and see their uploaded rates and documents
- Reference most up-to-date MRS (Master Rate Sheet)
- MRS drives auto-pricing
- Should also feed job booking
- If flash price available, use that
- Booking online
- Distinct class of customer than those on ShipA (no sales interaction required for ShipA customers)
- Bring together tracking/connects w/ self-serve portal
- Currently tracking data is not aligned with OneView => no visibility

## Integrations
- **Insight** 
  - Read combined operational information from *CONTROL* and *FOCiS* transactions including shipment volume, destinations, relationship profiles, etc.
  - Bring non-billed parties into the system to profile as leads (E.g. manager our customer’s consignees)
- **FOCiS** 
  - Quotes, rates, contracts, etc.
- **Oracle** 
  - Credit limit, credit statuses, accounts receivable, etc.
- **OneView** 
  - Has a bunch of leads - rejected/closed + good un-mined customer data, new sales people can revive and check in using lead management
- **External Data Sources** 
  - Supplement Agility’s data with publicly available data (Google, LinkedIn, credit ratings, etc.)
  - Import contact book from phone (select the ones that are business)
  - From existing data sources (email, phone, outlook calendar, etc.) my activity is recorded/connected to the CM application and its contacts/customers. (avoid double-entry)

## Legacy System Pain Points
- Inputting data is a chore
- Inputted data does not feel useful or relevant to sales people
- Must be on VPN to access (difficult to use on-site)
- No mobile interface (need to use on laptop - not always practical)
- QM separate from CM (lots of back and forth)

## Immediate Priorities
- Point of sales interaction 
	1) Mobile-first
	2) Geolocation
	3) Quotation
	4) Access to marketing collateral
- Lead management and customer profiling - OneView+CONTROL (internal+external data)
- Tie operational/financial data into process (internal data)
