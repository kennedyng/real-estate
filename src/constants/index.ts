export interface NavLinkType {
  id: string;
  label: string;
  link: string;
}

export const navLinks: NavLinkType[] = [
  {
    id: "nav-link-1",
    label: "Top offers",
    link: "/#top-offers",
  },
  {
    id: "nav-link-2",
    label: "Search in offers",
    link: "/filter",
  },
  {
    id: "nav-link-3",
    label: "References",
    link: "#",
  },
  {
    id: "nav-link-4",
    label: "About us",
    link: "#",
  },
  {
    id: "nav-link-5",
    label: "Our team",
    link: "#",
  },
];
