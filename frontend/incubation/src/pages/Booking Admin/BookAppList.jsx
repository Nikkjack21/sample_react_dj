import React from 'react'
import ApprovedList from '../../components/Admin/Approved&Declined/ApprovedList'
import DeclinedList from '../../components/Admin/Approved&Declined/DeclinedList'
import TestDrawer from '../../components/Admin/TestDrawer'

const BookAppList = () => {
  return (
    <div>
        <TestDrawer>

       <ApprovedList/>
       <DeclinedList/>
        </TestDrawer>
        
    </div>
  )
}

export default BookAppList