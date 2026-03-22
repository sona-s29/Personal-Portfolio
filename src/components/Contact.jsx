import React, { useState, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { personalInfo } from "../data/mock";
import { toast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      "service_ia2fv0v",     // your service ID
      "template_nyic4s3",    // your template ID
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  };
  return (
    <section id="contact" className="py-24 bg-[#0a0a0b] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently working as a Full Stack Developer Intern, open to full-time opportunities and impactful development roles
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-white">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Phone className="text-cyan-500" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-white">{personalInfo.phone}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Linkedin className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">LinkedIn</p>
                  <p className="text-white">linkedin.com/in/sona-kumari</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Github className="text-cyan-500" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">GitHub</p>
                  <p className="text-white">github.com/sona-s29</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-gray-400">Fill out the form below and I'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
  
  <Input
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
  />

  <Input
    name="email"
    type="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
  />

  <Textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={5}
    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
  />

  <Button
    type="submit"
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
  >
    {loading ? "Sending..." : "Send Message"}
  </Button>

  {/* SUCCESS */}
  {success && (
    <p className="text-green-400 text-sm mt-2">
      ✅ Message sent successfully!
    </p>
  )}

  {/* ERROR */}
  {error && (
    <p className="text-red-400 text-sm mt-2">
      ❌ Failed to send. Try again.
    </p>
  )}
</form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
