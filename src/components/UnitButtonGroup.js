import { useSelector, useDispatch } from 'react-redux';
import { setUnits } from '../redux/actions';
import { Button, ButtonGroup } from '@mui/material';

const UnitButtonGroup = ({ refreshData }) => {
  const units = useSelector(state => state.units);
  const dispatch = useDispatch();
  
  const getUnitHandler = (unit) => { // Handle imperial & metric unit changes
    dispatch(setUnits(unit));
    refreshData();
  };
  
  return (
    <ButtonGroup variant="contained" sx={{ background: '#fff' }}>
      <Button onClick={() => getUnitHandler("metric")} disabled={units === "metric"}>Metric (°C)</Button>
      <Button onClick={() => getUnitHandler("imperial")} disabled={units === "imperial"}>Imperial (°F)</Button>
    </ButtonGroup>
  );
}

export default UnitButtonGroup;