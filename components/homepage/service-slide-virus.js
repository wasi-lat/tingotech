import Image from "next/image";
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

export default function ServiceSlideVirus() {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition="all 1s ease-out"
      transitionDuration={1000}
      dotListClass="dot pb-3"
      showDots={true}
    >
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md">
        <Image
          src="/img/service/virus/virus_1.jpg"
          alt={`image 1`}
          title={`image 1`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md">
        <Image
          src="/img/service/virus/virus_2.jpeg"
          alt={`image 2`}
          title={`image 2`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="h-72 w-full overflow-hidden bg-white md:rounded-r-md rounded-b-md">
        <Image
          src="/img/service/virus/virus_3.jpg"
          alt={`image 3`}
          title={`image 3`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Carousel>
  );
}
