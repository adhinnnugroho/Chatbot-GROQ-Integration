import { useState } from 'react';
import './App.css'
import { requestToGroqAi } from './utils/groq'
import TypingEffect from './Components/typingEffect';

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    const content = document.getElementById('content').value;
    const ai = await requestToGroqAi(content);
    setData(ai);
    document.getElementById('content').value = '';
  }

  return (
    <>
      <TypingEffect text={data} speed={80} />
      {/* <div className="text-white">{data}</div> */}
      <div className="max-w-2xl mx-auto mt-[35rem]">
        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
          <textarea id="content" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
          <button type="button" onClick={handleSubmit}
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 
            dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
        </div>
      </div>
      {/* <div>
        <h1 classNameName='text-6xl font-bold text-white mt-5'>Chatbot with GROG</h1>
        <div classNameName="">
          <div classNameName="block">
            <input type='text' name='' id='content' classNameName='mt-10 w-[30rem] rounded-lg py-2 px-4' />
          </div>
          <button onClick={handleSubmit} classNameName='bg-blue-600 p-2 text-white rounded-lg flex justify-center content-center mx-auto mt-5 w-[20rem]'>
            Send
          </button>
        </div>

        <div classNameName="text-white">{data}</div>
      </div> */}
    </>
  )
}

export default App
