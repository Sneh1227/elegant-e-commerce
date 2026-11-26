import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent className="py-5">
          <CarouselItem>
            <div className="w-full h-[600px]">
              <Image
                src="/images/hero-section/hero-furniture-1.png"
                alt="hero image"
                width={1400}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="w-full h-[600px]">
              <Image
                src="/images/hero-section/hero-furniture-2.jpg"
                alt="furniture 2"
                width={1400}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="w-full h-[600px]">
              <Image
                src="/images/hero-section/furniture-3.jpg"
                alt="furniture 2"
                width={1400}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious size={"lg"} />
        <CarouselNext size={"lg"} />
      </Carousel>
    </div>
  );
}
