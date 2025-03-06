import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const PrivacyComponent = () => {
  return (
    <>
      <Navbar />
      <div className=' relative p-4 lg:p-16 flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold  flex justify-center text-3xl lg:text-4xl tracking-wide  text-[#001f61]'> Privacy Policy</h1>
          <p className='font-thin tracking-wider text-[#212529]'> QuantumCrafters Studio Private Limited</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>1 Information </h2>
          <p className='font-thin  tracking-wider text-[#212529]'>QuantumCrafters Studio Private Limited ("Company," "we," "us," or "our") is committed to protecting the privacy and security of our users' data. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access and use our AI-powered social media management platform, ElevateX ("Platform").</p>
          <p className='font-thin tracking-wider text-[#212529]'>By using ElevateX, you agree to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy. If you do not agree, please refrain from using our services.</p>
        </div>

        <div className='flex flex-col gap-2 '>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>2 What This Privacy Policy Covers</h2>
          <p className='font-thin text-xl tracking-wider text-[#001f61]'>This Privacy Policy applies to:</p>
          <li className='font-thin tracking-wider text-[#212529]'>Users accessing the ElevateX platform for social media automation, analytics, and AI-driven content management.</li>
          <li className='font-thin tracking-wider text-[#212529]'>Visitors to our QuantumCrafters website, mobile applications, and other digital properties.
          </li>
          <li className='font-thin tracking-wider text-[#212529]'>Business interactions related to our services, including partnerships, marketing, and customer support.
          </li>
          <li className='font-thin tracking-wider text-[#212529]'>All personal information collected, processed, and shared under applicable data protection laws such as GDPR, CCPA, and other global privacy regulations.</li>
        </div>

        <div className='flex flex-col gap-4 '>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>3 Information We Collect
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We collect different types of information to provide and improve our services. This includes:</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>3.1 Personal Information
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We may collect and store personally identifiable information ("Personal Data") that you provide to us, such as:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Contact Information:</span>Name, email address, phone number, mailing address.</li>
              <li><span className='font-bold'>Contact Information:</span>Username, password, and profile settings.</li>
              <li><span className='font-bold'>Billing Information:</span>Credit/debit card details, invoicing details.</li>
              <li><span className='font-bold'>Employment Information:</span> If applying for a job, details such as resume, LinkedIn profile, and past work experience.</li>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>3.3 Social Media Information
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>When you connect your social media accounts to ElevateX, we collect data from these accounts, including:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Profile Information:</span>Name, profile picture, and public data.</li>
              <li><span className='font-bold'>Post and Engagement Data:</span>Published content, comments, likes, shares, and interactions.</li>
              <li><span className='font-bold'>Page & Account Insights:</span>Audience demographics, reach, engagement, and analytics</li>
              <li><span className='font-bold'>Lead Generation Data:</span>Collected through Meta and LinkedIn Lead Gen Ads.</li>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>3.4 Automatically Collected Information
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We collect certain information automatically when you use our Platform, including:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Device Information:</span>IP address, device type, operating system, browser type.</li>
              <li><span className='font-bold'>Usage Data: </span> Log files, session duration, and interaction history.</li>
              <li><span className='font-bold'>Cookies & Tracking Technologies:</span>Information collected through cookies, pixels, and analytics tools.</li>
              <li><span className='font-bold'>Location Data:</span>If you permit access, we may collect GPS or approximate location data.</li>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>3.4 Third-Party Data
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We may receive additional information from third-party partners, such as:
            </p>
            <div className='flex flex-col gap-2'>
              <li>CRM systems (e.g., HubSpot, Salesforce).
              </li>
              <li>Marketing platforms (e.g., Google Ads, Facebook Ads Manager).</li>
              <li>Payment processors (e.g., Stripe, PayPal).</li>
              <li>Business intelligence and analytics tools.</li>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 '>
          <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-xl tracking-wide  text-[#001f61]'>4. How We Use Your Information
          </h2>
          <p className='font-thin tracking-wider text-[#212529]'>We use your data for the following purposes:</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>4.1 Service Provision & Platform Functionality
            </h2>
            <div className='flex flex-col gap-2'>
              <li>Managing user accounts, authentication, and security.
              </li>
              <li>Enabling social media integrations and automated posting.</li>
              <li>Processing payments, subscriptions, and invoicing.</li>
              <li>Personalizing user experience through AI-based recommendations.</li>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>4.2 Communication & Customer Support
            </h2>
            <div className='flex flex-col gap-2'>
              <li>Responding to inquiries and customer support requests.
              </li>
              <li>Sending important service notifications and updates.</li>
              <li>Providing promotional and marketing materials (with opt-out options).</li>
              <li>Conducting surveys and requesting feedback to improve our services</li>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>4.3 Analytics & Performance Monitoring
            </h2>
            <div className='flex flex-col gap-2'>
              <li>Analyzing user behavior and improving platform functionality.
              </li>
              <li>Conducting research, statistics, and trend analysis.</li>
              <li>Detecting fraudulent activity and ensuring compliance.</li>
              <li>Enhancing AI models to improve content recommendations.</li>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>5. How We Share Your Information
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We do not sell or rent your personal data. However, we may share information with:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Service Providers: </span>Third-party vendors assisting in data processing, hosting, and analytics.</li>
              <li><span className='font-bold'>Payment Processors: </span> To facilitate transactions securely.</li>
              <li><span className='font-bold'>Legal Authorities:</span>If required by law, to protect our rights, users, or comply with legal obligations.</li>
              <li><span className='font-bold'>Business Transfers:</span> In case of a merger, acquisition, or sale of assets, your data may be transferred.</li>
              <li><span className='font-bold'>Affiliates and Partners:</span> For collaborative marketing campaigns and business integrations.
              </li>
            </div>
        </div>

        <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>6. Data Retention & Security
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We implement stringent security measures to protect user data, including:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Encryption </span>for data in transit and at rest.</li>
              <li><span className='font-bold'>Access Control Mechanisms </span> to restrict unauthorized access.</li>
              <li><span className='font-bold'>Regular Security Audits</span>to identify vulnerabilities and mitigate risks.
              </li>
              <li><span className='font-bold'>Data Minimization</span>  to retain only necessary information for legal and operational needs.</li>
      
            </div>
            <p className='font-thin tracking-wider text-[#212529]'>We retain your personal data only as long as necessary for service provision, legal compliance, and dispute resolution. Users may request data deletion at any time.
            </p>
        </div>

        <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>7. User Rights & Choices
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws, including:
            </p>
            <div className='flex flex-col gap-2'>
              <li><span className='font-bold'>Right to Access:</span>Request a copy of your stored data.</li>
              <li><span className='font-bold'>Right to Correction: </span>Update or correct inaccuracies.</li>
              <li><span className='font-bold'>Right to Deletion:</span>Request data removal.

              </li>
              <li><span className='font-bold'>Right to Deletion:</span>Request data removal.

              </li>
              <li><span className='font-bold'>Right to Object:</span> Opt-out of marketing and data collection.

              </li>
              <li><span className='font-bold'>Right to Data Portability:</span>Request data transfer in a structured format.

              </li>
              <li><span className='font-bold'>Right to Restrict Processing:</span> Limit how we use your data.</li>
              <li><span className='font-bold'>Right to Withdraw Consent:</span>Revoke consent for data collection and usage.</li>
            </div>
            <p className='font-thin tracking-wider text-[#212529]'>To exercise these rights, contact us at<span className='font-bold'>info@qcsstudio.com</span>
            </p>
        </div>

        <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>8. Cookies & Tracking Technologies
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We use cookies, web beacons, and tracking technologies to improve user experience. Users can manage cookie preferences via browser settings. Details are available in our Cookie Policy.
            </p>
            </div>

            <div className='flex flex-col gap-4 '>
              <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>9. International Data Transfers

            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>User data may be stored and processed in locations outside their home country. We implement safeguards to ensure compliance with applicable data protection laws, including:
            </p>
              </div>
             <div>
              <li className='font-bold'>Standard Contractual Clauses (SCCs) under GDPR.</li>
              <li className='font-bold'>US-EU and US-Swiss Privacy Shield Frameworks.</li>
              <li className='font-bold'>Data Localization Measures where required.</li>
              
             </div>
            </div>
            <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>10. Children’s Privacy

            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>Our Platform is not intended for children under 13. We do not knowingly collect data from minors. If such data is found, we will take immediate steps to delete it. Parents can contact us for data removal requests.
            </p>
            </div>
            <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-lg tracking-wide  text-[#001f61]'>11. Changes to this Privacy Policy
            </h2>
            <p className='font-thin tracking-wider text-[#212529]'>We may update this policy periodically. Users will be notified of any significant changes via email or in-app notifications. The latest version will always be available on our website.
            </p>
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