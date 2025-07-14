import { useState } from "react";

const Forms = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // handleSubmit handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Signi successfull. Congratulations ${fullName}. Your password is: ${password}`);
    }

    return (
        <div className="py-10">
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700'>Sign In Form</h1>

            <form className="w-full mt-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name">Full name</label>
                    <input type="name" name="name" id="name" placeholder="Full name" autoComplete="off" required value={fullName} onChange={e => setFullName(e.target.value)} className="px-5 py-1 outline-none focus:ring-2 focus:ring-gray-200 border border-gray-200 rounded-md w-full mt-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email address" autoComplete="off" required value={email} onChange={e => setEmail(e.target.value)} className="px-5 py-1 outline-none focus:ring-2 focus:ring-gray-200 border border-gray-200 rounded-md w-full mt-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" required value={password}  onChange={e => setPassword(e.target.value)} className="px-5 py-1 outline-none focus:ring-2 focus:ring-gray-200 border border-gray-200 rounded-md w-full mt-2" />
                </div>

                <button type="submit" className='outline-none border border-gray-200 rounded-md w-full py-1 mt-4 hover:bg-gray-100 active:bg-transparent text-slate-700'>Submit</button>
            </form>
        </div>
    );
};

export default Forms;