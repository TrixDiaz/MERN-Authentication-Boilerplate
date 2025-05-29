import { Link } from "react-router-dom";

function Footer() {
    return (
        <main>
            <footer className="flex justify-between items-start border-t border-gray-500 my-4 py-4 px-2 max-w-7xl mx-auto">
                <div>
                    @ {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="flex gap-4">
                    <Link to="/" className="underline">Privacy Policy</Link>
                    <Link to="/" className="underline">Terms of Service</Link>
                </div>
            </footer>
        </main>
    )
}

export default Footer
