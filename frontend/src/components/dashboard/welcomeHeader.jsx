import { Hand } from "lucide-react";

export function WelcomeHeader({ userName = "there" }) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-lavender-400 mb-2">
        <span className="text-sm font-medium">
          Welcome to your personalized space
        </span>
      </div>

      <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-2 flex items-center gap-3">
        {getGreeting()}, {userName}!
        <Hand className="w-8 h-8 text-amber-500" />
      </h1>

      <p className="text-lg text-muted-foreground max-w-2xl">
        Aaharya is now tuned to your unique needs. Here's what we've prepared
        for you today — recipes and insights that understand your body, mood,
        and cravings.
      </p>
    </div>
  );
}
