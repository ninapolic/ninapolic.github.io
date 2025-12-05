import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ScheduleWidget from './components/ScheduleWidget';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen selection:bg-stone-300 selection:text-stone-900">
      <NavBar />
      <main>
        <Hero />
        <ScheduleWidget />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;