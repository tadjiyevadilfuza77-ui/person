import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  const [sum, setSum] = useState(0)

  function increment() {
    setSum(sum + 12)
  }

  return (
    <div className='container'>
      <div className='bg-[#1C1F24] rounded-4xl w-[550px] m-auto'>
        <div className='py-9 px-7.5'>
          <h1 className='text-xl font-semibold text-center text-white pb-[55px]'>Hamster Kombat</h1>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2.5'>
              <img src="/krisa.svg" alt="" />
              <p className='font-semibold text-white'>Nick Jay</p>
            </div>
            <img src="images/binance.png" alt="" />
          </div>
        </div>
        <div className='rounded-4xl bg-[#2C2F35] py-7 px-7.5 shadow-[0_0_140px_35px_rgba(234,179,8,0.35),0_25px_80px_25px_rgba(0,0,0,0.85)] border border-yellow-400/60'>
          <div className='flex items-center justify-between pb-6'>
            <div className='bg-[#32363C] py-2 px-7.5 w-[140px] rounded-2xl'>
              <p className='text-center text-[#F79841] text-[13px] font-bold'>Earn per tap</p>
              <img className='m-auto' src="/coin.svg" alt="" />
            </div>
            <div className='bg-[#32363C] py-2 px-7.5 w-[140px] rounded-2xl'>
              <p className='text-center text-[#6F72E2] text-[10px] font-bold'>Coins to level up</p>
              <p className='text-[12px] font-extrabold text-white text-center'>10 M</p>
            </div>
            <div className='bg-[#32363C] py-2 px-7.5 w-[140px] rounded-2xl'>
              <p className='text-center text-[#84CB69] text-[11px] font-bold'>Profit per hour </p>
              <img className='m-auto' src="/coins.svg" alt="" />
            </div>
          </div>

          <h1 className='text-white justify-center pb-4 text-[50px] font-bold flex items-center gap-2'><img src="images/coin.png" alt="coin-png  " className='size-15' /> {sum}</h1>

          <div className='flex items-center justify-between pb-2'>
            <p className='text-[10px] font-bold text-[#ffffff72]'>Epic</p>
            <p className='text-[10px] font-bold text-[#ffffff72]'>Level <span className='text-white'>6/10</span></p>
          </div>

          <div className='bg-blue-700 py-5 rounded-full m-auto cursor-cell' onClick={increment}>
            <img src="images/hamster.png" alt="" className='m-auto w-[260px] m-auto select-none pointer-events-none' />
          </div>

          <img src="images/menu.png" alt="" className='w-full pt-[63px]' />
          <img src="images/footer.png" alt="" className='w-full pt-[63px]' />

        </div>
      </div>
    </div>
  )
}
