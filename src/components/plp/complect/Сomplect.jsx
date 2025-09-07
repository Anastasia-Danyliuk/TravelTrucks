import css from "./Complect.module.css";
import PropTypes from "prop-types";

function ComplectationBlock({
  AC,
  TV,
  bathroom,
  kitchen,
  radio,
  transmission,
  engine,
}) {
  return (
    <div className={css.complectationBlock}>
      <div className={css.equipment}>
        <svg className={css.iconForVehicleEquipment}>
          <use href="/icons/symbol-defs.svg#icon-diagram"></use>
        </svg>
        <p className={css.textEquipment}>{transmission}</p>
      </div>

      <div className={css.equipment}>
        <svg className={css.iconForVehicleEquipment}>
          <use href="/icons/symbol-defs.svg#icon-fuel-pump"></use>
        </svg>
        <p className={css.textEquipment}>{engine}</p>
      </div>
      {kitchen && (
        <div className={css.equipment}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-cup-hot"></use>
          </svg>
          <p className={css.textEquipment}>Kitchen</p>
        </div>
      )}
      {AC && (
        <div className={`${css.equipment} ${css.shortWord}`}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-wind"></use>
          </svg>
          <p className={css.textEquipment}>AC</p>
        </div>
      )}
      {TV && (
        <div className={`${css.equipment} ${css.shortWord}`}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-tv"></use>
          </svg>
          <p className={css.textEquipment} id={css.TV}>
            TV
          </p>
        </div>
      )}
      {bathroom && (
        <div className={css.equipment}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-bi_droplet"></use>
          </svg>
          <p className={css.textEquipment}>Bathroom</p>
        </div>
      )}
      {radio && (
        <div className={css.equipment}>
          <svg className={css.iconForVehicleEquipment}>
            <use href="/icons/symbol-defs.svg#icon-ui-radios"></use>
          </svg>
          <p className={css.textEquipment}>Radio</p>
        </div>
      )}
    </div>
  );
}

ComplectationBlock.propTypes = {
  AC: PropTypes.bool.isRequired,
  TV: PropTypes.bool.isRequired,
  bathroom: PropTypes.bool.isRequired,
  kitchen: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
  transmission: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
};

export default ComplectationBlock;
