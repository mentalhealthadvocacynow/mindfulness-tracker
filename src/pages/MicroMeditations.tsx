import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const exercises = [
  {
    title: "Calm Breathing",
    duration: "1 min",
    description: "Follow the circle to regulate your breathing",
    theme: "calm"
  },
  {
    title: "Focus Boost",
    duration: "2 min",
    description: "Quick reset for your mind",
    theme: "focus"
  },
  {
    title: "Sleep Prep",
    duration: "3 min",
    description: "Wind down before bed",
    theme: "sleep"
  }
];

export default function MicroMeditations() {
  const [activeExercise, setActiveExercise] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const startExercise = (duration: number, index: number) => {
    setActiveExercise(index);
    setTimeLeft(duration * 60);
    // In a real app, we'd start a timer here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-4">
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Micro-Meditations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercises.map((exercise, index) => (
              <div key={exercise.title} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{exercise.title}</h3>
                  <span className="text-sm text-gray-500">{exercise.duration}</span>
                </div>
                <p className="text-sm mb-3">{exercise.description}</p>
                
                {activeExercise === index ? (
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto my-4 rounded-full border-4 border-blue-300 animate-pulse flex items-center justify-center">
                      <span className="text-xl">Breathe</span>
                    </div>
                    <p className="mb-4">{timeLeft} seconds remaining</p>
                    <Button variant="outline" onClick={() => setActiveExercise(null)}>
                      Stop
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => startExercise(parseInt(exercise.duration), index)}
                    className="w-full"
                  >
                    Start {exercise.title}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}