import React from 'react';
import SignUpPage from '../pages/signuppage';
import LoginPage from '../pages/loginpage';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

 //startpage should link to signupage
export default function UserHomePage() {
    const [value, setValue] = React.useState('Group 1');

    const handleChange = (event : any) => {
        setValue(event.target.value);
    };

    return (
    <Router>
        <div className="App">
            <header>
            <h1>Covid-19 Vaccine Finder: User Home Page</h1>
            </header>
            <FormControl component="fieldset">
            <FormLabel component="legend"><h2>Priority Group: </h2></FormLabel>
                <RadioGroup aria-label="role" name="role" value={value} onChange={handleChange}>
                    {/* Need to used specific group based on health bc priorty and add groups if necessary */}
                    <FormControlLabel value="Group 1" control={<Radio />} label="Group 1" />
                    <FormControlLabel value="Group 2" control={<Radio />} label="Group 2" />
                    <FormControlLabel value="Group 3" control={<Radio />} label="Group 3" />
                </RadioGroup>
            </FormControl>
        </div>
    </Router>

    );
}