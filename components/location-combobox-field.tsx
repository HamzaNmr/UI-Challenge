"use client"

import { useState } from "react"

import { CheckIcon } from "@radix-ui/react-icons"
import { IoLocationSharp } from "react-icons/io5"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LocationComboBoxFieldProps } from "@/types"

import { countries } from "@/data/countries"

export const LocationComboboxField = ({
  form,
  className,
  placeholder,
  name,
}: LocationComboBoxFieldProps) => {

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                className={cn({
                  "w-[200px] border-none shadow-none rounded-full": true,
                  [(className as string)]: className !== undefined
                })}
              >
                <IoLocationSharp className="h-4 w-4 mr-2" />
                <span className="capitalize">
                 {selectedCountry ? selectedCountry : name}
                </span>
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput
                placeholder={placeholder}
                className="h-9"
              />
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
              {countries.map((country) => (
                        <CommandItem
                          value={country.label}
                          key={country.value}
                          onSelect={() => {
                            form.setValue(name, country.value)
                            setSelectedCountry(country.label)
                          }}
                        >
                          {country.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              country.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

