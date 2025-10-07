import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MeuPresente®. Todos os direitos
                    reservados.
                </p>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};


