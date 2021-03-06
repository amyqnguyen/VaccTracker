import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';
import NavBar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import { apiUpdatePatientData } from '../api/apiRequest';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
    space : {
        width:"auto",
        height:"50px",
        display:"inline-block",
      } 
  }));

//const [header, setHeader] = React.useState('Test');

async function getData() {
  const response = await axios.get('https://api.covid19tracker.ca/summary');

  return response.data;
}

 //startpage should link to signupage
 export default function GroupedSelect() {

    const classes = useStyles();
    const [priority, setPriority] = React.useState('');
    const [covidData, setCovidData] = React.useState(undefined as any);

    const updatePriority = (event : any) => {
        setPriority(event.target.value);
    }

    const handleOnClick = () => {
        //NEED TO GET POSTALCODE? or should move to apiAddUser....
        apiUpdatePatientData('uuidstring', { priority });
    }

    const handleDataFetch = async () => {
      const data = await getData();
      setCovidData(data);
    }

    return (
       
            <div>
                <NavBar />
                <header>
                <h1>User Home Page</h1>
                </header>
                <h2>John Doe</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                    <Select defaultValue="" id="grouped-select" value={priority} onChange={updatePriority}>
                    <ListSubheader>Phase 1</ListSubheader>
                    <MenuItem value={1}>Group 1: Residents and staff of long-term care facilities</MenuItem>
                    <MenuItem value={2}>Group 2: Individuals assessed for and awaiting long-term care</MenuItem>
                    <MenuItem value={3}>Group 3: Residents and staff of assisted living residences</MenuItem>
                    <MenuItem value={4}>Group 4: Essential visitors to long-term care facilities and assisted living residences</MenuItem>
                    <MenuItem value={5}>Group 5: Hospital health care workers who may provide care for COVID-19 patients</MenuItem>
                    <MenuItem value={6}>Group 6: Remote and isolated Indigenous communities</MenuItem>
                    
                    <ListSubheader>Phase 2</ListSubheader>
                    <MenuItem value={7}>Group 7: Seniors aged 80 and over who are not immunized in Phase 1</MenuItem>
                    <MenuItem value={8}>Group 8: Indigenous seniors age 65 and over, Elders and additional Indigenous communities not immunized in Phase 1</MenuItem>
                    <MenuItem value={9}>Group 9: Hospital staff, community general practitioners (GPs) and medical specialists not immunized in Phase 1</MenuItem>
                    <MenuItem value={10}>Group 10: Vulnerable populations living and working in select congregated settings</MenuItem>
                    <MenuItem value={11}>Group 11: Staff in community home support and nursing services for seniors</MenuItem>
                
                    <ListSubheader>Phase 3</ListSubheader>
                    <MenuItem value={12}>Group 12: People aged 79 to 60</MenuItem>
                    <MenuItem value={13}>Group 13: People aged 69 to 16 who are clinically extremely vulnerable</MenuItem>

                    <ListSubheader>Phase 3</ListSubheader>
                    <MenuItem value={14}>Group 14: People aged 59 to 18</MenuItem>
                    </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleOnClick} 
                    >
                        Enter Priority
                    </Button>
                    <h3>You are in group priority {priority}!</h3>
                    <div className={classes.space} />
                    <h2>You will be notified via email once you can book an appointment!</h2>
                    <img src='emailImage.png' height="300px" />
            </div>
        
        
    );
}


