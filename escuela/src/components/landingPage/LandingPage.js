import React, { Component } from "react";
import LinkButton from "../common/linkButton";
// import SliderForm from "./SliderForm";
import EnrollBox from "./Enroll";
import AboutUs from "./AboutUs";
import ElemHigh from "./ElemHigh";
import Events from "./Events";
import "../footer/footerCSS.css";
import { Nav, NavItem, NavLink } from "reactstrap";

class LandingPage extends Component {
  // will add form to update sliders
  // will later map through each and prepend newest articles
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mx-auto "
          data-ride="carousel"
          data-interval="90000000"
          style={{ height: "50vh" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2209&q=80"
                alt="First slide"
                style={{ height: "50vh" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Latest Events</h1>
                <p>
                  Stay up to date on events you'd like to follow. Lorem ipsum
                  dolor amet hammock irure thundercats salvia knausgaard cloud
                  bread intelligentsia, aesthetic prism. Etsy dolore brooklyn
                  pickled semiotics.
                </p>
                <LinkButton text="View Calendar" href="/calendar" />
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&s=d9689cd685d7055e618f665251d1fc5c&auto=format&fit=crop&w=900&q=60"
                alt="Second slide"
                style={{ height: "70vh" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-dark">Caption</h1>
                <button className=" btn text-muted bg-warning">
                  {" "}
                  Button to article
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-0.3.5&s=103730400a4578e366cb641d1a870842&auto=format&fit=crop&w=900&q=60"
                alt="Third slide"
                style={{ height: "72vh" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-dark">Caption2</h1>
                <LinkButton text="Another" href="#" />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Nav className="justify-content-center ">
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/academics">Academics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>

        {/* <nav className="nav nav-pills justify-content-center ">
          <a className="nav-item nav-link active" href="#">
            About
          </a>
          <a className="nav-item nav-link" href="#">
            Academics
          </a>
          <a className="nav-item nav-link" href="#">
            Pricing
          </a>
          <a className="nav-item nav-link" href="/signup">
            Register
          </a>
          <a className="nav-item nav-link" href="#">
            Contact Us
          </a>
        </nav> */}
        <EnrollBox />
        {/* <SliderForm /> */}
        <AboutUs />
        <ElemHigh />

        <Events />
      </div>
    );
  }
}

export default LandingPage;