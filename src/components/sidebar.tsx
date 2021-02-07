import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ShoeModel, ProductFilters, ShoeManufacturer} from '../interfaces/interfaces';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: '2rem',
      minWidth: 200,
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        display: 'inline-block',
        marginRight: '2rem'
      },
    },
    manuSelect: {
      minWidth: '200px',
    },
  }),
);


interface ShoeModelProps {
  filter: ProductFilters;
  setFilter: Dispatch<SetStateAction<ProductFilters>>;
}

const Sidebar: React.FC<ShoeModelProps> = ({filter, setFilter} ) => {

    const [manufacturers, setManufacturers] = useState<Array<ShoeManufacturer>>([]);
    const [manufacturer, setManufacturer] = useState('unset');
    //const [scrollY, setScrollY] = useState(0); // TODO implement this when its done properly
    const [models, setShoeModels] = useState<Array<ShoeModel>>([]);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const getModels = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/api/shoes/models`)
      .then( ({data}) => {
        setShoeModels(data);
      } )
    }

    const getManufacturers = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/api/manufacturers`)
        .then( ({data}) => {
          setManufacturers(data);
        })
    }

    // TODO Implement this when its done properly
    //const handleScroll = (e : any) => {
    //  console.log(window.innerWidth);
    //  if (window.innerWidth > 1074 ) {
    //    setScrollY(window.scrollY);
    //  } else {
    //    setScrollY(0)
    //  }
    //}

    //useLayoutEffect( () => {
    //  window.addEventListener('scroll', handleScroll);
    //  return () => {
    //    window.addEventListener('scroll', handleScroll);
    //  }
    //},[])

    useEffect(() => {
      getManufacturers();
      getModels();
    }, [])


    const classes = useStyles();

    const manuList = manufacturers.map( ( element: any, index: number) => {
      return(
        <option key={index} value={element._id}>{element.name}</option>
      )
    })

    const shoeModels = models.filter( (element: ShoeModel) => {
      if (element.manufacturer === manufacturer) {
        return element
      } else if ( manufacturer === 'unset'){
        return element
      }
      return null
    }).map( (model: any, index:number) => {
      return(
        <FormControlLabel key={index} value={model.id} control={<Radio />} label={model.name} />
      )
    })

    const shoeModelsOptions = models.filter( (element: ShoeModel) => {
      if (element.manufacturer === manufacturer) {
        return element
      } else if ( manufacturer === 'unset'){
        return element
      }
      return null
    }).map( (model: any, index:number) => {
      return(
        <option key={index} value={model.id}>{model.name}</option> 
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
      <div className="sidebar-container" style={{padding: '.5rem 2rem'}}>
        <h2>Filters</h2> 
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
        
        {matches ?
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select shoe model</FormLabel>
            <RadioGroup aria-label="Shoe model" name="gender1" value={filter.shoeModel} onChange={event => setFilterByValue('shoeModel', event.target.value)} >
                <FormControlLabel value="unset" control={<Radio />} label="All" />
                {shoeModels}
            </RadioGroup>
        </FormControl>
        : 
        <FormControl component="fieldset" variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="select-model-mobile">Select model</InputLabel>
            <Select
              className={classes.manuSelect}
              native
              value={filter.shoeModel}
              onChange={event => setFilterByValue('shoeModel', event.target.value)}
              label="Select model"
              inputProps={{
                name: 'Select model',
                id: 'select-model-mobile',
              }}
            >
            <option value="unset">All</option>
            {shoeModelsOptions}
        </Select>
        </FormControl>
        }

        </div>    
    )
}

export default Sidebar;
