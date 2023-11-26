import Image from 'next/image';
import React, { useState } from 'react';
import '../app/globals.css';  // Import the globals.css file
import DealerImg from "../images/dealer-1.png";
import OTPInput from '@/components/otp';

export default function Login() {
  const [otp, setOTP] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);

  const handleOTPChange = (newOTP: string) => {
    setOTP(newOTP);
  };

  const handleContinueClick = () => {
    setShowOTPInput(true);
  };

  return (
    <div className="bg-white">
      <div className="flex flex-row">
        <div className="grid grid-cols-[1.2fr,1.9fr]  gap-20 min-h-screen tab-port:grid-cols-none phone:p-0 phone:m-0">
          <div>
            <Image src={DealerImg} alt="Dealer" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex h-full flex-col items-center justify-center">
            {showOTPInput ? (
              <>
                <span className="text-3xl mb-7 font-medium text-black">Enter a otp</span>
                <span className="w-[50%] text-center text-black">
                Security at your fingertips! Enter the OTP sent to your registered mobile number.
                </span>
              </>
            ) : (
              <>
                <span className="text-3xl mb-7 font-medium text-black">Become a Dealer</span>
                <span className="w-[50%] text-center text-black">
                  Unlock a new era of security solutions! Seamlessly sign up as a trusted Security Products Dealer.
                </span>
              </>
            )}
            <div className="flex flex-col w-full items-center justify-center mt-6">
              {showOTPInput ? (
                <OTPInput value={otp} onChange={handleOTPChange} />
              ) : (
                <input
                  className="w-[60%] bg-white h-12 p-3 border-2 rounded-md focus:outline-none focus:border-black"
                  type="text"
                  placeholder="Phone number"
                />
              )}
              <button
                className="h-full w-[60%] mt-6 bg-[#393939] text-white p-3 rounded-md"
                onClick={handleContinueClick}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
