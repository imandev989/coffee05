import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import styles from "@/styles/rules.module.css";
import { authUser } from "../../utils/serverHelpers";

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"Rules"} />
      <div className={styles.container} data-aos="fade-up">
        <p>"Coffee Set" while respecting the privacy of users, for shopping,
           Registering comments or using some features of the website information from users
           requests to be able to provide safe and reliable services to users.
           To process and ship the order, information such as address, phone number and email
           It is required and since all coffee activities are legal and based on
           The rules of e-commerce take place and during the purchase process, the official invoice and
           A value added certificate is issued upon the request of legal clients, hence
           Entering information such as name and national code for natural persons or economic code and
           National ID is required for corporate purchases. Also email addresses and phone numbers
           that the customer registers in his profile, only the official email address and phone numbers
           It is approved by the customer and all the company's correspondence and responses are made through them
           Customers can enter another person's name, address, and phone number for delivery
           Take the order and enter the coffee set only to send the same order, from this
           The information will be used. Also, Coffee Set may be used to communicate with
           Customers, website content optimization and marketing research from some information
           use and to inform about events and news, services and services
           send e-mails or SMS to website members for special offers or promotions. At
           If users do not want to receive such emails and SMS
           can unsubscribe from the Coffee Set newsletter in their profile
           do{" "}
        </p>
        <p>
        Coffee Set may criticize and comment submitted by users in line with the rules
           Edit the website. Also, if the comment or message sent by the user is included
           In instances of criminal content, Coffee Set may use the information recorded for
           Use legal follow-up. Password maintenance is the responsibility of users and
           To avoid any potential abuse, users should not use it for
           reveal to someone else. Coffee Set considers the personal identity of users confidential and
           does not transfer their personal information to any other person or organization, except
           To be forced to provide the competent authorities with a legal order. Coffee
           Like other websites, Seth uses IP collection and cookies, but
           Protocol, server and security layers of coffee set and proper data management methods
           Protect user information and prevent illegal access
           Coffee sets to protect and maintain the information and privacy of all users
           It uses its power and hopes that the shopping experience is safe, comfortable and
           provide a pleasant experience for all users.{" "}
          <strong>(Response during business hours)</strong>
        </p>
        <p>Turkey City - 
        </p>
        <p>
        If you don't want to receive Coffee Set emails and newsletters, you can
           You can click on the unsubscribe word at the bottom of the email page.
        </p>
        <p>
        If you have any questions, please contact the contact information below.        </p>
        <p>Contact telephone and fax:</p>
      </div>
      <Footer />
    </>
  );
};

export default page;
