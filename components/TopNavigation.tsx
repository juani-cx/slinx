import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Menu, Bell } from 'lucide-react';
import svgPaths from '../imports/svg-a8u32spbny';

interface TopNavigationProps {
  onMenuClick: () => void;
  onNotificationsClick: () => void;
  unreadNotifications: number;
}

export function TopNavigation({ onMenuClick, onNotificationsClick, unreadNotifications }: TopNavigationProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 max-w-[390px] mx-auto">
      <div className="flex items-center justify-between px-4 py-3 h-16">
        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <div className="relative size-6">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p37adaff0}
                fill="#121417"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Button>

        {/* App Title */}
        <div className="flex-1 text-center">
          <h1 className="text-lg font-bold text-[#121417]">
            <span className="font-normal">SmartLinx </span>
            Go
          </h1>
        </div>

        {/* Notifications Bell */}
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-gray-100 relative"
          onClick={onNotificationsClick}
        >
          <div className="relative size-6">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p271ba400}
                fill="#121417"
                fillRule="evenodd"
              />
            </svg>
          </div>
          {unreadNotifications > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-[#f44336] text-white text-xs h-5 w-5 flex items-center justify-center p-0 rounded-full">
              {unreadNotifications > 9 ? '9+' : unreadNotifications}
            </Badge>
          )}
        </Button>
      </div>
    </div>
  );
}