import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MessageSquare, Instagram, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.query.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, just simulate submission and open mailto
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nQuery/Feedback:\n${formData.query}`);
      window.open(`mailto:whitedevils.techcommunity@gmail.com?subject=${subject}&body=${body}`, '_blank');

      setFormData({ name: "", email: "", query: "" });
      
      toast({
        title: "Message Prepared!",
        description: "Your email client will open with the message. Send it to complete the submission.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to prepare message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "WhatsApp Community",
      url: "https://chat.whatsapp.com/DT75kINqqKj3iqdCflKI6K?mode=ac_t",
      icon: MessageSquare,
      description: "Join our active WhatsApp community"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/white_devils_tech_community.tm/",
      icon: Instagram,
      description: "Follow us for updates and events"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/white-devils",
      icon: Linkedin,
      description: "Connect with us professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="query">Query/Feedback</Label>
                    <Textarea
                      id="query"
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      placeholder="How can we help you? Share your questions, feedback, or suggestions..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Preparing...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    This will open your email client. Upgrade to Supabase for direct form submission.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Community Info */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>White Devils Tech Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Founded and led by <strong className="text-primary">Khailesh Kumar S A</strong>, 
                  White Devils is India's most authentic student-powered tech collective.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 whitedevils.techcommunity@gmail.com</p>
                  <p>🌍 India-wide tech community</p>
                  <p>👥 200+ active members</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Join Our Community</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <Card key={index} className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                          <link.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all queries within 24 hours. For urgent matters, 
                  reach out via WhatsApp for faster response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;