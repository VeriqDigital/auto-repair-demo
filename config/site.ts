import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "ABC Auto Repair",
  shortName: "ABC Auto",
  header: "Auto Care You Can Trust",
  blurb: "Honest repairs, certified technicians, and dependable service to keep your vehicle running its best.",
  heroImage: "/starter-hero.jpg",
  aboutImage: "/owner.jpg",
  ownerName: "Pilav",
  description:
    "Proudly serving the Chicagoland area for over 45 years.",
  url: "https://example.com",
  locale: "en_US",
  contact: {
    phone: "(555) 123-4567",
    email: "hello@example.com",
    address: "123 Main Street, Your City, ST 12345",
    mapUrl: "https://maps.google.com/?q=123+Main+Street",
    mapEmbedUrl: "https://www.google.com/maps?q=123%20Main%20Street&output=embed",
  },
  hours: [
    { label: "Monday-Friday", value: "8:00 AM - 6:00 PM" },
    { label: "Saturday", value: "9:00 AM - 2:00 PM" },
    { label: "Sunday", value: "Closed" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      shortLabel: "IG",
    },
  ],
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", modal: "contact" },
  { label: "Login", href: "/admin/login" },
  { label: "Admin", href: "/admin" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request Quote", modal: "quote" },
];

export const primaryCta = {
  label: "Request a quote",
  modal: "quote",
} as const satisfies { label: string; modal: ModalType };

export const secondaryCTA = {
  label: "View Services",
  href: "services",
} as const satisfies { label: string; href: string};
