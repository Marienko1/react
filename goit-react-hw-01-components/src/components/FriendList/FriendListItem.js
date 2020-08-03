import React from "react";
import PropTypes from "prop-types";
import friendListStyles from "./friendList.module.css";

const FriendListItem = ({avatar,name,isOnline}) => ( 
    <>
    <span className = {isOnline ? friendListStyles.online : friendListStyles.offline} >
    </span> 
    <img className = {friendListStyles.avatar}
    src = {avatar}
    alt = {name}
    width = "48"/>
    <p className = {friendListStyles.name} > {name} </p> 
    </>
);

// const checkStatus = (isOnline) => {
//   const status = [friendListStyles.status];

//   if (isOnline) {
//     status.push(friendListStyles.online);
//   } else status.push(friendListStyles.offline);

//   return status.join(" ");
// };

FriendListItem.defaultProps = {
    avatar: "https://i.ibb.co/7NmPR1b/avatar.png",
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;