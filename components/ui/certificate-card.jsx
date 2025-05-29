import React from "react";
import { MagicCard } from "../magicui/magic-card";
import Link from "next/link";

export default function CertificateCard({ title, issuer, date, link, icon }) {
  return (
    <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-lg p-5">
      <div className="z-40 relative h-full flex items-center justify-center flex-col text-center">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex space-x-3 items-center justify-center">
            {icon}
          <p className="text-lg text-gray-600 dark:text-gray-400">{issuer}</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{date}</p>
        </Link>
      </div>
    </MagicCard>
  );
}
