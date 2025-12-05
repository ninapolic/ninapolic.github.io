import React, { useMemo } from 'react';
import { ClassSession } from '../types';

// Helper to generate dynamic schedule
const generateSchedule = (): ClassSession[] => {
  const schedule: ClassSession[] = [];
  const today = new Date();
  let currentId = 1;

  // Generate for the next few days starting tomorrow
  for (let i = 1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const dayOfWeek = date.getDay(); // 0 is Sunday
    if (dayOfWeek === 0) continue; // Studio closed on Sundays

    const month = date.toLocaleString('en-US', { month: 'short' });
    const dateNum = date.getDate();
    const dateStr = `${month} ${dateNum}`;
    const dayName = i === 1 ? "Tomorrow" : date.toLocaleString('en-US', { weekday: 'long' });

    // One private session per day at 7am
    schedule.push({
      id: currentId++,
      day: dayName,
      date: dateStr,
      time: "7:00 AM",
      classType: "Private Reformer",
      duration: "50 min",
      instructor: "Nina Polic",
      status: "FULL"
    });
  }
  
  // Limit to show a clean list, e.g., first 6 items
  return schedule.slice(0, 6);
};

const ClassRow: React.FC<{ session: ClassSession }> = ({ session }) => (
  <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-200 hover:bg-white transition-colors duration-300 px-4">
    <div className="flex flex-col md:flex-row md:items-center md:space-x-12 space-y-2 md:space-y-0">
      <div className="flex flex-col w-24">
        <span className="text-xs uppercase tracking-wider text-stone-500">{session.day}</span>
        <span className="text-lg font-serif text-stone-800">{session.date}</span>
      </div>
      <div className="w-24 font-light text-stone-800">
        {session.time}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-stone-800 tracking-wide text-sm">{session.classType}</span>
        <span className="text-xs text-stone-500 font-light">{session.duration} • {session.instructor}</span>
      </div>
    </div>
    
    <div className="mt-4 md:mt-0">
      <span className="inline-block px-4 py-2 bg-stone-100 text-stone-400 text-[10px] tracking-widest uppercase font-semibold border border-stone-200 rounded-sm w-full md:w-auto text-center cursor-not-allowed">
        {session.status}
      </span>
    </div>
  </div>
);

const ScheduleWidget: React.FC = () => {
  const scheduleData = useMemo(() => generateSchedule(), []);

  return (
    <section id="schedule" className="py-24 bg-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800">Class Schedule</h2>
          <p className="text-stone-500 font-light max-w-md mx-auto">
            One-on-one reformer sessions designed for precision and flow. 
            <br />
            <span className="text-xs italic mt-2 block text-stone-400">Waitlist available for all sessions.</span>
          </p>
        </div>

        <div className="bg-stone-50 border-t border-stone-200">
          {scheduleData.map((session) => (
            <ClassRow key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleWidget;