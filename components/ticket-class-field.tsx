import { flightClasses } from "@/data/flightClasses"

import {SelectItem } from "@/components/ui/select"
import { SelectField } from "@/components/select-field"

export const TicketClassField = ({ control }: any) => {
  return (
    <SelectField 
     control={control}
     selectType="ticketClass"
     name="ticketClass"
     placeholder="Ticket of class"
     className="bg-white hover:bg-white/90"
     >
      {flightClasses.map((flightClass, index) => (
        <SelectItem key={index} value={flightClass.className}>
         {flightClass.className}
        </SelectItem>
      ))}
     </SelectField>
 )
}
