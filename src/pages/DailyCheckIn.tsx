import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😌', label: 'Calm' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😟', label: 'Anxious' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😢', label: 'Sad' },
];

const affirmations = [
  "You are enough",
  "This too shall pass",
  "You are doing your best",
  "Be kind to yourself today",
  "Your feelings are valid",
  "Progress, not perfection"
];

export default function DailyCheckIn() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalText, setJournalText] = useState('');
  const todaysAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Daily Check-In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 text-center">
            <p className="text-lg font-medium mb-2">How are you feeling today?</p>
            <div className="flex justify-center space-x-2 mb-4">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`text-3xl p-2 rounded-full ${selectedMood === mood.label ? 'bg-blue-100' : ''}`}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>
            {selectedMood && <p className="text-sm">You selected: {selectedMood}</p>}
          </div>

          <div className="mb-6">
            <p className="text-lg font-medium mb-2">What's on your mind?</p>
            <Textarea 
              placeholder="Optional journal entry..."
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="font-medium">Today's Affirmation:</p>
            <p className="text-lg italic">"{todaysAffirmation}"</p>
          </div>

          <Button className="w-full mt-6">Save Check-In</Button>
        </CardContent>
      </Card>
    </div>
  );
}