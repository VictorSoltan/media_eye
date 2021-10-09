import React from 'react';
import './EventBlock.scss';

import User from '../../Assets/home/user.svg'
import Calendar from '../../Assets/home/calendar.svg'

// {value: "NFT Crypto Comicon", img: Event, author: Seller, nickname: "@nickname", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...", date: "17.04.2021", views: 555 },

const EventBlock = (props) => {
  return (
    <div className="event_block_wrapper">
      <div className="event_block">
        <div>
          <img src={props.arr.img} alt="event_image" />
        </div>
      </div>
      <div className="event_info">
        <div className="author_div">
          <div>
            <img src={props.arr.author} alt="author"/>
          </div>
        </div>
        <span>{props.arr.nickname}</span>
        <h2>{props.arr.value}</h2>
        <p>Description:</p>
        <p>{props.arr.description}</p>
        <div className="event_info_footer">
          <span>
            <img src={Calendar} alt="calendar" />
            {props.arr.date}
          </span>
          <span>
            <img src={User} alt="user" />
            {props.arr.views}
          </span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default EventBlock;
