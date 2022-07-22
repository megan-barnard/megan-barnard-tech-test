import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const WeatherHeader = () => {
  const weather = useSelector(state => state.weather);
  const city = useSelector(state => state.city);
  const currentDate = new Date(weather.timestamp * 1000); // Convert unix time to date

  return (
    <Header>
      <SummaryInfo>
        <Title>Weather</Title>
        <Info>{city}</Info>
        <Info>{currentDate.toDateString()}, {currentDate.toLocaleTimeString()}</Info>
        <Info><span>Current weather: </span>{weather.summary.title} - {weather.summary.description}</Info>
      </SummaryInfo>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.summary.icon}@2x.png`}
          alt={weather.summary.title}
          loading="lazy"
        />
      </div>
    </Header>
  );
}

const Header = styled(Paper)`
  margin: 10px 0;
  padding: 20px;
  display: flex;
  font-family: sans-serif;
`;
const SummaryInfo = styled('div')`
  width: 100%;
  padding-right: 20px;
`;
const Title = styled('h1')`
  margin-top: 0;
  padding: 0 0 5px 5px;
  border-bottom: 1px solid #e5e5e5;
`;
const Info = styled('p')`
  margin: 5px 0;
  font-size: 110%;
  & span {
    font-weight: bold;
  }
`;

export default WeatherHeader;