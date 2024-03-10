import { PromotionI } from "@/lib/interface";
import Image from "next/image";
import React from "react";

interface PromotionProps {
  promotion: PromotionI;
}

export default function Promotion({ promotion }: PromotionProps) {
  return (
    <div className="rounded overflow-hidden bg-gray-100">
      <div className="relative w-full h-40 bg-gray-300">
        {promotion.avatar && (
          <Image src={promotion.avatar} alt="promotion image" fill />
        )}
        <div className="w-14 absolute top-0 left-px rounded-br-full bg-lime-200" />
        <div className="w-14 h-14 absolute insest-0 py-3 pl-0.5 rounded-br-full bg-gray-900">
          <p className="text-center text-xs font-fold text-lime-200">
            -{promotion.discount}%
          </p>
        </div>
      </div>
      <div className="flex flex=col p-5 gap-3">
        <h3 className="text-base font-semibold text-gray-900">
          {promotion.title}
        </h3>
        <p className="text-sm text-gray-900">{promotion.description}</p>
      </div>
    </div>
  );
}
