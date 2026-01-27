import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ContactPage() {
  const offices = [
    {
      city: "Johannesburg",
      country: "South Africa",
      isHQ: true,
      address: "155 West Street, Sandown, Sandton",
      postal: "Johannesburg, Gauteng, 2192",
      phone: "+27 10 016 6101",
      position: { top: "68%", left: "52%" },
    },
    {
      city: "New York",
      country: "USA",
      address: "Representative Office",
      position: { top: "38%", left: "23%" },
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Representative Office",
      position: { top: "30%", left: "48%" },
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "Representative Office",
      position: { top: "75%", left: "30%" },
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Representative Office",
      position: { top: "42%", left: "56%" },
    },
    {
      city: "Beijing",
      country: "China",
      address: "Representative Office",
      position: { top: "36%", left: "74%" },
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "Representative Office",
      position: { top: "82%", left: "88%" },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTQxOTk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Global network"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with our team to discuss how we can help transform your
            built environment.
          </p>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices across the globe, we're positioned to serve clients
              worldwide
            </p>
          </div>

          {/* World Map with Office Markers */}
          <div className="relative bg-gray-50 rounded-lg p-8 mb-12">
            <div className="relative w-full" style={{ paddingTop: "50%" }}>
              {/* Simple world map representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full"
                  style={{ maxHeight: "500px" }}
                >
                  {/* Ocean background */}
                  <rect width="1000" height="500" fill="#E5F2FF" />
                  
                  {/* Simplified continents */}
                  {/* Africa */}
                  <path
                    d="M 480 200 L 520 250 L 540 320 L 510 350 L 480 340 L 470 280 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* Europe */}
                  <path
                    d="M 470 140 L 500 150 L 510 180 L 490 190 L 475 170 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* Asia */}
                  <path
                    d="M 520 140 L 600 150 L 680 160 L 720 180 L 740 200 L 700 240 L 650 220 L 600 210 L 560 200 L 540 180 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* Australia */}
                  <path
                    d="M 800 380 L 880 390 L 900 420 L 870 430 L 820 420 L 800 400 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* North America */}
                  <path
                    d="M 150 150 L 200 140 L 250 160 L 270 200 L 240 240 L 200 250 L 160 230 L 140 190 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* South America */}
                  <path
                    d="M 240 280 L 280 300 L 300 350 L 290 400 L 260 390 L 240 360 L 230 320 Z"
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  
                  {/* Office location markers */}
                  {offices.map((office) => {
                    const x = parseFloat(office.position.left) * 10;
                    const y = parseFloat(office.position.top) * 5;
                    return (
                      <g key={office.city}>
                        <circle
                          cx={x}
                          cy={y}
                          r={office.isHQ ? "8" : "6"}
                          fill={office.isHQ ? "#2563EB" : "#3B82F6"}
                          stroke="white"
                          strokeWidth="2"
                        />
                        <text
                          x={x}
                          y={y - 15}
                          textAnchor="middle"
                          className="text-xs font-semibold"
                          fill="#1F2937"
                        >
                          {office.city}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`bg-white border-2 rounded-lg p-6 hover:shadow-md transition-shadow ${
                  office.isHQ ? "border-blue-600" : "border-gray-200"
                }`}
              >
                {office.isHQ && (
                  <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                    Headquarters
                  </span>
                )}
                <h3 className="text-xl mb-2 text-gray-900">
                  {office.city}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{office.country}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>{office.address}</p>
                  {office.postal && <p>{office.postal}</p>}
                  {office.phone && (
                    <p className="flex items-center gap-2 text-blue-600">
                      <Phone className="h-4 w-4" />
                      {office.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-8 text-gray-900">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Head Office
                    </h3>
                    <p className="text-gray-700">
                      155 West Street, Sandown, Sandton
                      <br />
                      Johannesburg, Gauteng, 2192
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+27 10 016 6101</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@ikhaya-consult.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Website
                    </h3>
                    <p className="text-gray-700">www.ikhaya-consult.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl mb-6 text-gray-900">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
