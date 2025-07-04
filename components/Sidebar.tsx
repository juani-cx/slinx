import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Home, 
  Clock, 
  Calendar, 
  Bell, 
  DollarSign, 
  User, 
  Settings, 
  HelpCircle, 
  FileText, 
  Shield, 
  LogOut,
  X,
  ChevronRight
} from 'lucide-react';

type Screen = 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function Sidebar({ isOpen, onClose, currentScreen, onNavigate }: SidebarProps) {
  const handleNavigation = (screen: Screen) => {
    onNavigate(screen);
    onClose();
  };

  const mainMenuItems = [
    { id: 'dashboard' as Screen, label: 'Dashboard', icon: Home },
    { id: 'punch' as Screen, label: 'Time Punch', icon: Clock },
    { id: 'schedule' as Screen, label: 'Schedule', icon: Calendar },
    { id: 'notifications' as Screen, label: 'Notifications', icon: Bell },
    { id: 'paystub' as Screen, label: 'Paystub', icon: DollarSign },
    { id: 'timeoff' as Screen, label: 'Time Off', icon: FileText },
  ];

  const accountMenuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#212121]">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
          </div>

          {/* User Profile Section */}
          <div className="p-4 bg-[#f7f9fa]">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 bg-[#dcedef]">
                <AvatarFallback className="text-[#00acc1] bg-[#dcedef]">LA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-[#212121]">Liam Anderson</h3>
                <p className="text-sm text-[#616161]">Activities Assistant</p>
                <Badge className="bg-[#b9f6ca] text-[#2e7d32] text-xs mt-1">Active</Badge>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h4 className="text-sm font-medium text-[#616161] mb-3 uppercase tracking-wide">
                Main Navigation
              </h4>
              <nav className="space-y-1">
                {mainMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentScreen === item.id;
                  
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className={`w-full justify-start h-12 px-3 ${
                        isActive 
                          ? 'bg-[#e3f2fd] text-[#1976d2] border-r-2 border-[#1976d2]' 
                          : 'text-[#616161] hover:bg-gray-100'
                      }`}
                      onClick={() => handleNavigation(item.id)}
                    >
                      <Icon size={20} className="mr-3" />
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronRight size={16} className="opacity-50" />
                    </Button>
                  );
                })}
              </nav>
            </div>

            <Separator className="mx-4" />

            {/* Account Settings */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-[#616161] mb-3 uppercase tracking-wide">
                Account & Settings
              </h4>
              <nav className="space-y-1">
                {accountMenuItems.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start h-12 px-3 text-[#616161] hover:bg-gray-100"
                      onClick={() => {
                        // Handle settings navigation here
                        console.log(`Navigate to ${item.id}`);
                      }}
                    >
                      <Icon size={20} className="mr-3" />
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronRight size={16} className="opacity-50" />
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 px-3 text-[#f44336] hover:bg-red-50"
              onClick={() => {
                // Handle logout
                console.log('Logout');
              }}
            >
              <LogOut size={20} className="mr-3" />
              <span className="flex-1 text-left">Sign Out</span>
            </Button>
            
            <div className="mt-3 text-center">
              <p className="text-xs text-[#9e9e9e]">SmartLinx Healthcare</p>
              <p className="text-xs text-[#9e9e9e]">Version 2.1.4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}