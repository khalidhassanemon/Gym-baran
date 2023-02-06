import React from "react";
import img4 from "../../Images/image-5.PNG";
import "./SeconLast.css";
const Secondlast = () => {
  return (
    <div className="mt-16 ml-20">
      <section className="d-flex  gap-60" id="cont-35">
        <div
          style={{ width: "350px", marginTop: "10px", marginBottom: "20px" }}
        >
          <img src={img4}></img>
        </div>
        <div className="how mt-16">
          <h1>How it works?</h1>
          <span>
            <p style={{ boxShadow: "0px 5px 20px #F4AAB9" }}>
              The Body becomes sick beacause of rarely exercise
            </p>
            <p className="cont-40">
              Don't give up in order to get a healthy and ideal body
            </p>
            <p className="cont-40">
              Become addicted to the exercise that is given
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Secondlast;
