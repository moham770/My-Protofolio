import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  return (
    <main className="container mx-auto text-black dark:text-white bg-containerColorLight dark:bg-containerColorDark">
      <Header />
      <div className=" border-b-secondaryBorder border-b-2 my-12" />
      <Hero />
      <div className=" border-b-secondaryBorder border-b-2 my-12" />
      <Main />
      <div className=" border-b-secondaryBorder border-b-2 my-12" />

      <ContactUs />
      <div className=" border-b-secondaryBorder border-b-2 my-12" />
      <Footer />
      <ScrollTop/>
    </main>
  );
};

export default App;
