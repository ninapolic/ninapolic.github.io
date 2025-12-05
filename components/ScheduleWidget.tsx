import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import { ClassSession } from '../types';

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
  return (
    <section id="schedule" className="py-24 bg-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800">Class Schedule</h2>
          <p className="text-stone-500 font-light max-w-md mx-auto">
            Small group reformer classes designed for precision and flow. 
            <br />
            <span className="text-xs italic mt-2 block text-stone-400">Waitlist available for all sessions.</span>
          </p>
        </div>

        <div className="bg-stone-50 border-t border-stone-200">
          {SCHEDULE_DATA.map((session) => (
            <ClassRow key={session.id} session={session} />
          ))}
        </div>

        <div className="mt-12 text-center">
             <button className="text-xs tracking-widest uppercase border-b border-stone-400 pb-1 text-stone-500 hover:text-stone-800 hover:border-stone-800 transition-colors">
                Join the Waitlist
             </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleWidget;