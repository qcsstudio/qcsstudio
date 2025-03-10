import React from 'react';
import Link from 'next/link';

const policies = [
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/Intellectual-Property-Policy', label: 'Intellectual Property Policy' },
  { href: '/compliance-Regulatory-Policies', label: 'Compliance & Regulatory Policies Refund Policy' },
  { href: '/liability-disclaimer-policy', label: 'Liability & Disclaimer Policy' },
];

const PolicyButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {policies.map((policy, index) => (
        <Link key={index} href={policy.href}>
          <button className="bg-[#0e2d5b] px-6 py-2 text-white rounded-md hover:bg-blue-900 transition text-sm md:text-base w-full sm:w-auto">
            {policy.label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default PolicyButtons;
