import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Bell, Calendar, DollarSign, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface NotificationsScreenProps {
  onNavigate: NavigationHandler;
}

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

export function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'schedule',
      title: 'Schedule Updated',
      message: 'Your weekend shift has been confirmed for December 9-10',
      time: '2 hours ago',
      priority: 'high',
      read: false,
      actionRequired: false
    },
    {
      id: 2,
      type: 'approval',
      title: 'Time Off Approved',
      message: 'Your vacation request for December 15-16 has been approved',
      time: '1 day ago',
      priority: 'medium',
      read: false,
      actionRequired: false
    },
    {
      id: 3,
      type: 'pay',
      title: 'Paystub Available',
      message: 'Your paystub for pay period 11/26 - 12/02 is now available',
      time: '2 days ago',
      priority: 'medium',
      read: true,
      actionRequired: false
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Certification Expiring Soon',
      message: 'Your CPR certification expires in 59 days. Please renew.',
      time: '3 days ago',
      priority: 'high',
      read: false,
      actionRequired: true
    },
    {
      id: 5,
      type: 'schedule',
      title: 'Open Shift Available',
      message: 'Urgent: Nursing shift available for tonight 11PM-7AM',
      time: '4 days ago',
      priority: 'high',
      read: true,
      actionRequired: true
    },
    {
      id: 6,
      type: 'system',
      title: 'Schedule Reminder',
      message: 'Don\'t forget to punch in for your shift starting at 7:00 AM',
      time: '1 week ago',
      priority: 'low',
      read: true,
      actionRequired: false
    },
    {
      id: 7,
      type: 'approval',
      title: 'Overtime Approved',
      message: 'Your overtime request for last Friday has been approved',
      time: '1 week ago',
      priority: 'medium',
      read: true,
      actionRequired: false
    },
    {
      id: 8,
      type: 'pay',
      title: 'Holiday Pay Adjustment',
      message: 'Holiday pay has been added to your next paycheck',
      time: '2 weeks ago',
      priority: 'low',
      read: true,
      actionRequired: false
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

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
        return <Bell size={16} className="text-[#616161]" />;
      default:
        return <Bell size={16} className="text-[#616161]" />;
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

  const filterNotifications = (filter: string) => {
    switch (filter) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'schedule':
        return notifications.filter(n => n.type === 'schedule');
      case 'pay':
        return notifications.filter(n => n.type === 'pay');
      case 'approval':
        return notifications.filter(n => n.type === 'approval');
      default:
        return notifications;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="h-full bg-[#f7f9fa] overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-lg text-[#212121]">Notifications</h1>
            {unreadCount > 0 && (
              <Badge className="bg-[#f44336] text-white text-xs mt-1">
                {unreadCount} unread
              </Badge>
            )}
          </div>
        </div>
        {unreadCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#1976d2]"
            onClick={markAllAsRead}
          >
            Mark all read
          </Button>
        )}
      </div>

      <div className="px-4 py-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="pay">Pay</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(notification.priority)} ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm ${!notification.read ? 'font-semibold text-[#212121]' : 'text-[#212121]'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {notification.actionRequired && (
                            <AlertTriangle size={14} className="text-[#ff9800]" />
                          )}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-[#1976d2] rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-[#616161] mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9e9e9e]">{notification.time}</span>
                        {notification.actionRequired && (
                          <Button size="sm" className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-lg">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3">
            {filterNotifications('unread').map((notification) => (
              <Card 
                key={notification.id} 
                className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(notification.priority)} bg-blue-50`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-[#212121]">
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {notification.actionRequired && (
                            <AlertTriangle size={14} className="text-[#ff9800]" />
                          )}
                          <div className="w-2 h-2 bg-[#1976d2] rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-[#616161] mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9e9e9e]">{notification.time}</span>
                        {notification.actionRequired && (
                          <Button size="sm" className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-lg">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="schedule" className="space-y-3">
            {filterNotifications('schedule').map((notification) => (
              <Card 
                key={notification.id} 
                className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(notification.priority)} ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm ${!notification.read ? 'font-semibold text-[#212121]' : 'text-[#212121]'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {notification.actionRequired && (
                            <AlertTriangle size={14} className="text-[#ff9800]" />
                          )}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-[#1976d2] rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-[#616161] mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9e9e9e]">{notification.time}</span>
                        {notification.actionRequired && (
                          <Button size="sm" className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-lg">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pay" className="space-y-3">
            {filterNotifications('pay').map((notification) => (
              <Card 
                key={notification.id} 
                className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(notification.priority)} ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm ${!notification.read ? 'font-semibold text-[#212121]' : 'text-[#212121]'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {notification.actionRequired && (
                            <AlertTriangle size={14} className="text-[#ff9800]" />
                          )}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-[#1976d2] rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-[#616161] mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9e9e9e]">{notification.time}</span>
                        {notification.actionRequired && (
                          <Button size="sm" className="bg-[#1976d2] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-lg">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}