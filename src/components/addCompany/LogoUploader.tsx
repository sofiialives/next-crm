'use client';
import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

interface LogoUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export default function LogoUploader({
  label,
  id,
  placeholder,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base text-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}
