import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReturnItems = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "OTP Sent!",
      description: "Please check your email for the verification code.",
    });
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setIsVerified(true);
      toast({
        title: "Email Verified",
        description: "You can now view and request returns for your stored items.",
      });
    }
  };

  return (
    <section id="return-items" className="section-padding bg-muted/30">
      <div className="container-tight mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Return My Items
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Need your items back? Verify your email and select items for delivery.
            Items are typically delivered within 48 hours.
          </p>

          {!isVerified ? (
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <form onSubmit={otp ? handleVerifyOtp : handleSendOtp}>
                <div className="space-y-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="return-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="return-email"
                        type="email"
                        placeholder="Enter your registered email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!!otp}
                        required
                      />
                    </div>
                  </div>

                  {email && !otp && (
                    <Button type="submit" className="w-full">
                      Send OTP
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}

                  {otp !== undefined && email && (
                    <>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="otp">Enter 6-digit OTP</Label>
                        <Input
                          id="otp"
                          placeholder="000000"
                          maxLength={6}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                          className="text-center text-2xl tracking-widest"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={otp.length !== 6}>
                        Verify & Continue
                      </Button>
                    </>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border text-left">
              <h3 className="text-xl font-bold text-secondary mb-4">Your Stored Items</h3>
              <p className="text-muted-foreground mb-6">
                No items found. Once you store items with us, they'll appear here for easy return requests.
              </p>
              <Button variant="outline" asChild>
                <a href="#book-pickup">Book Your First Pickup</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReturnItems;
