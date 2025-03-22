import { Header } from "../Header/header.jsx";
import { Footer } from "../Footer/footer.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
};
