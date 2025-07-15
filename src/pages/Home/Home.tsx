import { useEffect, useState } from "react";
import Greeting from "../../components/Greeting/Greeting";
import Ref from "../../components/Ref/Ref";
import Counter from "../../components/Counter/Counter";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

interface UserInterface {
    name: string;
    email: string;
}

const Home = () => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<UserInterface | null>(null);

    const name = "Walidur Tanjim";
    const age = 25;

    useEffect((): void => {
        setUser({ name: "WALIDUR TANJIM", email: "walidur.tanjim@gmail.com" })
    }, []);

    return (
        <div>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 mt-10'>React With TypeScript</h1>
            <Greeting userName={name} age={age} />

            <div className='text-center'>
                <h1 className='text-2xl text-slate-700'>Total count: <span className='text-red-600 font-medium'>{count}</span></h1>
                <button className='outline-none border border-gray-200 rounded-md px-6 py-1 mt-2 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={() => setCount(count + 1)}>Increment</button>
            </div>

            {
                user ? <p className='text-center text-2xl text-slate-700 pt-6'>Username: {user?.name}, Email: {user?.email}</p> : undefined
            }
            <div className='flex items-center justify-center mt-2'>
                <button className='outline-none border border-gray-200 rounded-md px-6 py-1 mt-2 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={() => setUser({ name: "Walidur Rahman", email: "walidur.rahman@gmail.com" })}>Set New User</button>
            </div>

            <Ref />
            <Counter />
            <ToggleButton />
        </div>
    );
};

export default Home;