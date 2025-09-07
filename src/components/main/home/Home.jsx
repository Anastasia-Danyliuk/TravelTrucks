import css from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={css.homePage}>
      <div className={css.mainContantHomePage}>
        <div className={css.textPartOnHomePage}>
          <h1 className={css.headerOnHomePage}>Campers of your dreams</h1>
          <h2 className={css.textUnderHeader}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <Link to="/catalog">
          <button className={css.buttonViewNow}>View Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
