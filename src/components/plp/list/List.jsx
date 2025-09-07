import css from "./List.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterSection from "../../filter/filtersection/FilterSection.jsx";
import TruckCards from "../truckcards/TruckCards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setVans, setActiveFilters, resetFilters } from "../../../redux/vansSlice.js";

function List() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [filteredVans, setFilteredVans] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const filters = useSelector((state) => state.vans.filters);
  const vans = useSelector((state) => state.vans.vans);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
            "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        dispatch(setVans(data.items));
        setFilteredVans(data.items);
      } catch (error) {
        console.error("Error fetching vans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filters]);

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  const handleSearchClick = () => {
    dispatch(setActiveFilters());
    const filtered = vans.filter(
        ({ AC, TV, kitchen, bathroom, transmission, location, form }) =>
            (!filters.AC || AC) &&
            (!filters.TV || TV) &&
            (!filters.kitchen || kitchen) &&
            (!filters.bathroom || bathroom) &&
            (!filters.transmission ||
                filters.transmission.toLowerCase() === transmission.toLowerCase()) &&
            (!filters.location ||
                location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (filters.forms.length === 0 || filters.forms.includes(form))
    );

    dispatch(resetFilters());
    setFilteredVans(filtered);
    setVisibleCount(4);
  };

  return (
      <div className={css.catalog}>
        <FilterSection handleSearchClick={handleSearchClick} />
        {loading && <span className={css.loader}></span>}
        <TruckCards
            loadMore={loadMore}
            hasMore={visibleCount < filteredVans.length}
            vans={filteredVans.slice(0, visibleCount)}
        />
      </div>
  );
}

export default List;
