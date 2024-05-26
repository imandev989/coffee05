import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "./information.module.css";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Information = () => {
  return (
    <section className={styles.Information}>
      <span>Contatc US</span>
      <p> Contact Information</p>
      <div>
        <PiCoffeeFill />
        <p>Store Address</p>
      </div>
      <div>
        <FaInternetExplorer />
        <p>Domain_Address.com</p>
      </div>
      <div>
        <BiSolidContact />
        <p>
          {" "}Details Address{" "}
        </p>
      </div>
      <div>
        <FaPhone />
        <p>Phone Number</p>
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>Domain_Address.com</p>
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>Domain_Address.com</p>
      </div>
      <div>
        <FaTelegramPlane />
        <p>Email And Whats App Contact Information</p>
      </div>
    </section>
  );
};

export default Information;
