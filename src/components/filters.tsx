import { Dispatch, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ShoeModel, ProductFilters} from '../interfaces/interfaces';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
    formControl: {
      minWidth: 300,
      margin: '0 1rem',
      backgroundColor: '#FFF'
    },
}));

interface ShoeModelProps {
  models: ShoeModel[];
  filter: ProductFilters;
  setFilter: Dispatch<SetStateAction<ProductFilters>>;
}

const Filters: React.FC<ShoeModelProps> = ({models, filter, setFilter} ) => {
    const classes = useStyles();

    const shoeModels = models.map( (model: any, index:number) => {
      return(
          <MenuItem key={index} value={model.id}>{model.name} | count:{model.itemCount}</MenuItem>
      )
    })

    const setFilterByValue = (type:  string, value: any) => {
      const updateFilter = {...filter};
      updateFilter.shoeModel = value;
      setFilter(updateFilter);
    }

    return(
        <div className="filters">
          <div className="filters-heading">
            <h2>Filters</h2>
          </div>
          <div className="filters-select">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Select model</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Select model"
                  value={filter.shoeModel}
                  onChange={event => setFilterByValue('shoeModel', event.target.value)}
                >
                  <MenuItem value="unset">
                    Unset
                  </MenuItem>
                  {shoeModels}
                </Select>
            </FormControl>
          </div>
        </div>
    )
}

export default Filters;