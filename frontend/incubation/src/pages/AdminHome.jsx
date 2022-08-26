import React from 'react'
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import BookingList from '../components/Admin/BookAdminComponents/BookingList';
import ListPend from '../components/Admin/BookAdminComponents/ListPend';
// import PendingList from '../components/Admin/BookAdminComponents/PendingList';
import TestDrawer from '../components/Admin/TestDrawer';

const AdminHome = () => {
 
  return (
    <div >
        <TestDrawer>
         <BookingList/>
         <ListPend/>
         
        </TestDrawer>
    </div>
  );
};

export default AdminHome;
