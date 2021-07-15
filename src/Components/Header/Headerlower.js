import React, { useEffect } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateCategoryData } from '../../store/category/action'
import { updateProductId } from '../../store/productid/action'


function Headerlower() {
  const category = useSelector(state => state.category)
  // console.log('category------', category);
  const dispatch = useDispatch()
  useEffect(() => {
    const recipeUrl = 'http://127.0.0.1:3000/categories'
    const requestMetadata = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify())
    };
    fetch(recipeUrl, requestMetadata)
      .then(response => response.json())
      .then(data => {
        let dataToStore = JSON.stringify(data);
        // console.log('categories details =====', dataToStore);
        localStorage.setItem('Data', dataToStore);
        const data1 = JSON.parse(localStorage.getItem('Data'))
        // console.log('data==', data1)
        if (data1) {
          dispatch(updateCategoryData(data1))
        }
        else {
          dispatch(updateCategoryData(JSON.parse('null')))
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [dispatch])

  const updateProduct = (props) => {
    dispatch(updateProductId(props))
  }

  return (
    <div className='headerlowerMain'>
      {
        category.map((value) => {
          return (
            <div key={value.id} className='headerlowerComponents'>
              <button className='productbuton'>
                <img
                  // onClick={() => productId(value.id)}
                  onClick={() => updateProduct(value.id)}
                  width="65" height="65"
                  src={value.image}
                  alt={value.name}
                />
              </button>
              <div>{value.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Headerlower
