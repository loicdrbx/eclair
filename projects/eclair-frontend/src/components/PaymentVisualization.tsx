import { TrendingUp, DollarSign, Clock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PaymentVisualizationProps {
  isPlaying: boolean;
  amountSpent: number;
  costPerSecond: number;
  spendingLimit: number;
  currentTime: number;
}

const PaymentVisualization = ({
  isPlaying,
  amountSpent,
  costPerSecond,
  spendingLimit,
  currentTime
}: PaymentVisualizationProps) => {
  const progressPercentage = (amountSpent / spendingLimit) * 100;
  const timeRemaining = Math.max(0, (spendingLimit - amountSpent) / costPerSecond);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="payment-visualization">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Zap className={`w-5 h-5 ${isPlaying ? 'text-eclair-primary animate-pulse' : 'text-muted-foreground'}`} />
          Live Payment Stream
        </h3>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isPlaying ? 'bg-eclair-primary/20 text-eclair-primary' : 'bg-muted/30 text-muted-foreground'
        }`}>
          {isPlaying ? 'STREAMING' : 'PAUSED'}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Spending Progress</span>
          <span className="text-eclair-primary font-semibold">
            ${amountSpent.toFixed(3)} / ${spendingLimit.toFixed(2)}
          </span>
        </div>
        <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-eclair transition-all duration-1000 ease-out relative"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          >
            {isPlaying && (
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-background/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-eclair-primary" />
            <span className="text-sm text-muted-foreground">Cost/Second</span>
          </div>
          <div className="text-xl font-bold text-eclair-primary">
            ${costPerSecond.toFixed(3)}
          </div>
        </div>

        <div className="bg-background/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-eclair-primary" />
            <span className="text-sm text-muted-foreground">Watch Time</span>
          </div>
          <div className="text-xl font-bold">
            {formatTime(currentTime)}
          </div>
        </div>

        <div className="bg-background/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-eclair-primary" />
            <span className="text-sm text-muted-foreground">Total Spent</span>
          </div>
          <div className="text-xl font-bold text-eclair-primary">
            ${amountSpent.toFixed(3)}
          </div>
        </div>

        <div className="bg-background/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Time Left</span>
          </div>
          <div className="text-xl font-bold">
            {amountSpent >= spendingLimit ? '0:00' : formatTime(timeRemaining)}
          </div>
        </div>
      </div>

      {/* Real-time indicators */}
      {isPlaying && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-eclair-primary">
          <div className="w-2 h-2 bg-eclair-primary rounded-full animate-pulse" />
          <span>Streaming payment in real-time</span>
          <div className="w-2 h-2 bg-eclair-primary rounded-full animate-pulse delay-500" />
        </div>
      )}

      {amountSpent >= spendingLimit && (
        <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-center">
          <p className="text-sm text-yellow-500 font-semibold">
            Spending limit reached! Payment stream stopped.
          </p>
        </div>
      )}
    </Card>
  );
};

export default PaymentVisualization;