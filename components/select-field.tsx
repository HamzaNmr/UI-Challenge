import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectFieldProps } from "@/types"

import { cn } from "@/lib/utils"

export const SelectField = ({
    control,
    name,
    selectType, 
    placeholder,
    children,
    className
}: SelectFieldProps) => {
  return (
 <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger selectType={selectType} className={cn({
              "bg-[#E1ECEB] text-[#425C5A] shadow hover:bg-[#E1ECEB]/90 rounded-full py-5 px-7": true,
              [(className as string)]: className !== undefined
             })}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {children}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
 )
}
