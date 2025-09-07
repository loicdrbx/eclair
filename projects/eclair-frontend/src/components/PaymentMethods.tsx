import { useState } from "react";
import { CreditCard, Smartphone, Zap, Settings, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentMethodsProps {
  selectedPayment: string | null;
  onPaymentSelect: (method: string) => void;
  showPaywall: boolean;
}

const PaymentMethods = ({ selectedPayment, onPaymentSelect, showPaywall }: PaymentMethodsProps) => {
  const [showEclairSetup, setShowEclairSetup] = useState(false);
  const [spendingLimit, setSpendingLimit] = useState("5.00");

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: CreditCard,
      color: "text-payment-card",
      description: "Visa, Mastercard, Amex"
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: Smartphone,
      color: "text-payment-paypal",
      description: "Secure PayPal payment"
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: Smartphone,
      color: "text-payment-google",
      description: "Quick Google Pay"
    },
    {
      id: "eclair",
      name: "Éclair",
      icon: Zap,
      color: "text-eclair-primary",
      description: "Pay per second",
      isEclair: true
    }
  ];

  const handleEclairSelect = () => {
    if (!showEclairSetup) {
      setShowEclairSetup(true);
    } else {
      onPaymentSelect("eclair");
      setShowEclairSetup(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="card-eclair">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-eclair-primary" />
            Choose Payment Method
          </h3>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => method.isEclair ? handleEclairSelect() : onPaymentSelect(method.id)}
                className={`btn-payment w-full transition-all duration-200 ${
                  selectedPayment === method.id
                    ? 'border-eclair-primary shadow-payment'
                    : 'hover:border-muted-foreground'
                } ${method.isEclair ? 'bg-gradient-eclair/10 border-eclair-primary/30' : ''}`}
              >
                <method.icon className={`w-5 h-5 ${method.color}`} />
                <div className="flex-1 text-left">
                  <div className="font-semibold">{method.name}</div>
                  <div className="text-sm text-muted-foreground">{method.description}</div>
                </div>
                {method.isEclair && (
                  <div className="text-xs bg-eclair-primary/20 text-eclair-primary px-2 py-1 rounded">
                    NEW
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Éclair Setup Panel */}
          {showEclairSetup && (
            <div className="mt-6 p-4 border border-eclair-primary/30 rounded-lg bg-eclair-primary/5">
              <h4 className="font-semibold mb-4 text-eclair-primary flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Configure Éclair Payment
              </h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-eclair-primary" />
                    <span>Cost per second: <span className="font-semibold">$0.02</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-eclair-primary" />
                    <span>No commitment</span>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="spending-limit" className="text-sm font-medium">
                    Set Spending Limit
                  </Label>
                  <div className="mt-1 relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="spending-limit"
                      type="number"
                      step="0.01"
                      value={spendingLimit}
                      onChange={(e) => setSpendingLimit(e.target.value)}
                      className="pl-8 bg-background/50"
                      placeholder="5.00"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Payment will automatically stop when limit is reached
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => onPaymentSelect("eclair")}
                    className="btn-eclair flex-1"
                  >
                    Start Watching
                  </Button>
                  <Button
                    onClick={() => setShowEclairSetup(false)}
                    variant="outline"
                    className="px-4"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {selectedPayment === "eclair" && !showPaywall && !showEclairSetup && (
            <div className="mt-4 p-3 bg-eclair-primary/10 border border-eclair-primary/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-eclair-primary">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">Éclair Active</span>
                <span className="text-muted-foreground">• Spending limit: ${spendingLimit}</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PaymentMethods;