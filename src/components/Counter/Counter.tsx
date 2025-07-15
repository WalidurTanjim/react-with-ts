import { useRef, useState } from "react";

const Counter = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    // console.log({clickCount})
    
    const ref = useRef<number>(0);
    // console.log(ref.current);

    // handleClick handler
    const handleClick = () => {
        ref.current = ref.current + 1;
        alert(`You have clicked ${ref.current} times`);
    }

    // handleClickState handler
    const handleClickState = () => {
        setClickCount(clickCount + 1);
        alert(`You have clicked ${clickCount + 1} times on the state`)
    }

    return (
        <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700'>Counter</h1>

            <div className="mt-5 flex items-center justify-center">
                <button className='outline-none border border-gray-200 rounded-md px-6 py-1 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={handleClick}>Click Me</button>
                <button className='outline-none border border-gray-200 rounded-md px-6 py-1 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={handleClickState}>Click Me State</button>
            </div>
        </div>
    );
};

export default Counter;