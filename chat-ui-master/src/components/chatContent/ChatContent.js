import React, { Component, createRef,useRef } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {

  messagesEndRef = React.createRef()
  chatItms = [
    {
      key: 1,
      image:"https://st3.cricketcountry.com/wp-content/uploads/cricket/51f0947474703fba958cf882954655bd.jpeg",
      type: "",
      msg: "Hi JSD, How are you?",
    },
    {
      key: 2,
      image:"https://i0.wp.com/www.scconline.com/blog/wp-content/uploads/2019/06/J-Sai.jpg?fit=887%2C887&ssl=1",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:"https://i0.wp.com/www.scconline.com/blog/wp-content/uploads/2019/06/J-Sai.jpg?fit=887%2C887&ssl=1",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:"https://st3.cricketcountry.com/wp-content/uploads/cricket/51f0947474703fba958cf882954655bd.jpeg",
      type: "",
      msg: "Awesome these days.",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  componentDidMount(){
    this.scrollToBottom()
  }
  componentDidUpdate(){
    this.scrollToBottom()
  }


  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView();
  };

  
  send=(e)=>{
    if (this.state.msg !== "") {
      this.chatItms.push({
        key: 1,
        type: "",
        msg: this.state.msg,
        image:"https://st3.cricketcountry.com/wp-content/uploads/cricket/51f0947474703fba958cf882954655bd.jpeg",
      });
      this.setState({ chat: [...this.chatItms] });
      this.setState({ msg: "" });
    }
  }

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://i0.wp.com/www.scconline.com/blog/wp-content/uploads/2019/06/J-Sai.jpg?fit=887%2C887&ssl=1"
              />
              <p>J Sai Deepak</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  key={index}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
             <div ref={this.messagesEndRef} /> 
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={this.send}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
