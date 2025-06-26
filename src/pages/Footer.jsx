import React, {useState} from "react";
import {FaFacebook, FaInstagram,FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
export default function Footer() {

    const [question, setQuestion] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        submitStatus(null);

        try {
      const response = await fetch('#', {
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
        
    }
    return(
        <section className="newsletter">
        <div className="container">
            <h3 className="section-subtitle">Any queries</h3>
            <h2 className="section-title">Feel free to ask any questions</h2>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input type="text" onChange={(e)=>setQuestion(e.target.value )} placeholder="Ask question" required></input>
                <button type="submit"  className="btn primary">{isSubmitting? 'Sending':'Send'}</button>
                {submitStatus === 'success' && (
                <p className="submit-success">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                <p className="submit-error">Failed to send message. Please try again.</p>
                )}
            </form>
            <div className="social-links">
                <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaFacebook /></a>
                <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaInstagram /></a>
                <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaLinkedin /></a>
                <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaTwitter /></a>
                <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaGithub /></a>
            </div>
        </div>

        <div className="container">
            <p>© 2024 Personal Portfolio. All Rights Reserved Designed By Fleexstudio</p>
        </div>

    </section>
    )
}