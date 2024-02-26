import { flightClasses } from "@/data/flightClasses"

import {SelectItem } from "@/components/ui/select"
import { SelectField } from "@/components/select-field"

export const FlightClassField = ({ control }: any) => {
  return (
    <SelectField 
     control={control}
     name="flightClass"
     selectType="flightClass"
     placeholder="Flight class"
     >
      {flightClasses.map((flightClass, index) => (
        <SelectItem key={index} value={flightClass.className}>
         {flightClass.className}
        </SelectItem>
      ))}
     </SelectField>
 )
}
