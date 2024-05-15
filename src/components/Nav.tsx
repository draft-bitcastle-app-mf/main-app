import { FC } from "react";
import { NavItem } from "../../types";

interface INavProps {
  items: NavItem[];
}

const Navbar: FC<INavProps> = ({ items }) => {
  return (
    <ul className="flex items-center gap-4">
      <div className="text-2xl font-semibold">Logo</div> |
      {items.map((item: NavItem) => (
        <li className="hover:underline" key={item.id}>
          <a href={item.href}>{item.id}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
