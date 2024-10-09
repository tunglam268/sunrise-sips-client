"use client";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={`bg-brown-heavy bg-cover bg-no-repeat text-white md:p-8 xl:p-0`} id="contact">
      <div className={`container mx-auto flex justify-between flex-wrap pt-10 gap-8`}>
        <div className="w-80">
          <h2 className="pb-5">Contact Us</h2>
          <div className={`contact-us flex flex-col gap-6`}>
            <div className="flex gap-3">
              <FaMapMarkerAlt size={22} />
              <a
                href="https://www.google.com/maps/place/Top+Ryde+City+Shopping+Centre/@-33.8122148,151.1055777,18z/data=!3m1!5s0x6b12a5a54c006b6d:0x113b7f3c494b7c7!4m14!1m7!3m6!1s0x6b12a5af8ac4225f:0xb69458817076d25a!2sTop+Ryde+City+Shopping+Centre!8m2!3d-33.8122148!4d151.1062214!16s%2Fm%2F03y5f6v!3m5!1s0x6b12a5af8ac4225f:0xb69458817076d25a!8m2!3d-33.8122148!4d151.1062214!16s%2Fm%2F03y5f6v?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GRD-3024a, Top Ryde City Shopping Centre
              </a>
            </div>
            <div className="flex gap-3">
              <FaPhoneAlt size={22} />
              <span className="text-white">0416 399 399</span>
            </div>
            <div className="flex gap-3">
              <IoMail size={22} />
              <a href="mailto:info@sunrisesips.com.au" className="text-white">
                doublesscoffee@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Facebook"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-80">
          <h2 className="pb-5">Opening Hours</h2>
          <div className="divide-y flex flex-col gap-4">
            <div className={`opening-hours flex flex-col gap-3`}>
              <span className="text-white">Open time : 11:00am - 9:30pm</span>
              <span className="text-white">Every day in week</span>
            </div>
            <div className={`flex flex-col gap-3 pt-4`}></div>
          </div>
        </div>
        <div className="w-80">
          <h2 className="pb-5">Location</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.501904200022!2d151.10557766965795!3d-33.81221479832804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5af8ac4225f%3A0xb69458817076d25a!2sTop%20Ryde%20City%20Shopping%20Centre!5e0!3m2!1sen!2sus!4v1725953774719!5m2!1sen!2sus"
              width="326"
              height="216"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title={"map"}
            ></iframe>
          </div>
        </div>
        <div className="w-full">
          <p className="text-white text-center pt-12 pb-12">© 2024 Sunrise Sips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
