import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskCard from './TaskCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center'>
      <div>
        <div className='py-5 flex-col'>
          <h1 className='font-bold text-3xl text-gray-700'>Smarter Tasks</h1>
          <p className='text-gray-600'><strong>Project:</strong>Graduation Final year Project(Revamp College Website)</p>
        </div>
        <div className='flex gap-8'>
          <div className='rounded-3xl  border-gray-600 border-2 p-3 w-1/2 '>
            <h1 className='text-xl text-gray-600 text-center font-bold mb-4'>Pending</h1>
            <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
            <TaskCard title="Add Blog" dueDate="22nd March" assigneeName="Rohit M"/>

          </div>
          <div className='rounded-3xl  border-gray-600 border-2 p-3 w-1/2 h-96'>
            <h1 className='text-xl text-gray-600 text-center font-bold mb-4'>Done</h1>
            <TaskCard title="Design The mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
            <TaskCard title="Get approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>

          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}



export default App
