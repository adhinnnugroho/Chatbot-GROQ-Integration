import { useState } from 'react';
import './App.css'
import {requestToGroqAi} from './utils/groq'

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    const content = document.getElementById('content').value;
    const ai = await  requestToGroqAi(content);
    setData(ai);
  }

  return (
    <>
      <div>
        <h1 className='text-6xl font-bold text-white mt-5'>Chatbot with GROG</h1>
        <div className="">
          <div className="block">
            <input type='text' name='' id='content' className='mt-10 w-[30rem] rounded-lg py-2 px-4' />
          </div>

          <button onClick={handleSubmit} className='bg-blue-600 p-2 text-white rounded-lg flex justify-center content-center mx-auto mt-5 w-[20rem]'>
            Send
          </button>
        </div>

        <div className="text-white">{data}</div>
      </div>
    </>
  )
}

export default App
