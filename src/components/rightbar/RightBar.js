import "./rightbar.scss"

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Rafiqul Islam</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Rafiqul Islam</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>

          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <p>
                    <span>Rafiqul Islam</span> changed their cover photo
                 </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <p>
                    <span>Rafiqul Islam</span> changed their cover photo
                 </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <p>
                    <span>Rafiqul Islam</span> changed their cover photo
                 </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <p>
                    <span>Rafiqul Islam</span> changed their cover photo
                 </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                 <img src="/images/login.jpg" alt="Profile" />
                 <p>
                    <span>Rafiqul Islam</span> changed their cover photo
                 </p>
              </div>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
              <span className="onlineStatus"></span>
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Rafiqul Islam</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <span className="onlineStatus"></span>
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Rafiqul Islam</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                 <span className="onlineStatus"></span>
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Abdullah</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                 <span className="onlineStatus"></span>
                 <img src="/images/login.jpg" alt="Profile" />
                 <span>Ruhan</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RightBar