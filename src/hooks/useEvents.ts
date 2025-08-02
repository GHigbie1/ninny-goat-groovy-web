import { useState } from 'react';
import { toast } from 'sonner';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  created_at?: string;
  updated_at?: string;
}

// Mock data for now
const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Cannabis Education Workshop',
    description: 'Learn about the different strains and their effects',
    date: '2025-08-15',
    time: '14:00',
    location: 'Ninny Goat Dispensary'
  },
  {
    id: 2,
    title: 'New Product Launch',
    description: 'Introducing our latest premium flower collection',
    date: '2025-08-20',
    time: '18:00',
    location: 'Main Store'
  }
];

let eventsData = [...mockEvents];
let nextId = 3;

export const useEvents = () => {
  const [loading, setLoading] = useState(false);
  
  return {
    data: eventsData,
    isLoading: loading,
    error: null
  };
};

export const useAddEvent = () => {
  return {
    mutateAsync: async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => {
      const newEvent: Event = {
        ...event,
        id: nextId++,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      eventsData.push(newEvent);
      toast.success('Event added successfully!');
      return newEvent;
    },
    isPending: false
  };
};

export const useDeleteEvent = () => {
  return {
    mutateAsync: async (eventId: number) => {
      eventsData = eventsData.filter(event => event.id !== eventId);
      toast.success('Event deleted successfully!');
    },
    isPending: false
  };
};