import css from "./Location.module.css";
import { BsMap } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/vansSlice.js";

function Location() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => inputRef.current?.focus();

  const handleInput = (event) => {
    if (event.type === "change" || event.key === "Enter") {
      dispatch(setLocation(event.target.value));
    }
  };

  return (
      <div className={css.location}>
        <label className={css.nameOfBlockLocation}>Location</label>
        <div className={css.inputWrapperOfBlockLocation} onClick={handleClick}>
          <BsMap className={css.iconOfMap} />
          <input
              ref={inputRef}
              className={css.inputOfBlockLocation}
              placeholder="City"
              onChange={handleInput}
              onKeyDown={handleInput}
          />
        </div>
      </div>
  );
}

export default Location;
