import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className=''>
      <DatePicker className='w-24 h-5 px-3 py-3 rounded-md border  placeholder:text-[0.7rem] bg-slate-100 text-slate-800'
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
      />
    </div>
  );
};

export default MyDatePicker;
