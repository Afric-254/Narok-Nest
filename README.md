# NarokNest

NarokNest provides an independent directory of hotel website links and accommodation details supplied for trip research. It does not represent the listed businesses, accept their reservations, or collect payment for them. Some listing details and the Safemhomes flyer are host-supplied and have not been independently verified.

## Run locally

Requirements: Node.js 22.5 or newer.

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open the local address printed by Next.js. The older account/booking prototype uses a SQLite database at `.data/naroknest.sqlite`. A database created by an earlier version may still contain account or booking data; audit and securely manage existing data before deployment. SQLite files are not suitable for ephemeral/serverless filesystems or multi-instance deployments.

## Public directory and policies

- `/hotels` — the independent accommodation and hotel website directory.
- `/hotels/[slug]` — a detail and direct-contact page for each listing.
- `/hotels/safemhomes-macedonia-kipangas` — Safemhomes' Macedonia-Kipangas Airbnb listing, including flyer details and WhatsApp contact.
- `/contact` — links to listed businesses where visitors can find contact options.
- `/host` — listing review, correction, and removal requests, plus proposed paid featured-listing information; placements are quote-only and are not currently being sold.
- `/booking-safety` — practical checks for contacting a hotel and arranging payment directly.
- `/trust` — directory scope, third-party links and trust disclosures.
- `/policies/booking` — retained as a redirect to the booking-safety guide.
- `/policies/privacy` — directory privacy information and disclosure of older prototype data.
- `/policies/terms` — limitations for using the directory.

Listing information was supplied for the project. None of the current listings is marked as independently verified, and they are not verified partnerships or endorsements. The Safemhomes listing shows host-provided rates of KSh 2,000–3,500 per night, free Wi-Fi, free parking, a location near Gate D at Maasai Mara University, and WhatsApp contact; confirm current details directly with the host. Hosts can use the contact links on `/host` to request a listing check, correction, or removal; the site does not collect these requests through a form. Do not send identity documents or payment information through email or WhatsApp. Before operating the directory commercially, confirm business details, provide a correction/removal contact, and obtain appropriate permission before using logos, photographs, promotional copy, affiliate links or booking integrations. Clearly disclose any paid placement or commission. These notes are operational guidance, not legal advice; consult qualified Kenyan advisers before operating a commercial referral or booking service.

The old `/stays` pages redirect to `/hotels`. Old stay, booking and payment-start API endpoints return `410 Gone`, preventing the demonstration inventory from being reserved or charged. This directory release does not accept reservations or payments for listed properties. Visitors follow a supplied website or contact link and arrange stays directly with each business. Listing details are identified as supplied and are not represented as independently verified.

## Older booking prototype (not active)

The project still contains legacy account, host, booking database, and Pesapal callback/status code from an earlier prototype. It is not part of the public accommodation directory, and the booking and checkout-start endpoints are disabled. Do not re-enable or advertise this code for the directory without written business authorization, verified inventory and pricing, a working reservation integration, approved payment-provider arrangements, reviewed customer terms, and appropriate legal advice.

The homepage includes two Wikimedia Commons photographs, each credited beside the image: “Maasai Mara National Reserve - 52470242933” by Ninara (CC BY 2.0) and “Maasai Culture” by Mosesobanda (CC BY-SA 4.0). Their credits link to the source pages and license details. The Safemhomes flyer is host-supplied. Other stock Unsplash imagery is used only for general illustration, not presented as a photo of a directory hotel. Continue to use images with appropriate licenses and permissions.

The public header includes responsive navigation, and the home page, hotel detail pages, and policies are designed for mobile screens. Run `npm.cmd run lint` and `npm.cmd run build` before publishing. Verify links, business details and permission before expanding the directory or adding any commercial relationship. Keep `.env.local`, `.data`, `node_modules`, and `.next` out of Git; `.gitignore` is configured to exclude them.
