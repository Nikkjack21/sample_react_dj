import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const SlotBooking = () => {

const style ={
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      width: 128,
      height: 128,
      bgcolor: '#17fa23',
    },
}


  return (
    <div>

<Box
      sx={style}
    > Yooo
      <Paper elevation={3} />
    </Box>

    </div>
  )
}

export default SlotBooking