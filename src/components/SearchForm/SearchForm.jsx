import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';


const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onSubmit}) => {
  const [serchQuery, setSerchQuery] = useState('');
  const handleChange = event => {
    setSerchQuery(event.target.value);
  };
  const handleSubmit = (event) =>{
    event.preventDefault(); 
    onSubmit(serchQuery);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChange}
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => {
          return (
            <option key={region.id} value={region.value}>
              {region.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
