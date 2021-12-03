import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
} from '@material-ui/pickers';
const RegisteredEvent = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date().toLocaleString());
    // const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().slice(0, 10));
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    console.log(selectedDate)
    return (
        <div>
            <h3>This is registered event component</h3>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">

                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default RegisteredEvent;