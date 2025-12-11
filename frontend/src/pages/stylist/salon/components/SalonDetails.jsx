import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const SalonDetails = () => {
  const images = [
    "https://i.pinimg.com/736x/b9/7a/c5/b97ac5a256813774692740d4aa87ac72.jpg",
    "https://i.pinimg.com/736x/4c/42/cd/4c42cdf3bf3611cfe6b81f65d192aff8.jpg",
    "https://i.pinimg.com/736x/c8/4d/17/c84d17687f39807e5ea393737d9787aa.jpg",
  ];

  return (
    <div>
      <div className="w-full flex items-center justify-center mt-6">
        <Carousel className="w-full max-w-[75vw]">
          <CarouselContent>
            {Array.from({ length: images.length }).map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <img
                    src={images[index]}
                    alt={images[index]}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Salon Name</h1>
          <p className="mt-1 text-neutral-300">Salon Address</p>
        </div>

        <div className="flex flex-col items-end ">
          <h3 className="text-neutral-500">Average Rating</h3>
          <Badge className=" mt-1">
            4.5 <Star fill="" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default SalonDetails;
