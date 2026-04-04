import CardBusiness from "../CardBusiness/CardBusiness";

const Business = () => {
   return (
      <>
         <div>
            <div className="flex justify-between">
               <div className="gap-0.5">
                  <div className="text-[#855300] font-sans font-bold text-xs leading-4 tracking-widest uppercase">THE NEIGHBORHOOD PULSE</div>
                  <div className="font-jakarta font-bold text-[36px] leading-[40px] tracking-normal">Featured Local Stores</div>
               </div>
               <div className="max-w-[448px] pr-[39.14px]">
                  <p className="font-sans text-base leading-6 tracking-normal text-[#404943]">
                     "We believe every storefront tells a story. Here are the
                     authors of our local economy."
                  </p>
               </div>
            </div>
            <div className="min-h-screen bg-gray-100 flex flex-wrap items-center justify-center p-6 gap-4">
               <CardBusiness />
               <CardBusiness />
               <CardBusiness />
               <CardBusiness />
            </div>
         </div>
      </>
   );
}

export default Business;