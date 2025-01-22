import Footer from "./../nav_footer/Footer";
import Navbar from "./../nav_footer/Navbar";

export default function Container({ children }) {
  return (
    <div>
      <Navbar />

      {children}

      <Footer/>
    </div>
  );
}
