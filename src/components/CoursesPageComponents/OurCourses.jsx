"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const OurCourses = () => {
  // Animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  }

  const courseItemAnimation = {
    hover: { scale: 1.05 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative h-[600px] flex justify-center items-center bg-[url('/images/bgCircle.jpg')]">
      {/* Decorative images with animations */}
      <motion.div 
        className='absolute top-8 right-20 hidden md:flex lg:flex'
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image src='/images/groupkite (1).png' alt='' height={200} width={200} />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="flex flex-col py-20 px-5 md:px-20 justify-between border rounded-xl gap-5 items-center w-full max-w-[800px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className='font-bold text-[#0D154B] text-[20px] md:text-[30px] text-center w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          OUR COURSES
        </motion.h1>

        <div className='flex flex-col w-full gap-5 items-center'>
          <motion.div
            variants={courseItemAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="py-3 px-3 w-full max-w-[250px] rounded border-[3px] border-gray-200 shadow-lg shadow-[#29ABE2] text-black bg-clip-text text-center"
            style={{ 
              borderImage: 'linear-gradient(to right,black #1D4ED8) 1', 
              background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' 
            }}
          >
            <Link href={`/courses/web-development`}>
            Web Development
            </Link>
          </motion.div>

          <div className='flex flex-col md:flex-row justify-between gap-5 items-center w-full'>
            {['Network & Network Security', 'UI UX Design'].map((course, index) => (
              <motion.div
                key={course}
                variants={courseItemAnimation}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="py-3 px-3 w-full max-w-[250px] rounded border-[3px] border-gray-200 shadow-lg shadow-[#29ABE2] text-black bg-clip-text text-center"
                style={{ 
                  borderImage: 'linear-gradient(to right,black #1D4ED8) 1', 
                  background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' 
                }}
              >
                <Link href={course=="Network & Network Security" ? "/courses/networking":"/courses/ui-ux"}>
                {course}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-between lg:gap-16 md:gap-16 gap-5 items-center w-full'>
            {['Digital Marketing', 'Data Science & AI'].map((course, index) => (
              <motion.div
                key={course}
                variants={courseItemAnimation}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="py-3 px-3 w-full lg:max-w-full max-w-[250px] md:max-w-[250px] rounded border-[3px] border-gray-200 shadow-lg shadow-[#29ABE2] text-black bg-clip-text text-center"
                style={{ 
                  borderImage: 'linear-gradient(to right,black #1D4ED8) 1', 
                  background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' 
                }}>
                  <Link href={course=="Digital Marketing" ? "/courses/digital-marketing":"/courses/data-analytics"}>
                    {course}
                  </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating bottom image */}
        <motion.div 
          className='absolute bottom-8'
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <Image src='/images/groupkite (2).png' alt='' height={70} width={70} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default OurCourses
