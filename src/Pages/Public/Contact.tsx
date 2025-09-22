import React from 'react';
import Layout from '../../Components/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout showSidebar={false}>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Phone className="w-8 h-8 text-base-3 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with Microsoft Technical Community. We'd love to hear from you!
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-base-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-base-3" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Form Coming Soon!
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Malek is currently designing a beautiful contact form following the project sketch. 
              Stay tuned for multiple ways to reach us!
            </p>
            
            <div className="bg-base-1 rounded-lg p-6">
              <h3 className="font-semibold text-base-4 mb-2">Expected Features:</h3>
              <ul className="text-left text-gray-700 space-y-2 max-w-sm mx-auto">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-base-3 mr-2" />
                  Contact form with validation
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-base-3 mr-2" />
                  ISIMM location details
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-base-3 mr-2" />
                  Community social links
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;