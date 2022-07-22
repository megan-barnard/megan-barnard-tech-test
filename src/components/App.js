import { useSelector, useDispatch } from 'react-redux';
import { setCity, resetData } from '../redux/actions';
import { useEffect } from 'react';
import { Box, Button, Card, CardContent, CardActions, CircularProgress, Container, styled } from '@mui/material';
import UnitButtonGroup from './UnitButtonGroup';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const city = useSelector(state => state.city);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  
  const getWeatherHandler = () => { // Reset data and call getWeather function
    dispatch(resetData());
    getWeather();
  };

  const getWeather = async () => { // Get users city by reverse geocoding (latitude & longitude => city)
    let coordinates = await getCoordinates();
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.long}&localityLanguage=en`;
    const response = await fetch(url);
    const data = await response.json(); 
    dispatch(setCity(data.city));
  };

  const getCoordinates = async () => { // Get users current latitude & longitude
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {
      lat: pos.coords.latitude,
      long: pos.coords.longitude
    };
  };

  useEffect(() => { // Get weather on load
    getWeatherHandler();
  }, []);
  
  return (
    <Container maxWidth="sm" sx={{ my: 3 }}>
      <Wrapper>
        <CardActions sx={{ justifyContent: 'space-between', padding: 3 }}>
          <Button variant="contained" onClick={() => getWeatherHandler()}>Refresh</Button>
          <UnitButtonGroup refreshData={getWeatherHandler} />
        </CardActions>
        <CardContent>
          {loading && (
            <ProgressWrapper>
              <CircularProgress />
            </ProgressWrapper>
          )}
          {city && <WeatherDisplay />}
        </CardContent>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled(Card)`
  background-color: #444;
  padding: 10px;
`;

const ProgressWrapper = styled(Box)`
  width: 100%;
  display: flex; 
  justify-content: center;
  margin: 30px 0;
`;

export default App;