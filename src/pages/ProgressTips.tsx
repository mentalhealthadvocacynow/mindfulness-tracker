import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const tips = [
  "Take 5 minutes to stretch today",
  "Drink a glass of water when you wake up",
  "Write down 3 things you're grateful for",
  "Call a friend or family member",
  "Go for a short walk outside",
  "Practice deep breathing for 1 minute"
];

export default function ProgressTips() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Mood Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Mood chart will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{tips[Math.floor(Math.random() * tips.length)]}</p>
            <div className="space-y-2">
              <p className="font-medium">Resources:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><a href="https://www.crisistextline.org/" className="text-blue-600 hover:underline">Crisis Text Line</a></li>
                <li><a href="https://suicidepreventionlifeline.org/" className="text-blue-600 hover:underline">Suicide Prevention Lifeline</a></li>
                <li><a href="https://www.nami.org/" className="text-blue-600 hover:underline">NAMI Helpline</a></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}