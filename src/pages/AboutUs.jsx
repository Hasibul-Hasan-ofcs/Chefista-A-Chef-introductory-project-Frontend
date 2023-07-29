import React, { useContext } from "react";
import dynamicAppTitle from "./../js/dynamicAppTitle";
import { AuthContext } from "../providers/AuthProvider";

const AboutUs = () => {
  dynamicAppTitle("About Us");

  const { theme } = useContext(AuthContext);

  return (
    <div className={`${theme ? "bg-dark-secondary" : "bg_cream_orange_01"}`}>
      <div className="container mx-auto py-5">
        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          About
        </h4>

        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          Welcome to <span className="theme-color">Chefista</span>, a premier
          destination for all your culinary needs. We are passionate about the
          art of cooking and dedicated to providing exceptional culinary
          experiences for our clients. With a team of highly skilled chefs and a
          commitment to using the finest ingredients, we strive to deliver
          outstanding services that delight your taste buds.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Our Mission
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          At <span className="theme-color">Chefista</span>, our mission is to
          create memorable culinary experiences that elevate your dining
          journey. Whether it's an intimate dinner for two, a family
          celebration, or a corporate event, we aim to exceed your expectations
          with our culinary expertise and attention to detail. We believe that
          food has the power to bring people together, evoke emotions, and
          create lasting memories.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Our Chefs
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          Our team of talented and experienced chefs is the heart and soul of{" "}
          <span className="theme-color">Chefista</span>. With a diverse range of
          culinary backgrounds and a shared passion for gastronomy, our chefs
          bring creativity, expertise, and an unwavering commitment to
          excellence to every dish they create. From classic flavors to
          innovative techniques, our chefs continuously strive to push the
          boundaries of culinary artistry.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Quality Ingredients
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          We believe that the foundation of extraordinary cuisine lies in the
          quality of ingredients. That's why we meticulously source the finest
          and freshest ingredients available. From locally grown produce to
          sustainably sourced seafood and premium meats, we prioritize using
          ingredients that are not only delicious but also meet the highest
          standards of quality and ethical sourcing. We are committed to
          providing you with a culinary experience that is both flavorful and
          responsibly sourced.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Tailored Culinary Solutions
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          At <span className="theme-color">Chefista</span>, we understand that
          every client is unique, and their culinary preferences vary. That's
          why we offer personalized culinary solutions tailored to your specific
          needs and preferences. Whether you have dietary restrictions, cultural
          preferences, or specific event requirements, our team of chefs will
          work closely with you to create a customized menu that reflects your
          tastes and exceeds your expectations.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Customer Satisfaction
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          Customer satisfaction is our top priority. We believe in building
          long-lasting relationships with our clients, and we go the extra mile
          to ensure their complete satisfaction. From the initial consultation
          to the final bite, we strive to provide exceptional service, attention
          to detail, and a warm, professional approach. Your culinary journey
          with <span className="theme-color">Chefista</span> is not just about
          the food; it's an experience that leaves you delighted and wanting
          more.
        </p>

        <h4
          className={`pt-4 pb-3 fw-bolder ${
            theme ? "text_cream_orange_01" : "text-dark"
          }`}
        >
          Contact Us
        </h4>
        <p className={`${theme ? "text_cream_orange_02" : "text-dark"}`}>
          Ready to embark on a culinary adventure with us? Whether you're
          planning an intimate dinner party, a grand event, or need personal
          chef services, we're here to bring your culinary vision to life.
          Contact us today to discuss your requirements, and let us create a
          memorable dining experience that will tantalize your taste buds and
          leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
