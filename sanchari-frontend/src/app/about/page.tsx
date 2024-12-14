"use client"
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto w-screen bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Sanchari App</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Sanchari App is your ultimate travel companion, designed to simplify and enhance your travel experience. 
          Whether you are planning your next adventure or looking to explore new destinations, Sanchari App has 
          everything you need at your fingertips.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to connect travelers with the world in a seamless, intuitive, and delightful way. We aim 
          to make travel planning stress-free and exciting, providing you with tools to create memories that last a lifetime.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Easy-to-use interface for planning trips.</li>
          <li>Comprehensive travel guides and tips.</li>
          <li>Secure and reliable booking options.</li>
          <li>24/7 customer support to assist you anytime.</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          Join thousands of happy travelers who trust Sanchari App for their journeys. Whether you are a solo 
          traveler, a couple, or a family, our app is built to cater to your unique travel needs.
        </p>
      </div>
    </div>
  );
};

export default About;
