import Cookie from "js-cookie";
import { homeConfig } from "@/constants/home";
import Navbar from "./Nav";
import { useAuthStore } from "store/store";
import Link from "next/link";
import UserMenu from "./UserMenu";

const LoggedInUserMenu = () => {
  const { setToken } = useAuthStore((state) => state);

  const handleLogout = () => {
    Cookie.remove("TOKEN");
    setToken("");
  };

  return (
    <div className="flex items-center gap-4">
      <UserMenu />
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const Header = () => {
  const { isLoggedIn } = useAuthStore((state) => state);

  const href = {
    pathname: "http://localhost:3001/login",
    query: { redirect: "http://localhost:3000" },
  };
  return (
    <div className="w-full flex justify-between items-center p-4">
      <Navbar items={homeConfig.homeNav} />
      {isLoggedIn ? <LoggedInUserMenu /> : <Link href={href}>Login</Link>}
    </div>
  );
};

export default Header;
