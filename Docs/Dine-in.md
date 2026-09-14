# Dine-In & Table Management

## Page Goal

Position MhStudio's Dine-In & Table Management as the system that helps restaurants manage the complete table-service workflow.

The core story is:

**Table → Guest → Order → Kitchen → Service → Bill → Payment → Table Available**

The page should demonstrate both major dine-in ordering methods:

1. **Staff/Waiter Ordering through POS**
2. **Customer Self-Ordering through Table-Specific QR**

These two methods should ultimately enter the same restaurant order and kitchen workflow.

---

# 1. HERO SECTION

### Eyebrow

**Dine-In & Table Management**

### Main Heading

**Manage Every Table, Order, and Guest From One Place.**

### Supporting Text

A connected dine-in management system for table layouts, table status, waiter orders, open checks, QR self-ordering, kitchen coordination, billing, and guest service.

### Primary CTA

**Get Your Free Demo**

### Secondary CTA

**Explore Table Management**

### Capability Indicators

* Visual Floor Plans
* Table Orders
* QR Self-Ordering
* Open Checks
* Split Bills

### Visual

Use a **large restaurant floor-plan dashboard** as the main hero visual.

Show approximately 12–15 tables.

Example:

```text id="x4q9vm"
                 RESTAURANT FLOOR PLAN

   ┌────────┐    ┌────────┐    ┌────────┐
   │ Table 1│    │ Table 2│    │ Table 3│
   │ FREE   │    │ OCCUPIED│   │RESERVED│
   └────────┘    └────────┘    └────────┘

       ┌──────────────┐
       │    TABLE 4   │
       │   OCCUPIED   │
       │   4 GUESTS   │
       └──────────────┘

   ┌────────┐    ┌────────┐    ┌────────┐
   │ Table 5│    │ Table 6│    │ Table 7│
   │ CLEAN  │    │ FREE   │    │ OCCUPIED│
   └────────┘    └────────┘    └────────┘
```

Side panel:

**18 Tables**

**9 Occupied**

**4 Available**

**3 Reserved**

**2 Cleaning**

---

# 2. INTRODUCTION

### Label

**Connected Dine-In Operations**

### Heading

**From the Moment Guests Sit Down to the Moment They Leave.**

### Body

Dine-in service involves more than taking an order.

Staff need to know which tables are occupied, who is serving them, what has been ordered, what is being prepared, whether additional items have been requested, and when the bill is ready.

MhStudio connects these steps into one dine-in workflow.

### Three Value Cards

#### Manage

Know the status of every table.

#### Serve

Create and manage orders throughout the guest's visit.

#### Close

Handle bills and payments, then return the table to the available state.

### Visual

Use a lifecycle:

```text id="f0x8kw"
AVAILABLE
    ↓
OCCUPIED
    ↓
ORDER IN PROGRESS
    ↓
PREPARING
    ↓
SERVED
    ↓
PAYMENT
    ↓
CLEANING
    ↓
AVAILABLE
```

Animate one table through the lifecycle.

---

# 3. THE PROBLEM

### Label

**Dine-In Gets Complicated During Busy Service**

### Heading

**When Tables, Orders, and Staff Aren't Connected, Service Gets Harder to Manage.**

### Body

During busy periods, staff may be managing multiple tables, open orders, new guests, additional items, reservations, bills, and kitchen requests simultaneously.

Without a centralized table workflow, it becomes difficult to know what is happening where.

### Problem Cards

#### Lost Table Context

Staff need to know which order belongs to which table.

#### Open Orders

Customers may add items throughout their visit.

#### Slow Communication

Changes need to reach the kitchen and service team.

#### Payment Delays

Closing bills can become complicated when multiple guests are involved.

### Visual

Before:

```text id="c9k2rw"
TABLE
 ↓
WAITER
 ↓
PAPER
 ↓
KITCHEN
 ↓
BILL
 ↓
PAYMENT
```

After:

```text id="h8s5nf"
TABLE
 ↓
POS / QR
 ↓
CENTRAL ORDER
 ↓
KDS
 ↓
SERVICE
 ↓
BILL
 ↓
PAYMENT
```

---

# 4. VISUAL FLOOR PLAN

### Label

**Table Management**

### Heading

**See Your Restaurant Floor at a Glance.**

### Body

A visual floor plan gives staff and managers an immediate view of the restaurant.

Instead of searching through a list of table numbers, the team can see table locations and current status visually.

### Table States

* Available
* Occupied
* Reserved
* Order in Progress
* Payment
* Cleaning
* Blocked

### Visual

Use a **large interactive floor plan**.

Each table should visually display:

* Table number
* Capacity
* Current status
* Guest count
* Active order indicator

Example:

```text id="s7v1kp"
TABLE 12
4 GUESTS
PKR 4,850
18 MIN
```

---

# 5. TABLE DETAILS

### Label

**Table Information**

### Heading

**Everything Staff Need to Know About an Active Table.**

### Body

Selecting a table should open a clear overview of the current service state.

### Table Details

* Table number
* Capacity
* Guests
* Assigned waiter
* Current order
* Order value
* Order time
* Reservation
* Payment status

### Visual

Show a **table detail drawer**:

```text id="n8c4yd"
TABLE 12

4 Guests
Waiter: Ahmed

ORDER #1048

2 × Chicken Burger
1 × Pizza
2 × Fries
4 × Drinks

Current Total
PKR 4,850

[ Add Items ]
[ View Order ]
[ Print Bill ]
[ Checkout ]
```

---

# 6. WAITER POS WORKFLOW

### Label

**Staff Ordering**

### Heading

**Let Staff Take Orders Without Leaving the Table Workflow.**

### Body

Waiters can use the POS to select a table, add products, customize the order, and send it to the kitchen.

### Workflow

```text id="y6x2ap"
SELECT TABLE
     ↓
ADD ITEMS
     ↓
CUSTOMIZE
     ↓
SEND TO KITCHEN
     ↓
PREPARE
     ↓
SERVE
```

### Visual

Show a waiter using a tablet POS.

Screen:

**Table 12**

with:

* Product categories
* Cart
* Add modifiers
* Send to Kitchen

---

# 7. CUSTOMER QR SELF-ORDERING

### Label

**QR Table Ordering**

### Heading

**Let Guests Browse and Order Directly From Their Table.**

### Body

For restaurants that support self-ordering, each table can have its own QR code.

Guests scan the QR code to open the restaurant's digital menu.

The table can be identified automatically, so customers don't need to manually enter a table number.

### Workflow

```text id="q4r9js"
TABLE QR
   ↓
CUSTOMER PHONE
   ↓
DIGITAL MENU
   ↓
CART
   ↓
DINE-IN ORDER
   ↓
KDS
```

### Visual

Use a **real restaurant table scene**.

Show:

* Table with QR code
* Customer phone
* Digital menu
* Order confirmation

On the phone:

**Table 12**

already identified.

Do not ask the customer to type:

**"Enter your table number."**

The table-specific QR should handle this automatically.

---

# 8. QR MENU EXPERIENCE

### Label

**Digital Table Menu**

### Heading

**Turn Every Table Into an Interactive Menu.**

### Body

Guests can browse your menu directly from their phone without waiting for a physical menu.

### Menu Experience

* Categories
* Food images
* Descriptions
* Prices
* Modifiers
* Add-ons
* Availability
* Deals
* Dietary information where configured

### Visual

Show a mobile menu:

```text id="m2q8tw"
TABLE 12

POPULAR

Chicken Burger
PKR 850

Margherita Pizza
PKR 1,250

Loaded Fries
PKR 450

Cold Drinks
PKR 150
```

---

# 9. OPEN ORDERS

### Label

**Open Checks**

### Heading

**Keep the Table's Order Open Throughout the Visit.**

### Body

Dine-in customers may order more than once.

Staff should be able to add items to an existing table order without creating unnecessary duplicate transactions.

### Workflow

```text id="f4q7cn"
FIRST ORDER
     ↓
KITCHEN
     ↓
SERVE
     ↓
ADDITIONAL ITEMS
     ↓
UPDATED ORDER
     ↓
FINAL BILL
```

### Visual

Show an order timeline:

```text id="y0q6mp"
12:15
Order Created

12:23
Sent to Kitchen

12:38
2 Drinks Added

12:45
Dessert Added

12:58
Bill Requested
```

---

# 10. ADDITIONAL ORDERS

### Label

**Flexible Service**

### Heading

**Add to the Same Table Order Whenever Guests Need Something More.**

### Body

Guests may order additional drinks, sides, desserts, or other items during their visit.

The table remains connected to the open order.

### Visual

Show:

```text id="w4s7jd"
TABLE 12

Current Order
──────────────
2 Burgers
1 Pizza
2 Fries

New Addition
──────────────
2 Desserts
1 Coffee

[ Add to Order ]
```

Then show a small KDS ticket:

**Additional Items — Table 12**

---

# 11. KITCHEN CONNECTION

### Label

**Table → Kitchen**

### Heading

**Send Every Table Order to the Kitchen With the Right Context.**

### Body

The kitchen needs to know not only what to prepare, but where the order belongs.

Dine-in KDS tickets can display:

* Table number
* Order number
* Items
* Modifiers
* Special instructions
* Time

### Visual

Use a three-screen flow:

```text id="m9s2az"
TABLE 12
   ↓
POS
   ↓
KDS
   ↓
TABLE 12
```

KDS ticket:

```text id="z4q8cw"
#1048

DINE-IN
TABLE 12

2 × Chicken Burger
1 × Pizza
2 × Fries

No Onions

12:31 PM
```

Use the same table number across every screen.

---

# 12. ORDER STATUS

### Label

**Dine-In Order Tracking**

### Heading

**Know Where Every Table's Order Is.**

### Body

Managers and service staff can see whether an order is new, being prepared, ready, served, or awaiting payment.

### Status Flow

```text id="x6p3vr"
NEW
 ↓
PREPARING
 ↓
READY
 ↓
SERVED
 ↓
PAYMENT
 ↓
COMPLETED
```

### Visual

Show a table dashboard with status indicators.

Example:

```text id="h5c7qz"
TABLE 4
Ready

TABLE 7
Preparing

TABLE 12
Served

TABLE 15
Payment
```

---

# 13. RESERVATION CONNECTION

### Label

**Reservations + Tables**

### Heading

**Know Which Tables Are Reserved Before Guests Arrive.**

### Body

Table management can work alongside reservation workflows so staff can understand upcoming bookings and current table availability.

### Visual

Use a combined reservation + floor-plan screen.

Left:

```text id="a8n4vc"
TODAY

7:00 PM
Ahmed Khan
4 Guests

7:30 PM
Sara Ali
2 Guests

8:00 PM
Usman
6 Guests
```

Right:

Floor plan with reserved tables highlighted.

---

# 14. GUEST ARRIVAL

### Label

**Table Assignment**

### Heading

**Move Reservations Into Active Table Service.**

### Body

When guests arrive, staff can assign the reservation to the appropriate table and move the table into its active service state.

### Workflow

```text id="k3w8dy"
RESERVATION
     ↓
GUEST ARRIVES
     ↓
TABLE ASSIGNED
     ↓
OCCUPIED
     ↓
ORDER
```

### Visual

Show a reservation being assigned to:

**Table 12**

Then the table changes from:

**Reserved → Occupied**

---

# 15. SPLIT BILLS

### Label

**Flexible Billing**

### Heading

**Make Group Payments Easier to Handle.**

### Body

A table may have multiple guests paying separately.

POS can support configured split-bill workflows so staff can divide the final bill without losing the connection to the original table order.

### Options

* Split equally
* Split by item
* Split by guest
* Multiple payment methods

### Visual

Show:

```text id="k6y2wq"
TABLE 12

TOTAL
PKR 6,400

Guest 1    PKR 2,100
Guest 2    PKR 1,750
Guest 3    PKR 1,550
Guest 4    PKR 1,000

[ Complete Payment ]
```

---

# 16. TABLE TRANSFER

### Label

**Service Flexibility**

### Heading

**Move Guests Without Losing Their Order.**

### Body

Restaurant service can change.

If guests move tables, staff may need to transfer the active order to another table while keeping the order history intact.

### Visual

Show:

```text id="q8r5vn"
TABLE 12
   │
   │ Transfer
   ↓
TABLE 18

ORDER #1048
PKR 4,850
```

After transfer:

**Table 12 → Available**

**Table 18 → Occupied**

---

# 17. TABLE MERGING

### Label

**Flexible Table Service**

### Heading

**Handle Groups That Need More Space.**

### Body

When multiple tables are combined for a larger group, the system can support table-merging workflows where required.

### Visual

Show:

```text id="r5k8dy"
TABLE 12 ───┐
            ├──→ GROUP TABLE
TABLE 13 ───┘

10 Guests
1 Open Order
```

Keep the interaction visually simple.

---

# 18. TABLE STATUS AUTOMATION

### Label

**Operational Control**

### Heading

**Keep Table Status Aligned With the Guest Journey.**

### Body

Table status should reflect what is actually happening in the restaurant.

### Example

```text id="p8q3xv"
Available
   ↓
Occupied
   ↓
Order in Progress
   ↓
Payment
   ↓
Cleaning
   ↓
Available
```

### Visual

Show a table card changing state automatically as the order progresses.

---

# 19. TABLE CLEANING WORKFLOW

### Label

**Turnover**

### Heading

**Know When a Table Is Ready for the Next Guest.**

### Body

After payment, a table may need to be cleaned before it becomes available again.

Separating the cleaning state from available helps staff maintain an accurate floor view.

### Visual

Show:

```text id="s7p2ak"
TABLE 12

Payment Complete ✓

Cleaning
●

[ Mark Available ]
```

Then transition to:

**Available**

---

# 20. WAITER MANAGEMENT

### Label

**Service Team**

### Heading

**Know Who Is Serving Which Tables.**

### Body

Assign tables to waiters and give staff visibility into the tables and orders they are responsible for.

### Visual

Show waiter cards:

```text id="f3q7zs"
AHMED
8 Tables
23 Guests
PKR 18,450

BILAL
6 Tables
17 Guests
PKR 12,850

USMAN
7 Tables
20 Guests
PKR 15,200
```

Use simulated data.

---

# 21. WAITER PERFORMANCE

### Label

**Service Analytics**

### Heading

**Understand Your Front-of-House Performance.**

### Body

Management can use operational data to understand service activity and identify patterns across tables, orders, and staff.

### Example Metrics

* Tables served
* Orders handled
* Average table value
* Service time
* Sales
* Open checks
* Completed orders

### Visual

Use a waiter analytics dashboard.

Show:

**Tables Served**

**Average Table Value**

**Orders**

**Service Time**

Use simulated demo data.

---

# 22. DINE-IN + ONLINE ORDERING

### Label

**One Restaurant Order System**

### Heading

**Whether Guests Order With a Waiter or From Their Phone, Everything Reaches the Same Workflow.**

### Body

Dine-in ordering can support both staff-assisted and customer self-ordering.

### Method A — Staff

```text id="u5k8rw"
WAITER
 ↓
POS
 ↓
KDS
 ↓
TABLE
```

### Method B — Customer

```text id="z7m2qc"
TABLE QR
 ↓
PHONE
 ↓
ONLINE ORDER
 ↓
KDS
 ↓
TABLE
```

### Visual

Use a split-screen.

Left:

Waiter using POS.

Right:

Customer using QR ordering.

Both converge into:

**KDS → Kitchen → Table**

This should be one of the most important visuals on the page.

---

# 23. DINE-IN + RMS

### Label

**Connected Restaurant Management**

### Heading

**Table Activity Becomes Part of Your Restaurant's Bigger Picture.**

### Body

Table activity can contribute to the wider restaurant management system.

Managers can connect dine-in operations with:

* Orders
* POS
* KDS
* Customers
* Reservations
* Payments
* Analytics

### Visual

```text id="j8p3cy"
TABLE
  ↓
DINE-IN ORDER
  ↓
RMS
 ┌────┼────┬─────┐
 ↓    ↓    ↓     ↓
POS   KDS  CRM ANALYTICS
```

---

# 24. CUSTOMER EXPERIENCE

### Label

**Better Guest Experience**

### Heading

**Make Dine-In Service Feel More Organized.**

### Body

A connected table system helps staff spend less time searching for information and more time serving guests.

Customers get:

* Faster ordering
* Accurate orders
* Easy additional ordering
* Digital menu access
* Clear billing
* Flexible payments

### Visual

Use a **restaurant dining scene** with subtle UI overlays.

Show:

Customer phone:

**Table 12 — Menu**

Waiter tablet:

**Table 12 — Active Order**

Kitchen screen:

**Table 12 — Preparing**

This creates a clear visual story.

---

# 25. CORE CAPABILITIES

### Label

**Everything Your Dine-In Team Needs**

### Heading

**A Complete Workspace for Table Service.**

### Feature Grid

#### Floor Plan

Visual restaurant table layout.

#### Table Status

Available, occupied, reserved, payment, cleaning and more.

#### Table Assignment

Assign guests and orders to tables.

#### Waiter Orders

Create orders directly from POS.

#### QR Ordering

Table-specific customer self-ordering.

#### Open Checks

Keep orders open throughout service.

#### Additional Orders

Add items without creating duplicate orders.

#### KDS

Send table orders directly to the kitchen.

#### Reservations

Connect bookings with table availability.

#### Split Bills

Handle multiple guests and payments.

#### Table Transfer

Move active orders between tables.

#### Table Merge

Support larger groups and combined tables.

---

# 26. USE CASES

### Label

**Built for Different Dining Formats**

### Heading

**From Cafés to Full-Service Restaurants.**

### Cards

#### Full-Service Restaurant

Tables, waiters, open checks, reservations, KDS and split bills.

#### Café

Counter ordering plus simple table service.

#### Fine Dining

Reservations, table assignment, detailed orders, service tracking and billing.

#### Family Restaurant

Large groups, table merging, split bills and QR menus.

#### Casual Dining

Waiter ordering, digital menus, open orders and flexible payments.

#### Multi-Branch Restaurant

Centralized table and dine-in management across locations.

### Visual

Use six restaurant cards with:

**Restaurant image + table management UI**

---

# 27. WHY MHSTUDIO

### Label

**Why MhStudio**

### Heading

**We Connect the Table to Everything Happening Behind It.**

### Body

Dine-in software should not be another isolated tool.

The table, order, kitchen, customer, payment, and restaurant management workflows should remain connected throughout the guest experience.

MhStudio designs dine-in management as part of the wider restaurant ecosystem.

### Four Differentiators

#### Visual

See your restaurant floor at a glance.

#### Flexible

Support waiter ordering and QR self-ordering.

#### Connected

Tables connect to POS, KDS, RMS, reservations and customers.

#### Scalable

Suitable for individual restaurants and multi-branch operations.

### Visual

Use:

```text id="g4k8wy"
TABLE
 ↓
POS / QR
 ↓
ORDER
 ↓
KDS
 ↓
KITCHEN
 ↓
TABLE
 ↓
BILL
 ↓
PAYMENT
 ↓
ANALYTICS
```

---

# 28. IMPLEMENTATION PROCESS

### Label

**Our Process**

### Heading

**From Your Floor Plan to a Connected Dine-In Workflow.**

### Step 01 — Understand

We learn your floor layout, table structure, guest flow, waiter workflow, reservations, ordering process, and billing requirements.

### Step 02 — Map

We map table states, dine-in order flow, kitchen workflow, QR ordering, and payment processes.

### Step 03 — Configure

We configure tables, floor plans, waiters, order types, menus, QR codes, roles, and permissions.

### Step 04 — Connect

We connect dine-in workflows with POS, RMS, KDS, reservations, customer management, and other supported systems.

### Step 05 — Test

We test waiter ordering, QR ordering, additional items, kitchen flow, billing, and table turnover.

### Step 06 — Train

We train waiters, managers, cashiers, and relevant staff on their workflows.

### Step 07 — Launch

The restaurant begins using the connected dine-in system during daily service.

### Visual

Use a **7-step visual timeline**.

Show:

**Floor Plan → POS → QR → KDS → Service → Payment → Available**

---

# 29. FAQ

### 1. What is Dine-In & Table Management?

It is a system for managing restaurant tables, guests, dine-in orders, waiters, open checks, reservations, QR ordering, billing, and table status.

### 2. Can waiters create orders?

Yes. Waiters can use the POS workflow to select a table, add products, customize the order, and send it to the kitchen.

### 3. Can customers order themselves?

Yes. Restaurants can use table-specific QR ordering where self-ordering is enabled.

### 4. Does the customer need to enter the table number?

With a table-specific QR implementation, the table can be identified automatically. Customers should not need to manually enter the table number.

### 5. Can customers add more items later?

Yes. Open table orders can remain active so additional items can be added during the guest's visit.

### 6. Can table orders go to the kitchen?

Yes. Dine-in orders can flow into the connected KDS workflow.

### 7. Can I manage reservations and tables together?

Yes. Reservation information can be connected with table availability and floor-plan workflows.

### 8. Can I split a table bill?

Yes. Split-bill workflows can support multiple guests and payment methods.

### 9. Can I move an order from one table to another?

Yes. Table-transfer workflows can move an active order while maintaining its order context.

### 10. Can multiple tables be combined?

Yes. Table-merging workflows can be supported where required.

### 11. Can I assign tables to waiters?

Yes. Tables can be associated with service staff according to the restaurant's workflow.

### 12. Can I see which tables are occupied?

Yes. The visual floor plan can show current table states.

### 13. Can tables automatically become available after payment?

The workflow can transition a table toward cleaning and then availability according to the configured restaurant process.

### 14. Can QR ordering connect to POS and KDS?

Yes. The intended workflow is:

**Table QR → Customer Order → Central Orders → KDS → Kitchen → Table**

where the required system connections are configured.

### 15. Can this work for multiple branches?

Yes. Multi-branch restaurants can configure separate floor plans, tables, staff, and operational information for each location.

---

# 30. FINAL CTA

### Eyebrow

**Ready to Modernize Dine-In Service?**

### Heading

**Give Your Team a Better Way to Manage Every Table.**

### Supporting Text

Connect your floor plan, tables, waiters, QR ordering, kitchen, billing, and guest experience through one modern dine-in management system.

### Primary CTA

**Get Your Free Demo**

### Secondary CTA

**Talk to Our Team**

### Visual

Use a **large restaurant floor-plan + POS + customer QR + KDS composition**.

Foreground:

Floor plan with active tables.

Floating screens:

**Waiter POS**

**Customer QR Menu**

**KDS**

**Bill**

Show all four connected to:

**Table 12**

---

# 31. SEO CONTENT

### Page Title

**Dine-In & Table Management System for Restaurants | MhStudio**

### Meta Description

**Manage restaurant tables, floor plans, dine-in orders, waiters, QR self-ordering, open checks, reservations, split bills, and table service from one connected system.**

### Suggested URL

`/services/dine-in-table-management`

### Primary Keyword

**Restaurant Table Management System**

### Secondary Keywords

* Restaurant table management
* Dine-in management system
* Restaurant floor plan software
* Restaurant table ordering system
* QR table ordering
* Restaurant waiter POS
* Restaurant table reservation system
* Restaurant dine-in POS
* Table management software Pakistan
* Restaurant QR ordering system

---

# 32. VISUAL DIRECTION

This page should visually feel like a **real restaurant floor connected to digital operations**.

### Primary Visuals

1. Hero floor plan
2. Table detail drawer
3. Waiter POS
4. QR table ordering
5. Digital QR menu
6. Open order
7. Additional order
8. POS → KDS
9. Reservation + floor plan
10. Guest arrival
11. Split bill
12. Table transfer
13. Table merge
14. Table cleaning
15. Waiter performance
16. QR + waiter ordering comparison
17. Customer experience
18. Final connected ecosystem

### Important Visual Rule

The **table should be the visual anchor** of the page.

Almost every major workflow should visually answer:

**"What is happening with this table?"**

Use the same example throughout:

**Table 12**

This creates continuity:

```text id="c6n8wy"
TABLE 12
   ↓
Reservation
   ↓
Occupied
   ↓
Order #1048
   ↓
KDS
   ↓
Preparing
   ↓
Ready
   ↓
Served
   ↓
Bill
   ↓
Payment
   ↓
Cleaning
   ↓
Available
```

---

# 33. RECOMMENDED PAGE VISUAL SEQUENCE

The page should tell the complete dine-in story:

**Floor Plan**

↓

**Table Status**

↓

**Reservation**

↓

**Guest Arrival**

↓

**Waiter POS**

↓

**QR Self-Ordering**

↓

**Open Order**

↓

**Additional Items**

↓

**KDS**

↓

**Preparation**

↓

**Serving**

↓

**Bill**

↓

**Split Payment**

↓

**Cleaning**

↓

**Table Available**

↓

**Analytics**

↓

**CTA**

---

# 34. CORE POSITIONING

Do not position this service as:

**"A digital table chart."**

Position it as:

**"A complete dine-in operating workflow connecting tables, guests, orders, kitchen, service, and payments."**

Keep the distinction between MhStudio's products clear:

```text id="m5k8qy"
DINE-IN & TABLE MANAGEMENT
          ↓
     TABLE + GUEST
          ↓
       POS / QR
          ↓
      CENTRAL ORDER
          ↓
         KDS
          ↓
       KITCHEN
          ↓
        SERVE
          ↓
      BILL / PAYMENT
          ↓
       TABLE TURNOVER
```

And within the larger ecosystem:

```text id="q8y4sm"
WEBSITE / APP
      ↓
ONLINE ORDERING
      ↓
RMS
 ┌────┼──────────┐
 ↓    ↓          ↓
POS  KDS      DELIVERY
 ↓
DINE-IN
 ↓
TABLE
```

The key message:

**The table is where the guest experience happens. MhStudio connects everything happening around it.**
