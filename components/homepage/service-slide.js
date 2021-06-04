import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ServiceSlide(){
  return(
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={500}
      customTransition="all 0.5s ease-out"
      transitionDuration={500}
      dotListClass="dot dot-invert"
      showDots={true}
    >
      <div className="h-72 w-full overflow-hidden bg-blue-50 rounded-r-md ">
        <img className="object-cover w-full h-full" src="/img/service/service-1.jpeg" alt={`embed1`} title={`embed1`} />
      </div>
      <div className="h-72 w-full overflow-hidden bg-blue-50 rounded-r-md ">
        <img className="object-cover w-full h-full" src="/img/service/service-2.jpeg" alt={`embed2`} title={`embed2`} />
      </div>
      <div className="h-72 w-full overflow-hidden bg-blue-50 rounded-r-md ">
        <img className="object-cover w-full h-full" src="/img/service/service-3.jpeg" alt={`embed3`} title={`embed3`} />
      </div>
      <div className="h-72 w-full overflow-hidden bg-blue-50 rounded-r-md ">
        <img className="object-cover w-full h-full" src="/img/service/service-4.jpeg" alt={`embed3`} title={`embed3`} />
      </div>
      <div className="h-72 w-full overflow-hidden bg-blue-50 rounded-r-md ">
        <img className="object-cover w-full h-full" src="/img/service/service-5.jpeg" alt={`embed3`} title={`embed3`} />
      </div>
    </Carousel>
  )
}