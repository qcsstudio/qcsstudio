
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const PrivacyComponent = () => {
  return (
    <>
      <Navbar />
      <div className=' relative p-16 flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-3xl lg:text-4xl tracking-wide  text-[#001f61]'>2. Privacy Policy</h1>
          <p className='font-thin tracking-wider text-[#212529]'>At QuantumCrafters Studio, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2.1 Information Collection</h2>
          <p className='font-thin text-xl tracking-wider text-[#001f61]'>We collect personal information such as your name, email, contact number, address, and educational background when you:</p>
          <p className='font-thin tracking-wider text-[#212529]'>Sign up for courses or IT services Make a purchase on our platform Contact us via support channels or social media We also collect non-personal information through cookies and similar technologies to improve user experience, including your IP address, browser type, and website usage data.</p>
        </div>

        <div className='flex flex-col gap-4 '>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2.2 Use of Information</h2>
          <p className='font-thin text-xl tracking-wider text-[#001f61]'>The personal information we collect is used for:</p>
          <p className='font-thin tracking-wider text-[#212529]'> ing you in courses and managing your participation Processing transactions and sending payment confirmations Communicating with you about your inquiries, projects, or updates on our services Sending marketing communications related to courses or IT services (only if you have opted in)</p>
        </div>

        <div className='flex flex-col gap-4 '>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2.3 Sharing of Information</h2>
          <p className='font-thin tracking-wider text-[#212529]'>QuantumCrafters Studio will not share your personal information with third parties for marketing purposes without your consent. We may share your information with trusted third-party service providers (e.g., payment processors, hosting services) for operational purposes. In case of legal requests, we may disclose personal data to comply with the law or to protect our rights and property.</p>
        </div>
        <div className='flex flex-col gap-4 '>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2.4 Data Security</h2>
          <p className='font-thin tracking-wider text-[#212529]'>We implement industry-standard security measures to protect your personal information. Despite our efforts, no online data transmission or storage can be guaranteed 100% secure. However, we strive to keep your data safe</p>
        </div>

        <div className='flex flex-col gap-4 '>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2.5 Your Rights</h2>
          <p className='font-thin text-xl tracking-wider text-[#001f61]'>You have the right to:</p>
          <p className='font-thin tracking-wider text-[#212529]'>Access, update, or delete your personal information Opt-out of marketing communications at any time Request data portability in a structured format (for registered users) For any data-related requests, please contact info@qcsstudio.in.</p>
        </div>



        {/* floating images */}
        <Image className='absolute bottom-7 right-96' src='/images/recentsblogsbg3.png' height={200} width={100} alt='' />
        <Image className='absolute bottom-7 right-0 scale-x-[-1]' src='/images/infoIcon.png' height={200} width={200} alt='' />
        <Image className='absolute bottom-0 left-0 ' src='/images/bgBlu.png' height={100} width={100} alt='' />
        <Image className='absolute top-0 right-0 ' src='/images/arrowplane.png' height={100} width={100} alt='' />
      </div>
      <Footer />
    </>
  )
}

export default PrivacyComponent