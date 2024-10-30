"use client";
import { useRouter } from 'next/navigation';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SignIn() {
  const router=useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 opacity-40 -skew-y-12 rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-violet-500 opacity-40 -skew-x-12 rounded-2xl"></div>
        
        <div className="bg-white rounded-lg shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 hover:shadow-2xl transition-shadow duration-300 p-8 relative z-10">
        <button onClick={() => router.push('/')} className="absolute top-4 right-4 text-2xl text-violet-500 hover:text-violet-800">&times;</button>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold text-center mb-6 text-violet-800">Sign In</motion.h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-violet-700 hover:text-violet-800 text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 hover:ring-1 hover:ring-violet-500 hover:shadow-xl hover:shadow-violet-200 transition-shadow duration-300"
                placeholder="Email"
              />
            </div>
            
            <div>
              <label className="block text-violet-700 hover:text-violet-800 text-lg mb-2">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 hover:ring-1 hover:ring-violet-500 hover:shadow-xl hover:shadow-violet-200 transition-shadow duration-300"
                placeholder="Password"
              />
            </div>
            
            <a href="#" className="block text-sm text-violet-700 hover:underline hover:text-violet-800">
              Forgot your password?
            </a>
            
            <button
              type="submit"
              className="w-full bg-violet-700 text-white font-semibold py-3 rounded-lg border border-transparent hover:bg-white hover:text-violet-700 hover:border-violet-700 text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-violet-500/50 
               transform hover:scale-105 transition-all duration-400 ease-in-out"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-lg">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full border rounded-lg py-3 mb-3 text-gray-800 hover:bg-violet-100 hover:text-black hover:border-violet-700 transition-colors duration-200 shadow-none hover:shadow-lg hover:shadow-violet-500/50 
               transform hover:scale-105 transition-all duration-300 ease-in-out">
          <FaFacebook className="mr-2 text-black" /> Continue with Facebook
          </button>
          
          <button className="flex items-center justify-center w-full border rounded-lg py-3 text-gray-800 hover:bg-violet-100 hover:text-black hover:border-violet-700 transition-colors duration-200 shadow-none hover:shadow-lg hover:shadow-violet-500/50 
               transform hover:scale-105 transition-all duration-300 ease-in-out">
          <FaGoogle className="mr-2 text-black" /> Continue with Google
          </button>

          <p className="text-center text-gray-500 text-base mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-violet-600 hover:underline hover:text-violet-800 ">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
