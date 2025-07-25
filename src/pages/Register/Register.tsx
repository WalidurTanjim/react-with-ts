import React, { useState } from "react";

type RegisterInputs = {
    fullname: string;
    email: string;
    createPassword: string;
    repeatPassword: string;
    phone: string
}

const Register = () => {
    // states
    const [userData, setUserData] = useState<RegisterInputs>({
        fullname: '',
        email: '',
        createPassword: '',
        repeatPassword: '',
        phone: ''
    })
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // handleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        
        setUserData(prev => ({
            ...prev,
            [id]: value,
        }));
    }

    // showPasswordHandler
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

    // handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User data:", userData);
    }

    return (
        <div className="signUp w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-slate-700 font-medium">Register Here</h1>

                <form className="w-full sm:w-4/5 md:w-4/6 lg:w-2/6 mx-auto mt-10" onSubmit={handleSubmit}>
                    <div className="fullname w-full mb-4">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" id="fullname" placeholder="Fullname" autoComplete="off" required className="custom-input" value={userData.fullname} onChange={handleChange} />
                    </div>

                    <div className="email w-full mb-4">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email address" autoComplete="off" required className="custom-input" value={userData.email} onChange={handleChange} />
                    </div>

                    <div className="createPassword w-full mb-4">
                        <label htmlFor="createPassword">Create Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="createPassword" placeholder="Create Password" autoComplete="off" required className="custom-input" value={userData.createPassword} onChange={handleChange} />
                    </div>

                    <div className="repeatPassword w-full mb-4">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="repeatPassword" placeholder="Repeat Password" autoComplete="off" required className="custom-input" value={userData.repeatPassword} onChange={handleChange} />
                    </div>

                    <div className="phone w-full mb-4">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" id="phone" placeholder="Phone number" autoComplete="off" required className="custom-input" value={userData.phone} onChange={handleChange} />
                    </div>

                    <div className="mb-4 flex gap-2 text-sm">
                        <input type="checkbox" name="showPassCheckBox" onClick={showPasswordHandler}/>
                        <span>Show Password</span>
                    </div>

                    <button type="submit" className="w-full px-5 py-1 outline-none border border-gray-200 rounded-md hover:bg-gray-100 active:bg-transparent mt-2">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;