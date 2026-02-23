import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon path issues with webpack/vite
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export function ContactPage() {
  const offices = [
    {
      city: "Johannesburg",
      country: "South Africa",
      isHQ: true,
      address: "155 West Street, Sandown, Sandton",
      postal: "Johannesburg, Gauteng, 2192",
      phone: "+27 10 016 6101",
      coordinates: [-26.1042, 28.0558] as [number, number],
    },
    {
      city: "New York",
      country: "USA",
      address: "Representative Office",
      coordinates: [40.7128, -74.0060] as [number, number],
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Representative Office",
      coordinates: [51.5074, -0.1278] as [number, number],
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "Representative Office",
      coordinates: [-23.5505, -46.6333] as [number, number],
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Representative Office",
      coordinates: [25.2048, 55.2708] as [number, number],
    },
    {
      city: "Beijing",
      country: "China",
      address: "Representative Office",
      coordinates: [39.9042, 116.4074] as [number, number],
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "Representative Office",
      coordinates: [-33.8688, 151.2093] as [number, number],
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
          <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-12 h-[500px] z-0">
             <MapContainer 
                center={[20, 0]} 
                zoom={2} 
                scrollWheelZoom={false} 
                className="w-full h-full"
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {offices.map((office) => (
                  <Marker 
                    key={office.city} 
                    position={office.coordinates}
                  >
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-bold text-sm">{office.city}</h3>
                        <p className="text-xs text-gray-600">{office.country}</p>
                        {office.isHQ && <span className="text-blue-600 text-xs font-semibold">Headquarters</span>}
                      </div>
                    </Popup>
                  </Marker>
                ))}
            </MapContainer>
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
