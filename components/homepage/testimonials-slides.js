import Image from 'next/image'
import Carousel from "react-multi-carousel";
import { User } from 'react-feather'

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

export default function TestimonialsSlides() {
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
        <Image
          className="py-5"
          src="/img/double-quotes.png"
          alt="Double Quotes"
          width={70}
          height={50}
        />
        <p className="my-8 pb-5 font-light italic text-center text-white w-full md:w-5/12">
          Buen servicio, realiza delivery tanto la recepción como el envío, la
          entrega es a tiempo y precios competitivos.
        </p>
        <div className="block w-14 h-14 overflow-hidden rounded-xl bg-second">
          <User className="object-contain w-full h-full text-white opacity-75" />
          {/* <img
            className="object-contain w-full h-full"
            src="/img/brands/empresa_1.png"
            alt=""
          /> */}
        </div>
        <p className="pt-2 pb-5 font-medium text-white italic opacity-100">
          Johann Espinoza Jorge
        </p>
      </div>
      <div className="relative container mx-auto pt-16 pb-10 flex flex-col items-center">
        <Image
          className="py-5"
          src="/img/double-quotes.png"
          alt="Double Quotes"
          width={70}
          height={50}
        />
        <p className="my-8 pb-5 font-light italic text-center text-white w-full md:w-5/12">
          Excelente servicio 😊
        </p>
        <div className="block w-14 h-14 overflow-hidden rounded-xl bg-second">
          <User className="object-contain w-full h-full text-white opacity-75" />
          {/* <img
            className="object-contain w-full h-full"
            src="/img/brands/empresa_1.png"
            alt=""
          /> */}
        </div>
        <p className="pt-2 pb-5 font-medium text-white italic opacity-100">
          Juliet Laguna Cierto
        </p>
      </div>
      <div className="relative container mx-auto pt-16 pb-10 flex flex-col items-center">
        <Image
          className="py-5"
          src="/img/double-quotes.png"
          alt="Double Quotes"
          width={70}
          height={50}
        />
        <p className="my-8 pb-5 font-light italic text-center text-white w-full md:w-5/12">
          5 estrellas sin comentario
        </p>
        <div className="block w-14 h-14 overflow-hidden rounded-xl bg-second">
          <User className="object-contain w-full h-full text-white opacity-75" />
        </div>
        <p className="pt-2 pb-5 font-medium text-white italic opacity-100">
          Christian Peralta
        </p>
      </div>
    </Carousel>
  );
}
