import Button from "@material-ui/core/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";

function Card({ data, index }) {
  AOS.init();
  return (
    <div
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
      className="blogCard"
    >
      <h1 className="blogTitle">{data.title}</h1>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontSize: "1.2em",
            margin: "2vh 0",
            color: "white",
            textAlign: "left",
          }}
          className="blogDesc"
        >
          {data.desc}
        </p>
        <div>
          <div
            style={{
              display: "flex",
              margin: "2vh 0",
              color: "white",
              gap: "5px",
            }}
          ></div>
        </div>
      </div>
      <div className = "buttonArea">
        <div style={{ display: "block", margin: "5vh 0 ", fontSize: "1em" }}>
          <div style={{ color: "#53c497", float: "left" }}>
            <div style={{ display: "flex", gap: "20px" }}>{data.author}</div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "auto 0" }}
          href={data.src}
          target="_blank"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
export default Card;
