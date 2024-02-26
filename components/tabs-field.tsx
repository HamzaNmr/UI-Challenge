"use client"

import React, { useState } from "react"

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export const TabsField: React.FC = () => {
    const [selected, setSelected] = useState<string>("one-way")

    const handleSelected = (value: string) => {
        setSelected(value)
        console.log(value)
    }

    const tabs = [
        {value: "one-way", label: "One Way"},
        {value: "round-trip", label: "Round Trip"},
        {value: "multi-city", label: "Multi City"},
    ]

    return (
        <Tabs defaultValue="one-way" className="w-max rounded-full shadow-sm">
            <TabsList className="grid w-full grid-cols-3 rounded-full h-full bg-[#E1ECEB]">
                {tabs.map(tab => 
                  <TabsTrigger 
                   key={tab.value}
                   value={tab.value} 
                   onClick={() => handleSelected(tab.value)}
                   className={`${selected === tab.value && "rounded-full text-white  data-[state=active]:bg-[#425C5A]"} px-9 py-[0.45rem]`}
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
