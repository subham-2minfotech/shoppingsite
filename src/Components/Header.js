import React, { useEffect } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { categoryAction } from '../store/category/action'
import Headerupper from './Headerupper'

function Header({ productId }) {
  const category = useSelector(state => state.category)
  console.log('category------', category);
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
        console.log('dataToStore =====', dataToStore);
        localStorage.setItem('Data', dataToStore);
        const data1 = JSON.parse(localStorage.getItem('Data'))
        console.log('data==', data1)
        if (data1) {
          dispatch(categoryAction(data1))
        }
        else {
          dispatch(categoryAction(JSON.parse('null')))
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [dispatch])

  return (
    <div className='header'>
      <div className='headerupper'>
        <Headerupper />
      </div>
      <div className='headerlower'>
        <div className='headerlowerMain'>
          {
            category.map((value) => {
              return (
                <div key={value.id} className='headerlowerComponents'>
                  <button className='productbuton'>
                    <img onClick={() => productId(value.id)} width="65" height="65" src={value.image} alt={value.name} />
                  </button>
                  <div>{value.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Header
