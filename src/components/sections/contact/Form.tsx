'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Form() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)

  const services = [
    { value: '', label: 'What services are you interested in?' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'development', label: 'Development' },
    { value: 'branding', label: 'Branding' },
    { value: 'consulting', label: 'Consulting' }
  ]

  const budgets = [
    { value: '', label: 'Project Budget ( USD )' },
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' }
  ]

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px] gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="relative flex rounded-[12px] sm:rounded-[13px] md:rounded-[14px] lg:rounded-[15px] p-2 sm:p-3 md:p-4 lg:p-[20px] gap-1 sm:gap-2 md:gap-3 lg:gap-[10px] bg-[#252A33] lg:bg-transparent order-2 lg:order-1 w-full lg:w-auto lg:min-w-[557px]">
            <Image
                src="/assets/images/Contact/contact-form.png"
                alt="Form Icon"
                height={486}
                width={557}
                className="object-cover w-full h-auto"
                priority
            />
        </div>
        
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-[20px] max-h-full lg:max-h-[486px] order-1 lg:order-2 w-full lg:w-auto">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[15px]">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-[15px]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-sm sm:text-base"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-sm sm:text-base"
                    />
                </div>
                
                {/* Row 2: Phone and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-[15px]">
                    <input
                        type="tel"
                        placeholder="Phone (Optional)"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-sm sm:text-base"
                    />
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-sm sm:text-base"
                    />
                </div>
                
                {/* Row 3: Services and Budget Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-[15px]">
                    {/* Services Dropdown */}
                    <div className="relative w-full">
                        <button
                            type="button"
                            onClick={() => {
                                setIsServiceOpen(!isServiceOpen)
                                setIsBudgetOpen(false)
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-left text-sm sm:text-base text-gray-700 hover:bg-gray-50"
                        >
                            {selectedService ? services.find(s => s.value === selectedService)?.label : 'What services are you interested in?'}
                        </button>
                        <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                        
                        {isServiceOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {services.map((service) => (
                                    <button
                                        key={service.value}
                                        type="button"
                                        onClick={() => {
                                            setSelectedService(service.value)
                                            setIsServiceOpen(false)
                                        }}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {service.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Budget Dropdown */}
                    <div className="relative w-full">
                        <button
                            type="button"
                            onClick={() => {
                                setIsBudgetOpen(!isBudgetOpen)
                                setIsServiceOpen(false)
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-left text-sm sm:text-base text-gray-700 hover:bg-gray-50"
                        >
                            {selectedBudget ? budgets.find(b => b.value === selectedBudget)?.label : 'Project Budget ( USD )'}
                        </button>
                        <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                        
                        {isBudgetOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {budgets.map((budget) => (
                                    <button
                                        key={budget.value}
                                        type="button"
                                        onClick={() => {
                                            setSelectedBudget(budget.value)
                                            setIsBudgetOpen(false)
                                        }}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {budget.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Row 4: Project Description */}
                <textarea
                    placeholder="Describe Your Project Here"
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white resize-none text-sm sm:text-base"
                />
            </div>
        <div className="flex justify-center lg:justify-start">
            <Link
                href="/services"
                className="text-white flex items-center justify-center w-full sm:w-auto lg:max-w-[153px] py-3 px-5 sm:py-3 sm:px-5 md:py-3.5 md:px-6 lg:py-[14px] lg:px-[22px] rounded-xl"
                style={{
                backgroundColor: '#FE0B5F',
                gap: '8px sm:gap-2 md:gap-2.5 lg:gap-[10px]'
                }}
            >
                <span
                className="text-base sm:text-base lg:text-[16px]"
                style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    lineHeight: '1.2em',
                    letterSpacing: '-0.05em',
                }}
                >
                    Send Request
                </span>
                <ArrowUpRight
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-[10.94px] lg:h-[11px]"
                />
            </Link>
        </div>
        </div>
    </section>
  )
}
