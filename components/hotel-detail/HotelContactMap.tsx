// components/hotel-detail/HotelContactMap.tsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface HotelContactMapProps {
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  mapEmbedUrl?: string;
}

export default function HotelContactMap({
  address = "Chitwan National Park Edge, Sauraha, Chitwan, Nepal",
  phone = "+977 56-123456",
  email = "info@hotelmetro.com",
  hours = "Front Desk: 24/7 Available",
  // Replace src below with your Google Maps embed iframe URL
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689231267!2d84.4532918!3d27.5815632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb362a5b6f3b%3A0x8e826b00b1a0e3!2sSauraha%2C%20Chitwan!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
}: HotelContactMapProps) {
  return (
    <section className="bg-[#fff] py-16 md:py-24 text-[#1a1a1a]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8c7657] font-semibold">
            Location & Getting Here
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mt-2 text-[#0f172a]">
            Contact & Location
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Panel */}
          <div className="lg:col-span-5 bg-[#f7f5f0] p-8 md:p-10 rounded-2xl shadow-sm flex flex-col justify-between border border-black/5">
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#0f172a]">
                Reach Out to Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#fff] text-[#8c7657] rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Address
                    </h4>
                    <p className="mt-1 text-gray-800 text-sm leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#fff] text-[#8c7657] rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Phone Number
                    </h4>
                    <p className="mt-1 text-gray-800 text-sm">
                      <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#fff] text-[#8c7657] rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Email
                    </h4>
                    <p className="mt-1 text-gray-800 text-sm">
                      <a href={`mailto:${email}`} className="hover:underline">
                        {email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#fff] text-[#8c7657] rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Reception Hours
                    </h4>
                    <p className="mt-1 text-gray-800 text-sm">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-6 text-sm font-medium text-white bg-[#0f172a] hover:bg-black rounded-xl transition-colors duration-200"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* iFrame Map Container */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-gray-200">
            <iframe
              title="Hotel Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}