import { Link } from "react-router-dom";
// import logo from "../../asset/images/cglogo.png"
import "./footer.css";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer({ data }) {
  return (
    <>
      <div className="footer-above-wrapper">
        

        <div className="sec-wrapper sec-wrapper-left">
          <div className="footer-desc">
            <div>{data.desc}</div>
          <div className="footer-logo">
          <img src={data.logo} />
        </div></div>
          <div className="social-wrapper">
            <div className="social-icon-wrapper">
              
              <Link to="">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="social-icon-wrapper">
              
              <Link to="">
               
                <FaFacebook />
              </Link>
            </div>
            <div className="social-icon-wrapper">
              
              <Link to="">
                <FaInstagram />
              </Link>
            </div>
            <div className="social-icon-wrapper">
              
              <Link to="">
                <FaTwitter />
              </Link>
            </div>
            <div className="social-icon-wrapper">
              
              <Link to="">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {data.content.map((item) => (
          <div className="sec-wrapper">
            <div className="footer-head">{item.subHead}</div>
            {item.subContent.map((a) => (
              <div> {a} </div>
            ))}
          </div>
        ))}

        {data.contentLinks.map((item) => (
          <div className="sec-wrapper">
            <div className="footer-head">{item.subHead}</div>
            {item.subContent.map((a) => (
              <div>
                {" "}
                <Link to="">{a} </Link>{" "}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-below-wrapper">
        <div>{data.policyContent[0] || ""}</div>
        <div>{data.policyContent[1] || ""} </div>
        <div>{data.policyContent[2] || ""}</div>
      </div>
    </>
  );
}
