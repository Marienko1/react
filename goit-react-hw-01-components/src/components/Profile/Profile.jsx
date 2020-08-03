import React from "react";
import PropTypes from "prop-types";
import profileStyles from "./profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={profileStyles.profile}>
    <div className={profileStyles.description}>
      <img src={avatar} alt={name} className={profileStyles.avatar} />
      <p className={profileStyles.name}>{name}</p>
      <p className={profileStyles.tag}>@{tag}</p>
      <p className={profileStyles.location}>{location}</p>
    </div>
    <ul className={profileStyles.stats}>
      <li>
        <span className={profileStyles.label}>Followers</span>
        <span className={profileStyles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={profileStyles.label}>Views</span>
        <span className={profileStyles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={profileStyles.label}>Likes</span>
        <span className={profileStyles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  location: "default location",
  avatar: "https://i.ibb.co/7NmPR1b/avatar.png",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;