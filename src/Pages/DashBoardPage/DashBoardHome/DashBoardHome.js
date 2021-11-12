import * as React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Calender from '../../../shared/calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    >

                    </Calender>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Appointments
                        date={date}

                    ></Appointments>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashBoardHome;