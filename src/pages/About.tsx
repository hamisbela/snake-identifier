import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 prose max-w-none">
          <p>
            Welcome to Free Snake Identifier, your educational resource for AI-powered snake identification.
            We're passionate about helping people learn about the fascinating world of snakes through
            technology, while promoting safe and responsible snake observation from a distance.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make snake education accessible to everyone by providing a free, easy-to-use
            identification tool. We aim to foster appreciation for these remarkable reptiles while emphasizing
            the importance of safety and proper observation practices. Our tool is designed for educational
            purposes only, helping nature enthusiasts, students, and curious minds learn about different snake
            species.
          </p>

          <h2>Why Choose Our Tool?</h2>
          <ul>
            <li>Advanced AI snake recognition technology</li>
            <li>Detailed species information</li>
            <li>Educational insights about snakes</li>
            <li>Critical safety information</li>
            <li>Habitat and behavior details</li>
            <li>Completely free to use</li>
            <li>No registration required</li>
            <li>Privacy-focused approach</li>
            <li>Regular updates to improve accuracy</li>
          </ul>

          <div className="bg-red-50 p-6 rounded-lg my-8">
            <h2 className="text-red-800 mt-0">⚠️ Important Safety Disclaimer</h2>
            <p className="mb-0">
              This snake identification tool is for educational purposes only. Never approach or handle
              wild snakes based on digital identification alone. Misidentification of snakes can be
              extremely dangerous and potentially lethal. Always maintain a safe distance from wild snakes
              and contact professional snake handlers or wildlife experts if a snake needs to be removed.
            </p>
          </div>

          <h2>Support Our Project</h2>
          <p>
            We're committed to keeping this snake identification tool free and accessible to everyone.
            If you find our educational tool useful, consider supporting us by buying us a coffee.
            Your support helps us maintain and improve the service, ensuring it remains available to all
            reptile enthusiasts who want to learn.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://roihacks.gumroad.com/l/dselxe?utm_campaign=donation-home-page&utm_medium=website&utm_source=snake-identifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}