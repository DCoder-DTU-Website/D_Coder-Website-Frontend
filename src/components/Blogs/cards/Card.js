import Button from "@material-ui/core/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ data, index }) {
  AOS.init();
  return (
    <div
      style={{
        margin: "5vh",
        padding: "5vh",
        backgroundColor: "#1c1c24",
        width: "90%",
        filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.75))",
        borderRadius: "5px",
      }}
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
    >
      <h1
        style={{
          color: "#039be5",
          fontSize: "1.5rem",
          fontWeight: "Bold",
          textAlign: "left",
        }}
      >
        {data.title}
      </h1>
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
          >
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "block", margin: "5vh 0 ", fontSize: "1em" }}>
          <div style={{ color: "#53c497", float: "left" }}>
            <div style={{ display: "flex", gap: "20px" }}>{data.author}</div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "auto 0" }}
          href = {data.src}
          target = "_blank"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
export default Card;
