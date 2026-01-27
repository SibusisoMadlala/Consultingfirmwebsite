import { Users, TrendingUp, Award, Heart, Mail } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities and career development programs.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented professionals in a supportive team environment.",
    },
    {
      icon: Award,
      title: "Competitive Package",
      description:
        "Industry-leading compensation and comprehensive benefits.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and emphasis on wellbeing.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Project Manager",
      location: "Johannesburg",
      type: "Full-time",
      description:
        "Lead complex projects across the built environment sector, managing teams and ensuring successful delivery.",
    },
    {
      title: "Cost Management Consultant",
      location: "Johannesburg",
      type: "Full-time",
      description:
        "Provide expert cost planning, budgeting and control services to clients in construction and property development.",
    },
    {
      title: "Facility Management Specialist",
      location: "Sandton",
      type: "Full-time",
      description:
        "Oversee day-to-day operations of client facilities, ensuring safety, efficiency and sustainability.",
    },
    {
      title: "Graduate Consultant Program",
      location: "Multiple Locations",
      type: "Graduate Program",
      description:
        "12-month rotational program for recent graduates passionate about the built environment.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY5MzM4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-6">Careers at Ikhaya</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Join a team dedicated to transforming the built environment through
            strategic consulting and innovative solutions.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Why Join Ikhaya Consulting
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people and create an environment where talent
              thrives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <benefit.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                Our Culture
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Ikhaya Consulting, we foster a culture of excellence,
                  innovation, and collaboration. Our team members are empowered
                  to bring their best ideas forward and make meaningful
                  contributions to client success.
                </p>
                <p>
                  We value diversity, integrity, and continuous learning. Whether
                  you're an experienced professional or just starting your
                  career, you'll find opportunities to grow and make an impact.
                </p>
                <p>
                  Our commitment to work-life balance ensures that while we
                  deliver exceptional results for our clients, we also support
                  the wellbeing and personal development of our team.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk0MTk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team working together"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find your next challenge
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-700">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Program */}
      <section className="py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
              Graduate Development Program
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our comprehensive graduate program provides recent graduates with
              hands-on experience across various aspects of the built
              environment. You'll receive mentorship from industry experts,
              participate in professional development workshops, and work on
              real-world projects that make a difference.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Learn More About Our Graduate Program
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what to expect when you apply
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">
                Submit Application
              </h3>
              <p className="text-sm text-gray-600">
                Apply online with your CV and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">
                Initial Screening
              </h3>
              <p className="text-sm text-gray-600">
                Our team reviews your application
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Interviews</h3>
              <p className="text-sm text-gray-600">
                Meet with our team and leadership
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Offer</h3>
              <p className="text-sm text-gray-600">
                Join the Ikhaya Consulting team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-6">
            Don't See a Role That Fits?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented professionals. Send
            us your CV and we'll keep you in mind for future opportunities.
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
