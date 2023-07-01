import React from 'react'

function Map() {

    return (
        <div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className='w-full h-[500px]' id="gmap_canvas" src="https://maps.google.com/maps?q=Av.+Autom%C3%B3vel+Clube%2C+922+-+Santa+Cruz+da+Serra%2C+Duque+de+Caxias+-+RJ%2C+25260-000&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map