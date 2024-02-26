"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { DateField } from "./date-field"
import { TravelerField } from "./traveler-field"
import { FlightClassField } from "./flight-class-field"
import { LocationComboboxField } from "./location-combobox-field"
import { LocationField } from "./location-field"
import { TabsField } from "./tabs-field"

const FormSchema = z.object({
  flightDate: z.date().optional(),
  travelers: z.string().optional(),
  flightClass: z.string().optional(),
  origin: z.string().optional(),
  destination: z.string().optional(),
})

export function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
       className="bg-white p-5 rounded-3xl flex items-center gap-x-3 gap-y-5 flex-wrap text-[#425C5A]"
      >
        <LocationField form={form} />
        <DateField control={form.control} />
        <TravelerField control={form.control} />
        <TabsField />
        <FlightClassField control={form.control}/>

        
        <Button 
         type="submit" 
         variant="flight" 
         className="bg-[#C99C33] hover:bg-[#C99C33]/90 text-white text-sm py-5 px-12"
        >
          Search
        </Button>
      </form>
    </Form>
  )
}
