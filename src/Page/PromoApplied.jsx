import React from 'react'
import Banner from '../Component/Banner'
import Progress from '../Component/Progress'

function PromoApplied() {
 return (
    <>
    <Banner/>
    <div className='' >
        <Progress page={5} />
        
        Promo code applied
        </div>
    <Banner/>
    </>
  )
}

export default PromoApplied