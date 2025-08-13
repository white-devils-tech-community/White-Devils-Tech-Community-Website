import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Star, User, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  college: string;
  rating: number;
  review_text: string;
  created_at: string;
  updated_at: string;
}

const Reviews = () => {
  const { toast } = useToast();
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    college: "",
    review: "",
    rating: 5
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch reviews from Supabase (excluding sensitive email data)
  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, name, college, rating, review_text, created_at, updated_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Load reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.review.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([{
          name: newReview.name,
          email: newReview.email || '',
          college: newReview.college || 'Student',
          rating: newReview.rating,
          review_text: newReview.review
        }])
        .select()
        .single();

      if (error) throw error;

      // Refresh reviews to get the new one from the secure view
      await fetchReviews();
      setNewReview({ name: "", email: "", college: "", review: "", rating: 5 });
      
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback. Your review is now live for everyone to see.",
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = reviews.length > 0 
    ? Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10
    : 4.8;

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our community members have to say about their experience with White Devils Tech Community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Reviews Display */}
          <div className="lg:col-span-2">
            {reviews.length === 0 ? (
              <Card className="border-primary/20 text-center">
                <CardContent className="p-8">
                  <p className="text-muted-foreground">
                    No reviews yet. Be the first to share your experience!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-foreground">{review.name}</h4>
                                <p className="text-sm text-muted-foreground">{review.college || "Student"}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <div className="relative">
                              <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" />
                              <p className="text-muted-foreground pl-4 leading-relaxed">{review.review_text}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3">{new Date(review.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>

          {/* Review Submission Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Share Your Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newReview.email}
                      onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="college">College/Institution (Optional)</Label>
                    <Input
                      id="college"
                      value={newReview.college}
                      onChange={(e) => setNewReview({ ...newReview, college: e.target.value })}
                      placeholder="Your college or institution"
                    />
                  </div>

                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 cursor-pointer transition-colors ${
                            i < newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-200'
                          }`}
                          onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="review">Your Review</Label>
                    <Textarea
                      id="review"
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      placeholder="Share your experience with White Devils..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
                  >
                    {isLoading ? "Submitting..." : "Submit Review"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your review will be visible to all visitors immediately after submission.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="border-primary/20 text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">{averageRating}</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">{reviews.length}</div>
                  <div className="text-sm text-muted-foreground">Total Reviews</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;