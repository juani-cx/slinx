import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ArrowLeft, Calendar, Send, Clock } from 'lucide-react';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface TimeOffScreenProps {
  onNavigate: NavigationHandler;
}

export function TimeOffScreen({ onNavigate }: TimeOffScreenProps) {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    requestType: '',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeOffRequests = [
    {
      id: 1,
      type: 'Vacation',
      startDate: '2023-12-15',
      endDate: '2023-12-16',
      status: 'Approved',
      submittedDate: '2023-11-28',
      reason: 'Holiday weekend with family'
    },
    {
      id: 2,
      type: 'Personal',
      startDate: '2023-12-22',
      endDate: '2023-12-25',
      status: 'Pending',
      submittedDate: '2023-12-01',
      reason: 'Christmas holiday'
    },
    {
      id: 3,
      type: 'Sick Leave',
      startDate: '2023-11-20',
      endDate: '2023-11-20',
      status: 'Approved',
      submittedDate: '2023-11-20',
      reason: 'Doctor appointment'
    }
  ];

  const availableBalances = {
    vacation: 120, // hours
    sick: 80,
    personal: 40
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Time off request submitted successfully!');
      setFormData({
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        requestType: '',
        reason: ''
      });
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-[#4caf50] text-white';
      case 'Pending':
        return 'bg-[#ff9800] text-white';
      case 'Denied':
        return 'bg-[#f44336] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
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
        <h1 className="text-lg text-[#212121]">Request Time Off</h1>
      </div>

      <div className="px-4 py-4">
        {/* Available Balances */}
        <Card className="bg-white rounded-xl shadow-sm mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <Clock size={16} />
              Available Balances
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-[#e3f2fd] rounded-lg">
                <div className="text-lg text-[#1976d2] mb-1">{availableBalances.vacation}h</div>
                <div className="text-xs text-[#616161]">Vacation</div>
              </div>
              <div className="text-center p-3 bg-[#f3e5f5] rounded-lg">
                <div className="text-lg text-[#9c27b0] mb-1">{availableBalances.sick}h</div>
                <div className="text-xs text-[#616161]">Sick Leave</div>
              </div>
              <div className="text-center p-3 bg-[#e8f5e8] rounded-lg">
                <div className="text-lg text-[#4caf50] mb-1">{availableBalances.personal}h</div>
                <div className="text-xs text-[#616161]">Personal</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Request Form */}
        <Card className="bg-white rounded-xl shadow-sm mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <Calendar size={16} />
              New Time Off Request
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Request Type */}
              <div className="space-y-2">
                <Label htmlFor="request-type" className="text-sm text-[#212121]">
                  Request Type
                </Label>
                <Select value={formData.requestType} onValueChange={(value) => handleInputChange('requestType', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select request type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vacation">Vacation</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Time</SelectItem>
                    <SelectItem value="bereavement">Bereavement</SelectItem>
                    <SelectItem value="jury">Jury Duty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-sm text-[#212121]">
                    Start Date
                  </Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date" className="text-sm text-[#212121]">
                    End Date
                  </Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              {/* Time Range (Optional) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time" className="text-sm text-[#212121]">
                    Start Time (Optional)
                  </Label>
                  <Input
                    id="start-time"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time" className="text-sm text-[#212121]">
                    End Time (Optional)
                  </Label>
                  <Input
                    id="end-time"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <Label htmlFor="reason" className="text-sm text-[#212121]">
                  Reason (Optional)
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Please provide a brief reason for your time off request..."
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  className="w-full min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.startDate || !formData.endDate || !formData.requestType}
                className="w-full bg-[#1976d2] hover:bg-[#1565c0] text-white h-12 rounded-xl flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Request History */}
        <Card className="bg-white rounded-xl shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121]">Recent Requests</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {timeOffRequests.map((request) => (
                <div key={request.id} className="p-4 border border-[#e0e0e0] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm text-[#212121]">{request.type}</h4>
                      <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-[#616161]">
                      Submitted: {new Date(request.submittedDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="text-sm text-[#616161] mb-2">
                    {request.startDate === request.endDate 
                      ? new Date(request.startDate).toLocaleDateString()
                      : `${new Date(request.startDate).toLocaleDateString()} - ${new Date(request.endDate).toLocaleDateString()}`
                    }
                  </div>
                  
                  {request.reason && (
                    <div className="text-sm text-[#616161] p-2 bg-[#f5f5f5] rounded">
                      {request.reason}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}