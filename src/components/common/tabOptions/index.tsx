import "./styles.css";

//type of props we have to define here inside the interface
interface TabOptionsProps{
    state:string;
    setState: any;
}

const tab = [

    {
        id:1,
        title:"Dining Out",
        active_img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        backdrop:"#E5F3F3",
        inactive_img:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"  
    },

    {
        id:2,
        title:"Delivery",
        active_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
        backdrop:"#FCEEC0",
        inactive_img:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    
    {
        id:3,
        title:"NightLife",
        active_img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop:"#EDF4FF",
        inactive_img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    }
]

function TabOptions({state, setState}:TabOptionsProps){
    return(
        <div className="tab-options max-width">
            <div className="tab-options-wrapper" style={{height:"62px"}}>
                <div className="dining-delivery-nightlife-container" style={{display:"flex",alignItems:"center"}}>
                    <div className="dining-icon-container" style={{width:"200px"}}>
                        <div className="dining-out-icon-wrap" style={{display:"flex",padding:"8px",marginLeft:"10px",alignItems:"center", cursor:"pointer"}} onClick={()=>setState("Dining Out")}>
                            <div className="icon-container" style={{marginRight:"9px",cursor:"pointer",background:`${state==="Dining Out" ? "#E5F3F3" : ""}`,height:"50px",width:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>

                                {state==="Dining Out" ? <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp" style={{width:"30px"}} alt="dining-out-icon" className="dining-out-icon"/>
                                                    : <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" style ={{width:"30px"}} alt="delivery-icon" className="delivery-icon"/>
                                }
                            </div>

                            <div className="dining-out" style={{fontWeight:"500",fontSize:"20px", color:`${state==="Dining Out" ? "rgb(239, 79, 95)" : ""}`}}>Dining Out</div>
                        </div>

                        {state==="Dining Out" ? <div style={{borderBottom:"2px solid rgb(239, 79, 95)",width:"200px"}}></div> : " "}
                    </div>

                    <div className="delivery-icon-container"  style={{width:"200px"}}>
                        <div className="delivery-icon-wrap" style={{display:"flex",padding:"8px",marginLeft:"10px",alignItems:"center",cursor:"pointer"}} onClick={()=>setState("Delivery")}>
                            <div className="icon-container" style={{marginRight:"9px",cursor:"pointer",background:`${state==="Delivery" ? "#FCEEC0" : ""}`,display:"flex",alignItems:"center",justifyContent:"center", height:"50px",width:"50px",borderRadius:"50%"}}>
                                {state==="Delivery" ? <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" style ={{width:"30px"}} alt="delivery-icon" className="delivery-icon"/>
                                                    : <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" style ={{width:"30px"}} alt="delivery-icon" className="delivery-icon"/>
                                }
                            </div>

                            <div className="delivery" style={{fontWeight:"500",fontSize:"20px",color:`${state==="Delivery" ? "rgb(239, 79, 95)" : ""}`}}>Delivery</div>
                        </div>

                        {state==="Delivery" ? <div style={{borderBottom:"2px solid rgb(239, 79, 95)",width:"200px"}}></div> : " "}
                    </div>

                    <div className="nightlife-icon-container"  style={{width:"200px"}}>
                        <div className="nightlife-icon-wrap" style={{display:"flex",padding:"8px",marginLeft:"10px",alignItems:"center",cursor:"pointer"}} onClick={()=>setState("Nightlife")}>
                            <div className="icon-container" style={{marginRight:"9px",cursor:"pointer",background:`${state==="Nightlife" ? "#EDF4FF" : ""}`,display:"flex",alignItems:"center",justifyContent:"center", height:"50px",width:"50px",borderRadius:"50%"}}>
                                {state === "Nightlife" ? <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="nightlife-icon" style={{width:"30px"}} className="nightlife-icon"/>
                                                        : <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="nightlife-icon" style={{width:"30px"}} className="nightlife-icon"/>
                                }
                            </div>

                            <div className="nightlife" style={{fontWeight:"500",fontSize:"20px",color:`${state==="Nightlife" ? "rgb(239, 79, 95)":""}`}}>Nightlife</div>
                        </div>

                        {state==="Nightlife" ? <div style={{borderBottom:"2px solid rgb(239, 79, 95)",width:"200px"}}></div> : " "}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabOptions;