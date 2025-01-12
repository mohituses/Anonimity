'use client'

 
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import messages from "@/messages.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

const Home = () => {
  return (
    <>
    <main className='flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 '>
      <section className='text-center mb-8 md:mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold'>Dive into the world of Anonimity</h1>
        <p className='mt-3 md:mt-4 text-base md:text-lg'>Explore Anonimity - Share your opinion freely as we got your identity covered</p>
      </section>
      <Carousel
       plugins={[Autoplay({delay: 2000})]}
       className="w-full max-w-xs">
      <CarouselContent >
        {
          messages.map((message, index) => (
            <CarouselItem key={index}>
            <div className="p-1 ">
              <Card className="bg-gradient-to-r from-purple-300 to-pink-300 ">
                <CardHeader>{message.title}</CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6 pt-0">
                  <span className="text-xl font-semibold pb-20 pt-0">{message.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    

    </main>
    <div className="p-2">
    <Accordion  type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes. It's absolutely free to use.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>In any case will my identity be revealed?</AccordionTrigger>
        <AccordionContent>
          No, we just lock your identity and throw the key away.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I create my own link?</AccordionTrigger>
        <AccordionContent>
          Yes, just sign up and we have your own link ready at the dashboard .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>

    <footer className=" text-center p-4 md:p-6">© 2024 Anonimity. All rights reserved</footer>
    </>
  )
}

export default Home