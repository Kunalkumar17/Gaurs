import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-4 text-amber-500">Gaur Butterfly</h3>
              <p className="text-gray-400 font-montserrat">Resort style living on Yamuna Expressway</p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors font-montserrat">About</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors font-montserrat">Floor Plans</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors font-montserrat">Amenities</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors font-montserrat">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="font-montserrat">Yamuna Expressway</li>
                <li className="font-montserrat">Greater Noida, UP</li>
                <li className="text-amber-500 font-montserrat font-semibold">+91 XXXXX XXXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm font-montserrat">
              © 2024 Gaur Butterfly. All rights reserved. | RERA Registered
            </p>
          </div>
        </div>
      </footer>
    );
  };


  export default Footer;
