import css from "./CardTruck.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Name from "../name/Name.jsx";
import Price from "../price/Price.jsx";
import CommentSection from "../commentsection/CommentSection.jsx";
import ComplectationBlock from "../complect/Сomplect.jsx";
import Description from "../desc/Description.jsx";

function CardTruck({ van }) {
    const thumbPhoto = van.gallery[0].thumb;
    const fullName = van.name;
    const name = cutText(fullName, 25);
    const price = van.price;
    const rating = van.rating;
    const amountOfReviews = van.reviews.length;

    const formattedLocation = van.location
        ? van.location.split(',').map(item => item.trim()).reverse().join(', ')
        : "";

    const description = van.description;
    const descriptionForCard = cutText(description, 65);
    const AC = van.AC;
    const TV = van.TV;
    const bathroom = van.bathroom
    const kitchen = van.kitchen;
    const radio = van.radio;
    const transmission = capitalizeFirstLetter(van.transmission);
    const engine = capitalizeFirstLetter(van.engine);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function cutText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength).trimEnd() + "...";
    }

    return (
        <div className={css.card}>
            <div>
                <img src={thumbPhoto} alt={van.name} className={css.photoOfVan} />
            </div>
            <div className={css.info}>
                <div className={css.header}>
                    <div className={css.headerOfCard}>
                        <Name name={name} />
                        <CommentSection
                            amountOfReviews={amountOfReviews}
                            rating={rating}
                            location={formattedLocation}
                        />
                    </div>
                    <Price price={price} van={van} />
                </div>
                <Description descriptionForCard={descriptionForCard} />

                <ComplectationBlock
                    AC={AC}
                    TV={TV}
                    bathroom={bathroom}
                    kitchen={kitchen}
                    radio={radio}
                    transmission={transmission}
                    engine={engine}
                />
                <div className={css.blockButtonShowMore}>

                    <Link to={`/catalog/${van.id}`}>
                        <button className={css.buttonShowMore}>Show more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

CardTruck.propTypes = {
    van: PropTypes.object.isRequired,
};

export default CardTruck;