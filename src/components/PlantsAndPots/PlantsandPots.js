import { Component } from "react";
import Header from "../Header/Header";
import "./plantsandpots.css";
import { images } from "../../staticdata/images";
import PlantsCard from "../PlantsCard/PlantsCard";

class PlantsandPots extends Component {
  render() {
    console.log(images);
    const courserData = [
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
      "sds",
    ];
    return (
      <div>
        <Header />
        <div className="search-card">
          <input
            className="search-input"
            placeholder="search plant"
            type="search"
          />
        </div>
        <div className="buttons-card">
          <button>Plants</button>
          <button>Pots</button>
        </div>
        <p className="para">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <div className="wrapper">
          <div>
            <h1>Nursery</h1>
            {/* <button>c</button> */}
            <div className="carousel">
              {courserData.map((product) => (
                <div className="carousel-card">
                  <img src={images.img3} alt="Nursery" />
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
            {/* <button>D</button> */}
          </div>
          <div className="filter-box">
            <div className="filter">
              <div className="filter-individuals">
                <h3>
                  <span className="text">Filter</span>{" "}
                  <span className="plus">CLEAR ALL</span>
                </h3>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Type of Plants </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Price </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Nursery </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Ideal Plants Location </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Indoor/Outdoor </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Maintenance </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Plant Size </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Water Schedule </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Color </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Seasonal </span>
                  <span className="plus">+</span>
                </p>
              </div>
              <div className="filter-individuals">
                <p>
                  <span className="text">Light Efficient </span>
                  <span className="plus">+</span>
                </p>
              </div>
            </div>

            <div className="pages">
              <PlantsCard />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-card1">
          <div className="box">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
            <input type="email" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="box">
            <h3>About US</h3>
            <p>Our Stoty</p>
            <p>Blogs</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Help & Support</p>
          </div>
          <div className="box">
            <h3>OUR SERVICES</h3>
            <p>Book Maali</p>
            <p>Rent Plants</p>
            <p>Plants & Pots</p>
            <p>Gardening Tools</p>
          </div>
          <div className="box">
            <h3>USEFUL LINKS</h3>
            <p>My Account</p>
            <p>Orders & Returns</p>
            <p>Track Order</p>
            <p>Terms & Condidtions</p>
            <p>Privacy Policy</p>
            <p>Return, Refund & Replacement Policy</p>
          </div>
          <div className="box">
            <h3>GET IN TOUCH</h3>
            <p className="address">Address:132, First Floor, Sushnt Lok Phase -3,sector-37, Haryana, India 122003</p>
            <div>
            <p>Call:</p>
            <span>+91 9876543212</span>
            </div>
            <div>
            <p>Email:</p>
            <span>book@pickyourplant.com</span>
            </div>

          </div>
        </div>
        <div className="footer-card2">
          <h1>CHAPERONE</h1>
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
        <div>
          <h1>Follow us on</h1>

        </div>
        <hr/>
        <p>© 2023, chaperone.com All rights reserved.</p>
        </div>
      </div>
    );
  }
}
export default PlantsandPots;
