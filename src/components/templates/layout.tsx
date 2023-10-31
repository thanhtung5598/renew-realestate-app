import type { ReactNode } from "react";

import { Header } from "../organisms/header/header.component";
// import { Footer } from "@/components/organisms/footer/footer.component";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Layout = (props: IMainProps) => (
  <div className="">
    {props.meta}

    <Header />
    <main>{props.children}</main>
    {/* <Footer /> */}
  </div>
);

export { Layout };
