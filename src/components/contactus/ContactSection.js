import React,{useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
const ContactSection = () => {
  const [mess,setMess]=useState("")
  const handleSubmit = (event) => {
    console.log(mess)
    event.preventDefault();
     // Define email parameters
     const emailParams = {
      to_email: "dnhaichip@gmail.com",
      subject: 'Your Order Details',
      message:mess
    };

    // Send email using EmailJS
    emailjs.send('service_9q1fuew', 'template_nigomtv', emailParams, 'j3GsaVenuLN435Rmv')
      .then((response) => {
        console.log('Email sent successfully:', response);
       
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
      });
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="contact-bnr bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info style-1 text-start">
              <h2 className="title wow fadeInUp m-b25" data-wow-delay="0.1s">DISCOVER US</h2>
              <p className="text wow fadeInUp" data-wow-delay="0.2s">
                <span className="text-decoration-underline">
                  <a href="our-team.html">PetPerks is here to help you;</a>
                </span>
                <br /> Our experts are available to answer any questions you might have. We’ve got the answers.
              </p>
              <div className="contact-bottom wow fadeInUp" data-wow-delay="0.3s">
                <div className="contact-left">
                  <h5>Call Us</h5>
                  <ul>
                    <li>+01-123-456-7890</li>
                    <li>+01-123-456-7890</li>
                  </ul>
                </div>
                <div className="contact-right">
                  <h5>Email Us</h5>
                  <ul>
                    <li>help@petperks.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-area1 style-1 m-r20 m-md-r0 wow fadeInUp" data-wow-delay="0.5s">
              <form className="dz-form dzForm" method="POST" action="script/contact_smtp.php" onSubmit={handleSubmit}>
                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                <div className="dzFormMsg"></div>
                <label className="form-label title" htmlFor="dzName">Your Name</label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    id="dzName"
                    className="form-control"
                    name="dzName"
                  />
                </div>
                <label className="form-label title" htmlFor="dzEmail">Email Address</label>
                <div className="input-group">
                  <input
                    required
                    type="email"
                    id="dzEmail"
                    className="form-control"
                    name="dzEmail"
                  />
                </div>
                <label className="form-label title" htmlFor="dzPhoneNumber">Phone Number</label>
                <div className="input-group">
                  <input
                   
                    type="tel"
                    id="dzPhoneNumber"
                    className="form-control"
                    name="dzPhoneNumber"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                  />
                </div>
                <label className="form-label title" htmlFor="dzMessage">Message</label>
                <div className="input-group m-b30">
                  <textarea
                    id="dzMessage"
                    name="dzMessage"
                    rows="4"
                    required
                    className="form-control m-b10"
                    value={mess}
                    onChange={(e)=>setMess(e.target.value)}
                  ></textarea>
                </div>
                <div className="input-recaptcha m-b30">
                  <ReCAPTCHA
                    sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                    onChange={onCaptchaChange}
                  />
                </div>
                <div>
                  <button type="submit" value="submit" className="btn w-100 btnhover btn-secondary">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
