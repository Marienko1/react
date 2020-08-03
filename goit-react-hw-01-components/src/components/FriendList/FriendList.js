import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import friendListStyles from "./friendList.module.css";

const FriendList = ({friends}) => 
( <ul className = {friendListStyles.friendList} > 
     {friends.map((item) => ( 
         <li key = {item.id}className = {friendListStyles.item} >
            <FriendListItem {...item}/> 
            </li>
        ))} 
    </ul>
);

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};