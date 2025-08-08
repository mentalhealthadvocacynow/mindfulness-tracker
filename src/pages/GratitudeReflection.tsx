import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const quotes = [
  "Gratitude turns what we have into enough",
  "The more grateful I am, the more beauty I see",
  "Gratitude is the healthiest of all human emotions",
  "Appreciate the little things, for one day you may look back and realize they were the big things",
  "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow"
];

export default function GratitudeReflection() {
  const [entries, setEntries] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'week' | 'month'>('all');

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('gratitudeEntries') || '[]');
    setEntries(savedEntries);
  }, []);

  const filteredEntries = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const now = new Date();
    
    if (filter === 'week') {
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return entryDate >= oneWeekAgo;
    } else if (filter === 'month') {
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      return entryDate >= oneMonthAgo;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 p-4">
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Gratitude Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-2 mb-4">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'week' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('week')}
            >
              This Week
            </Button>
            <Button 
              variant={filter === 'month' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('month')}
            >
              This Month
            </Button>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry, index) => (
                <Card key={index} className="p-4">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(entry.date).toLocaleDateString()}
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {entry.entries.map((item: string, i: number) => (
                      item && <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500">No entries found</p>
            )}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-center font-medium">Daily Gratitude Quote</p>
            <p className="text-center italic mt-2">
              "{quotes[Math.floor(Math.random() * quotes.length)]}"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}