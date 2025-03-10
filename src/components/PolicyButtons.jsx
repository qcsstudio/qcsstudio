import React from 'react'
import Link from 'next/link'

const PolicyButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
                  <Link href="/terms-of-service">
                    <button className="bg-[#0e2d5b] px-6 py-2 text-white rounded-md hover:bg-blue-400 transition text-sm md:text-base w-full sm:w-auto">
                      Terms of services
                    </button>
                  </Link>
                  <Link href="/Intellectual-Property-Policy">
                    <button className="bg-[#0e2d5b] px-6 py-2 text-white rounded-md hover:bg-blue-400 transition text-sm md:text-base w-full sm:w-auto">
                    Intellectual Property Policy
                    </button>
                  </Link>
                  <Link href="/compliance-Regulatory-Policies">
                    <button className="bg-[#0e2d5b] px-6 py-2 text-white rounded-md hover:bg-blue-400 transition text-sm md:text-base w-full sm:w-auto">
                    Compliance & Regulatory Policies Refund Policy
                    </button>
                  </Link>
                  <Link href="/liability-disclaimer-policy">
                    <button className="bg-[#0e2d5b] px-6 py-2 text-white rounded-md hover:bg-blue-400 transition text-sm md:text-base w-full sm:w-auto">
                    Liability & Disclaimer Policy
              
                    </button>
                  </Link>
                </div>
  )
}

export default PolicyButtons
