import { InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative mt-20 w-full h-15 flex justify-center items-center">
            <div className="flex w-[90%] h-full items-center justify-between border-t-2 border-white rounded-2xl px-4">
                <p>© 2025 Chatty. All rights reserved.</p>
                <div className="flex gap-4">
                    <InstagramIcon />
                    <LinkedinIcon />
                </div>
            </div>
        </footer>
    )
}