import { FaFacebook, FaRegMoon } from "react-icons/fa";

import "./App.css";
import { CiTwitter } from "react-icons/ci";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";

function App() {
  const [modal, setmodal] = useState("active");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );

  localStorage.setItem("darkMode", darkMode);
  return (
    <div className={darkMode ? `app active` : `app `}>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/imgs/Logo.svg" alt="" />
            </div>

            <ul className="links">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">How it work</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Solution</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
            </ul>

            <div className="btns">
              <div className="btn">
                <button className="login">Login</button>
              </div>
              <div className="btn">
                <button
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="border"
                >
                  {darkMode ? (
                    <span>
                      <IoSunnyOutline />
                      light
                    </span>
                  ) : (
                    <span>
                      <FaRegMoon />
                      dark
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="hero">
          <div className="container">
            <div className="writes">
              <div className="write">
                <h2>Minimize your tabs. </h2>
                <h1>Find the trends!</h1>
              </div>
              <div className="write">
                <p>
                  Don’t let your computer memories consumes all of those browser
                  tabs. Findtrend let you gathers all of your favorite website
                  into one place.
                </p>
              </div>
              <div className="write1">
                <div className="btn">
                  <button>Get Started 🔥</button>
                </div>
                <div className="image">
                  <img src="/imgs/img-hero.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="sectionOne">
          <div className="container">
            <div className="sectionWrite">
              <h1>Open new tabs is sh*t </h1>
              <div className="photos">
                <div className="photo">
                  <img src="/imgs/Group 427321657.svg" alt="" />
                </div>
                <div className="card ">
                  <button>
                    Findtrend - Elon M<span>usk</span> X
                  </button>
                </div>
                <div className="btn">
                  <button
                    className="btns2"
                    onClick={() => {
                    }}
                  >
                    salom
                  </button>
                </div>
                <div className="photo">
                  <img src="/imgs/Group 427321665.svg" alt="" />
                </div>
              </div>

              <div className="lorem">
                <p>
                  A solution for your browser tabs and don’t make your device
                  get slower over time. Get ease and faster to discover a trend
                  with just one tab.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionTwo">
          <div className="container">
            <div className="write">
              <h1>
                Findtrend helps you to increase your productivity and reduce
                your computer's memory load,{" "}
                <span>
                  an application that can fulfill your daily browsing needs.
                </span>{" "}
              </h1>
            </div>

            <div className="make">
              <h1>Findtrend make +1000 Startup grow</h1>

              <div className="logotivs">
                <div className="logotiv">
                  <img src="/imgs/image 116.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 128.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 121.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 119.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 125.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 122.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 129.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 133.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 117.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 126.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 120.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 124.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 132.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 127.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 118.png" alt="" />
                </div>
                <div className="logotiv">
                  <img src="/imgs/image 130.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionThree">
          <div className="container">
            <div className="write">
              <h1>All platform connect to Findtrend</h1>
            </div>
            <div className="icons">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="icon1">
                <CiTwitter />
              </div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>

            <div className="cards">
              <div className="box">
                <div className="image">
                  <img src="/imgs/tweet 1.png" alt="" />
                </div>
              </div>

              <div className="box">
                <div className="image">
                  <img src="/imgs/tweet 2.png" alt="" />
                </div>
              </div>

              <div className="box">
                <div className="image">
                  <img src="/imgs/tweet 3.png" alt="" />
                </div>
              </div>
            </div>

            <div className="btns">
              <button>View More Trend</button>
            </div>
          </div>
        </section>

        <section className="sectionFour">
          <div className="container">
            <div className="get">
              <h1>Get your best deal</h1>
            </div>
            <div className="write">
              <span>Monthly </span>
              <div className="button">
                <button></button>
              </div>
              <span>Yearly</span>
              <div className="image">
                <img src="/imgs/Group 427321660.png" alt="" />
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Personal</h3>
                <p>Special first packet for all</p>
                <hr />

                <h1>
                  $8/<span>/Month</span>{" "}
                </h1>

                <h6>✔ Up to 5 page each group</h6>
                <h6>✔ Up to 10 group page</h6>
                <h5>✔ 5 Days group page saved</h5>
                <div className="btn">
                  <button>Start Free Trial</button>
                </div>
              </div>
              <div className="card1">
                <h3>Regular</h3>
                <p>Recommended for personal pro</p>
                <hr />

                <h1>
                  $8/ <span>/Month</span>{" "}
                </h1>

                <h6>✔ Up to 5 page each group</h6>
                <h6>✔ Up to 10 group page</h6>
                <h5>✔ 5 Days group page saved</h5>
                <div className="btn">
                  <button>Start Free Trial</button>
                </div>
              </div>{" "}
              <div className="card">
                <h3>Personal</h3>
                <p>Special first packet for all</p>
                <hr />

                <h1>
                  $8/ <span>/Month</span>{" "}
                </h1>

                <h6>✔ Up to 5 page each group</h6>
                <h6>✔ Up to 10 group page</h6>
                <h5>✔ 5 Days group page saved</h5>
                <div className="btn">
                  <button>Start Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSeven">
          <div className="container">
            <div className="write">
              <h1>Join us on email for</h1>
              <h1 className="gray">more trending topics</h1>
              <div className="join">
                <button>Join Now </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="logo">
            <img src="/imgs/Frame.png" alt="" />
          </div>
          <ul className="link">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
