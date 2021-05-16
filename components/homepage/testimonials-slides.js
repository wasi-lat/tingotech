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

export default function TestimonialsSlides(){
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      showDots={true}
      arrows={false}
      dotListClass="dot"
    >
      <div className="relative container mx-auto pt-16 pb-10 flex flex-col items-center">
        <img className="py-5" src="/img/double-quotes.png" alt="Double Quotes" />
        <p className="my-8 pb-5 font-light italic text-center text-white w-5/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu est eu diam 
          condimentum quis. Tristique adipiscing mauris orci, velit purus consequat lectus. 
          Lectus arcu quis habitasse urna pulvinar nec nunc erat id.
        </p>
        <div className="block w-14 h-14 overflow-hidden rounded-xl bg-second">
          <img className="object-contain w-full h-full" src="/img/brands/empresa_1.png" alt="" />
        </div>
        <p className="pt-2 pb-5 font-medium text-white italic opacity-100">Kevin Juancho</p>
      </div>
      <div className="relative container mx-auto pt-16 pb-10 flex flex-col items-center">
        <img className="py-5" src="/img/double-quotes.png" alt="Double Quotes" />
        <p className="my-8 pb-5 font-light italic text-center text-white w-5/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu est eu diam 
          condimentum quis. Tristique adipiscing mauris orci, velit purus consequat lectus. 
          Lectus arcu quis habitasse urna pulvinar nec nunc erat id.
        </p>
        <div className="block w-14 h-14 overflow-hidden rounded-xl bg-second">
          <img className="object-contain w-full h-full" src="/img/brands/empresa_1.png" alt="" />
        </div>
        <p className="pt-2 pb-5 font-medium text-white italic opacity-100">El Juancho</p>
      </div>
    </Carousel>
  )
}