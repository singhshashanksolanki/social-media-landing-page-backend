import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import userFriend from "../getuserfriends/GetUserFriends";
import GetUserFriends from "../getuserfriends/GetUserFriends";

export default function Rightbar({ user }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() =>{
    const getFriends = async () =>{
      if(user._id !== undefined && user._id !== null) {
        try {
        
          const friendList = await axios.get("/api/users/friends/" + user._id);
          setFriends(friendList.data);
          console.log(user._id);
        } catch(err) {
          console.log(err);
        }
      }
      
    };
    getFriends();
  },[user._id]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => {
            return <Online key={u.id} user={u} />
          })}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : ""}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend => {
              return friend ? <GetUserFriends key={friend._id} friend={friend}/> : <></>
          })}
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}
