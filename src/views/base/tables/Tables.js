import React,{useMemo,Component} from 'react';
import ReactTable from "react-table";  
import DatePicker from 'react-datepicker';
//import DataTable from 'react-data-table-component';
import * as moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';   
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CButton,
  CCardFooter,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import CIcon from '@coreui/icons-react'
  
import { CSVLink } from "react-csv";
 

 

 

//import usersData from '../../users/UsersData'

class Tables extends Component {
   constructor(props){
     super(props);
     this.state ={
       posts:[],
       startDate: new Date(),
       endDate: new Date(),
     };
     this.state.endDate.setDate(this.state.endDate.getDate() + 1);

     this.handleChange = this.handleChange.bind(this);
     this.handleChange1 = this.handleChange1.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
   }
   handleChange(date) {
    this.setState({
      startDate: date
    })

  }
  handleChange1(date) {
    this.setState({
      endDate: date
    })

  //this.state.endDate.setDate(this.state.endDate.getDate() + 1)
 
  }



  onFormSubmit(e) {
    e.preventDefault();
    //console.log(this.state.startDate)
    //console.log(this.state.endDate)

    this.setState({
      startDate: this.state.startDate,
  
    })
   
    this.setState({
      endDate: this.state.endDate
    })
  
    const url=`http://13.235.146.159:8084/api/naf_weather/find_val/${this.state.startDate.toLocaleDateString().slice(0, 10).split('/').reverse().join('-')}/${this.state.endDate.toLocaleDateString().slice(0, 10).split('/').reverse().join('-')}`;
  
   // this.FetchData();
   fetch(url,{
    method:"GET"
  }).then(response=> response.json()).then(posts => {
    this.setState({posts:posts})
  })
  //alert(this.state.posts)
  }




   handleClick = () => {
    console.log('this is:', this);
  }
   render(){
   // const fields = ['date','time', 'temperature','pressure','humidity','windspeed','rain','solarradiation','winddirection','status','date_time','battery','solar','noofrecords','logging_time']

   // const fields = ['date','time', 'temperature','pressure','humidity','windspeed','rain','solarradiation','winddirection']
    //const columns = ['Date','Time', 'Temperature (°C)','Pressure (Hpa)','Humidity (%)','Windspeed (KWh)','Rain (MM)','Solarradiation','Winddirection']
    this.state.posts= this.state.posts.map(row => ({...row, date: moment(row.date).format("DD-MM-YYYY")}))
   
    const headers = [
      { label: "Date", key: "date"},
      { label: "Time", key: "time" },
      { label: "Temperature(°C)", key: "temperature" },
      { label: "Pressure(Hpa)", key: "pressure" },
      { label: "Humidity(%)", key: "humidity"},
      { label: "Windspeed(KW/h)", key: "windspeed" },
      { label: "Rain(mm)",  key: "rain" },
      { label: "Solarrad(W/m2)",  key: "solarradiation" },
      { label: "Winddir",  key: "winddirection" }
      
    ];

// Output in M d, Y format
    // const customProps = { id: 'emp' };
    
    
  
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
       
<CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="date-input">Start Date</CLabel>
                  </CCol>
                  <CCol md="2">
                     <DatePicker id="date-input" name="startDate" placeholder="date"    selected={ this.state.startDate }
              onChange={ this.handleChange } />
                  </CCol>
                  <CLabel>"                               "</CLabel>
                  <CCol md="1">
                    <CLabel htmlFor="date-input">End Date</CLabel>
                  </CCol>
                  <CCol xs="3" md="2">
                    <DatePicker id="date-input" name="endDate" placeholder="date"   selected={ this.state.endDate }
              onChange={ this.handleChange1 }/>
                  </CCol>
                  <CLabel>"                     "</CLabel>
                  <CCol xs="3" md="2">

                  <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Show Data</CButton>
                  
                  </CCol>
                  <CCol xs="3" md="2">
                  <CSVLink data={this.state.posts} headers={headers} filename={"WeatherData.csv"} className="btn btn-primary" size="sm">
                  Export Data
                  </CSVLink>
                  </CCol>
                </CFormGroup>         
        
      <>
        <CRow>
          <CCol xs="25" lg="12">
            <CCard>
              <CCardHeader >
                Weather Data
              </CCardHeader>
              <CCardBody align="center">
              <CDataTable
                
                items={this.state.posts}
                fields={headers}
                //columns={columns}
                itemsPerPage={8}
                
              
                pagination
                //getProps={() => customProps}
             
  
              />
              </CCardBody>
            </CCard>
          </CCol>
  
          
        </CRow>
      </>
        </div>

      </form>

    )
   }

}


export default Tables
