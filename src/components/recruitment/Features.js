import React from "react";
import "./About.css";
import { ReactComponent as Divider } from "../../images/recruitment_hr_line.svg";

const About = () => {
  return (
    <div className="definition">
      <div className="container">
        <div>
          <p className="title">Features</p>
          <Divider
            style={{
              margin: 32,
              width: "100%",
              textAlign: "center",
            }}
          />
          <p
            className="def-para"
            style={{
              backgroundColor: "white",
              color: "#1A202C",
              boxShadow: "none",
              marginTop: 6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            nec phasellus luctus. Orci turpis euismod imperdiet viverra magna
            quis a. Donec sed ultrices eu et luctus pretium, interdum. Interdum
            eget et aliquam nunc, in aenean vel. Nibh ultricies et maecenas
            condimentum consectetur integer proin ultricies. Feugiat tristique
            hendrerit consequat, tellus. Rutrum in elementum tincidunt ut
            pharetra cras sagittis, quam. Mauris quam eu pulvinar viverra velit
            dui congue. Malesuada ac netus eu malesuada purus quisque tristique.
            Platea ridiculus placerat scelerisque consequat dictumst. Ridiculus
            lectus est euismod aliquam, suscipit fusce ipsum leo. Ante
            pellentesque lobortis condimentum integer adipiscing sit tincidunt
            commodo adipiscing. Viverra pellentesque ipsum mi lectus cursus ut
            sed. Maecenas risus diam id in. Aliquet id ac dolor, consequat purus
            quis lacinia porta libero. Lectus etiam eget diam diam sed tempus.
            Lectus sit volutpat volutpat ultrices cras. Tellus ac enim etiam
            iaculis. Ipsum cursus ac enim massa aliquet nec. Ullamcorper ante
            dapibus risus euismod lorem blandit in cursus. Condimentum magna id
            maecenas quis. Lobortis vestibulum et, id lectus nulla amet lobortis
            velit nibh. Quam lectus felis ac aliquam integer amet, quis
            convallis nam. Luctus erat libero ut purus molestie justo consequat
            proin est. Semper sed quis nibh vulputate fermentum vestibulum massa
            scelerisque. Nisi suscipit nulla tortor neque, ultricies nunc
            mauris. Venenatis non eget sagittis, eget suspendisse. Lectus nunc,
            aliquam eget accumsan ultrices in consectetur massa. Nisi, ornare
            vel mi egestas praesent in. Et sollicitudin quisque bibendum aliquet
            amet arcu rhoncus ultrices a. Nisi semper diam fames lectus arcu.
            Leo amet amet massa, molestie lectus neque arcu tortor tempor.
            Tempor, risus lectus a blandit lectus adipiscing. Ipsum sed lectus
            duis hac laoreet gravida. Aliquet maecenas consequat, neque vitae
            ultricies egestas aliquet ultrices sociis. Eget pellentesque vitae,
            dictum nullam cursus proin. Orci in mattis sit nibh etiam libero leo
            et. Morbi risus integer lorem non elementum sollicitudin eget
            interdum. Eros, mattis ut condimentum parturient felis sollicitudin.
            Natoque magna fermentum pulvinar in in lacus aliquam praesent.
            Vestibulum, praesent faucibus sollicitudin augue pellentesque.
            Adipiscing augue nibh sagittis, a morbi. Suspendisse consectetur
            velit faucibus leo id nulla. Quis at nullam vestibulum lacus, ut
            mattis quam in dictum. Etiam enim mauris, at et fames mattis tempus.
            Sem scelerisque massa semper at. Turpis ut enim, aliquam et. Arcu
            morbi malesuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
