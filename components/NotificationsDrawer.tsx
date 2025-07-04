import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { X, Calendar, DollarSign, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface Notification {
  id: number;
  type: 'schedule' | 'pay' | 'approval' | 'reminder' | 'system';
  title: string;
  message: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
  read: boolean;
  actionRequired?: boolean;
}

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onNotificationClick: (id: number) => void;
  onMarkAllRead: () => void;
}

export function NotificationsDrawer({ 
  isOpen, 
  onClose, 
  notifications, 
  onNotificationClick,
  onMarkAllRead 
}: NotificationsDrawerProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'schedule':
        return <Calendar size={16} className="text-[#1976d2]" />;
      case 'pay':
        return <DollarSign size={16} className="text-[#4caf50]" />;
      case 'approval':
        return <CheckCircle size={16} className="text-[#4caf50]" />;
      case 'reminder':
        return <Clock size={16} className="text-[#ff9800]" />;
      case 'system':
        return <Clock size={16} className="text-[#616161]" />;
      default:
        return <Clock size={16} className="text-[#616161]" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-[#f44336]';
      case 'medium':
        return 'border-l-[#ff9800]';
      case 'low':
        return 'border-l-[#4caf50]';
      default:
        return 'border-l-gray-300';
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold text-[#212121]">Notifications</h2>
              {unreadCount > 0 && (
                <Badge className="bg-[#f44336] text-white text-xs mt-1">
                  {unreadCount} unread
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
          </div>

          {/* Quick Actions */}
          {unreadCount > 0 && (
            <div className="p-4 border-b border-gray-200">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={onMarkAllRead}
              >
                Mark all as read
              </Button>
            </div>
          )}

          {/* Notifications List */}
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              {notifications.length === 0 ? (
                <div className="text-center py-8">
                  <Clock size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-[#616161]">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 border border-gray-200 rounded-lg border-l-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                      getPriorityColor(notification.priority)
                    } ${!notification.read ? 'bg-blue-50' : 'bg-white'}`}
                    onClick={() => onNotificationClick(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-sm truncate ${
                            !notification.read ? 'font-semibold text-[#212121]' : 'text-[#212121]'
                          }`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center gap-2 ml-2">
                            {notification.actionRequired && (
                              <AlertTriangle size={14} className="text-[#ff9800] flex-shrink-0" />
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-[#1976d2] rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-[#616161] mb-2 line-clamp-2">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#9e9e9e]">{notification.time}</span>
                          {notification.actionRequired && (
                            <Button 
                              size="sm" 
                              className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-2 py-1 h-6"
                            >
                              Action
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => {
                // Navigate to full notifications screen
                onClose();
              }}
            >
              View All Notifications
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}