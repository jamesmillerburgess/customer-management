import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import WidgetPlaceholder from '../widgetPlaceholder/WidgetPlaceholder';

const data = opportunityForecast => ({
  labels: [],
  datasets: [
    {
      label: 'Appointment Scheduled',
      backgroundColor: 'rgba(251,157,149,0.8)',
      borderColor: 'rgba(251,157,149,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251,157,149,0.8)',
      hoverBorderColor: 'rgba(251,157,149,1)',
      data: [opportunityForecast[0]],
    },
    {
      label: 'Qualified to Buy',
      backgroundColor: 'rgba(239,145,164,0.8)',
      borderColor: 'rgba(239,145,164,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(239,145,164,0.8)',
      hoverBorderColor: 'rgba(239,145,164,1)',
      data: [opportunityForecast[1]],
    },
    {
      label: 'Presentation Scheduled',
      backgroundColor: 'rgba(218,137,178,0.8)',
      borderColor: 'rgba(218,137,178,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(218,137,178,0.8)',
      hoverBorderColor: 'rgba(218,137,178,1)',
      data: [opportunityForecast[2]],
    },
    {
      label: 'Decision Maker Bought-In',
      backgroundColor: 'rgba(188,133,189,0.8)',
      borderColor: 'rgba(188,133,189,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(188,133,189,0.8)',
      hoverBorderColor: 'rgba(188,133,189,1)',
      data: [opportunityForecast[3]],
    },
    {
      label: 'Contract Sent',
      backgroundColor: 'rgba(170,133,192,0.8)',
      borderColor: 'rgba(170,133,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(170,133,192,0.8)',
      hoverBorderColor: 'rgba(170,133,192,1)',
      data: [opportunityForecast[4]],
    },
    {
      label: 'Closed Won',
      backgroundColor: 'rgba(151,132,194,0.8)',
      borderColor: 'rgba(151,132,194,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(151,132,194,0.8)',
      hoverBorderColor: 'rgba(151,132,194,1)',
      data: [opportunityForecast[5]],
    },
  ],
});

const OpportunityForecastDisplay = props =>
  props.showWidget ? (
    <div className="opportunity-forecast">
      <Bar
        data={data(props.opportunityForecast)}
        width={80}
        height={80}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }],
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  ) : (
    <WidgetPlaceholder
      title="Forecast your sales"
      text={[
        "Keep up to date with your team's progress towards its quota each month.",
        'Once your team has an opportunity closing this month, a graph of \n' +
          'your forecast will display in this widget.',
        "If you don't have any opportunities yet, you can create one from \n" +
          'the opportunities page.',
      ]}
      buttonText="Go to opportunities"
      buttonPath="/opportunities"
    />
  );
export default OpportunityForecastDisplay;
