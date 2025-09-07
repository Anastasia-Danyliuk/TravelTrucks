import ComplectationBlock from "../../plp/complect/Сomplect.jsx";
import css from "./Info.module.css";
import PropTypes from "prop-types";

function Info(props) {
  const {
    AC,
    TV,
    bathroom,
    kitchen,
    radio,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = props;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const vehicleDetails = [
    { label: "Form", value: capitalize(form) },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Height", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
  ];

  return (
      <div className={css.featuresBlock}>
        <ComplectationBlock
            AC={AC}
            TV={TV}
            bathroom={bathroom}
            kitchen={kitchen}
            radio={radio}
            transmission={capitalize(transmission)}
            engine={capitalize(engine)}
        />

        <div>
          <h3 className={css.headerOfFeatures}>Vehicle details</h3>
          <ul className={css.column}>
            {vehicleDetails.map(({ label, value }) => (
                <li key={label} className={css.row}>
                  <span className={css.property}>{label}</span>
                  <span>{value}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

Info.propTypes = {
  AC: PropTypes.bool.isRequired,
  TV: PropTypes.bool.isRequired,
  bathroom: PropTypes.bool.isRequired,
  kitchen: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
  transmission: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  tank: PropTypes.string.isRequired,
  consumption: PropTypes.string.isRequired,
};

export default Info;
