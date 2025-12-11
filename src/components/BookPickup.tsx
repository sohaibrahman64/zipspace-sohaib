import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, User, Phone, Mail, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const storagePlans = [
  { id: "economy", name: "Economy", price: "₹1,499/mo" },
  { id: "walk-in", name: "Walk-In Closet", price: "₹2,499/mo" },
  { id: "store-room", name: "Store Room", price: "₹4,999/mo" },
  { id: "premium", name: "Premium", price: "₹12,999/mo" },
];

const servicePlans = [
  { id: "basic", name: "Basic", price: "Free" },
  { id: "elite", name: "Elite", price: "₹1,799/mo" },
];

const BookPickup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    storagePlan: "",
    servicePlan: "",
    pickupDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pickup Request Submitted!",
      description: "We'll contact you shortly to confirm your pickup. Check your email for details.",
    });
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setFormData((prev) => ({
            ...prev,
            address: "Location detected - We'll confirm the exact address",
          }));
          toast({
            title: "Location Detected",
            description: "We'll confirm your exact address during the call.",
          });
        },
        () => {
          toast({
            title: "Location Access Denied",
            description: "Please enter your address manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <section id="book-pickup" className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Pickup
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in your details and we'll pick up your items at your convenience.
              <span className="block mt-2 text-primary font-semibold">
                15% off + Free pickup for first-time customers!
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-10 shadow-soft border border-border">
            {/* Personal Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Pickup Address
              </h3>
              <div className="space-y-3">
                <Input
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
                <Button type="button" variant="outline" size="sm" onClick={handleUseLocation}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Use Current Location
                </Button>
              </div>
            </div>

            {/* Storage Plan Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Select Storage Plan
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {storagePlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, storagePlan: plan.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.storagePlan === plan.id
                        ? "border-primary bg-accent"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold text-secondary text-sm">{plan.name}</p>
                    <p className="text-primary text-sm font-medium">{plan.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Plan Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4">Select Service Plan</h3>
              <div className="grid grid-cols-2 gap-3">
                {servicePlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, servicePlan: plan.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.servicePlan === plan.id
                        ? "border-primary bg-accent"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold text-secondary">{plan.name}</p>
                    <p className="text-primary font-medium">{plan.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Date */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Preferred Pickup Date
              </h3>
              <Input
                type="date"
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Book Pickup Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookPickup;
