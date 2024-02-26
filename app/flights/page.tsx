import { CustomCard } from "@/components/custom-card";
import { FilterForm } from "@/components/filter-form";
import { FlightCard } from "@/components/flight-card";
import { SearchForm } from "@/components/search-form";
import { TicketCard } from "@/components/ticket-card";

export default function FlightPage() {
    return (
      <div className="w-full">
         <SearchForm />
         <FilterForm />
         <div className="flex flex-col lg:grid grid-cols-3 lg:grid-cols-3 gap-7 mt-5 w-full">
            <div className="h-max bg-white rounded-3xl overflow-hidden  shadow-md divide-y-2 divide-dashed col-span-2">
              {[0,1,3].map((ticket, index) =>
                 <div className="relative" key={index}>
                   <TicketCard />
                   <div className="rounded-full bg-[#E1ECEB] w-6 h-6 absolute -bottom-[0.87rem] -left-3 z-30"/>
                   <div />
                   <div className="rounded-full bg-[#E1ECEB] w-6 h-6 absolute -bottom-[0.87rem] -right-3 z-30"/>
                 </div> 
               )}
            </div>
            <div className="cols-span-1">
              <FlightCard />
            </div>
         </div>
      </div>
    );
  }
  