import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Mindful Moments</h1>
        <p className="text-xl text-gray-600">
          Take a moment for your mental wellbeing
        </p>
      </div>

      <div className="max-w-md w-full space-y-4">
        <Button asChild className="w-full" size="lg">
          <Link to="/check-in">Daily Check-In</Link>
        </Button>
        <Button asChild className="w-full" size="lg" variant="secondary">
          <Link to="/meditations">Micro-Meditations</Link>
        </Button>
        <Button asChild className="w-full" size="lg" variant="outline">
          <Link to="/progress">Progress & Tips</Link>
        </Button>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;