import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const DateRange = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleStartDateChange = (date) => {
    if (endDate && date > endDate) {
      // Don't allow selecting a start date that is after the end date
      onEndDateChange(null);
    }

    onStartDateChange(date);
  };

  const handleEndDateChange = (date) => {
    if (startDate && date < startDate) {
      // Don't allow selecting an end date that is before the start date
      onStartDateChange(null);
    }

    onEndDateChange(date);
  };

  return (
    <div className='date-range-wrapper'>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        placeholderText='Select Start Date'
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        placeholderText='Select End Date'
      />
    </div>
  );
};

export default DateRange;
