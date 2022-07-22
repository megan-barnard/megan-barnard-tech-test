function createData(name, data) { // Table data format
  return { name, data };
}

export const formatTableData = (weather, units) => {
  // Calculate metric/imperial unit symbols
  const unit = (units === "metric") ? { 
    temp: "°C", speed: " meter/sec", distance: "km", visibilityConverter: 1000 // Metric Units
  } : { 
    temp: "°F", speed: " mph", distance: " miles", visibilityConverter: 1609 // Imperial Units
  };

  // Format weather data for table 
  const tableData = [
    { title: 'Clouds', data: [ // Cloud data
      createData('Cloud Cover', weather.clouds.all + '%'),
      createData('Humidity', weather.clouds.humidity + '%'),
      createData('Visibility',  (Math.round((weather.clouds.visibility / unit.visibilityConverter)*10) / 10) + unit.distance)
    ]},
    { title: 'Temperature', data: [ // Temperature data
      createData('Actual', weather.temperature.actual + unit.temp),
      createData('Feels Like', weather.temperature.feelsLike + unit.temp),
      createData('Max', weather.temperature.max + unit.temp),
      createData('Min', weather.temperature.min + unit.temp)
    ]},
    { title: 'Wind', data: [ // Wind data
      createData('Degrees', weather.wind.deg + '°'),
      createData('Wind speed', weather.wind.speed + unit.speed)
    ]}
  ];

  return tableData;
};

