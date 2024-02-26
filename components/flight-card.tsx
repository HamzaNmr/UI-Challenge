import { CustomCard } from "./custom-card"
import { FlightTabsField } from "./flight-tabs-field"
import { PriceRangeSlider } from "./price-range-slider"

const Content = () => {
    return (
        <div className="bg-[#425C5A]">
            <div className="flex items-end justify-between p-4 pt-5">
                <div className="flex flex-col gap-1">
                    <span className="text-left text-[0.6rem]">FROM</span>
                    <span className="">JKF</span>
                </div>
                <div>
                    <span className="text-[0.6rem]">NON-STOP</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-right text-[0.6rem]">TO</span>
                    <span className="">BOM</span>
                </div>
            </div>
            <div className="w-full h-[10rem]">
                {/* TODO: image  */}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="bg-[#3D5654] w-full h-full flex flex-col gap-3 p-4 pb-12 lg:pb-4">
          <div className="w-full flex justify-center items-center">
            <FlightTabsField />
          </div>
          <h3 className="text-xs font-light">Price</h3>
          <PriceRangeSlider min={0} max={5000} />
        </div>
    )
}

export const FlightCard = () => {
  return (
    <CustomCard 
     className="bg-[#3D5654] rounded-3xl p-0 w-full h-full text-white overflow-hidden"
     content={<Content />}
     footer={<Footer />}
    />
  )
}
