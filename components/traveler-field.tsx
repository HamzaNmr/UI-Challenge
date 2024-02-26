import {SelectItem } from "@/components/ui/select"
import { SelectField } from "./select-field"

export const TravelerField = ({ control }: any) => {
  return (
    <SelectField 
     control={control}
     name="travelers"
     selectType="travelers"
     placeholder="Travelers"
     >
      {[1, 2, 3, 4, 5].map((num) => (
        <SelectItem key={num} value={`${num} Travelers`}>
         {`${num} Travelers`}
        </SelectItem>
      ))}
     </SelectField>
 )
}
