import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import { Dropdown } from "react-bootstrap";
import MDButton from "components/MDButton";
import { Form } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import {BootstrapButton} from"../profile/GuestLoginForm/components/OccupancyButton"

export default function HolidayTable() {
  const [data, setData] = useState([]);
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  useEffect(() => {

  }, []);


  const [columns, setColumns] = useState([

    {
      title: "Building",
      field: "holidayTitle",
      validate: (rowData) => {
        if (rowData.holidayTitle === undefined) {
          return "Holiday Title is Required";
        } else if (!rowData.holidayTitle.match(/^[aA-zZ\s]+$/)) {
          return " Please enter valid name";
        }
        return true;
      },
    },
    {
      title: "Income",
      field: "holidayDate",
      type: "date",
      validate: (rowData) => {
        if (rowData.holidayDate === undefined || rowData.holidayDate === "") {
          return "Required";
        }
        return true;
      },  
    },
    {
      title: "Refund",
      field: "holidayDate",
      type: "date",
      validate: (rowData) => {
        if (rowData.holidayDate === undefined || rowData.holidayDate === "") {
          return "Required";
        }
        return true;
      },  
    },
    {
      title: "Actual Income",
      field: "holidayDate",
      type: "date",
      validate: (rowData) => {
        if (rowData.holidayDate === undefined || rowData.holidayDate === "") {
          return "Required";
        }
        return true;
      },  
    },


  ]);
  const obj = { updatedBy: employeeid };
  return (
<Grid container spacing={2}>
                      <Grid item xs={8} style={{ paddingLeft: 10, height: 49, marginLeft: 180 }}>      
      <Grid container spacing={2} direction="row">
<Grid item xs={4}> 
        <Form>
          <Form.Group>
            <Form.Label>Select Year</Form.Label>
            <Form.Select
              style={{
                width: "48%",
                height: "8%",
                padding: "9px",
                marginLeft: "10px",
                cursor: "pointer",
                borderRadius : 10

              }}
            >
              <option>Select</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </Form.Select>
          </Form.Group>
        </Form>
        </Grid>

        <Grid item xs={4}> 
        <Form>
          <Form.Group>
            <Form.Label>Select Month</Form.Label>
            <Form.Select
              style={{
                width: "48%",
                height: "8%",
                padding: "9px",
                marginLeft: "10px",
                cursor: "pointer",
                borderRadius : 10
              }}
            >
              <option>Select</option>
              <option value="January">January</option>
              <option value="February">February </option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="June">July</option>
              <option value="Augest">Augest</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>

              

            </Form.Select>
          </Form.Group>
        </Form>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} > 
        <Box>
        <BootstrapButton  variant="contained"
                  disableRipple
                  
                  style={{width: '100%', height: '100%',backgroundColor:'blue',borderRadius : 12,color:'white'}}
                  value="OneMonth">
  Submit
</BootstrapButton>
        </Box>
        

        </Grid>
        </Grid>

      <br />
      <Grid>
        <MaterialTable
          columns={columns}
          title="Monthly Summary"
          data={data}
          editable={{
          }}
          options={{
            paging: false,
            addRowPosition: "first",
            actionsColumnIndex: -1,
         
            headerStyle: {
              backgroundColor: "#0062cc",
              color: "white",
            },
            exportButton: true,
          }}
        />
      </Grid>
    </Grid>
    </Grid>

  );
}

// import React, { useState, useEffect } from "react";
// import MaterialTable from "material-table";
// import { Grid, Box, Card } from "@mui/material";
// // import Button from '../profile/GuestLoginForm/components/Button'
// import Button from "react-bootstrap/Button";
// import { makeStyles } from "@material-ui/core/styles";

// // import axios from "axios";
// import axios from "../../Uri";
// // import { height, width } from "@mui/system";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// function Monthly() {
//   let userData = JSON.parse(sessionStorage.getItem("userdata"));
//   let userId = userData.data.userId;
//   console.log(userId);

//   const useStyles = makeStyles({
//     root: {
//       minWidth: 200,
//       backgroundColor: "#1E90FF",
//     },
//     bullet: {
//       display: "inline-block",
//       margin: "0 2px",
//       transform: "scale(0.8)",
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });
//   const [data, setData] = useState([]);
//   const classes = useStyles();

//   const columns = [
//     // "firstName": "  VINEELA",
//     // "id": "SLH000066",
//     // "bedId": "1-210-A-AC",
//     // "personalNumber": "8989898989",
//     // "email": "vineela@gmail.com",
//     // "dueAmount": 0,
//     // "checkInDate": "10-05-2022 19:59:54",
//     // "checkOutDate": "25-05-2022 00:00:00",
//     // "buildingName": "SREE KALA NILAYAM"

//     {
//       title: "Guest Name",
//       field: "firstName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       //   validate: (rowData) => {
//       //     if (
//       //       rowData.buildingName === undefined ||
//       //       rowData.buildingName === ""
//       //     ) {
//       //       return "Required";
//       //     } else if (!rowData.buildingName.match(/[^0-9]/g)) {
//       //       return " Enter Valid Name";
//       //     }

//       //     return true;
//       //   },
//     },
//     {
//       title: "Building Name",
//       field: "buildingName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       // validate: (rowData) => {
//       //   if (
//       //     rowData.buildingName === undefined ||
//       //     rowData.buildingName === ""
//       //   ) {
//       //     return "Required";
//       //   } else if (!rowData.buildingName.match(/[^0-9]/g)) {
//       //     return " Enter Valid Name";
//       //   }

//       //   return true;
//       // },
//     },
//     {
//       title: "Guest ID",
//       field: "id",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       //   validate: (rowData) => {
//       //     if (rowData.userName === undefined || rowData.userName === "") {
//       //       return "Required";
//       //     } else if (!rowData.userName.match(/[^0-9]/g)) {
//       //       return " Enter Valid Name";
//       //     }

//       //     return true;
//       //   },
//     },

//     // {
//     //   title: "Role",
//     //   field: "userType",
//     //   lookup: { manager: "Manager" },
//     //   headerStyle: {
//     //     backgroundColor: "#1E90FF",
//     //     color: "white",
//     //   },
//     //   validate: (rowData) => {
//     //     if (rowData.userType === undefined || rowData.userType === "") {
//     //       return "Required";
//     //     }

//     //     // else if (!rowData.userType.match(/[^0-9]/g)) {
//     //     //   return " Enter Valid Name";
//     //     // }

//     //     return true;
//     //   },

//     // },

//     {
//       title: "Phone Number",
//       field: "personalNumber",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       //   validate: (rowData) => {
//       //     if (
//       //       rowData.userPhoneNumber === undefined ||
//       //       rowData.userPhoneNumber === ""
//       //     ) {
//       //       return "Required";

//       //       // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
//       //       //   return" Please enter valid Phone number"
//       //     } else if (
//       //       rowData.userPhoneNumber.length < 10 ||
//       //       rowData.userPhoneNumber.length > 10
//       //     ) {
//       //       return " Please enter valid mobile number";
//       //     }
//       //     return true;
//       //   },
//     },
//     // {
//     //     title: "Check-In Date",
//     //     field: "checkInDate",

//     //     headerStyle: {
//     //       backgroundColor: "#1E90FF",
//     //       color: "white",
//     //     },
//     // validate: (rowData) => {
//     //   if (
//     //     rowData.userPhoneNumber === undefined ||
//     //     rowData.userPhoneNumber === ""
//     //   ) {
//     //     return "Required";

//     //     // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
//     //     //   return" Please enter valid Phone number"
//     //   } else if (
//     //     rowData.userPhoneNumber.length < 10 ||
//     //     rowData.userPhoneNumber.length > 10
//     //   ) {
//     //     return " Please enter valid mobile number";
//     //   }
//     //   return true;
//     // },
//     // },
//     {
//       title: "Check Out Date",
//       field: "checkOutDate",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       // validate: (rowData) => {
//       //   if (
//       //     rowData.userPhoneNumber === undefined ||
//       //     rowData.userPhoneNumber === ""
//       //   ) {
//       //     return "Required";

//       //     // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
//       //     //   return" Please enter valid Phone number"
//       //   } else if (
//       //     rowData.userPhoneNumber.length < 10 ||
//       //     rowData.userPhoneNumber.length > 10
//       //   ) {
//       //     return " Please enter valid mobile number";
//       //   }
//       //   return true;
//       // },
//     },
//     {
//       title: "Bed ID",
//       field: "bedId",

//       headerStyle: {
//         backgroundColor: "#1E90FF",
//         color: "white",
//       },
//       // validate: (rowData) => {
//       //   if (
//       //     rowData.userPhoneNumber === undefined ||
//       //     rowData.userPhoneNumber === ""
//       //   ) {
//       //     return "Required";

//       //     // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
//       //     //   return" Please enter valid Phone number"
//       //   } else if (
//       //     rowData.userPhoneNumber.length < 10 ||
//       //     rowData.userPhoneNumber.length > 10
//       //   ) {
//       //     return " Please enter valid mobile number";
//       //   }
//       //   return true;
//       // },
//     },
//     //   {
//     //     title: "Due Amount",
//     //     field: "dueAmount",

//     //     headerStyle: {
//     //       backgroundColor: "#1E90FF",
//     //       color: "white",
//     //     },
//     //     validate: (rowData) => {
//     //       if (
//     //         rowData.userPhoneNumber === undefined ||
//     //         rowData.userPhoneNumber === ""
//     //       ) {
//     //         return "Required";

//     //         // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
//     //         //   return" Please enter valid Phone number"
//     //       } else if (
//     //         rowData.userPhoneNumber.length < 10 ||
//     //         rowData.userPhoneNumber.length > 10
//     //       ) {
//     //         return " Please enter valid mobile number";
//     //       }
//     //       return true;
//     //     },
//     //},
//   ];

//   useEffect(() => {
//     axios

//       .get("/guest/findGuestAreVacated/VACATED")

//       .then((res) => {
//         setData(res.data);

//         console.log(res.data);
//       })

//       .catch((err) => {
//         console.log(err);
//         // toast.error("Server Error")
//       });
//   }, []);

//   const obje = { createdBy: userId };
//   const [selectedDate, setSelectedDate] = React.useState(
//     new Date("2014-08-18")
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={2}></Grid>
//         <Grid item xs={12}>
//           <Card className={classes.root}>
//             <Grid item xs={12}>
//               <h4>Select Month and Year</h4>
//             </Grid>
//             <Grid item xs={4}>
//               <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                   disableToolbar
//                   variant="inline"
//                   format="MM/yyyy"
//                   views={["year", "month"]}
//                   margin="normal"
//                   id="date-picker-inline"
//                   label="Date picker inline"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   KeyboardButtonProps={{
//                     "aria-label": "change date",
//                   }}
//                 />
//               </MuiPickersUtilsProvider>
//             </Grid>
//             <Grid item xs={4}>
//               <Button variant="primary">Submit</Button>
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Monthly;
