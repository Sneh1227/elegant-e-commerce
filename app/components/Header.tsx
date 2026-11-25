import Link from "next/link";
import { SearchIcon, ShoppingBagIcon, User, UserCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="flex justify-between px-30 py-5">
            <div>3elegant</div>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Product</Link>
                <Link href="/">Contact Us</Link>
            </div>
            <div className="flex gap-2">
                <SearchIcon/>
                <UserCircle/>
                <ShoppingBagIcon/>
            </div>
        </div>
    );
}   