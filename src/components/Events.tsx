import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const Events = () => {
  const winners = [
    {
      position: "1st",
      prize: "1st Prize",
      team: "Team Quarks Finance",
      leader: "Joseph R.M",
      members: ["Aditya Kaushik", "Adithya Acharya", "Monil Mehta"],
      college: "RV College Of Engineering",
      icon: "🥇"
    },
    {
      position: "2nd",
      prize: "2nd Prize", 
      team: "Team NextGen Innovators",
      leader: "Mrithubashini S",
      members: ["Suren diran", "Roshini R"],
      college: "KG College of Arts and Science",
      icon: "🥈"
    },
    {
      position: "3rd",
      prize: "3rd Prize",
      team: "Team Zennovate",
      leader: "Nagarjun P L",
      members: [],
      college: "PES College of Engineering",
      icon: "🥉",
      solo: true
    }
  ];

  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            WHITEHACK 1.0
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our inaugural hackathon concluded successfully with incredible innovation and talent
          </p>
          
          {/* Event Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">35</span>
              </div>
              <p className="text-muted-foreground">Teams Participated</p>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">15</span>
              </div>
              <p className="text-muted-foreground">Teams Reached Finals</p>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="h-8 w-8 text-primary mr-2" />
                <span className="text-lg font-bold text-primary">Completed</span>
              </div>
              <p className="text-muted-foreground">Event Status</p>
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            🏆 Winners & Champions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:shadow-lg transition-all duration-300 ${
                  winner.position === "1st" 
                    ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary-glow/5" 
                    : "border-primary/20"
                }`}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{winner.icon}</div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {winner.prize}
                  </CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {winner.team}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Team Leader:</h4>
                    <p className="text-primary font-medium">{winner.leader}</p>
                  </div>
                  
                  {!winner.solo && winner.members.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Team Members:</h4>
                      <ul className="space-y-1">
                        {winner.members.map((member, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm">
                            • {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {winner.solo && (
                    <div>
                      <Badge variant="secondary" className="mb-2">Solo Participant</Badge>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {winner.college}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Events Teaser */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Get Featured in Our Next Event!</h3>
          <p className="text-muted-foreground mb-6">
            Join our upcoming hackathons and tech events. Show your skills, network with fellow developers, 
            and get a chance to be featured as our next champion!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm px-4 py-2">Hackathons</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Tech Talks</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Workshops</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Competitions</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;