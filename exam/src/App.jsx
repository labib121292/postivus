import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='lg:h-screen lg:w-screen ml-0'>
    <div className="font-sans text-black bg-white px-20">
    
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div className="font-bold text-lg">
          <img src="/logo-big.png" alt="" />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>
        <button className="border border-black px-4 py-2 rounded-full text-sm">
          Request a quote
        </button>
      </header>

      
      <section className="px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Navigating the digital landscape for success
          </h1>
          <p className="text-gray-600 mb-6">
            Our digital marketing agency helps businesses grow and succeed online
            through data-driven strategies and creative campaigns.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full">
            Book a consultation
          </button>
        </div>
        <div className="flex justify-center">
          <img src="/cover.png" alt="Illustration" />
        </div>
      </section>

     
     <div className="flex justify-center gap-10 flex-wrap px-6 py-4">
  {[
    { src: '/amazon.png', alt: 'Amazon' },
  
    { src: '/hubspot.png', alt: 'Hubspot' },
    { src: '/notion.png', alt: 'Notion' },
    { src: '/netflix.png', alt: 'Netflix' },
    { src: '/zoom.png', alt: 'Zoom' },
  ].map((logo) => (
    <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10" />
  ))}
</div>


    
     <div className="px-6 py-12">
 
  <div>
    <div>
      <h2 className="text-green-600 font-bold text-sm mb-1">Case Studies</h2>
    <p className="text-xs text-gray-700 mb-6">Explore Real-Life Examples of Our Proven Digital Marketing Success Through Our Case Studies</p>
    </div>
    
    <div className="flex flex-col md:flex-row ">
      <div className="bg-gray-900 text-white p-6 rounded-xl text-xs flex-1">
        <p className="mb-4">For a local restaurant, we improved their online presence and increased reservations by 35% using targeted social media campaigns.</p>
        <a href="#" className="text-green-300 font-semibold">Learn more →</a>
      </div>
      <div className="bg-gray-900 text-white p-6  text-xs flex-1">
        <p className="mb-4">For a B2B software company, we executed a lead generation strategy that resulted in a 200% increase in qualified leads.</p>
        <a href="#" className="text-green-300 font-semibold">Learn more →</a>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-xl text-xs flex-1">
        <p className="mb-4">For an eCommerce brand, we ran a full-funnel marketing campaign that drove 4x ROI within 3 months.</p>
        <a href="#" className="text-green-300 font-semibold">Learn more →</a>
      </div>
    </div>
  </div>


  <div className="mt-16">
    <h2 className="text-green-600 font-bold text-sm mb-1">Our Working Process</h2>
    <p className="text-xs text-gray-700 mb-6">Step-by-Step Guide to Achieving Your Business Goals</p>

  
    <details open className="mb-3 bg-lime-300 rounded-xl">
      <summary className="cursor-pointer px-4 py-3 font-semibold text-black text-sm flex justify-between items-center">
        <span>01 Consultation</span>
        <span className="text-lg">+</span>
      </summary>
      <div className="px-4 pb-4 text-xs text-black">
        During the initial consultation, we will discuss your business goals and objectives, target audiences, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
      </div>
    </details>

  
    <details className="mb-3 border rounded-xl">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium flex justify-between items-center">
        <span>02 Research and Strategy Development</span>
        <span className="text-lg">+</span>
      </summary>
    </details>

    <details className="mb-3 border rounded-xl">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium flex justify-between items-center">
        <span>03 Implementation</span>
        <span className="text-lg">+</span>
      </summary>
    </details>

  
    <details className="mb-3 border rounded-xl">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium flex justify-between items-center">
        <span>04 Monitoring and Optimization</span>
        <span className="text-lg">+</span>
      </summary>
    </details>
  </div>
</div>


<footer className="bg-[#0D0D0D] text-white px-6 py-10 rounded-t-3xl">
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-6">
   
    <div>
      <div className="h-10 w-30 mx-5">
          <img src="/logo-small.png" alt="" />
        </div>
      <span className="bg-lime-400 text-black text-[10px] font-bold px-2 py-[2px] rounded mb-2 inline-block">Contact us:</span>
      <p className="text-xs">Email: info@positivus.com</p>
      <p className="text-xs">Phone: 555-567-8901</p>
      <p className="text-xs">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
    </div>

  
    <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs">
      <a href="#" className="hover:underline">About us</a>
      <a href="#" className="hover:underline">Services</a>
      <a href="#" className="hover:underline">Use Cases</a>
      <a href="#" className="hover:underline">Pricing</a>
      <a href="#" className="hover:underline">Blog</a>
    </nav>

   
    <div className="bg-[#1A1A1A] p-4 rounded-xl w-full md:w-auto">
      <form className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border border-gray-400 px-3 py-2 rounded text-sm text-white w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-lime-400 text-black px-4 py-2 rounded text-sm font-semibold whitespace-nowrap"
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
  
</div>
    </>
  )
}

export default App
