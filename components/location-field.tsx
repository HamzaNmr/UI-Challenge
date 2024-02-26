import { LuArrowRightLeft } from "react-icons/lu"

import { Button } from "./ui/button"
import { LocationComboboxField } from "./location-combobox-field"

export const LocationField = ({ form }:any) => {
  return (
    <div className="p-[0.12rem] rounded-full flex items-center gap-1 bg-[#E1ECEB] text-[#425C5A] shadow hover:bg-[#E1ECEB]/90">
     <LocationComboboxField form={form} name="origin" placeholder="Search for an origin" />
     <div className="border-none bg-[#425C5A] w-7 h-7 rounded-full p-1 flex justify-center items-center">
      <LuArrowRightLeft className="w-6 h-6 text-white"/>
     </div>
     <LocationComboboxField form={form} name="destination" placeholder="Search for an destination" />
    </div>
  )
}
