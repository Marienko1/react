import React from "react";
import PropTypes from "prop-types";
import statisticStyles from "./statistics.module.css";

const Statistics = ({ stats, title }) => (
  <section className={statisticStyles.statistics}>
    {title && <h2 className={statisticStyles.title}>{title}</h2>}
    <ul className={statisticStyles.stat_list}>
      {stats.map((item) => (
        <li
          className={statisticStyles.item}
          style={{ backgroundColor: random_bg_color() }}
          key={item.id}
        >
          <span className={statisticStyles.label}>{item.label}</span>
          <span className={statisticStyles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

//для проверки создания заголовка просто поставить коммент
Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

export default Statistics;