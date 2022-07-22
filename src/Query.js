import { gql } from "@apollo/client";
export const GET_WEATHER = (city, units) => {
  const query = `name: "${city}", config: { units: ${units} }`;
  return gql`
    query {
      getCityByName(${query}) {
        weather {
          summary {
            title
            description
            icon
          }
          temperature {
            actual
            feelsLike
            min
            max
          }
          wind {
            speed
            deg
          }
          clouds {
            all
            visibility
            humidity
          }
          timestamp
        }
      }
    }
  `
};