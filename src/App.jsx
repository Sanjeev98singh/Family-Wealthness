import "./App.css";
import Header from "./Header";
import Hero from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header
        logo="Wellness Together"
        logo_des="Tranquil Therapy"
        link1="HOME"
        link2="ABOUT"
        link3="SERVICES"
        link4="FAQ"
        link5="CONTACT"
      />
      <Hero
        heading="Think Health. Tranquil Therapy"
        hero_para="We are open 9am to 6pm;
    Monday to Saturday. We are closed on Sundays. We are located at 1234 Main Street
    in Anytown, USA.
    "
        para1="Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage."
        para2="We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments."
        para3="We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland."
      />
      <Footer
        heading="Wellness Together Tranquil Therapy "
        address="9876 Main Street, Suite 123, Mainland, ML12345"
        phone="Phone: 9876543210 "
        copyRight="Copyright 2018 let.com. All Rights Reserved Powered by Website.com"
        powered="Powered By Website.com"
      />
    </>
  );
}

export default App;
