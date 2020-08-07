import React from "react";
import PropTypes from "prop-types";
import styles from "./notification.module.css";

const Notification = ({message}) => ( 
<p className = {styles.notification} > {message} </p>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};