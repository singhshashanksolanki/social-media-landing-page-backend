import "./getuserfriends.css";

function GetUserFriends({ friend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="rightbarFollowing">
        <img src={friend.profilePicture ? PF + friend.profilePicutre : PF + "person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">{friend.username}</span>
    </div>
  )
}

export default GetUserFriends