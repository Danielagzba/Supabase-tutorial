import React from "react"

const SunscreensCard = ({ sunscreen }) => {
    return(
        <div className="sunscreen-card">
            <h3>{sunscreen.productName}</h3>
            <h4>{sunscreen.brand}</h4>
            <p>{sunscreen.skinType}</p>
            <div className="spf">{sunscreen.spf}</div>
            <div className="reaply">Reapply every {sunscreen.reapply} min</div>
            <p>Reapply {sunscreen.reapplyActive} min after swimming or sweating</p>
            
        
        </div>
    )
}

export default SunscreensCard 

// [{ product_name:'a'}, { product_name:'b'}, { product_name:'c'}]