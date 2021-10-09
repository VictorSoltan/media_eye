import React from 'react';
import './SellerBlock.scss';
import Heart from '../../Assets/home/heart.svg'
import User from '../../Assets/home/user.svg'

const SellerBlock = (props) => {
  console.log(props)
  return (
    <div className="seller_block_wrapper">
      <div className="seller_inner">
        <div className="seller_inner_block">
          <div className="seller">
            <img src={props.arr.img} alt="seller" />
          </div>
          <div className="seller_info">
            <h4>{props.arr.value}</h4>
            <div className="seller_footer">
              <span>
                <img src={Heart} alt="heart" />
                1,2 k
              </span>
              <span>
                <img src={User} alt="heart" />
                555
              </span>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default SellerBlock;
