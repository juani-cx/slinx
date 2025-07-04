import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Facility {
  id: string;
  name: string;
  department: string;
  address: string;
  status: 'active' | 'inactive';
  timezone: string;
  phone: string;
  manager: string;
}

interface FacilityContextType {
  facilities: Facility[];
  currentFacility: Facility;
  selectedFacilityId: string;
  switchFacility: (facilityId: string) => void;
  refreshFacilityData: () => Promise<void>;
  isLoading: boolean;
}

const FacilityContext = createContext<FacilityContextType | undefined>(undefined);

const DEFAULT_FACILITIES: Facility[] = [
  {
    id: 'smartlinx-main',
    name: 'Smartlinx Healthcare',
    department: 'Dietary Services',
    address: '123 Healthcare Blvd, City',
    status: 'active',
    timezone: 'America/New_York',
    phone: '(555) 123-4567',
    manager: 'Sarah Johnson'
  },
  {
    id: 'smartlinx-north',
    name: 'Smartlinx North Campus',
    department: 'Activities',
    address: '456 North St, City',
    status: 'active',
    timezone: 'America/New_York',
    phone: '(555) 234-5678',
    manager: 'Michael Chen'
  },
  {
    id: 'valley-medical',
    name: 'Valley Medical Center',
    department: 'Nursing',
    address: '789 Valley Rd, City',
    status: 'active',
    timezone: 'America/New_York',
    phone: '(555) 345-6789',
    manager: 'Emily Rodriguez'
  },
  {
    id: 'riverside-care',
    name: 'Riverside Care Facility',
    department: 'Housekeeping',
    address: '321 River Ave, City',
    status: 'inactive',
    timezone: 'America/New_York',
    phone: '(555) 456-7890',
    manager: 'David Thompson'
  }
];

interface FacilityProviderProps {
  children: ReactNode;
}

export function FacilityProvider({ children }: FacilityProviderProps) {
  const [facilities, setFacilities] = useState<Facility[]>(DEFAULT_FACILITIES);
  const [selectedFacilityId, setSelectedFacilityId] = useState('smartlinx-main');
  const [isLoading, setIsLoading] = useState(false);

  const currentFacility = facilities.find(f => f.id === selectedFacilityId) || facilities[0];

  const switchFacility = async (facilityId: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setSelectedFacilityId(facilityId);
    
    // Log facility switch for analytics
    console.log(`Facility switched to: ${facilityId}`, {
      timestamp: new Date().toISOString(),
      previousFacility: selectedFacilityId,
      newFacility: facilityId
    });
    
    // Trigger any facility-specific data refreshes here
    // Example: refresh schedule, notifications, etc.
    
    setIsLoading(false);
  };

  const refreshFacilityData = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call to refresh facility data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would fetch fresh facility data here
      console.log('Facility data refreshed');
      
    } catch (error) {
      console.error('Failed to refresh facility data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: FacilityContextType = {
    facilities,
    currentFacility,
    selectedFacilityId,
    switchFacility,
    refreshFacilityData,
    isLoading
  };

  return (
    <FacilityContext.Provider value={value}>
      {children}
    </FacilityContext.Provider>
  );
}

export function useFacility() {
  const context = useContext(FacilityContext);
  if (context === undefined) {
    throw new Error('useFacility must be used within a FacilityProvider');
  }
  return context;
}

export type { Facility, FacilityContextType };