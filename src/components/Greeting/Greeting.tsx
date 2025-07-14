type GreetingProps = {
    userName: string;
    age: number;
}

const Greeting = ({ userName, age }: GreetingProps) => {

    return (
        <div className="greeting w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-6">
                <h1 className="text-center text-2xl">Hello, {userName}. I'm {age} years old</h1>
            </div>
        </div>
    );
};

export default Greeting;