import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchCampaigns,
  setSearchTerm,
  setStartDate,
  setEndDate,
} from './actions';
import DateRange from './DateRange';
import NewCampaignForm from './NewCampaignForm';
import './App.css';

const CampaignTable = ({
  campaigns,
  searchTerm,
  startDate,
  endDate,
  setSearchTerm,
  setStartDate,
  setEndDate,
  fetchCampaigns,
}) => {
  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  const filteredCampaigns = campaigns
    .filter((campaign) => {
      if (startDate && endDate) {
        return (
          new Date(campaign.startDate) >= startDate &&
          new Date(campaign.endDate) <= endDate
        );
      } else if (startDate) {
        return new Date(campaign.startDate) >= startDate;
      } else if (endDate) {
        return new Date(campaign.endDate) <= endDate;
      }
      return true;
    })
    .map((campaign) => {
      if (campaign.name === null) {
        return { ...campaign, name: 'Unknown User' };
      }
      return campaign;
    })
    .filter((campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const isActiveCampaign = (campaign) => {
    const currentDate = new Date();
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    return startDate <= currentDate && endDate >= currentDate;
  };

  return (
    <div className='container'>
      <div className='filters'>
        <div className='filter1'>
          <DateRange
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </div>
        <div className='filter2'>
          <input
            type='text'
            className='search-input'
            id='campaignSearch'
            placeholder='Search by name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>Campaign {campaign.id}</td>
              <td>{campaign.name || 'Unknown User'}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>
                <div
                  className={`status-circle ${
                    isActiveCampaign(campaign) ? 'active' : 'inactive'
                  }`}
                />
                {isActiveCampaign(campaign) ? 'Active' : 'Inactive'}
              </td>
              <td>{campaign.budget} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewCampaignForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  searchTerm: state.searchTerm,
  startDate: state.startDate,
  endDate: state.endDate,
});

const mapDispatchToProps = {
  setSearchTerm,
  setStartDate,
  setEndDate,
  fetchCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignTable);
