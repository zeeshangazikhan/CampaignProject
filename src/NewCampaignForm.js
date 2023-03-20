import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCampaign } from './actions';

const NewCampaignForm = ({ addCampaign }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleStartDateChange = (e) => {
    let value = e.target.value;
    if (value.length === 2 || value.length === 5) {
      value += '/';
    }
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setStartDate(value);
  };

  const handleEndDateChange = (e) => {
    let value = e.target.value;
    if (value.length === 2 || value.length === 5) {
      value += '/';
    }
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setEndDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCampaign({ name, startDate, endDate, budget });
    setName('');
    setStartDate('');
    setEndDate('');
    setBudget('');
  };

  return (
    <form className="new-campaign-form" onSubmit={handleSubmit}>
      <h3>Add New Campaign</h3>
      <div className="dateWrapper">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter User Name"
        />
        <div>
          <input
            type="text"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div>
          <input
            type="text"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            placeholder="MM/DD/YYYY"
          />
        </div>
      </div>
      <div className="budgetWrapper">
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter Budget in USD"
        />
      </div>
      <button type="submit">Add Campaign</button>
    </form>
  );
};

const mapDispatchToProps = {
  addCampaign,
};

export default connect(null, mapDispatchToProps)(NewCampaignForm);
