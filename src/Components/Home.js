import React, {useState} from 'react'
import './Home.scss'

import MarketplaceSlider from './MarketplaceSlider/MarketplaceSlider';

import MarketplaceBlock from './MarketplaceBlock/MarketplaceBlock';
import CollectionBlock from './CollectionBlock/CollectionBlock';
import SellerBlock from './SellerBlock/SellerBlock';
import EventBlock from './EventBlock/EventBlock';

import Back from '../Assets/home/Mask_Group.png'

import Skull from '../Assets/home/c501c162725691 4.png'

import DemoImg from '../Assets/home/image_205.png'

import Demo1 from '../Assets/home/image_323.png'
import Demo2 from '../Assets/home/image_321.png'
import Demo3 from '../Assets/home/image_320.png'
import Demo4 from '../Assets/home/image_206.png'
import Demo5 from '../Assets/home/image_203.png'

import Author from '../Assets/home/053.png'

import NftDemo1 from '../Assets/home/05china05.png'
import NftDemo2 from '../Assets/home/04china04.png'

import Seller from '../Assets/home/seller.png'

import Event from '../Assets/home/event.png'


function Home() {

  const nftExamples = [
    {value: "Demo Title", img: Demo1},
    {value: "Demo Title", img: Demo2},
    {value: "Demo Title", img: Demo3},
    {value: "Demo Title", img: Demo4},
    {value: "Demo Title", img: Demo5}
  ]
   
  const [sliderNum, setSliderNum] = useState(0)

  const nftExamplesSlider = [
      {value: "Demo Title0", img: DemoImg},
      {value: "Demo Title1", img: DemoImg},
      {value: "Demo Title2", img: DemoImg}
  ]

  const nftImgs = nftExamples.map((el, index) => {
      return(
          <div key={index} style={{ backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50.77%), url(${el.img})` }}>
              <span>{el.value}</span>
          </div>
      )
  })

  const CollectionSlides = [
    {value: "Collection 1 [Title]", img: NftDemo1, author: Author},
    {value: "Collection 2 [Title]", img: NftDemo2, author: Author},
    {value: "Collection 3 [Title]", img: NftDemo2, author: Author},
    {value: "Collection 4 [Title]", img: NftDemo2, author: Author},
    {value: "Collection 5 [Title]", img: NftDemo2, author: Author},      
    {value: "Collection 6 [Title]", img: NftDemo2, author: Author}
  ]

  const nftSlidesImgs = [
    {value: "Demo Title0", img: NftDemo1},
    {value: "Demo Title1", img: NftDemo2},
    {value: "Demo Title2", img: NftDemo2},
    {value: "Demo Title1", img: NftDemo2},
    {value: "Demo Title2", img: NftDemo2},      
    {value: "Demo Title2", img: NftDemo2}
  ]

  const sellersInfo = [
    {value: "Artist_Title", img: Seller},
    {value: "Artist_Title", img: Seller},
    {value: "Artist_Title", img: Seller},
    {value: "Artist_Title", img: Seller},
    {value: "Artist_Title", img: Seller},      
    {value: "Artist_Title", img: Seller}
  ]
  const ExploreFilters = ['All', 'Art', 'Crypto', 'Gaming', 'Business', 'Media', 'Sports']

  const eventValues = [
    {value: "NFT Crypto Comicon", img: Event, author: Seller, nickname: "@nickname", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...", date: "17.04.2021", views: 555 },
    {value: "NFT Crypto Comicon", img: Event, author: Seller, nickname: "@nickname", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...", date: "17.04.2021", views: 555 },
    {value: "NFT Crypto Comicon", img: Event, author: Seller, nickname: "@nickname", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...", date: "17.04.2021", views: 555 }
  ]

  return(
    <div className="home">
      <div className="own_nft_n_examples">
        <div className="ur_own_ntf" style={{ backgroundImage: `url(${Back})` }}>
          <div>
            <h1>CREATE YOUR NFT</h1>
            <button>Create NFT</button>
          </div>
          <img src={Skull} alt="skull"/>
        </div>
        <div className="nft_example" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.69) 0%, rgba(0, 0, 0, 0) 54.14%, #000000 106.51%), url(${nftExamplesSlider[sliderNum].img})` }}>
            <span>{nftExamplesSlider[sliderNum].value}</span>
            <div>
              <button style={{ background: sliderNum === 0 ? '#0085FF' : ''  }} onClick={() => setSliderNum(0)}/>
              <button style={{ background: sliderNum === 1 ? '#0085FF' : ''  }} onClick={() => setSliderNum(1)}/>
              <button style={{ background: sliderNum === 2 ? '#0085FF' : ''  }} onClick={() => setSliderNum(2)}/>
            </div>
          </div>
        </div>
        <div className="nft_demo">
          {nftImgs}
        </div>
        <div className="top_collections">
          <MarketplaceSlider title='Top collections in 7 days' nftSlidesImgs={CollectionSlides} component={ CollectionBlock } slidesToShow={4}/>
        </div>
        <div>
          <MarketplaceSlider title='Top Bids' nftSlidesImgs={nftSlidesImgs} component={ MarketplaceBlock } slidesToShow={4}/>
        </div>
        <div>
          <MarketplaceSlider title='Top sellers' nftSlidesImgs={sellersInfo} component={ SellerBlock } slidesToShow={4}/>
        </div>  
        <div>
          <MarketplaceSlider title='Popular events' nftSlidesImgs={eventValues} component={ EventBlock } slidesToShow={2}/>
        </div>              
        <div>
          <h1>Explore</h1>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default Home;