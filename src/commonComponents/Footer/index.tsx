import Container from "../Container";

import style from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <p className={style.footerText}>
          © 2023 made by Sergey Trukhan via React | Redux | TypeScript
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
