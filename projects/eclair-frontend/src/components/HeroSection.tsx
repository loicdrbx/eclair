import { Zap, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eclair-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-eclair-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            Meet{" "}
            <span className="gradient-text">
              Éclair
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The revolutionary payment method that lets you pay only for what you consume.
            Can't commit to a subscription, no problem! Use precise, per-second billing.
          </p>
        </div>

        {/* Key features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-eclair text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <Zap className="w-12 h-12 mx-auto text-eclair-primary group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Billing</h3>
            <p className="text-muted-foreground">
              Pay per second of content consumed. Start and stop anytime.
            </p>
          </div>

          <div className="card-eclair text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <DollarSign className="w-12 h-12 mx-auto text-eclair-primary group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Spending</h3>
            <p className="text-muted-foreground">
              Set spending limits and budgets. No surprise charges ever.
            </p>
          </div>

          <div className="card-eclair text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <TrendingUp className="w-12 h-12 mx-auto text-eclair-primary group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Universal Access</h3>
            <p className="text-muted-foreground">
              One account for all your streaming and content platforms.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-eclair text-lg px-8 py-4">
            Try the Demo
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4 border-muted-foreground/30 hover:border-eclair-primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;