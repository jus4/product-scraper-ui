import React, {useEffect, useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import ShoeProduct from './components/ShoeProduct';
import PagePagination from './components/pagination';
import Sidebar from './components/sidebar' 
import Header from './components/header'
import Footer from './components/footer'
import {ShoeVariation, ProductFilters} from './interfaces/interfaces'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './App.scss';

function App() {
  const [shoeVariations, setShoeVariations] = useState<Array<ShoeVariation>>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState<ProductFilters>({shoeModel: 'unset', shop: 'unset'});

  const setShoeData = (page: Number) => {
    const params = {
      page:page,
      shoeModel: filters.shoeModel 
    }
    axios.get('http://localhost:9000/api/shoes/variations', {params})
      .then( ({data}) => {
        console.log(data);
        setShoeVariations(data.shoes);
        setTotalPages(data.totalPages);
      })
  }

  useEffect( () => {
    setShoeData(page);
  }, [page, filters])


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <main className="main-content">
        <Grid container>
          <Grid item xs={3} style={{padding: '.5rem 2rem'}}>
              <Sidebar filter={filters} setFilter={setFilters} />
          </Grid>
          <Grid item xs={9}>
            <section>
              { shoeVariations &&
                <>
                <ShoeProduct shoes={shoeVariations} />
                <PagePagination currentPage={page} setPage={setPage}  totalPages={totalPages} />
                </>
              }
            </section>
          </Grid>
        </Grid>
      </main>
    </div>
    <Footer />
  </ThemeProvider>
  );
}

export default App;
