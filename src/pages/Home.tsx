import Button from '../components/button/button'
import Typography from '../components/typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Home = () => {
  return <section className="tf-section hero-slider">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-md-6 col-12">
          <div className="block-text pt-24">
            <div className="subtitle mb-6" data-aos="fade-up">
              we are monteno nft
            </div>
            <h2 className="title mb-26">
              collect next generation nfts today
            </h2>
            <p className="desc mb-43">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button data-aos="fade-up" data-aos-duration='1200'>
              Get connected
            </button>
          </div>
        </div>
        <div className="col-xl-7 col-md-6 col-12">
          <div className="container-right d-flex">
            <Swiper
              direction='vertical'
              spaceBetween={30}
            ></Swiper>
          </div>
        </div>
      </div>
    </div>

  </section>;
};

export default Home;
