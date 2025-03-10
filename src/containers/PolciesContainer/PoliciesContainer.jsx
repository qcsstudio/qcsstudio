import PrivacyPolicies from '@/components/AdminDashboardComponents/Policies/PrivacyPolicies'
import TermsAndCondition from '@/components/AdminDashboardComponents/Policies/TermsAndCondition'
import TermsOfServices from '@/components/AdminDashboardComponents/Policies/TermsOfServices'
import IntellectualPropertyPolicy from '@/components/AdminDashboardComponents/Policies/IntellectualPropertyPolicy'
import React from 'react'
import LiabilityDisclaimerPolicy from '@/components/AdminDashboardComponents/Policies/LiabilityDisclaimerPolicy'
import ComplianceRegulatoryPoliciesPage from '@/components/AdminDashboardComponents/Policies/ComplianceRegulatoryPolicies'
import RefundPolicy from '@/components/AdminDashboardComponents/Policies/RefundPolicy'

const PoliciesContainer = () => {
  return (
    <div>
        <div className="flex items-center justify-center mb-4">
        <h1 className="text-center text-2xl font-semibold mb-2 md:mb-0">Policies</h1>
        </div>
      <PrivacyPolicies/>
      <TermsAndCondition/>
      <TermsOfServices/>
      <RefundPolicy/>
      <IntellectualPropertyPolicy/>
      <ComplianceRegulatoryPoliciesPage/>
      <LiabilityDisclaimerPolicy/>
    </div>
  )
}

export default PoliciesContainer
