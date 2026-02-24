import { Target, Eye, CheckCircle, Users, Handshake, Heart } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "We act with transparency and accountability in every engagement.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We deliver solutions that meet the highest professional standards.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "We embrace new ideas, technologies, and sustainable practices.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "We build strong partnerships with clients, stakeholders, and communities.",
    },
    {
      icon: CheckCircle,
      title: "Sustainability",
      description:
        "We balance performance with responsibility to the environment and society.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We are driven by enthusiasm and a genuine commitment to delivering exceptional results.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY5MzM4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Delivering excellence in the built environment through strategic
            consulting and management solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are a South African management consulting firm dedicated to
                  excellence in the built environment. Our expertise spans
                  asset, contract, cost, facility, procurement, project, and
                  property management — but our true value lies in the strategic
                  guidance we provide.
                </p>
                <p>
                  We help organisations make informed decisions, optimise
                  resources, and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk0MTk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professionals meeting"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower clients with innovative management solutions that
                transform the built environment into spaces of efficiency,
                sustainability, and long‑term value.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Eye className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading consulting partner in South Africa's built
                environment, recognised for integrity, innovation, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <value.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900 text-center">
              Our Approach
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-center">
              <p>
                We combine technical expertise with strategic insight. By
                integrating management disciplines, we provide holistic solutions
                that address both immediate challenges and long‑term objectives.
              </p>
              <p>
                Whether guiding procurement strategies, managing facilities, or
                advising on property portfolios, we ensure every decision adds
                measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our consultants bring diverse experience across engineering,
              finance, property, and project management. With a client‑centric
              mindset, we work side‑by‑side with organisations to deliver
              tailored solutions that align with their unique goals.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Affiliations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud members of leading industry bodies
            </p>
          </div>
          <div className="relative overflow-hidden group">
            <div className="flex animate-marquee gap-8 whitespace-nowrap hover:pause-on-hover">
              {/* First Set */}
              <div className="flex items-center gap-8 shrink-0">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image002.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image003.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image004.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                {/* Example from user request if needed, currently just images */}
                {/* <div className="text-xl font-semibold text-gray-700">Afroteq Services: Expert Facility Management Solutions</div> */}
              </div>

              {/* Duplicate Set for infinite scroll */}
              <div className="flex items-center gap-8 shrink-0">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image002.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image003.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-opacity-90 min-w-[200px] flex justify-center">
                  <ImageWithFallback
                    src="/images/image004.png"
                    alt="Affiliation Partner"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
