import React from 'react'
import "./styles.css";

const BreadCrumbs = () => {
  return (
    <div className='breadcrumbs max-width'>
      <div className='breadcrumbs-wrapper'>
        <div className='title-country-restaurant-container' style={{display:"flex", alignItems:"center"}}>
          <div className='title-wrap' style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"12px",padding:"4px 8px",color:"rgb(130, 130, 130)"}}>Home</span>

            <div style={{color:"rgb(181, 181, 181)",fontSize:"12px"}}>/</div>
          </div>

          <div className='country-wrap' style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"12px",padding:"4px 8px", color:"rgb(130, 130, 130)"}}>india</span>

            <div style={{color:"rgb(181, 181, 181)", fontSize:"12px"}}>/</div>
          </div>

          <div className='restaurant-wrap' style={{display:"flex", alignItems:"center"}}>
              <span style={{fontSize:"12px",padding:"4px 8px",color: "rgb(207, 207, 207)"}}>Bengaluru Restaurant</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumbs;