import { Link } from "react-router-dom";

function Footer() {
    return (
        <main>
            <footer className="flex justify-between items-start my-4 p-4 max-w-7xl mx-auto">
                <div>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="flex gap-4">
                    <Link to="/" className="hover:underline">Privacy Policy</Link>
                    <Link to="/" className="hover:underline">Terms of Service</Link>
                </div>
            </footer>
        </main>
    )
}

export default Footer