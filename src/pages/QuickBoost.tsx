import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const activities = [
  {
    title: "Deep Breathing",
    description: "Take 5 deep breaths - inhale for 4 seconds, hold for 4, exhale for 6",
    duration: "30 seconds",
    type: "breathing"
  },
  {
    title: "Positive Visualization",
    description: "Close your eyes and imagine your happiest memory",
    duration: "30 seconds",
    type: "visualization"
  },
  {
    title: "Quick Stretch",
    description: "Stand up and reach for the sky, then touch your toes",
    duration: "30 seconds",
    type: "physical"
  },
  {
    title: "Gratitude Moment",
    description: "Think of one thing you're grateful for right now",
    duration: "30 seconds",
    type: "reflection"
  }
];

export default function QuickBoost() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    // Rotate activities daily
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    setCurrentActivity(dayOfYear % activities.length);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const startActivity = () => {
    setIsActive(true);
    setTimeLeft(30);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-4">
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Quick Boost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium">{activities[currentActivity].title}</h3>
            <p className="text-gray-600 mt-2">{activities[currentActivity].description}</p>
            <p className="text-sm text-gray-500 mt-1">{activities[currentActivity].duration}</p>
          </div>

          {isActive ? (
            <div className="text-center">
              <div className="w-40 h-40 mx-auto my-6 rounded-full border-4 border-purple-300 flex items-center justify-center">
                <span className="text-3xl font-bold">{timeLeft}</span>
              </div>
              <Button variant="outline" onClick={() => setIsActive(false)}>
                Stop Activity
              </Button>
            </div>
          ) : (
            <Button className="w-full" onClick={startActivity}>
              Start {activities[currentActivity].title}
            </Button>
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Tomorrow's activity: {activities[(currentActivity + 1) % activities.length].title}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}