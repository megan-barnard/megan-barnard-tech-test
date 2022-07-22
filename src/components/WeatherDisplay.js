import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_WEATHER } from "../Query";
import { Alert } from '@mui/material';
import { setWeather, setLoading } from '../redux/actions';
import WeatherTable from './WeatherTable';
import WeatherHeader from './WeatherHeader';

const WeatherDisplay = () => {
  const weather = useSelector(state => state.weather);
  const city = useSelector(state => state.city);
  const units = useSelector(state => state.units);
  const { loading: weatherLoading, error, data, refetch } = useQuery(GET_WEATHER(city, units)); // Get weather query
  const dispatch = useDispatch();

  const getWeatherByCity = async () => { // Get weather by city
    await refetch(city);
    if (data && data.getCityByName && data.getCityByName.weather) {
      dispatch(setWeather(data.getCityByName.weather));
      dispatch(setLoading(false));
    }
  }

  if (!weatherLoading && !weather) getWeatherByCity(); // Fetch weather data if not loading & no weather data
  
  return (
    <>
      {error && <Alert severity="error">Error getting weather data - Please try again</Alert>}
      {(weather && weather.summary) && (
        <>
          <WeatherHeader />
          <WeatherTable />
        </>
      )}
    </>
  )
}

export default WeatherDisplay;
