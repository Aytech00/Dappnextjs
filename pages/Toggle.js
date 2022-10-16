
import React, {useState} from 'react'

const Toggle = ()=>{
   const [tabState, setTabSate] = useState('binance')

const binanceTab = (item)=>{
    setTabSate(item);
}

const polyTab = ()=>{
    console.log('Polygon page is working');
}


return(

    <div className='Toggle'>

        <div className='inner-toggle-container'>

        <div className='toggle-child'>
        
        <button className='bsc-btn' onClick={ ()=> binanceTab('binance')}>Binance </button>
       
        </div>
        <div className='toggle-child'>
        
       
        <button className='polygon-btn' onClick={()=> polyTab}>Polygon</button>
       

        </div>
        </div>


        <div className='binace-page'>

            

        </div>

        <div className='polygon'>

</div>
        
    </div>

)
}

export default Toggle;