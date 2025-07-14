import { useState } from "react";
import Forms from "../../components/Forms/Forms";

const SignIn = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>("");

    // clickCountHandler
    const clickCountHandler = () => {
        setClickCount(prevCount => prevCount + 1);
    }

    // inputChangeHandler
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700'>Sign In Page</h1>

            <div className="my-10 text-center">
                <h1 className='text-2xl text-slate-700'>Total count of click: <span className='text-red-600 font-medium'>{clickCount}</span></h1>
                <button className='outline-none border border-gray-200 rounded-md px-6 py-1 mt-2 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={clickCountHandler}>Click Me</button>
            </div>

            <input type="text" name="" id="" className="w-full px-5 py-1 border border-gray-200 rounded-md outline-none focus:ring-2 ring-gray-200" onChange={inputChangeHandler} />
            <p  className='text-2xl text-slate-700 mt-2'>Current input: <span className='text-red-600 font-medium'>{inputValue}</span></p>

            <Forms />
        </div>
    );
};

export default SignIn;