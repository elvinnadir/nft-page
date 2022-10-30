interface IMenu {
  id: number;
  name: string;
  links: string;
  nameSub?: IMenu[];
}

export const menus: IMenu[] = [
  {
    id: 1,
    name: "Home",
    links: "/home"
  },
  {
    id: 2,
    name: "Contact",
    links: "/contact"
  },
  {
    id: 3,
    name: "About",
    links: "/about"
  },
  {
    id: 4,
    name: "Pages",
    links: "#",
    nameSub: [
      {
        id: 1,
        name: "Team",
        links: "/team"
      }
    ]
  }
];
