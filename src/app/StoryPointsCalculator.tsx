import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, Target } from 'lucide-react';

const StoryPointsCalculator = () => {
  const [hours, setHours] = useState('');
  
  const calculateStoryPoints = (hours) => {
    if (!hours || isNaN(hours)) return '';
    const points = (parseFloat(hours) * 10) / 80;
    return points.toFixed(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-white to-blue-50">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Target className="w-8 h-8 text-blue-500" />
            <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Story Points Calculator
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Input Section */}
            <div className="space-y-3">
              <Label htmlFor="hours" className="text-lg font-medium flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Ore di Lavoro
              </Label>
              <Input
                id="hours"
                type="number"
                min="0"
                step="0.5"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="Inserisci le ore..."
                className="text-lg shadow-sm border-blue-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>

            {/* Result Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-700">Story Points:</h3>
                <div className="flex items-center justify-center">
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {calculateStoryPoints(hours) || '0.0'}
                  </p>
                  <Target className="w-6 h-6 text-blue-400 ml-2" />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-2">Referenze Sprint Standard:</h4>
              <div className="space-y-2 text-blue-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>80 ore = 10 story points</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 ore = 1 story point</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryPointsCalculator;
