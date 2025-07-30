import { Card, CardContent } from "./ui/card";
import { Users, Zap, BookOpen, Award, Network, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Hackathons & Ideathons",
      description: "Fueling problem-solving and creative thinking through competitive events"
    },
    {
      icon: BookOpen,
      title: "Skill-building Events",
      description: "From coding workshops to bootcamps that level up your tech skills"
    },
    {
      icon: Target,
      title: "Knowledge Sharing",
      description: "Courses, internships, scholarships, and tech events curated for growth"
    },
    {
      icon: Award,
      title: "Campus Ambassador Program",
      description: "Empowering college reps to lead locally and connect nationally"
    },
    {
      icon: Network,
      title: "Collaborative Networking",
      description: "Creating meaningful connections between peers and professionals"
    },
    {
      icon: Users,
      title: "Community First",
      description: "A space where students help students — no gatekeeping, just growth"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">White Devils</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            White Devils is an independent, student-led tech community built on collaboration, 
            curiosity, and career growth. We bridge the gap between education and real-world 
            tech exposure — beyond textbooks and classroom boundaries.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-foreground leading-relaxed">
                "To be India's most authentic and impactful student-powered tech collective — by students, for students."
              </p>
              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <p className="text-muted-foreground italic">
                  "White Devils is your tech circle that actually shares useful stuff — not just scams or fake job links."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Values */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Why Choose White Devils?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-primary/20 rounded-lg">
              <h4 className="text-xl font-semibold text-primary mb-3">We Don't Just Post Events</h4>
              <p className="text-muted-foreground">
                We build a platform where young minds can level up, teach each other, and grow together.
              </p>
            </div>
            <div className="p-6 bg-card border border-primary/20 rounded-lg">
              <h4 className="text-xl font-semibold text-primary mb-3">Open for Everyone</h4>
              <p className="text-muted-foreground">
                Whether you're a curious beginner or a hackathon hustler — if you're hungry to learn, there's a place for you here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;