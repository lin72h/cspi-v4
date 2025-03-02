import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "主页",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "关于",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "税务咨询",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "成功案例",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "教育培训",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "培训课程",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  {
    id: 4,
    title: "Book Online",
    newTab: false,
    path: "/book_online",
  },
];

export default menuData;
