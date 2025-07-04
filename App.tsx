import React, { useState } from 'react';
import { DashboardScreen } from './components/DashboardScreen';
import { PunchScreen } from './components/PunchScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { PaystubScreen } from './components/PaystubScreen';
import { TimeOffScreen } from './components/TimeOffScreen';
import { TopNavigation } from './components/TopNavigation';
import { Sidebar } from './components/Sidebar';
import { NotificationsDrawer } from './components/NotificationsDrawer';
import { FacilityProvider } from './components/FacilityContext';
import { Clock, Calendar, Bell, DollarSign, Home } from 'lucide-react';

type Screen = 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff';

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

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsDrawerOpen, setNotificationsDrawerOpen] = useState(false);
  
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
    }
  ]);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <DashboardScreen onNavigate={setCurrentScreen} />;
      case 'punch':
        return <PunchScreen onNavigate={setCurrentScreen} />;
      case 'schedule':
        return <ScheduleScreen onNavigate={setCurrentScreen} />;
      case 'notifications':
        return <NotificationsScreen onNavigate={setCurrentScreen} />;
      case 'paystub':
        return <PaystubScreen onNavigate={setCurrentScreen} />;
      case 'timeoff':
        return <TimeOffScreen onNavigate={setCurrentScreen} />;
      default:
        return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="h-screen w-full max-w-[390px] mx-auto bg-[#f7f9fa] flex flex-col relative">
      {/* Top Navigation */}
      <TopNavigation
        onMenuClick={() => setSidebarOpen(true)}
        onNotificationsClick={() => setNotificationsDrawerOpen(true)}
        unreadNotifications={unreadNotifications}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />

      {/* Notifications Drawer */}
      <NotificationsDrawer
        isOpen={notificationsDrawerOpen}
        onClose={() => setNotificationsDrawerOpen(false)}
        notifications={notifications}
        onNotificationClick={handleNotificationClick}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden pt-16">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-2 py-1">
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-150 ${
              currentScreen === 'dashboard' 
                ? 'text-[#1976d2] bg-[#e3f2fd] scale-105' 
                : 'text-[#616161] hover:text-[#1976d2] hover:bg-gray-50'
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button
            onClick={() => setCurrentScreen('punch')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-150 ${
              currentScreen === 'punch' 
                ? 'text-[#1976d2] bg-[#e3f2fd] scale-105' 
                : 'text-[#616161] hover:text-[#1976d2] hover:bg-gray-50'
            }`}
          >
            <Clock size={20} />
            <span className="text-xs mt-1">Punch</span>
          </button>
          
          <button
            onClick={() => setCurrentScreen('schedule')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-150 ${
              currentScreen === 'schedule' 
                ? 'text-[#1976d2] bg-[#e3f2fd] scale-105' 
                : 'text-[#616161] hover:text-[#1976d2] hover:bg-gray-50'
            }`}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Schedule</span>
          </button>
          
          <button
            onClick={() => setCurrentScreen('notifications')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-150 relative ${
              currentScreen === 'notifications' 
                ? 'text-[#1976d2] bg-[#e3f2fd] scale-105' 
                : 'text-[#616161] hover:text-[#1976d2] hover:bg-gray-50'
            }`}
          >
            <Bell size={20} />
            <span className="text-xs mt-1">Alerts</span>
            {unreadNotifications > 0 && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#f44336] rounded-full animate-pulse"></div>
            )}
          </button>
          
          <button
            onClick={() => setCurrentScreen('paystub')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-150 ${
              currentScreen === 'paystub' 
                ? 'text-[#1976d2] bg-[#e3f2fd] scale-105' 
                : 'text-[#616161] hover:text-[#1976d2] hover:bg-gray-50'
            }`}
          >
            <DollarSign size={20} />
            <span className="text-xs mt-1">Pay</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <FacilityProvider>
      <AppContent />
    </FacilityProvider>
  );
}