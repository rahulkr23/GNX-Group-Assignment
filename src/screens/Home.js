import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Home = () => {
  
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Meals, Cuisine, Occasion"
      onChangeText={onChangeSearch}
      value={searchQuery}
      
    />

    
  );
  

};

export default Home;