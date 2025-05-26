import React from 'react';
import { Link } from 'react-router-dom'; // Link 불러오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // ✅ 이 줄 추가!


const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <Link to="/mypage">MyPage</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <Link to="/about">About</Link>
          </li>
      </ul>
      <i className="far fa-comment-dots"></i> 
    </section>
  );
};

export default Sidebar;
