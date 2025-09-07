import { useEffect, useState } from "react";
import css from "./Truck.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVanById } from "../../../redux/vansSelectors.js";
import { setVans } from "../../../redux/vansSlice.js";
import axios from "axios";
import Name from "../../plp/name/Name.jsx";
import CommentSection from "../../plp/commentsection/CommentSection.jsx";
import Price from "../../plp/price/Price.jsx";
import Forma from "../formtruck/FormTruck.jsx";
import Info from "../info/Info.jsx";
import Comments from "../comments/Comments.jsx";

function Truck() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const van = useSelector((state) => selectVanById(state, id));

  const [activeTab, setActiveTab] = useState("features");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVan = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        dispatch(setVans([response.data]));
      } catch (error) {
        console.error("Error fetching van by ID:", error);
        setError("Failed to fetch van details.");
      } finally {
        setLoading(false);
      }
    };

    fetchVan();
  }, [id, dispatch]);

  if (loading) {
    return <span className={css.loader}></span>;
  }

  if (error) {
    return (
      <div>
        <span>{error}</span>
      </div>
    );
  }

  if (!van) {
    return (
      <div>
        <span>Фургон не знайдено.</span>
      </div>
    );
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={css.catalogId}>
      <div>
        <Name name={van.name} />
        <CommentSection
          rating={van.rating}
          amountOfReviews={van.reviews.length}
          location={van.location}
        />
        <div className={css.price}>
          <Price price={van.price} van={van} />
        </div>
      </div>
      <div className={css.galery}>
        {van.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={van.name}
            className={css.galleryImage}
          />
        ))}
      </div>
      <div className={css.description}>
        <p className={css.textOfDescription}>{van.description}</p>
      </div>

      <div className={css.hendlerFeaturesAndReviews}>
        <h3
          className={`${css.features} ${
            activeTab === "features" ? css.activeTab : ""
          }`}
          onClick={() => handleTabClick("features")}
        >
          Features
        </h3>
        <h3
          className={`${css.reviews} ${
            activeTab === "reviews" ? css.activeTab : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </h3>
      </div>

      <div className={css.FeaturesAndForm}>
        {activeTab === "features" && (
          <Info
            AC={van.AC}
            TV={van.TV}
            bathroom={van.bathroom}
            kitchen={van.kitchen}
            radio={van.radio}
            transmission={van.transmission}
            engine={van.engine}
            form={van.form}
            length={van.length}
            width={van.width}
            height={van.height}
            tank={van.tank}
            consumption={van.consumption}
          />
        )}
        {activeTab === "reviews" && <Comments reviews={van.reviews} />}
        <Forma />
      </div>
    </div>
  );
}

export default Truck;
