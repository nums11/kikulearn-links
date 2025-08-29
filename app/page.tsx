'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-kiku-50">
      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/kiku-logo.png"
              alt="Kiku Logo"
              width={150}
              height={60}
              className="mx-auto"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Learn Languages
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kiku-600 to-primary-600">
              from Social Media
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform any social media video into a language learning opportunity. 
            Get instant transcriptions, translations, and flashcards powered by AI.
          </p>
          
          <div className="mb-12">
            <p className="text-2xl text-gray-700 mb-4">Coming soon on</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 shadow-sm">
                <Image
                  src="/apple-logo.svg"
                  alt="Apple Logo"
                  width={20}
                  height={20}
                  className="mr-3 text-gray-700"
                />
                <span className="text-gray-800">iOS</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 shadow-sm">
                <Image
                  src="/android-logo.svg"
                  alt="Android Logo"
                  width={20}
                  height={20}
                  className="mr-3 text-gray-700"
                />
                <span className="text-gray-800">Android</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-500">Support for TikTok, Instagram, YouTube, and more platforms</p>
          <p className="text-lg text-gray-700 mt-8">
            For questions and more info{' '}
            <a
              href="mailto:kikulearnapp@gmail.com"
              className="text-kiku-600 hover:text-kiku-700 underline font-medium"
            >
              contact us
            </a>
          </p>
          </div>
        </section>
      </main>
    )
}
