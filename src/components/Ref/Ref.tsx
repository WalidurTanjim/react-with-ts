import { useRef } from "react";

const Ref = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    console.log(inputRef.current);

    // handleClick handler
    const handleClick = () => {
        inputRef.current?.focus()
    }

    return (
        <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
            <input type="text" name="ref" id="ref" placeholder="Full name" ref={inputRef} className="px-5 py-1 outline-none focus:ring-2 focus:ring-gray-200 border border-gray-200 rounded-md w-full mt-2" />
            <button className='outline-none border border-gray-200 rounded-md w-full py-1 mt-4 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={handleClick}>Focus Input</button>
        </div>
    );
};

export default Ref;