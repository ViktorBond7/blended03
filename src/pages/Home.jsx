import { Container, Heading, Section, Loader, CountryList } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const countries = await getCountries();
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        {error ?? <Heading title={error} bottom />}
        {loading && <Loader />}
        {countries && <CountryList countrys={countries} />}
      </Container>
    </Section>
  );
};
