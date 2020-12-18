import React, {useEffect, useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import ShoeProduct from './components/ShoeProduct';
import Pagination from './components/pagination';
import Sidebar from './components/sidebar' 
import Header from './components/header'
import {ShoeModel, ShoeVariation, ProductFilters} from './interfaces/interfaces'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './App.scss';

function App() {
  const [shoeVariations, setShoeVariations] = useState<Array<ShoeVariation>>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<ProductFilters>({shoeModel: 'unset', shop: 'unset'});
  const [shoeModels, setShoeModels] = useState<Array<ShoeModel>>([]);

  const getModels = () => {
    axios.get('http://localhost:9000/api/shoes/models')
      .then( ({data}) => {
        setShoeModels(data);
        console.log(data);
      } )
  }

  const setShoeData = (page: Number) => {
    const params = {
      page:page,
      shoeModel: filters.shoeModel 
    }
    axios.get('http://localhost:9000/api/shoes/variations', {params})
      .then( ({data}) => {
        setShoeVariations(data);
      })
  }


  useEffect( () => {
    getModels();
    setShoeData(page);
  }, [page, filters])


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <main className="main-content">
        <Grid container>
          <Grid item xs={3} style={{padding: '.5rem 2rem'}}>
            <div className="sidebar-container">
              <h2>Filters</h2> 
              <Sidebar models={shoeModels} filter={filters} setFilter={setFilters} />
            </div>
          </Grid>
          <Grid item xs={9}>
            <section>
              { shoeVariations &&
                <>
                <ShoeProduct shoes={shoeVariations} />
                <Pagination currentPage={page} setPage={setPage} />
                </>
              }
            </section>
          </Grid>
        </Grid>
      </main>
      <footer>
        footer
      </footer>
    </div>
  </ThemeProvider>
  );
}

export default App;
