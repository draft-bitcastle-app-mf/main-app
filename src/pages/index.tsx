import Header from "@/components/Header";
import { Fragment, useEffect } from "react";
import Cookie from "js-cookie";
import { useAuthStore } from "store/store";

export function MainPage() {
  const { setToken } = useAuthStore((state) => state);

  useEffect(() => {
    setToken(!!Cookie.get("TOKEN"));
  }, []);

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default MainPage;
