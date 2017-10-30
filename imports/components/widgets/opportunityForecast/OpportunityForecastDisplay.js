import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';

import WidgetPlaceholder from '../widgetPlaceholder/WidgetPlaceholder';

const data = opportunityForecast => ({
  labels: [],
  datasets: [
    {
      label: I18n.t('opportunityStatuses.APPOINTMENT_SCHEDULED'),
      backgroundColor: 'rgba(251,157,149,0.8)',
      borderColor: 'rgba(251,157,149,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251,157,149,0.8)',
      hoverBorderColor: 'rgba(251,157,149,1)',
      data: [opportunityForecast[0]],
    },
    {
      label: I18n.t('opportunityStatuses.QUALIFIED_TO_BUY'),
      backgroundColor: 'rgba(239,145,164,0.8)',
      borderColor: 'rgba(239,145,164,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(239,145,164,0.8)',
      hoverBorderColor: 'rgba(239,145,164,1)',
      data: [opportunityForecast[1]],
    },
    {
      label: I18n.t('opportunityStatuses.PRESENTATION_SCHEDULED'),
      backgroundColor: 'rgba(218,137,178,0.8)',
      borderColor: 'rgba(218,137,178,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(218,137,178,0.8)',
      hoverBorderColor: 'rgba(218,137,178,1)',
      data: [opportunityForecast[2]],
    },
    {
      label: I18n.t('opportunityStatuses.DECISION_MAKER_BOUGHT_IN'),
      backgroundColor: 'rgba(188,133,189,0.8)',
      borderColor: 'rgba(188,133,189,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(188,133,189,0.8)',
      hoverBorderColor: 'rgba(188,133,189,1)',
      data: [opportunityForecast[3]],
    },
    {
      label: I18n.t('opportunityStatuses.CONTRACT_SENT'),
      backgroundColor: 'rgba(170,133,192,0.8)',
      borderColor: 'rgba(170,133,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(170,133,192,0.8)',
      hoverBorderColor: 'rgba(170,133,192,1)',
      data: [opportunityForecast[4]],
    },
    {
      label: I18n.t('opportunityStatuses.CLOSED_WON'),
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
      title={I18n.t('opportunityForecast.placeholderTitle')}
      text={[
        I18n.t('opportunityForecast.placeholderText.0'),
        I18n.t('opportunityForecast.placeholderText.1'),
        I18n.t('opportunityForecast.placeholderText.2'),
      ]}
      buttonText={I18n.t('opportunityForecast.placeholderButtonText')}
      buttonPath="/opportunities"
    />
  );
export default OpportunityForecastDisplay;
