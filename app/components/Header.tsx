import Link from "next/link";
import { HeartIcon, SearchIcon, ShoppingBagIcon, UserCircle } from "lucide-react";
import { Button } from "@base-ui/react";

export default function Header() {
    return (
        <div className="flex justify-between  items-center">
            <div className="font-semibold text-3xl">3elegant.</div>
            <div className="flex gap-10 text-gray-500">
                <Link className=" hover:text-black" href="/">Home</Link>
                <Link className=" hover:text-black" href="#shop">Shop</Link>
                <Link className=" hover:text-black" href="#product">Product</Link>
                <Link className=" hover:text-black" href="#contact">Contact Us</Link>
            </div>
            <div className="flex gap-4">
                <Button><SearchIcon/></Button>
                <Button><UserCircle/></Button>
                <Button><ShoppingBagIcon/></Button>
                <Button><HeartIcon/> </Button>
            </div>
        </div>
    );
}   