import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function BrandSlide(){
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={500}
      customTransition="all 0.5s ease-out"
      transitionDuration={500}
    >
      <div className="block h-32 overflow-hidden ">
        <img className="object-contain w-full h-full" src="/img/brands/empresa_0.png" alt="KASPERSKY" />
      </div>
      <div className="flex justify-center items-center h-32 overflow-hidden">
        <img className="object-contain w-60 h-60" src="/img/brands/empresa_1.png" alt="AMD" />
      </div>
      <div className="block h-32 overflow-hidden">
        <img className="object-contain w-full h-full" src="/img/brands/empresa_2.png" alt="ESET" />
      </div>
      <div className="block h-32 overflow-hidden">
        <img className="object-contain w-full h-full" src="/img/brands/empresa_3.png" alt="INTEL" />
      </div>
      <div className="flex justify-center items-center h-32 overflow-hidden">
        <img className="object-contain w-60 h-60" src="/img/brands/empresa_4.png" alt="LENOVO" />
      </div>
      <div className="block h-32 overflow-hidden">
        <img className="object-contain w-full h-full" src="/img/brands/empresa_5.png" alt="HP" />
      </div>
    </Carousel>
  )
}