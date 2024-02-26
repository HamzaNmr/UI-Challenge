"use client"

import React, { useState } from "react"

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export const FlightTabsField: React.FC = () => {
    const [selected, setSelected] = useState<string>("non-stop")

    const handleSelected = (value: string) => {
        setSelected(value)
        console.log(value)
    }

    const tabs = [
        {value: "non-stop", label: "Non Stop"},
        {value: "one-stop", label: "One Stop"},
        {value: "more-stop", label: "More Stop"},
    ]

    return (
        <Tabs defaultValue="non-stop" className="w-max rounded-full shadow-none ">
            <TabsList className="grid w-full grid-cols-3 rounded-full h-full bg-transparent">
                {tabs.map(tab => 
                  <TabsTrigger 
                   key={tab.value}
                   value={tab.value} 
                   onClick={() => handleSelected(tab.value)}
                   className={`${selected === tab.value && "rounded-full data-[state=active]:bg-[#C99C33]"} px-4 py-2 text-white text-xs`}
                   >
                     <span
                      className={`${selected === tab.value && " text-white"}`}
                     >{tab.label}</span>
                  </TabsTrigger>
                )}
            </TabsList>
        </Tabs>
    )
}
