
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { format, isSameDay } from 'date-fns';
import { CalendarIcon, Clock, MapPin, Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
}

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Cannabis Education Workshop',
      description: 'Learn about the benefits and proper usage of cannabis products.',
      date: new Date(2025, 0, 15), // January 15, 2025
      time: '2:00 PM',
      location: 'Ninny Goat & Co. Store'
    },
    {
      id: '2',
      title: 'New Product Launch',
      description: 'Discover our latest premium flower strains.',
      date: new Date(2025, 0, 22), // January 22, 2025
      time: '6:00 PM',
      location: 'Ninny Goat & Co. Store'
    }
  ]);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: selectedDate || new Date(),
    time: '',
    location: ''
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.time && newEvent.location) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        description: newEvent.description,
        date: newEvent.date,
        time: newEvent.time,
        location: newEvent.location
      };
      setEvents([...events, event]);
      setNewEvent({
        title: '',
        description: '',
        date: selectedDate || new Date(),
        time: '',
        location: ''
      });
      setIsAddEventOpen(false);
    }
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return getEventsForDate(selectedDate);
  };

  const getEventDates = () => {
    return events.map(event => event.date);
  };

  return (
    <div className="min-h-screen bg-ninny-cashmere">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-ninny-raspberry mb-4">Events</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for educational workshops, product launches, and community events at Ninny Goat & Co.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl text-ninny-raspberry">Event Calendar</CardTitle>
                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-ninny-marigold hover:bg-ninny-mandarin">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New Event</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Event Title</Label>
                        <Input
                          id="title"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                          placeholder="Enter event title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                          placeholder="Enter event description"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={newEvent.time}
                          onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                          placeholder="Enter event location"
                        />
                      </div>
                      <Button onClick={handleAddEvent} className="w-full bg-ninny-marigold hover:bg-ninny-mandarin">
                        Add Event
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border pointer-events-auto"
                modifiers={{
                  hasEvent: getEventDates()
                }}
                modifiersClassNames={{
                  hasEvent: "bg-ninny-marigold text-white font-bold"
                }}
              />
            </CardContent>
          </Card>

          {/* Events List Section */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl text-ninny-raspberry">
                {selectedDate ? `Events for ${format(selectedDate, 'MMMM d, yyyy')}` : 'Select a Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDate ? (
                <div className="space-y-4">
                  {getEventsForSelectedDate().length > 0 ? (
                    getEventsForSelectedDate().map((event) => (
                      <div key={event.id} className="border rounded-lg p-4 bg-white">
                        <h3 className="font-bold text-lg text-ninny-raspberry mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No events scheduled for this date.</p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Select a date to view events.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events Section */}
        <Card className="mt-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-ninny-raspberry">All Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter(event => event.date >= new Date())
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 bg-white">
                    <h3 className="font-bold text-lg text-ninny-raspberry mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {format(event.date, 'MMM d, yyyy')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
