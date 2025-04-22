import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone
} from 'lucide-react';

const Contact = () => {
  // Apply fade-in animation to elements as they become visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(''); // To show messages to the user
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus('Submitting...');

    try {
      const response = await fetch('https://arkyn07.onrender.com/api/contact', { // Replace with your backend URL if different
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        // Clear form fields
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          institution: '',
          subject: '',
          message: '',
        });
        setShowSuccessDialog(true);
      } else {
        setSubmitStatus(`Error: ${data.message || 'Something went wrong.'}`);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('Error submitting form.');
    }
  };

  return (
    <div className="min-h-screen bg-arkyin-dark text-white">
      <Navbar />

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-arkyin-dark border-arkyin-purple">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-satoshi text-gradient">Thank You!</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Your message has been sent successfully. We'll get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90"
              onClick={() => setShowSuccessDialog(false)}
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedBackground withGrid={true} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-bold mb-6 text-gradient animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-slow">
              Have questions about Arkyn or want to schedule a demo? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <SectionTitle
                title="Contact Us"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                className="mb-8"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="glass border-white/20 bg-transparent focus:border-arkyin-purple h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="glass border-white/20 bg-transparent focus:border-arkyin-purple h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass border-white/20 bg-transparent focus:border-arkyin-purple h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="institution" className="text-sm font-medium text-gray-300">Institution Name</label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="glass border-white/20 bg-transparent focus:border-arkyin-purple h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass border-white/20 bg-transparent focus:border-arkyin-purple h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass border-white/20 bg-transparent focus:border-arkyin-purple resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="glow bg-gradient-to-r from-arkyin-blue to-arkyin-purple hover:opacity-90 w-full h-12"
                    disabled={submitStatus === 'Submitting...'}
                  >
                    {submitStatus === 'Submitting...' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>

              {/* Submission status message */}
              {submitStatus && (
                <p className={`mt-4 text-center ${submitStatus.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitStatus}
                </p>
              )}

            </div>

            <div className="animate-on-scroll">
              <div className="glass rounded-2xl overflow-hidden p-8 h-full">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-satoshi font-bold text-gradient mb-6">Contact Information</h3>
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <MapPin className="mr-4 h-6 w-6 text-arkyin-purple flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Our Location</h4>
                          <p className="text-gray-400">4 Shiv Ashish, Dholeshwar Mahadev Road, <br />Gandhinagar-382007 India</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Phone className="mr-4 h-6 w-6 text-arkyin-purple flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Phone</h4>
                          <p className="text-gray-400">+91 99135 97750</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Mail className="mr-4 h-6 w-6 text-arkyin-purple flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Email</h4>
                          <p className="text-gray-400">hello.arkyn@gmail.com</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="mr-4 h-6 w-6 text-arkyin-purple flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Hours</h4>
                          <p className="text-gray-400">Monday - Friday: 8am - 6pm IST<br />Saturday - Sunday: Closed</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-satoshi font-bold text-gradient mb-6">Book a Demo</h3>
                    <div className="flex items-start">
                      <MessageSquare className="mr-4 h-6 w-6 text-arkyin-blue flex-shrink-0" />
                      <div>
                        <p className="text-gray-300 mb-4">
                          Interested in seeing Arkyn in action? Schedule a personalized demo with our team.
                        </p>
                        <Button className="bg-arkyin-blue hover:bg-arkyin-blue/90">
                          Schedule a Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Get quick answers to common questions about Arkyn and our services."
            center
            className="mb-16 animate-on-scroll"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-3">What makes Arkyn different from other school management systems?</h3>
                <p className="text-gray-400">
                  Arkyn combines elegant design with powerful functionality, creating a cohesive platform that addresses all aspects of school management. Unlike traditional systems, we focus on the user experience as much as the features, creating software that's both beautiful and highly functional.
                </p>
              </div>

              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-3">Can Arkyn be customized for our specific institutional needs?</h3>
                <p className="text-gray-400">
                  Absolutely. We understand that every educational institution is unique. Arkyn is designed to be highly customizable, from the modules you use to the workflows you implement. Our team works closely with you to tailor the system to your specific requirements.
                </p>
              </div>

              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-3">How secure is the Arkyn platform?</h3>
                <p className="text-gray-400">
                  Security is a top priority for us. Arkyn implements industry-standard security measures including end-to-end encryption, regular security audits, and granular access controls. We comply with major educational data privacy regulations and standards.
                </p>
              </div>

              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-3">What kind of support does Arkyn provide?</h3>
                <p className="text-gray-400">
                  We offer comprehensive support including initial implementation, staff training, and ongoing technical assistance. Our dedicated customer success team is always available to help you maximize the value of your Arkyn platform.
                </p>
              </div>

              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-3">Can we migrate data from our existing systems to Arkyn?</h3>
                <p className="text-gray-400">
                  Yes, we offer comprehensive data migration services to help you transition smoothly from your existing systems to Arkyn. Our team will work with you to ensure that your data is transferred accurately and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;