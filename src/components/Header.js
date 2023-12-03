import React from 'react'

export default function Header() {
  window.addEventListener('scroll',() => {
    let head = document.getElementById('head')
    let header = document.getElementById('header')
    console.log(window.pageYOffset)
    if (window.pageYOffset >= head.offsetHeight){
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })
  let show = async () => {
  }
  return (
    <div className='ml-[8%] bg-wawe_logo bg-bottom bg-cover rounded-xl'>
      <div className='h-[90px] rounded-xl flex justify-center' id='head'>
        <p className='font-bold text-4xl'>LuxOchki</p>
      </div>
      <div className='mt-[0.5%] top-0 bg-bgblue' id='header'>HEAD</div>
    </div>
  )
}
