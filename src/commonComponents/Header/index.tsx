import Container from "../Container";

import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <h1 className={style.headerTitle}>To-Do List App</h1>
      </Container>
    </header>
  );
};

export default Header;
