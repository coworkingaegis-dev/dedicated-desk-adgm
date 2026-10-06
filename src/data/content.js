// ---------------------------------------------------------------------------
// Single source of truth for the "Dedicated Desk in ADGM" micro-site.
// Prices and facts come from www.aegiscoworking.ae (office-space page).
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import heroImg from '../assets/dedicated-desk-adgm-addax-tower.webp'
import flexiImg from '../assets/flexi-desk-adgm.webp'
import privateImg from '../assets/private-office-adgm.webp'
import meetingImg from '../assets/meeting-room-adgm.webp'
import boardroomImg from '../assets/adgm-desk-space-boardroom.webp'
import receptionImg from '../assets/reception-adgm.webp'

export const SITE_URL = 'https://dedicateddeskadgm.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Dedicated Desk in ADGM for AED 1,150/month | Aegis Coworking'
export const PAGE_DESCRIPTION =
  'Dedicated desk in ADGM at Addax Tower for AED 1,150/month — your own desk, registered ADGM business address and ADGM-compliant lease. No deposit. Book a tour.'
export const DATE_PUBLISHED = '2026-10-06'
export const DATE_MODIFIED = '2026-10-06'

export const PRICE = 1150          // dedicated desk, AED / month
export const FLEXI_PRICE = 1000    // flexi desk, AED / month
export const DUE_DILIGENCE = 1200  // one-time, dedicated desk

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

export const images = { heroImg, flexiImg, privateImg, meetingImg, boardroomImg, receptionImg }

export const sections = [
  { id: 'price', label: 'Price' },
  { id: 'compare', label: 'Dedicated vs flexi' },
  { id: 'licence', label: 'ADGM licence' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
]

// Full keyword set (structured data + llms files; visible copy works them in as sentences)
export const keywords = [
  'Dedicated desk in ADGM', 'Dedicated desk ADGM', 'Dedicated desk space ADGM', 'Dedicated desk ADGM Abu Dhabi',
  'Dedicated desk AED 1,150', 'Dedicated & flexi desk in ADGM', 'ADGM-compliant dedicated desk',
  'Dedicated desk ADGM flexi desk requirement', 'Dedicated desk registered ADGM business address',
  'Dedicated desk for solo business', 'Desk for ADGM licence', 'Dedicated desk for ADGM visa',
  'Flexi desk ADGM', 'Flexi desk in ADGM', 'Cheapest desk ADGM', 'ADGM desk space', 'Desk space in ADGM',
  'Rent desk space in ADGM', 'Cheap desk space in ADGM', 'Flexible office space in ADGM',
  'Office space provider in ADGM', 'Office space in ADGM', 'Aegis Coworking',
]

// The member card in the hero
export const cardPerks = [
  'Registered ADGM business address',
  'ADGM-compliant lease on AccessRP',
  '24/7 secure access',
  'Lockable storage',
]

export const included = [
  { icon: 'chair', title: 'Your own permanent desk', text: 'The same furnished desk every day — leave your screen, files and setup in place.' },
  { icon: 'doc', title: 'Registered ADGM business address', text: 'Use it for your ADGM licence application and renewals.' },
  { icon: 'shield', title: 'ADGM-compliant lease', text: 'A lease registered on AccessRP, accepted for ADGM company registration.' },
  { icon: 'key', title: '24/7 access & lockable storage', text: 'Secure, round-the-clock access to Addax Tower and your desk.' },
  { icon: 'video', title: 'Meeting rooms & lounge', text: 'Meeting room access and the business lounge for client calls.' },
  { icon: 'wifi', title: 'Everything serviced', text: 'High-speed WiFi, coffee, print & scan, cleaning and reception included.' },
]

export const noFees = ['No deposit', 'No admin fees', 'No setup fees', 'Free registration']

// Dedicated vs flexi desk
export const compare = [
  { label: 'Monthly price', dedicated: 'AED 1,150', flexi: 'AED 1,000' },
  { label: 'Your own permanent desk', dedicated: true, flexi: false },
  { label: 'Registered ADGM business address', dedicated: true, flexi: false },
  { label: 'Suits ADGM operating licences', dedicated: true, flexi: false },
  { label: 'WiFi, coffee, meeting room credits', dedicated: true, flexi: true },
  { label: 'Best for', dedicated: 'ADGM licence holders, solo businesses, startups', flexi: 'No licence needed, occasional use' },
]

export const audiences = [
  { title: 'Solo founders', text: 'A dedicated desk for a solo business: one licence, one desk, one fixed monthly cost — no office to fit out.', link: { text: 'Is a dedicated desk enough for a solo business?', slug: 'adgm-flexi-desk-enough-solo-business' } },
  { title: 'New ADGM licences', text: 'The desk for an ADGM licence that most operating licences — including Tech Start-Up — call for, with paperwork ready.', link: { text: 'Tech Start-Up licence: dedicated or flexi desk?', slug: 'adgm-tech-startup-licence-dedicated-desk' } },
  { title: 'Teams hiring staff', text: 'Planning visas? Visa capacity depends on your workspace — see how a dedicated desk for ADGM visa planning compares.', link: { text: 'ADGM coworking visa quota per desk', slug: 'adgm-coworking-visa-quota-employees-per-desk' } },
  { title: 'Overseas founders', text: 'Register remotely and keep a real ADGM desk space for when you fly in.', link: { text: 'Can you register an ADGM company remotely?', slug: 'adgm-company-registration-remote-uae' } },
]

export const steps = [
  { title: 'Reserve your desk', text: 'Book a tour or a WhatsApp video walkthrough and choose your desk on the 38th floor.' },
  { title: 'Due diligence', text: 'Quick KYC checks required by ADGM — a one-time AED 1,200 fee.' },
  { title: 'Lease on AccessRP', text: 'We issue your ADGM-compliant dedicated desk lease and register it on AccessRP.' },
  { title: 'Licence & move in', text: 'Use your registered ADGM business address for the licence, then collect your access card.' },
]

// Genuine reviews published on aegiscoworking.ae
export const testimonials = [
  { quote: 'Aegis coworking provide super professional services especially with the pricing, and the customer service, i needed the license and a space for one of my team member and they did all within a week time, my team member loved the space. I will highly suggest if any on is looking to get a license and a space in ADGM go for Aegis coworking.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'Aegis Coworking is a convenient workspace in Abu Dhabi for startups and growing companies. The flexible workspace options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
  { quote: 'Nice suitable area for coworking for Adam incorporation.', name: 'Ali Kutty Faizy', role: 'Entrepreneur' },
]

export const guides = [
  { slug: 'adgm-flexi-desk-enough-solo-business', title: 'Is a Dedicated Desk Enough for a Solo ADGM Business?', tag: 'Solo business' },
  { slug: 'adgm-tech-startup-licence-dedicated-desk', title: 'ADGM Tech Startup Licence: Dedicated Desk or Flexi Desk?', tag: 'Licence' },
  { slug: 'adgm-coworking-visa-quota-employees-per-desk', title: 'ADGM Coworking Visa Quota: Visas Per Desk Explained', tag: 'Visas' },
  { slug: 'adgm-license-workspace-questions-before-applying', title: 'Can I Get an ADGM Licence in Your Space? Questions Before Applying', tag: 'Licence' },
  { slug: 'adgm-company-setup-cost-overseas-founders', title: 'ADGM Company Setup Costs for Overseas Founders', tag: 'Cost' },
  { slug: 'adgm-shared-registered-address-multiple-companies', title: 'Can Two ADGM Companies Share the Same Registered Address?', tag: 'Address' },
  { slug: 'adgm-work-from-home-registered-address', title: 'Can You Run Your ADGM Company From Home With a Coworking Address?', tag: 'Address' },
  { slug: 'adgm-workspace-consultants-right-setup', title: 'ADGM Workspace for Consultants: How to Choose the Right Setup', tag: 'Consultants' },
  { slug: 'adgm-workspace-data-protection-obligations', title: 'Does Your ADGM Workspace Type Affect Data Protection Obligations?', tag: 'Compliance' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much is a dedicated desk in ADGM?',
    a: 'A dedicated desk at Aegis Coworking in Addax Tower is AED 1,150 per month — only AED 150 more than a flexi desk at AED 1,000. A one-time AED 1,200 due-diligence fee applies, and ADGM government fees are charged separately. There is no deposit, no admin fee and no setup fee.',
    link: { text: 'ADGM coworking cost guide for 2026', url: `${MAIN_SITE}/blog/adgm-coworking-space-cost-2026` },
  },
  {
    q: 'What is the difference between a dedicated desk and a flexi desk in ADGM?',
    a: 'A dedicated desk is your own permanent desk with a registered ADGM business address for your licence, 24/7 access and lockable storage. A flexi desk (hot desk) lets you use any open desk for AED 1,000 per month and suits individuals or companies without an ADGM licensing requirement.',
  },
  {
    q: 'Does the dedicated desk satisfy the ADGM flexi desk requirement?',
    a: 'Yes. The Aegis dedicated desk qualifies as an ADGM flexi desk, meeting the physical presence and registered address requirement for your ADGM business licence application.',
  },
  {
    q: 'Can I register my ADGM company with a dedicated desk?',
    a: 'Yes. The dedicated desk includes a registered ADGM business address and an ADGM-compliant lease registered on AccessRP, which you can use for your ADGM licence application and renewals.',
    link: { text: 'AccessRP lease registration explained', url: `${MAIN_SITE}/blog/accessrp-adgm-lease-registration` },
  },
  {
    q: 'Is a dedicated desk enough for a solo business in ADGM?',
    a: 'For most solo founders and consultants, yes. A dedicated desk gives you the registered address and physical presence ADGM looks for, at a fraction of the cost of a private office. Firms regulated by the FSRA usually need a private office instead.',
    link: { text: 'Is a dedicated desk enough for a solo ADGM business?', url: `${MAIN_SITE}/blog/adgm-flexi-desk-enough-solo-business` },
  },
  {
    q: 'Can I get employee visas with a dedicated desk in ADGM?',
    a: 'Visa capacity in ADGM depends on your workspace type and licence. A dedicated desk can support visa applications; the number allowed is set by ADGM rules, so check your plan with us before hiring.',
    link: { text: 'ADGM coworking visa quota: visas per desk', url: `${MAIN_SITE}/blog/adgm-coworking-visa-quota-employees-per-desk` },
  },
  {
    q: 'What is the cheapest desk in ADGM at Aegis?',
    a: 'The cheapest desk at Aegis is the day pass at AED 100 for a 9 AM–6 PM workday. For monthly use, the flexi desk is AED 1,000. If you need a desk for an ADGM licence, the dedicated desk at AED 1,150 is the lowest-cost option that includes a registered ADGM business address.',
  },
  {
    q: 'What is included in the AED 1,200 due-diligence fee?',
    a: 'It covers the compliance and background checks ADGM requires before your licence and registered address can be activated. It is a one-time cost, separate from your monthly desk rent.',
  },
  {
    q: 'How long is the dedicated desk lease?',
    a: 'Dedicated desk leases run from 12 to 36 months. You can upgrade to a private office at any time as your team grows.',
  },
  {
    q: 'Do I get 24/7 access with a dedicated desk?',
    a: 'Yes. Dedicated desk members have secure 24/7 access to Addax Tower and their desk, every day of the week.',
  },
  {
    q: 'Can two companies use the same dedicated desk address?',
    a: 'Each ADGM company needs its own qualifying workspace and registered address arrangement. Ask us about setups for more than one company.',
    link: { text: 'Can two ADGM companies share a registered address?', url: `${MAIN_SITE}/blog/adgm-shared-registered-address-multiple-companies` },
  },
  {
    q: 'Can I work from home and keep a dedicated desk for my licence?',
    a: 'Many members use their dedicated desk as the company\'s registered ADGM address and physical base while working flexibly. Your licence obligations still apply, so read our guide first.',
    link: { text: 'Running your ADGM company from home with a coworking address', url: `${MAIN_SITE}/blog/adgm-work-from-home-registered-address` },
  },
  {
    q: 'Where is the dedicated desk located?',
    a: 'On the 38th floor of Addax Tower, 3812, Al Reem Island, Abu Dhabi — inside the ADGM jurisdiction, with sea views.',
    link: { text: 'Addax Tower ADGM for businesses', url: `${MAIN_SITE}/blog/addax-tower-adgm-business-workspace` },
  },
  {
    q: 'Can I see the desk before signing?',
    a: 'Yes. Free tours run Monday to Friday, 9 AM–6 PM, or we can send a video walkthrough on WhatsApp. Call +971 50 392 6316 or email contact@aegiscoworking.ae.',
  },
]
