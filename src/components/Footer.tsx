import { Instagram, Linkedin, MessageSquare, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/DT75kINqqKj3iqdCflKI6K?mode=ac_t",
      icon: MessageSquare
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/white_devils_tech_community.tm/",
      icon: Instagram
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/white-devils",
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:whitedevils.techcommunity@gmail.com",
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Campus Ambassador", href: "#campus-ambassador" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/a788dc7f-b2df-4293-8fd3-025fe4014a28.png" 
                alt="White Devils Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                WHITE DEVILS
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              India's most authentic student-powered tech collective. 
              Building a platform where young minds can level up, teach each other, and grow together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg hover:from-primary/30 hover:to-primary-glow/30 transition-all duration-300 group"
                >
                  <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm">
                <strong className="text-primary">Founder:</strong><br />
                Khailesh Kumar S A
              </p>
              <p className="text-sm">
                <strong className="text-primary">Email:</strong><br />
                whitedevils.techcommunity@gmail.com
              </p>
              <p className="text-sm">
                <strong className="text-primary">Community:</strong><br />
                India-wide tech collective
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} White Devils Tech Community. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Founded and owned by Khailesh Kumar S A
              </p>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>for the tech community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;