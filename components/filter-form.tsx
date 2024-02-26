"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { FlightClassField } from "./flight-class-field"
import { TicketClassField } from "./ticket-class-field"

const FormSchema = z.object({
  ticketClass: z.string().optional(),
})

export function FilterForm() {
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
       className="flex justify-between items-center gap-3 flex-wrap text-[#425C5A] mt-5"
      >

        <h1 className="uppercase font-semibold">Results (25)</h1>
        
        <div className="flex gap-3 items-center flex-wrap-reverse">
          <Button 
           type="submit" 
           variant="flight" 
           className="bg-white hover:bg-white/90 text-sm py-5 px-7"
          >
            Filter
          </Button>
          <TicketClassField control={form.control} />
        </div>
      </form>
    </Form>
  )
}
