import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';
import NavBar from '../components/NavBar';



import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

 //startpage should link to signupage
 export default function GroupedSelect() {
    const classes = useStyles();
  
    const [value, setValue] = React.useState('Group 1');

    const handleChange = (event : any) => {
        setValue(event.target.value);
    };

    return (
    <Router>
        <div className="App">
            <NavBar />
            <header>
            <h1>User Home Page</h1>
            </header>
            <h2>User Name and Postal Code</h2>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
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
            <h2>Available dates for vaccination:</h2>
        </div>
    </Router>

    );
}


//     <FormControl component="fieldset">
//             <FormLabel component="legend"><h2>Priority Group: </h2></FormLabel>
//                 <RadioGroup aria-label="role" name="role" value={value} onChange={handleChange}>
//                     {/*Phase 1 */}
//                     <FormControlLabel value="Group 1" control={<Radio />} label="Group 1: Residents and staff of long-term care facilities. " />
//                     <FormControlLabel value="Group 2" control={<Radio />} label="Group 2: Individuals assessed for and awaiting long-term care" />
//                     <FormControlLabel value="Group 3" control={<Radio />} label="Group 3: Residents and staff of assisted living residences" />
//                     <FormControlLabel value="Group 4" control={<Radio />} label="Group 4: Essential visitors to long-term care facilities and assisted living residences" />
//                     <FormControlLabel value="Group 5" control={<Radio />} label="Group 5: Hospital health care workers who may provide care for COVID-19 patients" />
//                     <FormControlLabel value="Group 6" control={<Radio />} label="Group 6: Remote and isolated Indigenous communities" />
//                     {/*Phase 2 */}
//                     <FormControlLabel value="Group 7" control={<Radio />} label="Group 7: Seniors aged 80 and over who are not immunized in Phase 1" />
//                     <FormControlLabel value="Group 8" control={<Radio />} label="Group 8: Indigenous seniors age 65 and over, Elders and additional Indigenous communities not immunized in Phase 1" />
//                     <FormControlLabel value="Group 9" control={<Radio />} label="Group 9: Hospital staff, community general practitioners (GPs) and medical specialists not immunized in Phase 1" />
//                     <FormControlLabel value="Group 10" control={<Radio />} label="Group 10: Vulnerable populations living and working in select congregated settings" />
//                     <FormControlLabel value="Group 11" control={<Radio />} label="Group 11: Staff in community home support and nursing services for seniors" />
//                     {/*Phase 3 */}
//                     <FormControlLabel value="Group 12" control={<Radio />} label="Group 12: People aged 79 to 60" />
//                     <FormControlLabel value="Group 13" control={<Radio />} label="Group 13: People aged 69 to 16 who are clinically extremely vulnerable" />
//                     {/*Phase 4 */}
//                     <FormControlLabel value="Group 14" control={<Radio />} label="Group 14: People aged 59 to 18" />
//                 </RadioGroup>
// </FormControl> 