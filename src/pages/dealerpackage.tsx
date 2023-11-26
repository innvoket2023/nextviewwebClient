import Image from 'next/image';
import '../app/globals.css';  // Import the globals.css file
import DealerImg from "../images/dealer-1.png"


export default function Dealerpack() {
  return (
    <div className="flex min-h-screen   bg-white flex-col items-center justify-between p-24">
      <div className=' w-screen'>
      <div className="  flex items-center justify-center">
        <div className="mt-5 flex w-[30%]   ">
          <span className="self-center text-4xl text-center text-black">Choose your preferred membership portal</span>
        </div>
        </div>
        <div>

        <div className="grid w-full grid-cols-1 gap-6 p-10 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-white via-white to-white shadow-md">
            <div className="p-10">
              <span className="text-xl font-semibold text-black"> Kavach Pro </span>
              <div className="mt-5 h-px bg-gray-300"></div>
              <div>
                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">Portal for Bag Engineers.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">GST Number not required.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">A valid PAN Card is mandatory.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">Membership in the Kavach Club is not permitted.</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 inline-flex items-center justify-center rounded-lg border border-[#393939] bg-[#393939] p-3 text-sm text-white shadow-md">
                Register for Kavach Pro
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-white via-white to-white shadow-md">
            <div className="p-10">
            <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-black"> Kavach Pro </span>
            <div className="bg-red-500 text-white px-2 py-1 rounded-md">Popular</div>
            </div>
              <div className="mt-5 h-px bg-gray-300"></div>
              <div>
                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">Portal for Bag Engineers.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">GST Number not required.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">A valid PAN Card is mandatory.</div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-black"></div>
                    <div className="text-black">Membership in the Kavach Club is not permitted.</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 inline-flex items-center justify-center rounded-lg border border-[#393939] bg-[#393939] p-3 text-sm text-white shadow-md">
                Register for Kavach Pro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
