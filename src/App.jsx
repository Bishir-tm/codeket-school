import React, { useState, useEffect } from "react";
import BookingModal from "./components/BookingModal";
import {
  Play,
  X,
  Check,
  Star,
  Shield,
  Clock,
  Users,
  TrendingUp,
  BookOpen,
  CreditCard,
  BarChart3,
  MessageSquare,
  Wifi,
  WifiOff,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  Sun,
  Moon,
  CheckCircle2,
  School,
  DollarSign,
  FileText,
  Calendar,
  UserCheck,
  Bell,
  Download,
  Globe,
  Smartphone,
  Monitor,
  Award,
  Zap,
  Target,
} from "lucide-react";

const CodeketSchoolLanding = () => {
  const [theme, setTheme] = useState("light");
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Pain points that schools face
  const painPoints = [
    {
      icon: CreditCard,
      title: "Revenue Leakage",
      desc: "Missed fees, manual reconciliation errors, and poor fee tracking costing thousands monthly",
    },
    {
      icon: Clock,
      title: "Administrative Burden",
      desc: "Hours wasted on repetitive tasks like attendance, registration, and report generation",
    },
    {
      icon: MessageSquare,
      title: "Poor Parent Communication",
      desc: "Delayed notifications, unclear receipts, and inconsistent updates damaging trust",
    },
    {
      icon: WifiOff,
      title: "Connectivity Issues",
      desc: "Cloud-only systems that fail when internet is unreliable, disrupting school operations",
    },
  ];

  // Core features with benefits
  const features = [
    {
      icon: CreditCard,
      title: "Smart Fee Management",
      desc: "Automated invoicing, payment tracking, and instant receipts that stop revenue leakage",
      benefit: "Improve fee collection by 28% within 45 days",
    },
    {
      icon: UserCheck,
      title: "Effortless Attendance & Grading",
      desc: "Quick attendance marking and grade entry that teachers actually want to use",
      benefit: "Save 16+ hours weekly on administrative tasks",
    },
    {
      icon: Bell,
      title: "Parent Communication Hub",
      desc: "SMS, WhatsApp, and email notifications that keep parents informed and engaged",
      benefit: "Increase parent satisfaction and trust",
    },
    {
      icon: Wifi,
      title: "Works Online & Offline",
      desc: "Built for Nigeria's reality - keeps working when internet doesn't, syncs when it returns",
      benefit: "Never lose data or miss critical tasks",
    },
    {
      icon: BarChart3,
      title: "Actionable Reports",
      desc: "Clear dashboards and reports that help principals make better decisions fast",
      benefit: "Get insights in minutes, not days",
    },
    {
      icon: Phone,
      title: "Human Support",
      desc: "Real people available via phone and WhatsApp - not just tickets and chatbots",
      benefit: "Get help when you need it most",
    },
  ];

  // Pricing tiers from memo
  const pricingTiers = [
    {
      name: "Starter",
      students: "Up to 200",
      price: "₦200,000",
      period: "per term",
      features: [
        "All core features included",
        "Attendance & grading",
        "Fee management & receipts",
        "Parent notifications",
        "Basic reports",
        "Offline capability",
        "Phone & WhatsApp support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      students: "201 - 600",
      price: "₦200,000 + ₦750",
      period: "base + per extra student",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Custom SMS credits",
        "Multi-user access",
        "Data export tools",
        "Priority support",
        "Training sessions",
      ],
      popular: true,
    },
    {
      name: "Scale",
      students: "601+ students",
      price: "₦200,000 + ₦1,000",
      period: "base + per extra student",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "Multi-branch support",
        "White-glove onboarding",
        "ROI guarantee",
      ],
      popular: false,
    },
  ];

  // Trust indicators
  const stats = [
    { number: "500+", label: "Schools Trust Us", icon: School },
    {
      number: "28%",
      label: "Avg. Fee Collection Improvement",
      icon: TrendingUp,
    },
    {
      number: "16hrs",
      label: "Administrative Hours Saved Weekly",
      icon: Clock,
    },
    { number: "5 days", label: "Average Setup Time", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20"></div>
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-cyan-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="/logo.png"
                alt="Codeket School Logo"
                className="w-10 h-10"
              />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Codeket
                </div>
                <div className="text-xs text-gray-500 -mt-1">
                  School Management
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Demo
              </a>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedPlan(null);
                  setShowBookingModal(true);
                }}
                className="hidden md:flex btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Book Free Demo
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto px-6 py-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="text-2xl font-bold">Codeket</div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-center">
              <a
                href="#features"
                className="text-3xl font-bold hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-3xl font-bold hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="text-3xl font-bold hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
            </div>

            <div className="text-center pb-8">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
                onClick={() => {
                  setSelectedPlan(null);
                  setShowBookingModal(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900 dark:text-white">
                Stop Losing Money on
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Manual School Management
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The offline-capable school management system that reduces
              administrative work by 40%+, stops fee leakage, and works reliably
              even when your internet doesn't.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowDemoModal(true)}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch 2-Minute Demo
              </button>

              <button
                onClick={() => {
                  setSelectedPlan(null);
                  setShowBookingModal(true);
                }}
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Modal */}
      <section id="demo">
        {showDemoModal && (
          <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full">
              <button
                onClick={() => setShowDemoModal(false)}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-xl hover:scale-110 transition-transform z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6">
                <div
                  className="w-full"
                  style={{ paddingBottom: "56.25%", position: "relative" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/x4CzgUmA8j8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        selectedPlan={selectedPlan}
      />

      {/* Pain Points Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Are These Problems
              <span className="text-red-600"> Costing You Money?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Most private schools lose thousands every term due to preventable
              administrative problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {painPoints.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-red-700 dark:text-red-400">
                        {pain.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {pain.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-8 py-4">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                Codeket School solves all of these problems — starting from day
                one
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-blue-600">
                COMPLETE SOLUTION
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything Your School Needs
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                In One System
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built specifically for private schools in Nigeria. Fast setup,
              reliable operation, measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {feature.desc}
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        ✓ {feature.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-green-600">
                SIMPLE & TRANSPARENT
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                One Simple Price.
              </span>{" "}
              For Every School.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              No tiers, no hidden fees, no surprises. Pay only for the students
              you have.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl border-2 border-blue-500 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Side - Main Price */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-12 lg:p-16">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                      <Star className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      Flat Rate Pricing
                    </h3>

                    <div className="flex items-baseline justify-center lg:justify-start space-x-2 mb-2">
                      <span className="text-5xl lg:text-6xl font-bold">
                        ₦1,000
                      </span>
                      <span className="text-xl opacity-90">per term</span>
                    </div>

                    <div className="text-lg opacity-90 mb-2">per student</div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-8">
                      <div className="text-sm opacity-90 mb-2">
                        Example for 200 students:
                      </div>
                      <div className="text-2xl font-bold">
                        ₦200,000 per term
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features & Details */}
                <div className="p-12 lg:p-16">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          All Features Included
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Get access to every feature - no limitations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Pay Only For Active Students
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Billed per term based on actual enrollment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          ₦100,000 One-time setup fee Only
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          includes full installation, data import, staff
                          training, and fulls support.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Human Support Included
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Phone, WhatsApp, and email support with real people
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      setSelectedPlan("Flat Rate - ₦1,000/student");
                      setShowBookingModal(true);
                    }}
                    className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white dark:bg-gray-800 rounded-2xl px-8 py-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  All Features Included
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  No Hidden Fees
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Cancel Anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Stop Losing Money on
            <br />
            Manual Administrative Work?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Join 500+ schools that have reduced administrative burden, improved
            fee collection, and gained control over their operations with
            Codeket School.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-xl">
              <Phone className="w-5 h-5 mr-2 inline" />
              Call: +234 906 814 9540
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              <Mail className="w-5 h-5 mr-2 inline" />
              schools@codeket.com
            </button>
          </div>

          <button
            onClick={() => {
              setSelectedPlan(null);
              setShowBookingModal(true);
            }}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all"
          >
            <Calendar className="w-5 h-5 mr-2 inline" />
            Book Free Demo & Consultation
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              3-7 day setup
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Human support included
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo.png"
                  alt="Codeket School Logo"
                  className="w-12 h-12"
                />
                <div>
                  <div className="text-2xl font-bold text-white">Codeket</div>
                  <div className="text-sm opacity-70">
                    School Management System
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The offline-capable school management system built specifically
                for private schools in Nigeria and emerging markets.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Product</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="#features"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#demo"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Demo
                </a>
                <a
                  href="#support"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Support
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://codeket.com/about"
                  className="block hover:text-blue-400 transition-colors"
                >
                  About Codeket
                </a>
                <a
                  href="https://codeket.com/blog"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="https://codeket.com/careers"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
                <a
                  href="https://codeket.com/contact"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left text-sm opacity-70">
                <p>
                  &copy; {new Date().getFullYear()} Codeket Inc. All rights
                  reserved.
                </p>
                <p className="mt-1">Built with ❤️ for Nigerian schools</p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="https://codeket.com/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://codeket.com/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="https://codeket.com/security"
                  className="hover:text-blue-400 transition-colors"
                >
                  Security
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-2 opacity-60">
                <Shield className="w-4 h-4" />
                <span className="text-xs">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 opacity-60">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeketSchoolLanding;
