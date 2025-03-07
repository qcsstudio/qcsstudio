'use client'
import React, { useState,useEffect } from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'

const  IntellectualPropertyPolicyPage = () => {
    const [TermsData,setTermsData]=useState(false)

     useEffect(()=>{
        GetTermsData()
      },[])

    const GetTermsData = async () => {
        try {

          const response = await fetch('/api/admin/IntellectualPropertyPolicy', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const result = await response.json();
          setTermsData(result.terms_data || []);
        } catch (error) {
          console.error('Error fetching policy data: ', error);
          setTermsData([]);
        } finally {
       
        }
      };

      if(!TermsData){
        return(
          <>
          <Navbar/>
          <Loader/>
          <Footer/>
          </>
        )
      };

  return (
      <>
        <Navbar />
        <div className=' relative p-4 lg:p-16 flex flex-col gap-5'>
          {
            TermsData.map((data,i)=>{
              return <div key={i}>
                 <h1 className='font-bold  flex justify-center text-3xl lg:text-4xl tracking-wide  text-[#001f61]'>{data.heading}</h1>
                 <p className='font-thin tracking-wider text-[#212529]' dangerouslySetInnerHTML={{ __html: data.description }}></p>
              </div>
            })
          }
          
          <Image className='absolute bottom-7 right-96' src='/images/recentsblogsbg3.png' height={200} width={100} alt='' />
          <Image className='absolute bottom-7 right-0 scale-x-[-1]' src='/images/infoIcon.png' height={200} width={200} alt='' />
          <Image className='absolute bottom-0 left-0 ' src='/images/bgBlu.png' height={100} width={100} alt='' />
          <Image className='absolute top-0 right-0 ' src='/images/arrowplane.png' height={100} width={100} alt='' />

        </div>
        <Footer />
      </>
  )
}

export default IntellectualPropertyPolicyPage
