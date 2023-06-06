import { hero, member1, member2, member3, member4, member5 } from "../assets";

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

interface StaffType {
  id: string;
  name: string;
  desc: string;
  img: string;
}
export const staff: StaffType[] = [
  {
    id: "staff-1",
    name: "Davis Carder",
    desc: "Super duper postion",
    img: member1,
  },
  {
    id: "staff-2",
    name: "Davis Carder",
    desc: "Super duper postion",
    img: member2,
  },
  {
    id: "staff-3",
    name: "Davis Carder",
    desc: "Super duper postion",
    img: member3,
  },
  {
    id: "staff-4",
    name: "Davis Carder",
    desc: "Super duper postion",
    img: member4,
  },
  {
    id: "staff-5",
    name: "Davis Carder",
    desc: "Super duper postion",
    img: member5,
  },
];
