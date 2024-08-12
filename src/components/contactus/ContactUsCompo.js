import React from "react";
import ContactSection from "./ContactSection";
import "./contactus.css";
export default function ContactUsCompo() {
  return (
    <div>
      <ContactSection />
      <div className="content-inner-2 pt-0">
    <div className="map-iframe map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.62101365897!2d106.660172!3d10.762622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c1a1638323b%3A0x9dbccfd2e1b57111!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sin!4v1615482115722"
        style={{ border: 0, width: '100%', minHeight: '500px', marginBottom: '-8px' }}
        allowFullScreen
        title="Ho Chi Minh City Map"
      />
    </div>
  </div>
    </div>
  );
}
