import React from "react";

const Carousel = () => {
  return (
    <div className="container my-5 ">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="carousel1.jpeg"
              class="d-block w-100"
              alt="Wild Landscape"
            />
            <div class="carousel-caption d-none d-md-block ">
              <h1 className="text-white">MacBook</h1>
              <p>that can open a new world for you with the speed, force.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="carousel2.jpeg" class="d-block w-100" alt="Camera" />
            <div class="carousel-caption d-none d-md-block ">
              <h1 className="text-white">MSI Laptop</h1>
              <p>
                configuration empowers ultimate experience to explore the era of
                Metaverse.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="carousel3.jpeg"
              class="d-block w-100"
              alt="Exotic Fruits"
            />
            <div class="carousel-caption d-none d-md-block ">
              <h1 className="text-white">Dell laptop</h1>
              <p>Explore Dell's latest computers & technology solutions.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="prev"
        >
          <i style={{ fontSize: "2rem" }} class="bi bi-caret-left-fill"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="next"
        >
          <i style={{ fontSize: "2rem" }} class="bi bi-caret-right-fill"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
