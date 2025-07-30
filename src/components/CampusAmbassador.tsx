import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Users, 
  Award, 
  Network, 
  Target, 
  Shield, 
  Mail,
  GraduationCap,
  Star,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const CampusAmbassador = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const responsibilities = [
    "Promote White Devils events, hackathons, and initiatives",
    "Help onboard new members to the community via verified platforms",
    "Encourage participation in events without spamming",
    "Gather feedback from your campus and share with core team",
    "Maintain regular communication with admin/mod team"
  ];

  const benefits = [
    "Official Certificate of Recognition",
    "Priority access to events and internal programs",
    "Networking opportunities across India",
    "Co-organize tech sessions and hackathons",
    "Personalized shoutouts on social media",
    "Leadership experience for resume and career"
  ];

  const rules = [
    {
      title: "No unauthorized link sharing",
      description: "Never share third-party job links or unverified opportunities without admin approval"
    },
    {
      title: "No endorsements without approval", 
      description: "Cannot speak on behalf of White Devils regarding collaborations or partnerships"
    },
    {
      title: "No collection of data or money",
      description: "Never ask for user emails, payments, or phone numbers without written approval"
    },
    {
      title: "Maintain professional conduct",
      description: "Language and behavior must be respectful, inclusive, and neutral at all times"
    },
    {
      title: "Report suspicious behavior",
      description: "Immediately notify admin team of any scams, fake links, or misleading offers"
    }
  ];

  return (
    <section id="campus-ambassador" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Campus <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Ambassador</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Represent. Lead. Grow. Join our student leadership initiative and become the bridge between your campus and the larger tech ecosystem.
          </p>
        </div>

        {/* Main CA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full w-fit">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Campus Ambassador Program</CardTitle>
              <CardDescription className="text-lg">
                Lead your campus tech community and represent White Devils
              </CardDescription>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary">Leadership</Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary">Networking</Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary">Growth</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Campus Ambassadors act as official representatives of White Devils in their colleges, 
                promoting events, onboarding students, and fostering collaborative tech culture.
              </p>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                  >
                    View Details & Apply
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-primary">Campus Ambassador Program Details</DialogTitle>
                    <DialogDescription>
                      Complete guide and responsibilities for White Devils Campus Ambassadors
                    </DialogDescription>
                  </DialogHeader>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="responsibilities">Duties</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      <TabsTrigger value="rules">Rules</TabsTrigger>
                      <TabsTrigger value="apply">Apply</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-primary" />
                              What You'll Do
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Star className="h-5 w-5 text-primary" />
                              What You'll Get
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {benefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="responsibilities" className="space-y-4">
                      <div className="bg-card p-6 rounded-lg border border-primary/20">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Core Responsibilities</h3>
                        <div className="space-y-4">
                          {responsibilities.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                              <div className="p-1 bg-primary/20 rounded-full">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="benefits" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                          <Card key={index} className="border-primary/20">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                  <Star className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{benefit}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="rules" className="space-y-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                          <h3 className="font-semibold text-destructive">Strict Rules (Non-Negotiable)</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          These rules protect the integrity of White Devils and our community members.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        {rules.map((rule, index) => (
                          <Card key={index} className="border-destructive/20">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-destructive/20 rounded-lg">
                                  <Shield className="h-4 w-4 text-destructive" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-destructive mb-1">{rule.title}</h4>
                                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="apply" className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                        <p className="text-muted-foreground mb-6">
                          Fill out the application requirements and join our leadership team
                        </p>
                      </div>

                      <Card className="border-primary/20">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            Application Requirements
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-3 bg-background/50 rounded-lg">
                              <h4 className="font-semibold mb-1">Full Name</h4>
                              <p className="text-sm text-muted-foreground">To be written on certificates</p>
                            </div>
                            <div className="p-3 bg-background/50 rounded-lg">
                              <h4 className="font-semibold mb-1">College/Company</h4>
                              <p className="text-sm text-muted-foreground">Must be recognized institution</p>
                            </div>
                            <div className="p-3 bg-background/50 rounded-lg">
                              <h4 className="font-semibold mb-1">ID Verification</h4>
                              <p className="text-sm text-muted-foreground">College/Company ID required</p>
                            </div>
                            <div className="p-3 bg-background/50 rounded-lg">
                              <h4 className="font-semibold mb-1">Photo (Optional)</h4>
                              <p className="text-sm text-muted-foreground">Required for featured posts</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="text-center">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25"
                          onClick={() => window.open('https://wa.me/+919442722391', '_blank')}
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Apply Now
                        </Button>
                        <p className="text-sm text-muted-foreground mt-2">
                          Click to send application email to our team
                        </p>
                      </div>

                      <div className="bg-card p-4 rounded-lg border border-primary/20">
                        <p className="text-sm text-center text-muted-foreground">
                          <strong>Final Note:</strong> Being a Campus Ambassador is not just a badge — it's a responsibility. 
                          Every action reflects on the entire White Devils community.
                        </p>
                        <p className="text-sm text-center text-primary mt-2 font-medium">
                          Signed: Khailesh Kumar S A, White Devils Core Admin
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-8 max-w-xs mx-auto">
          <div className="text-center">
            <div className="p-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
            <p className="text-muted-foreground">Students Onboarded</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusAmbassador;