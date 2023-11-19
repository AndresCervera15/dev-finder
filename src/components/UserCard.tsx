import { Icon } from "@iconify/react";
import { UserData } from "../utils/userType";
import { dateFormatter } from "../utils/dateFormater";

type userCardProps = {
  userInfo: UserData | null;
  isFirstInput: boolean;
};

export const UserCard = ({ userInfo, isFirstInput }: userCardProps) => {
  return userInfo !== null ? (
    <div className="userContainer">
      <div className="topContainer">
        <div style={{ display: "flex" }}>
          <img
            src={userInfo.avatar_url}
            alt="profile pic"
            className="profileImg"
          />
          <div className="profileInfo">
            <span className="userName">{userInfo.name || "Not available"}</span>
            <a
              href={userInfo.html_url}
              target="_blank"
              className="userLink"
            >{`@${userInfo.login}`}</a>
            <span className="bio">
              {userInfo.bio || "This profile has no bio"}
            </span>
          </div>
        </div>
        <span className="date">
          {`Joined ${dateFormatter(userInfo.created_at)}` || ""}
        </span>
      </div>
      <div className="bottomContainer">
        <div className="statsContainer">
          <div className="itemStat">
            <span>Repos</span>
            <span>{userInfo.public_repos}</span>
          </div>
          <div className="itemStat">
            <span>Followers</span>
            <span>{userInfo.followers}</span>
          </div>
          <div className="itemStat">
            <span>Following</span>
            <span>{userInfo.following}</span>
          </div>
        </div>
        <div className="networkContainer">
          <div>
            <div className="singleNetwork">
              <Icon
                icon="mdi:location"
                color="#4b6a9b"
                width="24"
                className="icon"
              />
              <span>{userInfo.location || "Not available"}</span>
            </div>
            <div className="singleNetwork">
              <Icon
                icon="entypo-social:twitter"
                color="#4b6a9b"
                width="24"
                className="icon"
              />
              <span>{userInfo.twitter_username || "Not available"}</span>
            </div>
          </div>
          <div>
            <div className="singleNetwork">
              <Icon
                icon="heroicons:link-20-solid"
                color="#4b6a9b"
                width="24"
                className="icon"
              />
              <span>{userInfo.blog || "Not available"}</span>
            </div>
            <div className="singleNetwork">
              <Icon
                icon="octicon:organization-16"
                color="#4b6a9b"
                width="24"
                className="icon"
              />
              <span>{userInfo.company || "Not available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="errorMessage">
      {isFirstInput
        ? null
        : "It seems we couldn't find that user or not exist. 😔"}
    </p>
  );
};
