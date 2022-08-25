import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:"https://i0.wp.com/www.scconline.com/blog/wp-content/uploads/2019/06/J-Sai.jpg?fit=887%2C887&ssl=1",
      id: 1,
      name: "J Sai Deepak",
      active: true,
      isOnline: true,
    },
    {
      image:"https://st3.cricketcountry.com/wp-content/uploads/cricket/51f0947474703fba958cf882954655bd.jpeg",
      id: 2,
      name: "Sanjay Dixit",
      active: false,
      isOnline: false,
    },
    {
      image:"https://pbs.twimg.com/profile_images/1512802297717342217/av29k04g_400x400.jpg",
      id: 3,
      name: "Anand Ranganathan",
      active: false,
      isOnline: false,
    },
    {
      image:"https://pbs.twimg.com/media/FDqG0d_VUAAv6RI?format=jpg&name=4096x4096",
      id: 4,
      name: "Meenakshi Jain",
      active: false,
      isOnline: true,
    },
    {
      image:"https://indiafacts.org/wp-content/uploads/2015/05/i154.jpg",
      id: 5,
      name: "Sitaram Goel",
      active: false,
      isOnline: false,
    },
    {
      image:"https://images.indianexpress.com/2022/06/yogi-1.jpg",
      id: 6,
      name: "Yogi Adityanath",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
