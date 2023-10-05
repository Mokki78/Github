import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Store } from "../pages/store/Store";


export function Layout() {
    return (
      <div>
        <Header />
        <Store />
        <Footer />
      </div>
    );
  }

  export default Layout;