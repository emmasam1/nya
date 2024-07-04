import React, { useState, useEffect } from 'react';

const UpcomingEvent = () => {
  const eventDate = new Date(); // Replace with your event date
  eventDate.setDate(eventDate.getDate() + 14); // Add 14 days

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        // Handle event expired scenario here
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white ">
      <div className="max-w-7xl mx-auto pt-8 px-4 w-full">
        <div className="max-w-full mx-auto  overflow-hidden w-full">
          {/* Event Title */}
          <div className="text-white text-center py-2">
            <h3 className="text-lg font-bold text-black">Upcoming: Executive meeting</h3>
          </div>

          {/* Countdown Timers */}
          <div className="flex flex-col md:flex-row justify-around p-4">
            {/* Days Countdown */}
            <div className="flex flex-col items-center rounded-lg p-4 mb-4 md:mb-0">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <span className="text-white text-2xl">{days}</span>
              </div>
              <span className="text-sm text-gray-600">Days</span>
            </div>

            {/* Hours Countdown */}
            <div className="flex flex-col items-center rounded-lg p-4 mb-4 md:mb-0">
              <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <span className="text-white text-2xl">{hours}</span>
              </div>
              <span className="text-sm text-gray-600">Hours</span>
            </div>

            {/* Minutes Countdown */}
            <div className="flex flex-col items-center rounded-lg p-4 mb-4 md:mb-0">
              <div className="bg-yellow-700 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <span className="text-white text-2xl">{minutes}</span>
              </div>
              <span className="text-sm text-gray-600">Minutes</span>
            </div>

            {/* Seconds Countdown */}
            <div className="flex flex-col items-center rounded-lg p-4 mb-4 md:mb-0">
              <div className="bg-red-700 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <span className="text-white text-2xl">{seconds}</span>
              </div>
              <span className="text-sm text-gray-600">Seconds</span>
            </div>
          </div>

          {/* Event Description */}
          <div className="p-4">
            <p className="text-gray-600">
              This event will take place in 14 days. Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
