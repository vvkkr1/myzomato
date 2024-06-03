import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/diningOut'
import Nightlife from '../../components/nightLife'
import BreadCrumbs from '../../components/common/breadcrumbs'


const getCorrectScreen = (tab:any) => {
    switch(tab){
        case "Delivery" :
            return <Delivery/>

        case "Dining Out":
            return <DiningOut/>
            
        case "Nightlife":
            return <Nightlife/>

        default: 
        return <Delivery/>
    }
}


function Homepage(){

  const[state, setState] = useState("Delivery")

  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <TabOptions state={state} setState={setState}/>
        {/* Diff Screen */}
        {getCorrectScreen(state)}
        <Footer/>
    </div>
  )
}

export default Homepage