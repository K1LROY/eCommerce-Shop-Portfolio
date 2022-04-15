import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <div className=" text-danger h1 font-weight-bold text-center ">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div> */}
      <header>
        <div
          class="text-center bg-image"
          style={{
            backgroundImage: "url(hero2.jpg)",
            height: "80vh",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div>
                <h1 class="mb-2 text-white">The Desk Shelf System</h1>
                <h5 class="mb-5 text-white-50">
                  Build your dream workspace, so you cen get your best work
                  done.
                </h5>
                <button type="button" class="btn btn-light btn-rounded">
                  <Link to="/register" className="text-decoration-none  ">
                    <i className="bi bi-plus me-1"></i>
                    Register
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 btn-light ">
        <Jumbotron text={["New Arrivals"]} />
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 btn-light">
        <Jumbotron text={["Best Sellers"]} />
      </h4>
      <BestSellers />
    </>
  );
};

export default Home;
