import { useState, useEffect } from "react";
import { Play, Pause, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PaymentMethods from "./PaymentMethods";
import PaymentVisualization from "./PaymentVisualization";

const PaymentDemo = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [amountSpent, setAmountSpent] = useState(0);
  const [showPaywall, setShowPaywall] = useState(true);

  const costPerSecond = 0.02; // $0.02 per second
  const spendingLimit = 5.00; // $5 spending limit

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && selectedPayment === "eclair") {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
        setAmountSpent(prev => {
          const newAmount = prev + costPerSecond;
          if (newAmount >= spendingLimit) {
            setIsPlaying(false);
            return spendingLimit;
          }
          return newAmount;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, selectedPayment]);

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method);
    if (method === "eclair") {
      setShowPaywall(false);
      setAmountSpent(0);
      setCurrentTime(0);
    }
  };

  const togglePlayback = () => {
    if (selectedPayment === "eclair") {
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Experience <span className="gradient-text">Éclair</span> in Action
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch this exclusive crypto trading strategy video. Choose your payment method and see the difference.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Video Section */}
        <div className="space-y-6">
          <Card className="card-eclair overflow-hidden">
            <div className="relative">
              {showPaywall ? (
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 backdrop-blur-glass" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-eclair-primary/20 rounded-full flex items-center justify-center">
                      <Play className="w-10 h-10 text-eclair-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">🔥 EXCLUSIVE: The Secret Crypto Strategy That Made Me $100K</h3>
                    <p className="text-muted-foreground mb-6">
                      This underground trading method is finally revealed. Choose your payment method to unlock this premium content.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                      <span>12:34 duration</span>
                      <span>•</span>
                      <span>Premium Content</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/xm3YgoEiEDc?si=M-06tcHbcbzQiDqB" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-lg"
                  />
                  {selectedPayment === "eclair" && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="backdrop-blur-glass rounded-lg p-4 flex items-center justify-between">
                        <Button
                          onClick={togglePlayback}
                          className={`${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'btn-eclair'} px-6`}
                        >
                          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                          {isPlaying ? 'Pause' : 'Play'}
                        </Button>
                        <div className="text-sm text-foreground">
                          <span className="font-mono">{formatTime(currentTime)}</span>
                          <span className="mx-2">•</span>
                          <span className="text-eclair-primary font-semibold">${amountSpent.toFixed(3)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>

          {/* Payment Visualization */}
          {selectedPayment === "eclair" && !showPaywall && (
            <PaymentVisualization
              isPlaying={isPlaying}
              amountSpent={amountSpent}
              costPerSecond={costPerSecond}
              spendingLimit={spendingLimit}
              currentTime={currentTime}
            />
          )}
        </div>

        {/* Payment Methods */}
        <div className="space-y-6">
          <PaymentMethods
            selectedPayment={selectedPayment}
            onPaymentSelect={handlePaymentSelect}
            showPaywall={showPaywall}
          />

          {selectedPayment && selectedPayment !== "eclair" && (
            <Card className="card-eclair">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Subscription Required</h3>
                <p className="text-muted-foreground mb-4">
                  To access this content with {selectedPayment}, you'll need to subscribe to our premium plan.
                </p>
                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <div className="text-2xl font-bold">$29.99/month</div>
                  <div className="text-sm text-muted-foreground">Unlimited access to all content</div>
                </div>
                <Button className="w-full btn-payment">
                  Subscribe Now
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentDemo;