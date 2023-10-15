import React from "react";
import "./Notifications.css";

const Notifications = () => {
  return (
    <section>
      <div className="whole-container">
        <div className="nav-part">
          <p className="notifications-text">
            Notifications <span className="number">3</span>{" "}
          </p>
          <p className="blue-bold" style={{ marginBottom: 27, fontSize: 16 }}>
            Mark all as read
          </p>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image7.jpg" alt="" />
          </div>
          <div className="text-part">
            <div className="content-notification">
              <p className="black-bold">
                Mark Webber{" "}
                <b className="light-gray"> reacted to your recent post</b>{" "}
                <span className="blue-bold">My first tournament today!</span>{" "}
              </p>
              <p className="red-circle"></p>
            </div>
            <p className="light-gray">1m ago</p>
          </div>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image5.jpg" alt="" />
          </div>
          <div className="text-part">
            <div className="content-notification">
              <p className="black-bold">
                Angela Gray <b className="light-gray">followed you</b>{" "}
              </p>
              <p className="red-circle"></p>
            </div>
            <p className="light-gray">5m ago</p>
          </div>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image8.jpg" alt="" />
          </div>
          <div className="text-part">
            <div className="content-notification">
              <p className="black-bold">
                Jacob Thompson{" "}
                <b className="light-gray"> has joined your group</b>
                <span className="blue-bold"> Chess Club</span>
                <span className="red-circle"></span>{" "}
              </p>
              <p className="red-circle"></p>
            </div>
            <p className="light-gray">1 day ago</p>
          </div>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image2.jpg" alt="" />
          </div>
          <div className="text-part">
            <p className="black-bold">
              Rizky Hasanuddin{" "}
              <b className="light-gray">sent you a private message</b>{" "}
            </p>
            <p className="light-gray">5 days ago</p>
          </div>
        </div>
        <p className="border-message">
          Hello, thanks for setting up the Chess Club. I've been a member for a{" "}
          <br />
          few weeks now and I'm already having lots of fun and improving my{" "}
          <br />
          game.
        </p>

        <div className="main-part">
          <div className="image-part">
            <img src="./image6.jpg" alt="" />
          </div>
          <div className="text-part">
            <p className="black-bold">
              Kimberly Smith{" "}
              <b className="light-gray">commented on your picture</b>{" "}
            </p>
            <p className="light-gray">1 week ago</p>
          </div>
          <div className="image-part2">
            <img
              src="./image4.jpg"
              alt=""
              style={{ paddingLeft: 90, paddingTop: 5, borderRadius: 200 }}
            />
          </div>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image1.jpg" alt="" />
          </div>
          <div className="text-part">
            <p className="black-bold">
              Nathan Peterson{" "}
              <b className="light-gray">reacted to your recent posts</b>{" "}
              <span className="gray-bold">
                {" "}
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <p className="light-gray">2 weeks ago</p>
          </div>
        </div>

        <div className="main-part">
          <div className="image-part">
            <img src="./image3.jpg" alt="" />
          </div>
          <div className="text-part">
            <p className="black-bold">
              Anna Kim <b className="light-gray">left the group</b>{" "}
              <span className="blue-bold"> Chess Club</span>{" "}
            </p>
            <p className="light-gray">2 weeks ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
