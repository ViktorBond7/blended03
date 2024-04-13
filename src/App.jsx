import { Header, Heading } from 'components';
import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route element={<Home />} index />
        <Route element={<SearchCountry />} path="/country" />
        <Route element={<Country />} path="/country/:countryId" />
      </Route>
    </Routes>
  );
};
