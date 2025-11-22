import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "ADDED TO WAITLIST",
        description: "You'll be notified of our next drop.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold tracking-wide">JOIN THE WAITLIST</h3>
          <p className="text-muted-foreground">Be the first to know about new drops and exclusive releases.</p>
          
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card border-border tracking-wider text-sm"
              required
            />
            <Button type="submit" className="tracking-wider">
              JOIN
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
