import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, Plus, Edit3 } from 'lucide-react';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface PunchScreenProps {
  onNavigate: NavigationHandler;
}

export function PunchScreen({ onNavigate }: PunchScreenProps) {
  const [isPunchedIn, setIsPunchedIn] = useState(true);
  const [lastPunchTime] = useState('7:02 AM');
  
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const punchHistory = [
    { id: 1, type: 'IN', time: '7:02 AM', date: 'Today', status: 'On Time' },
    { id: 2, type: 'OUT', time: '3:08 PM', date: 'Yesterday', status: 'On Time' },
    { id: 3, type: 'IN', time: '7:00 AM', date: 'Yesterday', status: 'On Time' },
    { id: 4, type: 'OUT', time: '3:12 PM', date: 'Dec 02', status: 'Late' },
    { id: 5, type: 'IN', time: '7:05 AM', date: 'Dec 02', status: 'Late' },
    { id: 6, type: 'OUT', time: '3:00 PM', date: 'Dec 01', status: 'On Time' },
    { id: 7, type: 'IN', time: '6:58 AM', date: 'Dec 01', status: 'Early' },
    { id: 8, type: 'OUT', time: '3:05 PM', date: 'Nov 30', status: 'On Time' },
    { id: 9, type: 'IN', time: '7:01 AM', date: 'Nov 30', status: 'On Time' },
    { id: 10, type: 'OUT', time: '3:15 PM', date: 'Nov 29', status: 'Late' },
  ];

  const handlePunch = () => {
    setIsPunchedIn(!isPunchedIn);
  };

  return (
    <div className="h-full bg-[#f7f9fa] overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2"
          onClick={() => onNavigate('dashboard')}
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-lg text-[#212121]">Time Punch</h1>
      </div>

      <div className="px-4 py-6">
        {/* Current Status */}
        <Card className="bg-white rounded-xl shadow-sm mb-6">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="text-3xl mb-2">{currentTime}</div>
              <div className="text-[#616161]">Current Time</div>
            </div>
            
            <div className="mb-6">
              <Badge 
                className={`px-4 py-2 text-lg ${
                  isPunchedIn 
                    ? 'bg-[#4caf50] text-white' 
                    : 'bg-[#f44336] text-white'
                }`}
              >
                {isPunchedIn ? 'PUNCHED IN' : 'PUNCHED OUT'}
              </Badge>
              {isPunchedIn && (
                <div className="text-sm text-[#616161] mt-2">
                  Since {lastPunchTime}
                </div>
              )}
            </div>

            <Button 
              onClick={handlePunch}
              className={`w-full h-16 text-lg rounded-xl ${
                isPunchedIn
                  ? 'bg-[#f44336] hover:bg-[#d32f2f] text-white'
                  : 'bg-[#4caf50] hover:bg-[#388e3c] text-white'
              }`}
            >
              <Clock size={24} className="mr-2" />
              {isPunchedIn ? 'PUNCH OUT' : 'PUNCH IN'}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button 
            variant="outline" 
            className="h-12 flex items-center gap-2 rounded-xl border-[#e0e0e0]"
          >
            <Plus size={16} />
            Add Punch
          </Button>
          <Button 
            variant="outline" 
            className="h-12 flex items-center gap-2 rounded-xl border-[#e0e0e0]"
          >
            <Edit3 size={16} />
            Edit Punch
          </Button>
        </div>

        {/* Punch History */}
        <Card className="bg-white rounded-xl shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <Clock size={16} />
              Recent Punches
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {punchHistory.map((punch) => (
                <div key={punch.id} className="flex items-center justify-between p-3 border border-[#e0e0e0] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge 
                      className={`px-2 py-1 text-xs ${
                        punch.type === 'IN' 
                          ? 'bg-[#4caf50] text-white' 
                          : 'bg-[#ff9800] text-white'
                      }`}
                    >
                      {punch.type}
                    </Badge>
                    <div>
                      <div className="text-sm text-[#212121]">{punch.time}</div>
                      <div className="text-xs text-[#616161]">{punch.date}</div>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      punch.status === 'On Time' 
                        ? 'border-[#4caf50] text-[#4caf50]' 
                        : punch.status === 'Late'
                        ? 'border-[#f44336] text-[#f44336]'
                        : 'border-[#ff9800] text-[#ff9800]'
                    }`}
                  >
                    {punch.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}