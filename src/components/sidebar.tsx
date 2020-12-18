import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ShoeModel, ProductFilters} from '../interfaces/interfaces';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: '2rem',
      minWidth: 200,
      display: 'block',
    },
    manuSelect: {
      minWidth: '200px',
    },
  }),
);


interface ShoeModelProps {
  models: ShoeModel[];
  filter: ProductFilters;
  setFilter: Dispatch<SetStateAction<ProductFilters>>;
}

const Sidebar: React.FC<ShoeModelProps> = ({models, filter, setFilter} ) => {

    const [manufacturers, setManufacturers] = useState([]);
    const [manufacturer, setManufacturer] = useState("unset");

    const getManufacturers = () => {
      axios.get('http://localhost:9000/api/manufacturers')
        .then( ({data}) => {
          console.log(data)
          setManufacturers(data);
        })
    }

    useEffect(() => {
      getManufacturers();
    }, [])


    const classes = useStyles();

    const manuList = manufacturers.map( ( element: any, index: number) => {
      return(
        <option key={index} value={element._id}>{element.name}</option>
      )
    })

    const shoeModels = models.filter( (element:any) => {
      if (element.manufacturer === manufacturer) {
        return element
      } else if ( manufacturer === 'unset'){
        return element
      }
    })
    
    .map( (model: any, index:number) => {
      return(
        <FormControlLabel key={index} value={model.id} control={<Radio />} label={model.name} />
      )
    })

    const setFilterByValue = (type:  string, value: any) => {
      const updateFilter = {...filter};
      updateFilter.shoeModel = value;
      setFilter(updateFilter);
    }

    const handleManufacturer = (event: any) => {
      setManufacturer(event.target.value);
    }

    return(
        <>
       <FormControl component="fieldset" variant="outlined" className={classes.formControl}> 
        <InputLabel htmlFor="outlined-age-native-simple">Select manufacturer</InputLabel>
        <Select
          className={classes.manuSelect}
          native
          value={manufacturer}
          onChange={handleManufacturer}
          label="Select manufacturer"
          inputProps={{
            name: 'Select manufacturer',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="unset">
            Unset
          </option>
          {manuList}
        </Select>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select shoe model</FormLabel>
            <RadioGroup aria-label="Shoe model" name="gender1" value={filter.shoeModel} onChange={event => setFilterByValue('shoeModel', event.target.value)} >
                <FormControlLabel value="unset" control={<Radio />} label="All" />
                {shoeModels}
            </RadioGroup>
        </FormControl>
        </>    
    )
}

export default Sidebar;