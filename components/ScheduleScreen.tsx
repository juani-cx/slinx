import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Calendar, Clock, MapPin, Plus } from 'lucide-react';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface ScheduleScreenProps {
  onNavigate: NavigationHandler;
}

export function ScheduleScreen({ onNavigate }: ScheduleScreenProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekSchedule = [
    { day: 'Monday', date: '4', shift: '7:00 AM - 3:00 PM', department: 'Dietary Services', status: 'scheduled' },
    { day: 'Tuesday', date: '5', shift: '7:00 AM - 3:00 PM', department: 'Dietary Services', status: 'scheduled' },
    { day: 'Wednesday', date: '6', shift: 'OFF', department: '', status: 'off' },
    { day: 'Thursday', date: '7', shift: '7:00 AM - 3:00 PM', department: 'Dietary Services', status: 'scheduled' },
    { day: 'Friday', date: '8', shift: '7:00 AM - 3:00 PM', department: 'Dietary Services', status: 'scheduled' },
    { day: 'Saturday', date: '9', shift: '8:00 AM - 4:00 PM', department: 'Activities', status: 'scheduled' },
    { day: 'Sunday', date: '10', shift: 'OFF', department: '', status: 'off' },
  ];

  const openShifts = [
    { id: 1, department: 'Nursing', shift: '3:00 PM - 11:00 PM', date: 'Dec 6', pay: '$18/hr', urgent: true },
    { id: 2, department: 'Housekeeping', shift: '6:00 AM - 2:00 PM', date: 'Dec 7', pay: '$16/hr', urgent: false },
    { id: 3, department: 'Activities', shift: '9:00 AM - 5:00 PM', date: 'Dec 8', pay: '$17/hr', urgent: false },
    { id: 4, department: 'Dietary', shift: '11:00 PM - 7:00 AM', date: 'Dec 9', pay: '$19/hr', urgent: true },
  ];

  const timeOffBlocks = [
    { start: '2023-12-15', end: '2023-12-16', type: 'Vacation', status: 'Approved' },
    { start: '2023-12-22', end: '2023-12-25', type: 'Holiday', status: 'Pending' },
  ];

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
        <h1 className="text-lg text-[#212121]">Schedule</h1>
      </div>

      <div className="px-4 py-4">
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="daily">Daily View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="space-y-4">
            {/* Week Navigation */}
            <Card className="bg-white rounded-xl shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#212121]">Week of December 4 - 10, 2023</h3>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <Calendar size={16} />
                  </Button>
                </div>
                
                {/* Weekly Schedule Table */}
                <div className="space-y-3">
                  {weekSchedule.map((day, index) => (
                    <div key={index} className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                      day.status === 'scheduled' 
                        ? 'bg-[#e3f2fd] border border-[#1976d2]/20' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <div className="text-center min-w-[80px]">
                        <div className={`text-sm ${
                          day.status === 'scheduled' ? 'text-[#1976d2]' : 'text-[#616161]'
                        }`}>
                          {day.day}
                        </div>
                        <div className={`text-xs ${
                          day.status === 'scheduled' ? 'text-[#1976d2]' : 'text-[#616161]'
                        }`}>
                          Dec {day.date}
                        </div>
                      </div>
                      <div className="flex-1">
                        {day.status === 'scheduled' ? (
                          <div>
                            <div className="text-sm text-[#212121] mb-1">
                              {day.shift}
                            </div>
                            <div className="text-xs text-[#616161] flex items-center gap-1">
                              <MapPin size={12} />
                              {day.department}
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm text-[#616161]">Day Off</div>
                        )}
                      </div>
                      <div className="min-w-[60px] text-right">
                        {day.status === 'scheduled' ? (
                          <Badge className="bg-[#4caf50] text-white text-xs">
                            Scheduled
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs border-gray-300 text-[#616161]">
                            Off
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Summary */}
            <Card className="bg-white rounded-xl shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#212121] flex items-center gap-2">
                  <Clock size={16} />
                  Weekly Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-4 p-4 bg-[#f7f9fa] rounded-lg">
                  <div className="text-center">
                    <div className="text-lg text-[#212121]">5</div>
                    <div className="text-xs text-[#616161]">Days Scheduled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg text-[#212121]">39</div>
                    <div className="text-xs text-[#616161]">Total Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg text-[#212121]">2</div>
                    <div className="text-xs text-[#616161]">Days Off</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4">
            {/* Date Selector */}
            <Card className="bg-white rounded-xl shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#212121]">Monday, December 4, 2023</h3>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <Calendar size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Daily Schedule */}
            <Card className="bg-white rounded-xl shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#212121]">Daily Schedule</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-[#e3f2fd] rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-[#1976d2]">7:00</div>
                      <div className="text-xs text-[#616161]">AM</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#212121]">Shift Start - Dietary Services</div>
                      <div className="text-xs text-[#616161]">Main Kitchen, Activities Assistant</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 border border-[#e0e0e0] rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-[#616161]">10:00</div>
                      <div className="text-xs text-[#616161]">AM</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#212121]">Break (15 minutes)</div>
                      <div className="text-xs text-[#616161]">Staff Lounge</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 border border-[#e0e0e0] rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-[#616161]">12:00</div>
                      <div className="text-xs text-[#616161]">PM</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#212121]">Lunch Break (30 minutes)</div>
                      <div className="text-xs text-[#616161]">Cafeteria</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-[#fff3e0] rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-[#ff9800]">3:00</div>
                      <div className="text-xs text-[#616161]">PM</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#212121]">Shift End</div>
                      <div className="text-xs text-[#616161]">Don't forget to punch out</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Open Shifts */}
        <Card className="bg-white rounded-xl shadow-sm mt-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <Plus size={16} />
              Available Open Shifts
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {openShifts.map((shift) => (
                <div key={shift.id} className="p-3 border border-[#e0e0e0] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm text-[#212121]">{shift.department}</h4>
                      {shift.urgent && (
                        <Badge className="bg-[#f44336] text-white text-xs">Urgent</Badge>
                      )}
                    </div>
                    <div className="text-sm text-[#4caf50]">{shift.pay}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[#616161]">
                      {shift.date} • {shift.shift}
                    </div>
                    <Button size="sm" className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-lg">
                      Pick Up
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Off Blocks */}
        <Card className="bg-white rounded-xl shadow-sm mt-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121]">Upcoming Time Off</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {timeOffBlocks.map((timeOff, index) => (
                <div key={index} className="p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#212121]">{timeOff.type}</div>
                      <div className="text-xs text-[#616161]">
                        {timeOff.start} to {timeOff.end}
                      </div>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        timeOff.status === 'Approved' 
                          ? 'bg-[#4caf50] text-white' 
                          : 'bg-[#ff9800] text-white'
                      }`}
                    >
                      {timeOff.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}