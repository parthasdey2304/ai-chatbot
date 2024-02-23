import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // Update the chat log
    setChatLog([...chatLog, { user: "me", message: input }]);
    // Clear the input field after submission
    setInput('');
    console.log("Submitted");
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="">
      <span className="material-symbols-outlined absolute md:hidden top-3 left-3 text-white text-4xl">side_navigation</span>
      <div className='w-screen h-screen flex justify-between'>
        <aside className='hidden sm:block w-[350px] h-screen bg-black border-r-2 border-t-2 border-b-2 border-white rounded-tr-2xl rounded-br-2xl flex-col'>
          <div className='w-full h-[10%] flex justify-between items-center p-4'>
            <span className='text-2xl font-["Poppins"] text-white font-semibold'>History</span>
            <span className="material-symbols-outlined text-white text-4xl">side_navigation</span>
          </div>

          <div className='w-full h-[89%] flex-col space-y-1 pr-4 overflow-y-auto'>
            {/* Chat history components */}
          </div>
        </aside>

        <section className='w-full h-screen bg-zinc-800 flex-col p-4'>
          <div className='w-full h-[10%] flex justify-center items-center'>
            <h1 className='text-4xl font-semibold text-white font-["Poppins"]'>TaurusAI</h1>
          </div>

          <div className='flex-col w-full h-[80%] px-4 lg:px-28 py-4 lg:py-10'>
            <div className='bg-white w-full h-full rounded-2xl overflow-y-auto flex-col space-y-2 px-4 py-2'>
              {/* Chat messages */}
            </div>
          </div>

          <div className='w-full h-[10%] flex justify-center items-center px-4 lg:px-28'>
            <div className='w-full max-h-48 border border-white rounded-2xl flex justify-between items-center'>
              <form onSubmit={handleSubmit} className='w-full'>
                <input 
                  id='prompt_input_box' 
                  className='bg-zinc-800 w-full h-full text-white px-4 py-2.5 text-xl focus:outline-none font-["Poppins"] overflow-y-auto rounded-2xl'
                  placeholder='Enter your prompt.'
                  value={input}
                  onChange={handleInputChange} // Add onChange handler
                />
              </form>
              <div>
                <button className='px-2 py-1 text-white flex justify-center items-end bg-blue-600 hover:bg-blue-800 duration-300 hover:duration-300 rounded-2xl'>
                  <span className="material-symbols-outlined text-3xl">send</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
