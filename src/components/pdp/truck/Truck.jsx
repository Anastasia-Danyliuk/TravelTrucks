import { useEffect, useState } from "react";
import css from "./Truck.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchVans } from "../../../redux/operations.js";
import { selectVanById, selectIsLoading, selectError } from "../../../redux/vansSlice.js";

import Name from "../../plp/name/Name.jsx";
import CommentSection from "../../plp/commentsection/CommentSection.jsx";
import Price from "../../plp/price/Price.jsx";
import Forma from "../formtruck/FormTruck.jsx";
import Info from "../info/Info.jsx";
import Comments from "../comments/Comments.jsx";
import Loader from "../../../Loader/Loader.jsx";

function Truck() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const van = useSelector((state) => selectVanById(state, id));
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const [activeTab, setActiveTab] = useState("features");

    useEffect(() => {
        dispatch(fetchVans());
    }, [dispatch]);

    if (isLoading) return <Loader />;
    if (error) return <div className={css.error}><span>{error}</span></div>;
    if (!van) return <div className={css.error}><span>Кемпер не знайдено.</span></div>;

    const formattedLocation = van.location ? (() => {
        const parts = van.location.split(', ');
        if (parts[0] === 'Ukraine') {
            return parts.reverse().join(', ');
        }
        return parts.join(', ');
    })() : "";

    const handleTabClick = (tab) => setActiveTab(tab);

    return (
        <div className={css.catalogId}>
            <div>
                <Name name={van.name} />
                <CommentSection
                    rating={van.rating}
                    amountOfReviews={van.reviews.length}
                    location={formattedLocation}
                />
                <div className={css.price}>
                    <Price price={van.price} van={van} />
                </div>
            </div>

            <ul className={css.galery}>
                {van.gallery.map((image, index) => (
                    <li key={index} className={css.galleryItem}>
                        <img
                            src={image.original}
                            alt={van.name}
                            className={css.galleryImage}
                        />
                    </li>
                ))}
            </ul>

            <div className={css.description}>
                <p className={css.textOfDescription}>{van.description}</p>
            </div>

            <div className={css.hendlerFeaturesAndReviews}>
                <h3
                    className={`${css.tab} ${activeTab === "features" ? css.activeTab : ""}`}
                    onClick={() => handleTabClick("features")}
                >
                    Features
                </h3>
                <h3
                    className={`${css.tab} ${activeTab === "reviews" ? css.activeTab : ""}`}
                    onClick={() => handleTabClick("reviews")}
                >
                    Reviews
                </h3>
            </div>

            <div className={css.FeaturesAndForm}>
                {activeTab === "features" && (
                    <Info
                        {...van}
                    />
                )}
                {activeTab === "reviews" && <Comments reviews={van.reviews} />}
                <Forma />
            </div>
        </div>
    );
}

export default Truck;