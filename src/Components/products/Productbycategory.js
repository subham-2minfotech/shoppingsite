import React from 'react'
import './Productbycategory.css'

function Productbycategory() {
  const noName = [1, 2, 3, 4]
  return (
    <React.Fragment>
      {
        noName.map((value) => {
          return (
            <div className=' main'>
              <div className=' maininner'>
                <div className='photo'>
                  <img
                    className="photoinner"
                    alt="realme Narzo 30A (Laser Black, 64 GB)"
                    src="https://rukminim1.flixcart.com/image/312/312/klgx0280/mobile/g/r/o/narzo-30a-rmx3171-realme-original-imagyhbgwxdztd4u.jpeg?q=70"
                  />
                </div>
                <div className='details'>
                  realme Narzo 30A (Laser Black, 64 GB)
                </div>
              </div>
            </div>
          )
        })
      }

    </React.Fragment>
  )
}

export default Productbycategory
