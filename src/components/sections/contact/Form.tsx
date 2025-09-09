import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Form() {
  return (
    <section className="flex flex-row items-center justify-center max-w-[1440px] mx-auto pt-[50px] pl-[100px] pr-[100px] gap-20">
        <div className="relative flex rounded-[15px] padding-[20px] gap-[10px] background-color-[#252A33] max-h-[486px]">
            <Image
                src="/assets/images/Contact/contact-form.png"
                alt="Form Icon"
                height={486}
                width={557}
                className="object-cover"
                priority
            />
        </div>
        
        <div className="flex flex-col justify-between gap-[20px] max-h-[486px]">
            <div className="flex flex-col gap-[15px]">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-2 gap-[15px]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                </div>
                
                {/* Row 2: Phone and Company */}
                <div className="grid grid-cols-2 gap-[15px]">
                    <input
                        type="tel"
                        placeholder="Phone (Optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                </div>
                
                {/* Row 3: Services and Budget Dropdowns */}
                <div className="grid grid-cols-2 gap-[15px]">
                    <div className="relative">
                        <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white appearance-none">
                            <option value="">What services are you interested in?</option>
                            <option value="web-design">Web Design</option>
                            <option value="development">Development</option>
                            <option value="branding">Branding</option>
                            <option value="consulting">Consulting</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white appearance-none">
                            <option value="">Project Budget ( USD )</option>
                            <option value="under-10k">Under $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-plus">$50,000+</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Row 4: Project Description */}
                <textarea
                    placeholder="Describe Your Project Here"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white resize-none"
                />
            </div>
            <div className="flex justify-start">
                <Link 
                    href="/services" 
                    className="text-white flex items-center justify-center w-full sm:w-auto lg:mx-w-[153px]"
                    style={{ 
                    backgroundColor: '#FE0B5F', 
                    borderRadius: '12px',
                    padding: '14px 22px',
                    gap: '10px'
                    }}
                >
                        <span 
                        className="text-sm sm:text-base lg:text-[16px]"
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
                        style={{ 
                            width: '10.94px', 
                            height: '11px',
                        }}
                    />
                </Link>
            </div>
        </div>
    </section>
  )
}
