import { SignIn, SignUp } from "@clerk/clerk-react";
import { useState } from "react";

const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-pink-600/10 blur-[100px] animate-pulse delay-500" />

      {/* Left Panel - Branding */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center p-16 relative">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">EMS</h1>
            <p className="text-blue-300 text-sm">Employee Management System</p>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Manage Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team Smarter
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
            A powerful platform to manage employees, track performance, and streamline HR operations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
          {[
            { icon: "👥", title: "Team Management", desc: "Manage all employees in one place" },
            { icon: "📊", title: "Analytics", desc: "Track performance & insights" },
            { icon: "🔒", title: "Secure Access", desc: "Clerk-powered authentication" },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-3xl">{feature.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{feature.title}</p>
                <p className="text-slate-400 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Auth */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-16 relative z-10">
        {/* Mobile Logo */}
        <div className="flex lg:hidden items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">EmpManage</span>
        </div>

        {/* Toggle Tabs */}
        <div className="w-full max-w-md mb-6">
          <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-sm">
            <button
              onClick={() => setShowSignUp(false)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !showSignUp
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                showSignUp
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Clerk Component */}
        <div className="w-full max-w-md clerk-wrapper animate-fadeIn">
          {!showSignUp ? (
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-white/8 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/40 rounded-3xl",
                  headerTitle: "text-white text-2xl font-bold",
                  headerSubtitle: "text-slate-400",
                  socialButtonsBlockButton:
                    "bg-white/8 border border-white/15 text-white hover:bg-white/15 transition-all rounded-xl",
                  socialButtonsBlockButtonText: "text-slate-200 font-medium",
                  dividerLine: "bg-white/10",
                  dividerText: "text-slate-500",
                  formFieldLabel: "text-slate-300 font-medium text-sm",
                  formFieldInput:
                    "bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all",
                  formButtonPrimary:
                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]",
                  footerActionLink: "text-blue-400 hover:text-blue-300 font-medium",
                  identityPreviewText: "text-slate-300",
                  identityPreviewEditButtonIcon: "text-blue-400",
                  formResendCodeLink: "text-blue-400 hover:text-blue-300",
                },
              }}
            />
          ) : (
            <SignUp
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-white/8 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/40 rounded-3xl",
                  headerTitle: "text-white text-2xl font-bold",
                  headerSubtitle: "text-slate-400",
                  socialButtonsBlockButton:
                    "bg-white/8 border border-white/15 text-white hover:bg-white/15 transition-all rounded-xl",
                  socialButtonsBlockButtonText: "text-slate-200 font-medium",
                  dividerLine: "bg-white/10",
                  dividerText: "text-slate-500",
                  formFieldLabel: "text-slate-300 font-medium text-sm",
                  formFieldInput:
                    "bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all",
                  formButtonPrimary:
                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]",
                  footerActionLink: "text-purple-400 hover:text-purple-300 font-medium",
                  identityPreviewText: "text-slate-300",
                  formResendCodeLink: "text-purple-400 hover:text-purple-300",
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
