import React from "react";
import SectionImg from "./../assets/Images/sec_i01.jpg";

const ChefSpecialities = () => {
  return (
    <div>
      <h2 className="text-center fw-bolder">
        Chef in <span className="theme-color pacifico-font">Japanese</span>{" "}
        kitchens
      </h2>
      <div className="container d-flex flex-column flex-lg-row">
        <div className="container mx-0 py-5 my-4">
          <img src={SectionImg} className="img-fluid" />
        </div>
        <div className="container mx-0 py-5">
          <h3 className="fw-bolder py-4">
            <span className="theme-color pacifico-font">Chef</span> &nbsp; says
          </h3>
          <p>
            As a Japanese chef, I am proud to say that my country has a rich
            culinary history and a diverse range of food styles that are enjoyed
            by people all over the world. Japanese cuisine has gained a lot of
            popularity in recent years due to its emphasis on fresh,
            high-quality ingredients, delicate flavors, and beautiful
            presentation. One of the things that sets Japanese cuisine apart is
            its emphasis on seasonality. We take great care to use ingredients
            that are in season and at their peak of freshness, which allows us
            to create dishes that are bursting with flavor and texture. In
            Japan, there is a deep respect for nature and the changing seasons,
            and this is reflected in the way we prepare and serve our food.
            Another aspect of Japanese cuisine that makes it so unique is its
            focus on simplicity. We believe that the best ingredients speak for
            themselves, and we strive to create dishes that highlight the
            natural flavors and textures of the ingredients. This is why many of
            our dishes are served raw or barely cooked, and why we use minimal
            seasoning and sauces. Of course, there are many different styles of
            Japanese cuisine, each with their own unique characteristics and
            flavor profiles. For example, sushi is a popular style of Japanese
            food that is enjoyed all over the world. It is made with vinegared
            rice and fresh, raw fish or seafood, and is often served with soy
            sauce, wasabi, and pickled ginger. Another popular style of Japanese
            cuisine is ramen, which is a hearty noodle soup that is typically
            made with a rich, flavorful broth and a variety of toppings such as
            sliced pork, green onions, and bamboo shoots. Ramen has become
            increasingly popular in recent years, and there are many different
            regional variations and styles to choose from. In addition to sushi
            and ramen, there are many other styles of Japanese cuisine that are
            beloved by people all over the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefSpecialities;
