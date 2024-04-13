import { Container, Heading, Section,SearchForm, Loader, CountryList } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';


export const SearchCountry = () => {

  const [query,setQuery] = useState('');
  const [countries,setCountries] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      setLoading(true);
      try {
        const countries = await fetchByRegion(query);
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  const onSubmit = (query) => {
    setError(null);
  setQuery(query);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
        {countries && <CountryList countrys={countries} />}
      </Container>
    </Section>
  );
};
