import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))




const Dashboard = () => {
  return (
    <>
     <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Weather Data </h4>
              <div className="small text-muted">@ Avvron </div>
              <div><br/></div>
              <div className="small text-muted">Station : Kolwadi (Maharashtra
) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
            </CCol>
            </CRow>
            </CCardBody>
            </CCard>

      <WidgetsDropdown />
      
    </>
  )
}

export default Dashboard
