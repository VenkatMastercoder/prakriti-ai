import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-serif text-green-800 font-bold">Prakriti</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/assessment/user-info"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-green-600 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-200 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-200 rounded-full opacity-10 blur-3xl -z-10 animate-pulse" />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Ayurvedic Constitution
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Understand your unique mind-body type through our comprehensive Prakriti assessment and receive personalized wellness recommendations.
          </p>
          <Link
            href="/assessment/user-info"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Begin Your Journey
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Personalized Analysis",
              description: "Get insights into your unique Prakriti (body constitution) based on Ayurvedic principles."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              ),
              title: "Comprehensive Assessment",
              description: "Answer questions about your physical, mental, and emotional characteristics."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              title: "Detailed Report",
              description: "Receive a comprehensive report with lifestyle, diet, and wellness recommendations."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 font-serif">Your Journey to Self-Discovery</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Start Assessment", desc: "Begin your journey to self-discovery", color: "from-green-400 to-green-500" },
              { step: 2, title: "Answer Questions", desc: "Share your physical and mental traits", color: "from-green-500 to-emerald-500" },
              { step: 3, title: "Get Results", desc: "Discover your unique constitution", color: "from-emerald-500 to-emerald-600" },
              { step: 4, title: "Receive Guidance", desc: "Get personalized wellness recommendations", color: "from-emerald-600 to-green-700" }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-50" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your personalized Ayurvedic assessment today and discover the path to balanced wellness.
            </p>
            <Link
              href="/assessment/user-info"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Assessment
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-lg mt-24 py-12 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              © 2024 Prakriti Assessment. Based on traditional Ayurvedic principles.
            </p>
            <p className="text-sm text-gray-400">
              Discover your unique constitution and embrace a balanced lifestyle.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
