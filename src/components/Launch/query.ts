import gql from 'graphql-tag';

export const MissionsInfo = gql`
  query MissionsInfo {
    launches {
        flight_number
        mission_name
        launch_year
        launch_success
    }
  }
`;



