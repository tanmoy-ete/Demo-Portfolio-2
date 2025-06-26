import React,{useState} from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {

    const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/meoabrkq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: '#',
          question: question,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setQuestion('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

    return(
        <section className="contact" id="Contact">
        <div className="container">
            <div className="contact-content">
                <div className="contact-form">
                    <h3 className="section-subtitle">CONTACT NOW</h3>
                    <h2 className="section-title">GET IN TOUCH TODAY</h2>
                    <p>Ready to take your digital presence to the next level? Whether you're a startup looking to establish your brand or an established company aiming to refresh your online identity, I'm here to help your company.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Full Name*" onChange={(e) => setQuestion(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address*" onChange={(e) => setQuestion(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject*" onChange={(e) => setQuestion(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number" onChange={(e) => setQuestion(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message*" onChange={(e) => setQuestion(e.target.value)} required></textarea>
                        </div>
                        
                        <button type="submit" className="btn primary" disabled={isSubmitting}> {isSubmitting ? 'Sending...' : 'SUBMIT NOW'}</button>
                        {submitStatus === 'success' && (
                        <p className="submit-success">Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                        <p className="submit-error">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
                
                <div className="contact-info">
                    <div className="info-item">
                        <div className="service-icon">
                            <FaPhoneAlt />
                        </div>
                        <h3>CALL</h3>
                        <p>281-789-6642</p>
                    </div>
                    <div className="info-item">
                        <div className="service-icon">
                            <MdEmail />
                        </div>
                        <h3>EMAIL</h3>
                        <p>info@siftmedia.com</p>
                    </div>
                    <a href="cv.pdf" download="Alex Resume.pdf" className="btn primary">DOWNLOAD CV</a>
                </div>
            </div>
        </div>
    </section>

    )
}