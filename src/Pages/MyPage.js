import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer'; // ✅ Footer 불러오기

const MyPage = () => {
  // ✅ Alice 트윗만 필터링
  const filteredTweets = dummyTweets.filter((tweet) => tweet.username === 'Alice');

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0]?.picture} alt="Alice profile" />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">{filteredTweets[0]?.username} Profile</p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map((tweet) => (
          <li className="tweet" id={tweet.id} key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} alt={`${tweet.username}'s profile`} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className="tweet__username">{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        ))}
      </ul>
      <Footer /> {/* ✅ Footer 출력 */}
    </section>
  );
};

export default MyPage;
