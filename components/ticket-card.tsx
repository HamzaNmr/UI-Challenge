import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

type CardProps = React.ComponentProps<typeof Card>

export const TicketCard = ({ className, ...props }: CardProps) => {
  return (
 <Card className={cn("flex items-center justify-between p-8 rounded-none text-[#425C5A] shadow-none border-none", className)} {...props}>
    <CardHeader className="p-0">
      <CardTitle>
        <Image src="/azerbaijan-airline.png" width="50" height="50" alt="airline" className="object-cover w-full h-full"/>
      </CardTitle>
      {/* <CardDescription></CardDescription> */}
    </CardHeader>
    <CardContent className="p-0 w-[14rem]  flex items-start justify-between gap-3">
        <div className="flex flex-col justify-center items-center gap-2 uppercase">
            <span className="text-xl">JFK</span>
            <span className="text-xs">11:30</span>
        </div>
        <div className="flex flex-col text-center items-center uppercase gap-1">
            <span className="text-[0.55rem] ">Azerbaijan</span>
            <span className="text-xs  text-[#C99C33]">11H 20M</span>
            <span className="text-[0.8rem]">NON-STOP</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 uppercase">
            <span className="text-xl">BOM</span>
            <span className="text-xs">14:00</span>
        </div>
    </CardContent>
    <CardFooter className="p-0 flex-col text-center items-end uppercase gap-3">
      <div>
        <span className="text-xs font-semibold">$1,500</span>
      </div>
      <Button variant="flight" className="bg-[#C99C33] hover:bg-[#C99C33]/90 text-white text-xs py-4 px-6">
        Book Now
      </Button>
    </CardFooter>
  </Card>
  )
}
