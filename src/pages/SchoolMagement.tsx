
import React from "react";

export default function SchoolManagementMarketing() {
  return (
    <div className="font-sans text-[#333]">
      {/* Header */}
      <header className="bg-[#28314e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Classaty</h1>
          <nav className="space-x-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#28314e] mb-6">
              Smart School Management Made Simple
            </h2>
            <p className="text-lg mb-8">
              Classaty helps schools manage students, teachers, attendance,
              exams, and communication—all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.classaty&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#28314e] text-white px-6 py-3 rounded-lg shadow hover:opacity-90 text-center"
              >
                Explore the App
              </a>
              <a
                href="#features"
                className="border border-[#28314e] text-[#28314e] px-6 py-3 rounded-lg hover:bg-[#28314e] hover:text-white text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="../../public/school.png"
              alt="School staff using Classaty dashboard"
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#28314e] mb-12">
          Powerful Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Student & Teacher Management",
            "Attendance & Exam Tracking",
            "Fees & Accounting",
            "Parent & Student Portal",
            "Real-time Notifications",
            "Reports & Analytics",
          ].map((feature) => (
            <div
              key={feature}
              className="border rounded-xl p-6 hover:shadow transition"
            >
              <h4 className="font-semibold text-lg text-[#28314e] mb-2">
                {feature}
              </h4>
              <p className="text-sm">
                Manage everything efficiently with an intuitive and secure
                system designed for modern schools.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#28314e] mb-6">
              Why Choose Classaty?
            </h3>
            <ul className="space-y-4">
              <li>✔ Saves time and reduces paperwork</li>
              <li>✔ Improves communication with parents</li>
              <li>✔ Secure cloud-based platform</li>
              <li>✔ Scalable for schools of any size</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-10">
            <p className="text-lg font-semibold text-[#28314e]">
              Trusted by Schools
            </p>
            <p className="text-sm mt-4">
              Hundreds of institutions use Classaty to streamline operations
              and improve academic outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold text-center text-[#28314e] mb-12">
            What Schools Say About Classaty
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              name: "Sarah Ahmed",
              role: "School Principal",
              quote:
                "Classaty has completely transformed how we manage our school. Attendance, exams, and communication are now effortless.",
            },{
              name: "David Miller",
              role: "Administrator",
              quote:
                "The dashboard is intuitive and saves us hours every week. Parents are happier and more informed than ever.",
            },{
              name: "Fatima Khan",
              role: "Teacher",
              quote:
                "From class schedules to student reports, everything is in one place. Classaty makes teaching easier.",
            }].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <p className="italic mb-6">“{testimonial.quote}”</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#28314e]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#28314e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your School?
          </h3>
          <p className="mb-8">
            Contact us today for a free demo of Classaty.
          </p>
          <button className="bg-white text-[#28314e] px-8 py-3 rounded-lg font-semibold hover:opacity-90">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-bold text-[#28314e] mb-4">Classaty</h4>
            <p>
              Classaty is a modern school management platform designed to
              simplify administration and enhance learning experiences.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-[#28314e] mb-3">Product</h5>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Demo</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#28314e] mb-3">Company</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#28314e] mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                <a
                href="https://api.classaty.com/api/v1/static/support"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                >
                Help Center
                </a>
                </li>

                <li>
                  <a
                    href="https://api.classaty.com/api/v1/static/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.classaty.com/api/v1/static/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                    Terms of Service
                  </a>
                </li>
              </ul>
          </div>
          
        </div>

        <div className="border-t text-center py-4 text-xs">
          © {new Date().getFullYear()} Classaty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
