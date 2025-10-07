import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <h1 className="text-[120rem]">404</h1>
            <h2 className="text-[60rem]">Sorry, We couldn't find this page</h2>

            <h4 className="text-[30rem]">
                But dont worry, you can find plenty of other things on our homepage.
            </h4>

            <Link to="/">
                <div className="flex justify-center items-center w-[200rem] h-[50rem] text-white text-center text-[20rem] rounded-[4rem] bg-blue-500 cursor-pointer">
                    Back to Login
                </div>
            </Link>
        </div>
    );
};
