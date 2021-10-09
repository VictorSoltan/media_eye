import React from 'react';
import './MarketplaceBlock.scss';
import Heart from '../../Assets/home/heart.svg'

const MarketplaceBlock = (props) => {
  return (
    <div className="marketplace_block_wrapper">
    <div className="marketplace_block">
      <div className="marketplace_block_img">
      <div className="marketplace_block_img_wrapper ">
        <img src={props.arr.img} alt="marketplace block img" />
      </div>
      </div>
      <div className="marketplace_block_info">
        <h6>{props.arr.value} Demo Title</h6>
        <a>@user123</a>
        <div className="marketplace_block_footer">
          <span>
            <img src={Heart} alt="heart" />
            1,2 k
          </span>
          <span className="count">0.053 ETH</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MarketplaceBlock;
