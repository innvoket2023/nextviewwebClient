// components/OTPInput.tsx
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

interface OTPInputProps {
  value: string;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
  const [otp, setOTP] = useState(value);
  const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement | null>(null));

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    if (/^\d*$/.test(newValue) && index < 6) {
      setOTP((prevOTP) => {
        const newOTP = prevOTP.split('');
        newOTP[index] = newValue;
        return newOTP.join('');
      });

      if (index < 5 && newValue !== '') {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  useEffect(() => {
    onChange(otp);
  }, [otp, onChange]);

  return (
    <div className="flex space-x-2">
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(event) => handleChange(event, index)}
          className="w-12 h-12 text-2xl border text-black border-gray-300 bg-white rounded-md text-center focus:outline-none focus:border-black"
        />
      ))}
    </div>
  );
};

export default OTPInput;
