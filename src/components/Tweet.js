import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet( {tweet} ) {
  // console.log(tweet);
  return (
    <div className="tweet">
      {/* <img
        src={ tweet.user.image }
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage img={ tweet.user }/>

      <div className="body">
        <div className="top">
          {/* <span className="user">
              <span className="name">{ tweet.user.name}</span>
              <span className="handle">@{ tweet.user.handle }</span>
          </span> */}
          <User user={ tweet.user } />

          {/* <span className="timestamp">{ tweet.timestamp }</span> */}
          <Timestamp time={ tweet } />
        </div>

        {/* <p className="message">
          { tweet.message }
        </p> */}
        <Message msg={ tweet } />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
