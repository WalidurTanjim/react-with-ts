import useTheme from "../../hooks/useTheme";

const ToggleButton = () => {
    const {theme, toggleTheme} = useTheme();
    console.log(theme);

    return (
        <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
            <button className='outline-none border border-gray-200 rounded-md px-6 py-1 mt-2 hover:bg-gray-100 active:bg-transparent text-slate-700' onClick={toggleTheme}>Toggle Theme {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    );
};

export default ToggleButton;