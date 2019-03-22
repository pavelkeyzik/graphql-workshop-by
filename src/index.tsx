import gql from 'graphql-tag';

const a = 1;
const b = 'c';

gql`
  query Test {
    viewer {
      order {
        customerID
      }
    }
  }
`;
