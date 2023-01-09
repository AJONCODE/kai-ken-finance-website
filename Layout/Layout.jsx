import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({children}) => {
    return(
      <>
        <div className="container mx-auto">
           <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </>
    );
}

export default Layout;