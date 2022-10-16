
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
        <h5 className='bsc-btn' onClick={ ()=> binanceTab('binance')}>Binance </h5>

        </div>
        <div className='toggle-child'>
        <h5 className='polygon-btn' onClick={()=> polyTab}>Polygon</h5>

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