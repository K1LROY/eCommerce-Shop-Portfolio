import React from "react";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
        <div class="mb-4">
          <button
            class="btn  btn-floating m-1 text-white"
            href="#!"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-facebook"></i>
          </button>

          <button
            class="btn  btn-floating m-1 text-white"
            href="#!"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-instagram"></i>
          </button>

          <button
            class="btn  btn-floating m-1 text-white"
            href="#!"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-twitter"></i>
          </button>

          <button
            class="btn  btn-floating m-1 text-white"
            href="#!"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-linkedin"></i>
          </button>

          <button
            class="btn  btn-floating m-1 text-white"
            href="https://github.com/K1LROY"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-github"></i>
          </button>

          <button
            class="btn  btn-floating m-1 text-white"
            href="#!"
            type="button"
          >
            <i style={{ fontSize: "2rem" }} class="bi bi-google"></i>
          </button>
        </div>

        <div class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white">Support</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    F.A.Q
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Return
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Policies
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white">Product</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Product Selector
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Discount Programs
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Product Help
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white">Journal</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Customers Stories
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Product Highlights
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Behind the Scenes
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    View All
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white">About</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Our Home
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Origins
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a class="text-white" href="https://github.com/K1LROY">
          Moretech.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
