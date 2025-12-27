import React from 'react';

const Features = () => {
  return (
    <section id="features" className='p-4'>
      <h2>Key Features</h2>
      <div className="features">
        <div className="feature">
          <h3>Student Management</h3>
          <p>Track attendance, grades, and performance.</p>
        </div>
        <div className="feature">
          <h3>Teacher Scheduling</h3>
          <p>Efficiently manage teachers' timetables and classes.</p>
        </div>
        <div className="feature">
          <h3>Real-Time Analytics</h3>
          <p>Access detailed reports for better decision-making.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
