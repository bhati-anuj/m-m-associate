import ContactUsComponent from "@/components/ContactUsPage/ContactUsComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <header className="bg-bgBlue">
        <Header />
      </header>
      <section>
        <ContactUsComponent/>
     
      </section>
      <Footer/>
    </div>
  );
};

export default page;
