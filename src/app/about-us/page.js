// import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import styles from "@/styles/aboutUs.module.css";
import { authUser } from "@/utils/auth";

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"About Us"} />
      <div className={styles.container}>
        <section>
          <div>
            <span>About Us</span>
            <p>Turkish hot cup</p>
          </div>
          <p>
            Four generations of experience and continuous communication with
            consumers guarantee these features. One of the prominent features of
            the Set Coffee collection is the direct import of raw materials
            through the management of the collection and the selection of the
            best raw materials for coffee production.
          </p>
          <p>
            Coffee set collection is the first collection related to coffee in
            Iran In 2007, he became a member of the European Specialty Coffee
            Association of Europe) has come out.
          </p>
        </section>
        <main className={styles.main}>
          <div>
            <p>
              The path that the founders of "Coffee Set" started in the 20s Now
              it has entered a new phase and we are proud to announce that in
              February 1994 Succeeded in obtaining relevant licenses from the
              Ministry of Health and Medical Education The Food and Drug
              Administration has changed the traditional and limited production
              of coffee We have done industrial and mass production.
            </p>
            <p>
              Among other honors of the "Coffee Set" collection is obtaining a
              coffee knowledge diploma from European Specialty Coffee
              Association in April 1995. (SCAE Coffee Diploma)
            </p>
            <p>
              We hope to improve the quality and variety by acquiring
              world-class knowledge in this industry We will see the product up
              to global standards in the near future.{" "}
            </p>
            <p>Concessionaire:</p>
          </div>
          <div>
            <span>Turk Coffee</span>
            <p className={styles.title}>The story is about coffee</p>
            <p>
              Djerba is four generations old and continuous communication with
              consumers guarantees this Features. One of the distinctive
              features of the coffee set collection is the import of raw
              materials Rasa by managing the collection and choosing the best
              raw materials for production It is coffee.
            </p>
            <p>
              Coffee set group is the first group related to coffee in Iran that
              in the year In 2007, he became a member of the European Specialty
              Coffee Association association of Europe) and many related courses
              Coffee processing is managed by the management of this complex in
              specialized workshops Education of this association as well as
              specialized coffee processing workshops, especially in The field
              of roasting coffee in America, which is one of the pioneers of
              this Has passed the industry. Now with the support of past
              achievements and Today's technology has entered the stage of
              industrial and extensive coffee production We are proud to
              announce that "Coffee Set" is a brand from now on It is an
              industry in Iran's coffee industry
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
