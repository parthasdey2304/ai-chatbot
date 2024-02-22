import { useState } from 'react';

function App() {
  return (
    <div className="">
      <div className='w-screen h-screen flex justify-between'>
        <aside className='hidden md:block w-[300px] h-screen bg-black border-r-2 border-t-2 border-b-2 border-white rounded-tr-2xl rounded-br-2xl p-2'></aside>

        <section className='w-full h-screen bg-zinc-800 flex-col p-4'>
          <div className='w-full h-[10%] flex justify-center items-center'>
            <h1 className='text-4xl font-semibold text-white font-["Poppins"]'>TaurusAI</h1>
          </div>

          <div className='flex-col w-full h-[80%] px-4 md:px-20 py-4 md:py-10'>
            <div className='bg-white w-full h-full rounded-2xl'></div>
          </div>

          <div className='w-full h-[10%] flex justify-center items-center px-4 md:px-20'>
            <div className='w-full h-[50px] border border-white rounded-2xl flex justify-between items-center'>
              <div className='w-full h-full text-white px-4 py-2.5 text-xl'contentEditable="true" >Hello</div>

              <div>
                <button className='px-2 py-1 text-white flex justify-center items-center bg-blue-600 rounded-2xl'>
                <span class="material-symbols-outlined text-3xl">send</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
