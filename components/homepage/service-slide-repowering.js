import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ServiceSlideRepowering() {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition="all 1s ease-out"
      transitionDuration={1000}
      dotListClass="dot dot-invert"
      showDots={false}
    >
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md ">
        <img
          className="object-contain w-full h-full"
          src="/img/service/repowering/repowering_1.jpg"
          alt={`repowering 1`}
          title={`repowering 1`}
        />
      </div>
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md ">
        <img
          className="object-contain w-full h-full"
          src="/img/service/repowering/repowering_2.jpg"
          alt={`repowering 2`}
          title={`repowering 2`}
        />
      </div>
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md ">
        <img
          className="object-contain w-full h-full"
          src="/img/service/repowering/repowering_3.jpg"
          alt={`repowering 3`}
          title={`repowering 3`}
        />
      </div>
    </Carousel>
  );
}
