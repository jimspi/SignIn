'use client'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../components/AuthForm'
import { supabase } from '../lib/supabase'

export default function Home() {
  const { user, loading } = useAuth()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!user ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to MyApp
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Build amazing things with our platform. Sign up today and join thousands of users who trust our service.
              </p>
            </div>

            {/* Auth Form */}
            <AuthForm />

            {/* Features Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast & Secure</h3>
                <p className="text-gray-600">Lightning-fast performance with enterprise-grade security.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface designed for users of all skill levels.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support whenever you need help.</p>
              </div>
            </div>
          </>
        ) : (
          /* Dashboard for logged-in users */
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Welcome to your dashboard! You are successfully logged in as {user.email}.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">🎉 Authentication Working!</h3>
              <p className="text-blue-700">
                Your backend connection is successful. You can now build upon this foundation to add more features like user profiles, data storage, and more complex functionality.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
