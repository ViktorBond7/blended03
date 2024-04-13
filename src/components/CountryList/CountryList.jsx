import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countrys = [] }) => {
  return (
    <div>
      <Grid>
        {countrys.map(country => (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

// Для створення списку країн використовуй компонент `CountryList`.

// Для створення сітки використовуй компоненти `<Grid>` та `<GridItem>`\
// всереденікомпонента `CountryList`\
// Пиклад розмітки однієї li

// ```
//  <GridItem >
//   <Link >
//     <img src='' alt='' />
//   </Link>
// </GridItem>
// ```
