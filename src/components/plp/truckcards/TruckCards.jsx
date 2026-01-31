import css from "./TruckCards.module.css";
import PropTypes from "prop-types";
import CardTruck from "../cardtruck/CardTruck.jsx";

function TruckCards({ vans, loadMore, hasMore }) {
    return (
        <div className={css.wrapperForCards}>
            <ul className={css.truckList}>
                {vans.map((van) => (
                    <li key={van.id} className={css.truckListItem}>
                        <CardTruck van={van} />
                    </li>
                ))}
            </ul>

            {hasMore && (
                <div className={css.blockLoadMoreButton}>
                    <button
                        type="button"
                        className={css.loadMoreButton}
                        onClick={loadMore}
                    >
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
}

TruckCards.propTypes = {
    vans: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadMore: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
};

export default TruckCards;