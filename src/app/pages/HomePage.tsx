import { Link } from "react-router";
import { ArrowRight, Building2, Briefcase, Calculator, Clipboard, Cog, ShoppingCart, Target, Home } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HomePage() {
  const services = [
    { icon: Building2, name: "Asset Management", href: "/services#asset" },
    { icon: Clipboard, name: "Contract Management", href: "/services#contract" },
    { icon: Calculator, name: "Cost Management", href: "/services#cost" },
    { icon: Target, name: "Development Management", href: "/services#development" },
    { icon: Cog, name: "Facility Management", href: "/services#facility" },
    { icon: ShoppingCart, name: "Procurement Management", href: "/services#procurement" },
    { icon: Briefcase, name: "Project Management", href: "/services#project" },
    { icon: Home, name: "Property Management", href: "/services#property" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1664976706112-864d7a38e12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5Mzg0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction site"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              Strategic Management Consulting for the Built Environment.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a South African consulting firm specialising in management
              solutions across the built environment. Our expertise spans
              assets, contracts, costs, facilities, procurement, projects, and
              property management — but our true strength lies in guiding clients with
              strategic insight. We partner with organisations to unlock value,
              improve efficiency, and deliver sustainable outcomes in every
              aspect of the built environment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive management solutions tailored to the built
              environment
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <service.icon className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <span className="text-sm text-blue-600 group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                Why Choose Ikhaya Management Consultants
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Strategic Expertise
                    </h3>
                    <p className="text-gray-600">
                      We combine technical expertise with strategic insight to
                      deliver holistic solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Proven Experience
                    </h3>
                    <p className="text-gray-600">
                      Our team brings diverse experience across engineering,
                      finance, property, and project management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Cog className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Client-Centric Approach
                    </h3>
                    <p className="text-gray-600">
                      We work side-by-side with organisations to deliver
                      tailored solutions aligned with unique goals.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more about us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern architecture"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Ready to Transform Your Built Environment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with strategic
            management consulting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
