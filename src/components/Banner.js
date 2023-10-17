import React from 'react'

export default function Banner() {
  return (
    <div className='content'>
        <div className='banner'>
            <div className='header'>Navigation</div>
            <div className='banner-content'>
              <div>
                <h2>Banner title</h2>
                <p>Banner subtitle</p>
              </div>
              <button className='banner-button'>Click me!</button>
            </div>
            <div className='banner-arrow-down'>&#129131;</div>
        </div>
    </div>
  )
}
