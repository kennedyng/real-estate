import {
  member1,
  member2,
  member3,
  member4,
  member5,
  offer1,
  offer2,
  offer3,
} from "../assets";

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
    link: "/#references",
  },
  {
    id: "nav-link-4",
    label: "About us",
    link: "/#about-us",
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

interface TopOffersType {
  id: string;
  img: string;
  title: string;
  price: string;
  city: string;
}
export const topOffers: TopOffersType[] = [
  {
    id: "top-offer-1",
    img: offer1,
    title: "Large 4-room apartment with a beautiful terrace",
    price: "320 000€",
    city: "Lusaka",
  },
  {
    id: "top-offer-2",
    img: offer2,
    title: "5i large design apartment with terrace",
    price: "320 000€",
    city: "Lusaka",
  },
  {
    id: "top-offer-3",
    img: offer3,
    title: "3-room apartment with a beautiful terrace",
    price: "320 000€",
    city: "Lusaka",
  },
  {
    id: "top-offer-4",
    img: offer2,
    title: "5i large design apartment with terrace",
    price: "320 000€",
    city: "Lusaka",
  },
];
