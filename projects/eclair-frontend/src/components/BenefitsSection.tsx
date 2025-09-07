import { Users, Building2, Zap, Shield, TrendingUp, CreditCard, DollarSign, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const BenefitsSection = () => {
  const providerBenefits = [
    {
      icon: TrendingUp,
      title: "Lower Customer Acquisition Barriers",
      description: "Eliminate subscription hesitation with micro-payments that let users try before committing."
    },
    {
      icon: Shield,
      title: "Reduced Payment Friction",
      description: "No chargebacks, expired cards, or failed payments. Streamlined revenue flow."
    },
    {
      icon: Zap,
      title: "Dynamic Pricing",
      description: "Adjust pricing based on demand, content quality, and market conditions in real-time."
    },
    {
      icon: DollarSign,
      title: "Predictable Revenue",
      description: "Usage-based billing creates more predictable revenue streams aligned with value delivered."
    }
  ];

  const userBenefits = [
    {
      icon: CreditCard,
      title: "Optimized Spending",
      description: "Only pay for content you actually consume. Set budgets and spending limits."
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "One Éclair account works across all supported platforms. No multiple subscriptions."
    },
    {
      icon: Shield,
      title: "Reduced Barriers",
      description: "Try new content and services without long-term commitments or large upfront costs."
    },
    {
      icon: TrendingUp,
      title: "Transparent Billing",
      description: "See exactly what you're paying for in real-time. No hidden fees or surprise charges."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Benefits for <span className="gradient-text">Everyone</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Éclair creates value for both content providers and consumers through revolutionary per-consumption billing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Content Providers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-eclair-primary/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-eclair-primary" />
            </div>
            <h3 className="text-2xl font-bold">For Content Providers</h3>
          </div>

          <div className="space-y-6">
            {providerBenefits.map((benefit, index) => (
              <Card key={index} className="card-eclair group hover:scale-[1.02] transition-transform duration-300">
                <div className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-eclair-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-eclair-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-eclair-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Users */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-eclair-primary/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-eclair-primary" />
            </div>
            <h3 className="text-2xl font-bold">For Users</h3>
          </div>

          <div className="space-y-6">
            {userBenefits.map((benefit, index) => (
              <Card key={index} className="card-eclair group hover:scale-[1.02] transition-transform duration-300">
                <div className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-eclair-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-eclair-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-eclair-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Highlights */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Technical Innovation</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge Algorand blockchain infrastructure for seamless, secure, and scalable micro-transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-eclair text-center p-6 group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-eclair-primary/10 rounded-xl flex items-center justify-center group-hover:pulse-glow transition-all">
              <Zap className="w-8 h-8 text-eclair-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Real-time Streaming</h4>
            <p className="text-muted-foreground text-sm">
              Microsecond-precision billing with real-time payment streams.
            </p>
          </Card>

          <Card className="card-eclair text-center p-6 group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-eclair-primary/10 rounded-xl flex items-center justify-center group-hover:pulse-glow transition-all">
              <Shield className="w-8 h-8 text-eclair-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Enterprise Security</h4>
            <p className="text-muted-foreground text-sm">
              Bank-grade encryption and PCI DSS compliance for all transactions.
            </p>
          </Card>

          <Card className="card-eclair text-center p-6 group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-eclair-primary/10 rounded-xl flex items-center justify-center group-hover:pulse-glow transition-all">
              <Globe className="w-8 h-8 text-eclair-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Global Scale</h4>
            <p className="text-muted-foreground text-sm">
              Multi-currency support with instant settlement worldwide.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;