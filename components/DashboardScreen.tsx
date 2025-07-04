import React, { useState } from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Clock, QrCode, Calendar, DollarSign, Bell, ChevronDown, MapPin, Loader2 } from 'lucide-react';
import { useFacility } from './FacilityContext';
import svgPaths from '../imports/svg-ipry7klt17';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface DashboardScreenProps {
  onNavigate: NavigationHandler;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const { facilities, currentFacility, selectedFacilityId, switchFacility, isLoading } = useFacility();
  const [isAnimating, setIsAnimating] = useState<string | null>(null);

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleCardClick = (cardId: string, action: () => void) => {
    setIsAnimating(cardId);
    setTimeout(() => {
      setIsAnimating(null);
      action();
    }, 150);
  };

  const handleFacilityChange = async (facilityId: string) => {
    await switchFacility(facilityId);
  };

  return (
    <div className="h-full bg-[#f7f9fa] overflow-y-auto">
      {/* Left-Aligned Header */}
      <div className="bg-[#1976d2] text-white px-8 pt-6 pb-4">
        <div className="text-left">
          <div className="text-[24.45px] leading-[31.5px] mb-1">{currentTime}</div>
          <div className="text-blue-100 text-[11.34px] leading-[17.5px]">{currentDate}</div>
          <div className="text-blue-100 text-[11.34px] leading-[17.5px]">
            Shift scheduled today at {currentFacility.name}
          </div>
        </div>
      </div>

      <div className="px-[21px] py-3.5">
        {/* Enhanced Facility Switcher without overlapping label */}
        <div className="mb-3.5">
          <div className={`relative rounded border transition-all duration-200 ${
            isLoading ? 'border-[#1976d2] bg-blue-50' : 'border-[rgba(33,33,33,0.05)] hover:border-[#1976d2] hover:shadow-md'
          }`}>
            <Select 
              value={selectedFacilityId} 
              onValueChange={handleFacilityChange}
              disabled={isLoading}
            >
              <SelectTrigger className="border-0 px-3 py-4 h-auto focus:ring-0">
                <div className="flex items-center gap-3 w-full">
                  {isLoading && (
                    <Loader2 size={16} className="animate-spin text-[#1976d2]" />
                  )}
                  <div className="flex items-center gap-2 flex-1 text-left">
                    <div className={`w-2 h-2 rounded-full ${
                      currentFacility.status === 'active' ? 'bg-[#4caf50]' : 'bg-[#f44336]'
                    }`}></div>
                    <div>
                      <div className="text-[#212121] text-[16px] leading-[24px] tracking-[0.15px]">
                        {currentFacility.name}
                      </div>
                      <div className="text-[#616161] text-[12px] leading-[16px] flex items-center gap-1">
                        <MapPin size={10} />
                        {currentFacility.department} • {currentFacility.address}
                      </div>
                    </div>
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent>
                {facilities.map((facility) => (
                  <SelectItem key={facility.id} value={facility.id} disabled={facility.status === 'inactive'}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        facility.status === 'active' ? 'bg-[#4caf50]' : 'bg-[#f44336]'
                      }`}></div>
                      <div>
                        <div className={`text-[14px] leading-[20px] ${
                          facility.status === 'inactive' ? 'text-gray-400' : ''
                        }`}>
                          {facility.name}
                        </div>
                        <div className={`text-[12px] ${
                          facility.status === 'inactive' ? 'text-gray-400' : 'text-[#616161]'
                        }`}>
                          {facility.department} {facility.status === 'inactive' ? '(Inactive)' : ''}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Facility Info Card */}
          {currentFacility && (
            <div className="mt-2 p-2 bg-white rounded-lg border border-gray-100">
              <div className="flex justify-between text-xs text-[#616161]">
                <span>Manager: {currentFacility.manager}</span>
                <span>{currentFacility.phone}</span>
              </div>
            </div>
          )}
        </div>

        {/* Animated Action Cards */}
        <div className="grid grid-cols-2 gap-[11px] mb-3.5">
          <Button 
            onClick={() => handleCardClick('punch-in-out', () => onNavigate('punch'))}
            className={`bg-[#1976d2] hover:bg-[#1565c0] text-white h-[93px] flex-col items-start justify-center gap-1.5 rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] p-4 transition-all duration-150 transform ${
              isAnimating === 'punch-in-out' ? 'scale-95 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.1)]' : 'hover:scale-[1.02] hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)]'
            }`}
          >
            <div className="size-3.5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d="M7 3.5V7L9.33333 8.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.pc012c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
            <span className="text-[15px] leading-[20px] font-medium">Punch In/Out</span>
          </Button>
          
          <Button 
            onClick={() => handleCardClick('qr-punch', () => onNavigate('punch'))}
            className={`bg-white hover:bg-gray-50 text-[#1976d2] border border-[#e0e0e0] h-[93px] flex-col items-start justify-center gap-1.5 rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] p-4 transition-all duration-150 transform ${
              isAnimating === 'qr-punch' ? 'scale-95 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.1)]' : 'hover:scale-[1.02] hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)]'
            }`}
          >
            <div className="size-3.5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p39a18f70} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p1944e800} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p38e50e00} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p28ce3890} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M12.25 12.25V12.2558" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p192e6000} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M1.75 7H1.75583" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M7 1.75H7.00583" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M7 9.33333V9.33917" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M9.33333 7H9.91667" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M12.25 7V7.00583" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M7 12.25V11.6667" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
            <span className="text-[15px] leading-[20px] font-medium">QR Punch</span>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-[11px] mb-3.5">
          <Button 
            onClick={() => handleCardClick('time-off', () => onNavigate('timeoff'))}
            className={`bg-white hover:bg-gray-50 text-[#1976d2] border border-[#e0e0e0] h-[93px] flex-col items-start justify-center gap-1.5 rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] p-4 transition-all duration-150 transform ${
              isAnimating === 'time-off' ? 'scale-95 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.1)]' : 'hover:scale-[1.02] hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)]'
            }`}
          >
            <div className="size-3.5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d="M4.66667 1.16667V3.5" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M9.33333 1.16667V3.5" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p24a2b500} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M1.75 5.83333H12.25" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
            <span className="text-[15px] leading-[20px] font-medium">Request Time Off</span>
          </Button>
          
          <Button 
            onClick={() => handleCardClick('view-pay', () => onNavigate('paystub'))}
            className={`bg-white hover:bg-gray-50 text-[#1976d2] border border-[#e0e0e0] h-[93px] flex-col items-start justify-center gap-1.5 rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] p-4 transition-all duration-150 transform ${
              isAnimating === 'view-pay' ? 'scale-95 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.1)]' : 'hover:scale-[1.02] hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)]'
            }`}
          >
            <div className="size-3.5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d="M7 1.16667V12.8333" stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p231c2b00} stroke="#1976D2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
            <span className="text-[15px] leading-[20px] font-medium">View Pay</span>
          </Button>
        </div>

        {/* Facility-Aware Today's Schedule */}
        <Card className="bg-white rounded-[12.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] mb-3.5 transition-all duration-200 hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-[7px] mb-[10.5px]">
              <div className="size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M5.33333 1.33333V4" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10.6667 1.33333V4" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3ee34580} stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2 6.66667H14" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <h3 className="text-[#212121] text-[13.125px] leading-[21px]">Today's Schedule</h3>
            </div>
            
            <div className="bg-[#e3f2fd] rounded-[8.75px] p-[10.5px]">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[11.34px] leading-[17.5px] text-neutral-950 mb-1">Morning Shift</div>
                  <div className="text-[#616161] text-[9.84px] leading-[14px] flex items-center gap-1">
                    <MapPin size={8} />
                    {currentFacility.department} • {currentFacility.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11.34px] leading-[17.5px] text-neutral-950 mb-[3.5px]">7:00 AM - 3:00 PM</div>
                  <div className="bg-[#4caf50] text-white text-[10px] leading-[14px] px-2 py-[2.75px] rounded-[6.75px] inline-block">
                    In Progress
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="bg-white rounded-[12.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] transition-all duration-200 hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]">
          <CardContent className="p-3.5">
            <div className="flex items-center justify-between mb-[10.5px]">
              <div className="flex items-center gap-[7px]">
                <div className="size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1ce3c700} stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1a06de00} stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
                <h3 className="text-[#212121] text-[12.91px] leading-[21px]">Recent Notifications</h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#1976d2] text-[11.53px] leading-[17.5px] h-7 px-[10.5px] py-1 rounded-[6.75px] transition-colors hover:bg-[#e3f2fd]"
                onClick={() => onNavigate('notifications')}
              >
                View All
              </Button>
            </div>
            
            <div className="space-y-[10.5px]">
              <div className="h-[63px] relative transition-colors hover:bg-gray-50 rounded p-1 -m-1 cursor-pointer">
                <div className="absolute left-[7px] top-[7px] w-[7px] h-3.5 pt-[7px]">
                  <div className="bg-[#1976d2] size-[7px] rounded-full animate-pulse"></div>
                </div>
                <div className="absolute left-[24.5px] top-1.5 right-[7px]">
                  <div className="text-[#212121] text-[11.34px] leading-[17.5px] mb-1">Schedule Updated</div>
                  <div className="text-[#616161] text-[9.68px] leading-[14px] mb-1">Your weekend shift has been confirmed at {currentFacility.name}</div>
                  <div className="text-[#616161] text-[9.84px] leading-[14px]">2 hours ago</div>
                </div>
              </div>
              
              <div className="h-[63px] relative transition-colors hover:bg-gray-50 rounded p-1 -m-1 cursor-pointer">
                <div className="absolute left-[7px] top-[7px] w-[7px] h-3.5 pt-[7px]">
                  <div className="bg-[#ff9800] size-[7px] rounded-full"></div>
                </div>
                <div className="absolute left-[24.5px] top-1.5 right-[7px]">
                  <div className="text-[#212121] text-[11.34px] leading-[17.5px] mb-1">Time Off Approved</div>
                  <div className="text-[#616161] text-[9.84px] leading-[14px] mb-1">Your vacation request for Dec 15-16 approved</div>
                  <div className="text-[#616161] text-[10px] leading-[14px]">1 day ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}