import React from 'react';
import { useSelector } from 'react-redux';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formatTableData } from '../formatTableData';

const WeatherTable = () => {
  const units = useSelector(state => state.units);
  const weather = useSelector(state => state.weather);
  const tableData = formatTableData(weather, units); // Format weather data for table

  return (
    <TableContainer sx={{ borderRadius: 1 }}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableBody>
          {tableData.map((category) => (
            <React.Fragment key={category.title}>
              <TitleTableRow>
                <TableCell component="th" scope="row">{category.title}</TableCell>
                <TableCell></TableCell>
              </TitleTableRow>
              {category.data.map((row) => (
                <DataTableRow key={row.name}>
                  <TableCell component="th" scope="row" align="right" width="30%">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.data}</TableCell>
                </DataTableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TitleTableRow = styled(TableRow)`
  background-color: #d5d5d5;
  & th {
    padding: 15px 20px 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: normal;
  }
`;
const DataTableRow = styled(TableRow)`
  background-color: white;
  & th {
    padding: 5px 10px;
    font-weight: bold;
    border-right: 1px solid #e0e0e0;
  }
  & td {
    padding: 5px 10px;
  }
`;

export default WeatherTable;