import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential storage services",
    features: [
      "Standard pickup scheduling",
      "Basic inventory tracking",
      "Email support",
      "Standard security",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "₹1,799",
    period: "/month",
    description: "Premium storage experience",
    features: [
      "Priority pickup scheduling",
      "Photo inventory with app",
      "24/7 priority support",
      "Climate-controlled storage",
      "Insurance coverage included",
      "Unlimited item returns",
    ],
    popular: true,
  },
];

const Subscriptions = () => {
  return (
    <section id="subscriptions" className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Service Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect plan for your storage needs. Upgrade anytime as your requirements grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-medium ${
                plan.popular
                  ? "border-2 border-primary shadow-glow"
                  : "border border-border shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-secondary">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#book-pickup">
                  {plan.popular ? "Get Elite" : "Get Started"}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
