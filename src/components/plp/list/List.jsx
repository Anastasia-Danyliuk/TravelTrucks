import css from "./List.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVans } from "../../../redux/operations.js";
import {
    applyFilters,
    selectFilteredVans,
    selectIsLoading,
    setActiveFilters,
} from "../../../redux/vansSlice.js";
import FilterSection from "../../filter/filtersection/FilterSection.jsx";
import TruckCards from "../truckcards/TruckCards.jsx";
import Loader from "../../../Loader/Loader.jsx";

function List() {
    const dispatch = useDispatch();

    const filteredVans = useSelector(selectFilteredVans);
    const isLoading = useSelector(selectIsLoading);

    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        dispatch(fetchVans());
    }, [dispatch]);

    const loadMore = () => setVisibleCount((prev) => prev + 4);

    const handleSearchClick = () => {
        dispatch(setActiveFilters());
        dispatch(applyFilters());
        setVisibleCount(4);
    };
    return (
        <div className={css.catalog}>
            <FilterSection handleSearchClick={handleSearchClick} />

            {isLoading && <Loader />}

            {!isLoading && (
                <TruckCards
                    loadMore={loadMore}
                    hasMore={visibleCount < filteredVans.length}
                    vans={filteredVans.slice(0, visibleCount)}
                />
            )}
        </div>
    );
}

export default List;