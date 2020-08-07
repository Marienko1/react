import React from "react";
import PropTypes from "prop-types";
import styles from "./stats.module.css";

const Stats = ({good,neutral,bad,total}) => {
    return (
         <div >
        <ul className = {styles.stats} >
        <li > Good: {good} </li> 
        <li > Neutral: {neutral} </li> 
        <li> Bad: {bad} </li> 
        </ul> 
        <p> Total: {total} </p> 
        <p> Positive feedback: {Math.round((good / total) * 100)} % </p> 
        </div>
    );
};

Stats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default Stats;

// const countTotal = (data, searchValue) => {
//   const countTotal = Object.values(data).reduce((a, b) => a + b);
//   return Math.round((searchValue / countTotal) * 100);
// };

// const Stats = ({ objects, searhValue }) => {
//   return (
//     <div>
//       <ul>
//         {Object.entries(objects).map(([key, values]) => (
//           <li key={key}>
//             {key} : {values}
//           </li>
//         ))}
//       </ul>

//       <p>Positive feedback :{countTotal(objects, searhValue)}%</p>
//     </div>
//   );
// };