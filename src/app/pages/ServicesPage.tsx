import { Building2, Briefcase, Calculator, Clipboard, Cog, ShoppingCart, Target, Home } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: "asset",
      icon: Building2,
      title: "Asset Management",
      tagline: "Maximising the value of your assets throughout their lifecycle.",
      description:
        "We provide strategic asset management solutions that ensure your buildings, infrastructure, and facilities deliver consistent performance. Our approach reduces costs, extends asset life, and enhances long‑term value for owners and stakeholders.",
    },
    {
      id: "contract",
      icon: Clipboard,
      title: "Contract Management",
      tagline: "Turning agreements into successful outcomes.",
      description:
        "Our team manages contracts with precision, ensuring compliance, transparency, and efficiency. We safeguard your interests by monitoring obligations, mitigating risks, and streamlining processes so projects run smoothly from start to finish.",
    },
    {
      id: "cost",
      icon: Calculator,
      title: "Cost Management",
      tagline: "Financial clarity for every project.",
      description:
        "We deliver accurate cost planning, budgeting, and control to keep projects on track. By balancing quality with affordability, we help clients achieve maximum value without compromising standards.",
    },
    {
      id: "development",
      icon: Target,
      title: "Development Management",
      tagline: "From inception to handover.",
      description:
        "We manage the project from the time it is just a thought to its handover. Our development managers ensure they bring your vision to life.",
    },
    {
      id: "facility",
      icon: Cog,
      title: "Facility Management",
      tagline: "Efficient spaces, sustainable operations.",
      description:
        "Our facility management services cover the day‑to‑day operations of buildings, ensuring safety, comfort, and sustainability. From maintenance to energy efficiency, we create environments where people and businesses thrive.",
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      title: "Procurement Management",
      tagline: "Smart sourcing, reliable delivery.",
      description:
        "We manage procurement with a focus on quality, cost, and timeliness. Our expertise in supplier relations and tender processes guarantees that clients receive the best materials and services at the right price.",
    },
    {
      id: "project",
      icon: Briefcase,
      title: "Project Management",
      tagline: "Delivering projects on time, every time.",
      description:
        "Our project management team oversees planning, execution, and delivery with meticulous attention to detail. We coordinate stakeholders, manage risks, and ensure that every project meets its objectives within scope, budget, and schedule.",
    },
    {
      id: "property",
      icon: Home,
      title: "Property Management",
      tagline: "Protecting and growing your property investments.",
      description:
        "We provide comprehensive property management services that enhance asset value and tenant satisfaction. From leasing and maintenance to compliance and reporting, we ensure your properties remain profitable and well‑maintained.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765378025255-5c2ff04563f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFubmluZyUyMGJsdWVwcmludHN8ZW58MXx8fHwxNzY5NDE5OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction planning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive management solutions across every aspect of the built
            environment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-xl text-blue-600 mb-6 italic">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-blue-600 opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn how our management solutions can benefit your
            organisation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
