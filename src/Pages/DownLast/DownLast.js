import React from "react";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import { IoAccessibility, IoAccessibilitySharp } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import './DownLast.css'
const DownLast = () => {
  return (
    <div className="" id="cont-62">

      <div className=" text-center mb-10 cont-60 font-sans w-auto">
        <h1>
          Programs that can <br></br> be taken
        </h1>
      </div>

    <div className="d-flex ml-16 ">
      <div>

        <div className="d-flex" >
          <div id="cont-74">
            <div className="d-flex " >
              <div className="rounded-full p-2  bg-gradient-to-r from-cyan-500 to-blue-200  text-4xl m-4 text-white" >
                <GiSprint></GiSprint>
              </div>
              <div className="d-grid">
                <h5>Gets ABS in two weeks</h5>
                <p className=" text-gray-500">
                  Exercise is a very important <br></br> need for our body.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="rounded-full p-2  bg-gradient-to-r from-cyan-500 to-blue-200  text-4xl m-4 mb-5 text-white">
                <GiHighKick></GiHighKick>
              </div>
              <div className="d-grid">
                <h5>15 Mins full body fat burn</h5>
                <p className="w-52  text-gray-500 -mt-6">
                  Exercise is a very important <br></br> need for our body.
                </p>
              </div>
            </div>
          </div>

          <div >
            <div className="d-flex" id="cont-75">
              <div className="rounded-full p-2  bg-gradient-to-r from-cyan-500 to-blue-200  text-4xl m-4 text-white">
                <GiWeightLiftingUp></GiWeightLiftingUp>
              </div>
              <div className="d-grid">
                <h5>25 Mins full body workout</h5>
                <p className="w-52  text-gray-500">Exercise is a very important need for our body.</p>
              </div>
            </div>

            <div className="d-flex" id="cont-76" >
            <div  className="rounded-full p-2  bg-gradient-to-r from-cyan-500 to-blue-200  text-4xl m-4 text-white">
                <IoAccessibility></IoAccessibility>
              </div>
              <div className="d-grid">
                <h5>25 Mins HIIT workout</h5>
                <p className="w-52  text-gray-500">Exercise is a very important need for our body. </p>
              </div>
            </div>
          </div>
        </div>

      
      </div>

      <div className="cont-78">

      
      <div className="d-flex">
        <div className="rounded-full p-2 bg-gradient-to-r from-cyan-500 to-blue-200  text-4xl m-4 text-white">
          <FaRunning></FaRunning>
        </div>

        <div className="d-grid">
          <h5>10 Mins toned arms workout</h5>
          <p className="w-52  text-gray-500">Exercise is a very important need for our body.</p>
        </div>
      </div>

    

     <div>
      <div className="d-flex">
        <div className="rounded-full p-2 text-4xl m-4 text-white bg-gradient-to-r from-cyan-500 to-blue-200">
          <IoAccessibilitySharp></IoAccessibilitySharp>
        </div>
        <div className="d-grid">
          <h5>Intense lower Abs workout</h5>
          <p className="w-52  text-gray-500">Exercise is a very important need for our body.</p>
        </div>
      </div>
      </div>
      </div>

      </div>
    </div>
  );
};

export default DownLast;
