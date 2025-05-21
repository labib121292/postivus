import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="font-sans text-black bg-white overflow-x-hidden">
      {/* Main container with consistent padding */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <img src="/logo-big.png" alt="Logo" className="h-5" />
          <nav className="hidden md:flex space-x-6 text-sm text-black">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>
          <button className="border border-black rounded-full px-4 py-2 text-sm">
            Request a quote
          </button>
        </header>

        {/* Hero Section */}
        <section className="py-16 flex flex-cols-1 md:flex-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl sm:order-1 font-bold text-black leading-tight mb-6">
              Navigating the digital landscape for success
            </h1>
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
              Our digital marketing agency helps businesses grow and succeed online through data-driven strategies and creative campaigns.
            </p>
            <button className="bg-black text-white rounded-full px-6 py-3 text-sm shadow-xl/30">
              Book a consultation
            </button>
          </div>
          <div className="flex justify-center md:justify-end order sm:order-2">
            <img src="/cover.png" alt="Hero illustration" className="max-w-full h-auto" />
          </div>
        </section>

        {/* Logo Strip */}
        
      <div className="flex justify-between gap-10 flex-wrap py-4">
  {[
    { src: '/amazon.png', alt: 'Amazon' },
    { src: '/hubspot.png', alt: 'Hubspot' },
    { src: '/notion.png', alt: 'Notion' },
    { src: '/netflix.png', alt: 'Netflix' },
    { src: '/zoom.png', alt: 'Zoom' },
  ].map((logo) => (
    <img
      key={logo.alt}
      src={logo.src}
      alt={logo.alt}
      className="h-10 filter invert sepia  hue-rotate-[170deg] brightness-100 contrast-0"
    />
  ))}
</div>



        {/* Case Studies */}
        <section className="py-12 flex gap-10 mt-1 items-center">
          <h2 className="bg-lime-300 h-7 text-center w-30 text-green-600 font-bold text-lg items-center justify-center ">Case Studies</h2>
          <p className="text-xs text-gray-700 mt-0.5 ">Explore Real-Life Examples of Our Proven Digital Marketing Success Through Our Case Studies</p>
            </section>

        <div className=" lg:shadow-xl/30 flex flex-col sm:flex-row sm:gap-5 sm:overflow-x-auto sm:rounded-2xl lg:rounded-2xl lg:h-[400px] lg:bg-gray-900 lg:justify-center lg:items-center px-5 py-15">

  {/* Card 1 */}
  <div className="bg-gray-900 lg:border-r sm:max-h-50 sm:max-w-100 lg:max-w-120 sm:rounded-2xl lg:rounded-none border-gray-200 text-white p-6 lg:text-2xl flex-1">
    <p className="mb-4 sm:w-80 lg:w-100 ">
      For a local restaurant, we improved their online presence and increased reservations by 35% using targeted social media campaigns.
    </p>
    <a href="#" className="text-green-300 font-semibold">Learn more →</a>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-900 lg:border-r sm:max-h-50 sm:rounded-2xl lg:rounded-none border-gray-200 text-white p-6 lg:text-2xl flex-1">
    <p className="mb-4 sm:w-60 lg:w-100">
      For a B2B software company, we executed a lead generation strategy that resulted in a 200% increase in qualified leads.
    </p>
    <a href="#" className="text-green-300 font-semibold">Learn more →</a>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-900 text-white p-6 sm:rounded-2xl sm:max-h-50 lg:rounded-none lg:text-2xl flex-1">
    <p className="mb-4 sm:w-60 lg:w-80">
      For an eCommerce brand, we ran a full-funnel marketing campaign that drove 4x ROI within 3 months.
    </p>
    <a href="#" className="text-green-300 font-semibold">Learn more →</a>
  </div>

</div>

     <div className='py-12 flex gap-10 mt-1 items-center'>
      <h2 className="bg-lime-300 h-7 text-center w-50 text-green-600 font-bold text-lg items-center justify-center">Our Working Process</h2>
  <p className="text-xs text-gray-700 mt-0.5 ">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

        {/* Working Process */}
      <section className="py-5 ">
  

  {/* Step 1 */}
  <details open className="mb-3 shadow-xl/30 bg-lime-300 rounded-xl">
    <summary className="cursor-pointer px-4 py-3 font-medium text-sm flex justify-between items-center">
      <span>01 Consultation</span>
      <span className="text-lg">+</span>
    </summary>
    <div className="px-4 pb-4 text-xs text-black">
      During the initial consultation, we will discuss your business goals and objectives, target audiences...
    </div>
  </details>

  {/* Step 2 */}
  <details className="mb-3 shadow-xl/30 border rounded-xl">
    <summary className="cursor-pointer px-4 py-3 font-medium text-sm flex justify-between items-center">
      <span>02 Research and Strategy Development</span>
      <span className="text-lg">+</span>
    </summary>
  </details>

  {/* Step 3 */}
  <details className="mb-3 shadow-xl/30 border rounded-xl">
    <summary className="cursor-pointer px-4 py-3 font-medium text-sm flex justify-between items-center">
      <span>03 Implementation</span>
      <span className="text-lg">+</span>
    </summary>
  </details>

  {/* Step 4 */}
  <details className="mb-3 shadow-xl/30 border rounded-xl">
    <summary className="cursor-pointer px-4 py-3 font-medium text-sm flex justify-between items-center">
      <span>04 Monitoring and Optimization</span>
      <span className="text-lg">+</span>
    </summary>
  </details>
</section>

      </div>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] text-white px-12 py-10 rounded-t-3xl mt-12 ml-8 mr-8 shadow-xl">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Contact */}
          <div>
            <img src="/logo-small.png" alt="Logo" className="h-10 mb-2" />
            <span className="bg-lime-400 text-black text-[10px] font-bold px-2 py-[2px] rounded inline-block mb-2">Contact us:</span>
            <p className="text-xs">Email: info@positivus.com</p>
            <p className="text-xs">Phone: 555-567-8901</p>
            <p className="text-xs">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </nav>

          {/* Subscribe */}
          <div className="bg-[#1A1A1A] p-4 rounded-xl w-full md:w-auto">
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-400 px-3 py-2 rounded text-sm text-white w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-lime-400 text-black px-4 py-2 rounded text-sm font-semibold"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-[10px] flex flex-col md:flex-row justify-between items-center text-gray-400">
          <span>© 2025 Positivus. All Rights Reserved.</span>
          <a href="#" className="underline mt-1 md:mt-0">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

