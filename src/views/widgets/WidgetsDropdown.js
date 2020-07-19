import React ,{Component} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'



class WidgetsDropdown extends Component {
  constructor(props){
    super(props);
    this.state ={
      posts:[],

      startDate: new Date(),
      endDate: new Date(),
      time: new Date() 
    };
   // alert(this.state.startDate);
   // alert(this.state.endDate);
   // this.handleChange = this.handleChange.bind(this);
  //  this.handleChange1 = this.handleChange1.bind(this);
   // this.onFormSubmit = this.onFormSubmit.bind(this);
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

 }
// onFormSubmit(e) {
 //  e.preventDefault();
  // alert(this.state.posts);
   //console.log(this.state.startDate)
  // console.log(this.state.endDate)

 //}


  componentDidMount(){
    //const url="http://13.235.146.159:8084/api/naf_weather/findall";
  // const data = {startDate:this.state.startDate, end_date:this.state.endDate};
  // const startDate1 = this.state.startDate.toLocaleDateString().slice(0, 10) 
  // .split('/').reverse().join('-');
  // const endDate1 = this.state.startDate+1;
  // const endDate2  = endDate1.toLocaleDateString().slice(0, 10).split('/').reverse().join('-');

   // const url=`http://13.235.146.159:8084/api/naf_weather/find_val/?start_date={encodeURIComponent(data.startDate)&endDate={encodeURIComponent(data.endDate)}`;
   
   //alert(`http://13.235.146.159:8084/api/naf_weather/find_val/${this.state.startDate.toLocaleDateString().slice(0, 10) 
  // .split('/').reverse().join('-')}/${this.state.endDate.toLocaleDateString().slice(0, 10) 
  // .split('/').reverse().join('-')}`);
  this.update = setInterval(() => {
    this.setState({ time: new Date() });
}, 1 * 1000); // every 1 seconds

   fetch(`http://13.235.146.159:8084/api/naf_weather/dashboard`,{
      method:"GET"
    })
.then(response=> response.json()).then(posts => {
     this.setState({posts:posts})
   })


  // alert(this.state.posts);
   //console.log(this.state.posts1['date']);
  }
  componentWillUnmount() { // delete the interval just before component is removed
    clearInterval(this.update);
}

  handleClick = () => {
   console.log('this is:', this);
 }
 
  render(){
  // const fields = ['date','time', 'temperature','pressure','humidity','windspeed','rain','solarradiation','winddirection','status','date_time','battery','solar','noofrecords','logging_time']

   const fields = ['date','time', 'temperature','pressure','humidity','windspeed','rain','solarradiation','winddirection']
  
   const { time } = this.state;
   return (


    
    <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-primary"
        header=  {this.state.posts['temperature'] + " °C"} 
        text="Temperature (°C)"
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            style={{height: '70px'}}
            dataPoints={[1, 18, 9, 17, 34, 22, 11]}
            pointHoverBackgroundColor="primary"
            label="Temperature"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-info"
        header={this.state.posts['humidity'] +" %"}
        text="Humidity (%)"
        footerSlot={
          <ChartLineSimple
            pointed
            className="mt-3 mx-3"
            style={{height: '70px'}}
            dataPoints={[34, 28, 17, 9, 34, 22, 11]}
            pointHoverBackgroundColor="info"
            options={{ elements: { line: { tension: 0.00001 }}}}
            label="Humidity"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret={false} color="transparent">
            <CIcon name="cil-location-pin"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-warning"
        header= {this.state.posts['pressure'] + " Hpa"} 
        text="Pressure (Hpa)"
        footerSlot={
          <ChartLineSimple
            className="mt-3"
            style={{height: '70px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
            label="Pressure"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-danger"
        header={this.state.posts['solarradiation'] + " (W/m2)"} 
        text="Solarradiation (W/m2)"
        footerSlot={
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(250, 152, 152)"
            label="Solarradiation"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>
   
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-success"
        header={this.state.posts['windspeed'] + " (Kwh)"} 
        text="Windspeed (Kwh)"
        footerSlot={
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(255, 255, 255)"
            label="Windspeed"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-primary"
        header={this.state.posts['rain'] + " (mm)"} 
        text="Rain (MM)"
        footerSlot={
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(255, 255, 255)"
            label="Rain"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-info"
        header={this.state.posts['winddirection']} 
        text="Winddirection"
        footerSlot={
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(255, 255, 255)"
            label="Winddirection"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-danger"
        header={time.toLocaleTimeString()}
        text="Current Time"
        footerSlot={
          <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '70px'}}
            backgroundColor="rgb(250, 152, 152)"
            label="Solarradiation"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle caret className="text-white" color="transparent">
            <CIcon name="cil-settings"/>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </CCol>
  </CRow>




   )
  }

}







export default WidgetsDropdown
