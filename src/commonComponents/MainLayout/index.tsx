import { ReactNode, FC, memo } from "react";

import Header from "../Header";
import Footer from "../Footer";

import style from "./styles.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default memo(MainLayout);
