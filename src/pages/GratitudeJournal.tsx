import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { showSuccess } from '@/utils/toast';

export default function GratitudeJournal() {
  const [entries, setEntries] = useState<string[]>(['', '', '']);
  const [isRecording, setIsRecording] = useState(false);

  const handleEntryChange = (index: number, value: string) => {
    const newEntries = [...entries];
    newEntries[index] = value;
    setEntries(newEntries);
  };

  const handleSave = () => {
    const hasEntries = entries.some(entry => entry.trim() !== '');
    if (hasEntries) {
      const date = new Date().toISOString();
      const savedEntries = JSON.parse(localStorage.getItem('gratitudeEntries') || '[]');
      savedEntries.push({ date, entries });
      localStorage.setItem('gratitudeEntries', JSON.stringify(savedEntries));
      showSuccess('Journal saved successfully!');
      setEntries(['', '', '']);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-4">
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Gratitude Journal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-center text-lg mb-4">What are you grateful for today?</p>
            
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="space-y-2">
                <label className="text-sm font-medium">Gratitude #{index + 1}</label>
                <Textarea
                  value={entries[index]}
                  onChange={(e) => handleEntryChange(index, e.target.value)}
                  placeholder={`I'm grateful for...`}
                  className="min-h-[80px]"
                />
              </div>
            ))}

            <div className="flex justify-center mt-2">
              <Button 
                variant={isRecording ? 'destructive' : 'outline'} 
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? 'Stop Recording' : 'Record Voice Note'}
              </Button>
            </div>

            <Button 
              className="w-full mt-6" 
              onClick={handleSave}
              disabled={!entries.some(entry => entry.trim() !== '')}
            >
              Save Journal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}