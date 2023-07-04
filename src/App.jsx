import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Skills,
  Projects,
  ContactMe,
  Footer,
  Banner,
} from "./components";



const App = () => {

  return (
    <div className="bg-primary w-full  cont body overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} panel h-screen`}>
          <Hero className="" />
          <Stats />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner />

          <Skills />

          <Projects />

          <ContactMe />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
