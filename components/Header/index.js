'use client'
import Link from "next/link";
import Input from "../Input";
import CartIcon from "../icons/cart";
import "./header.css";
import MenuIcon from "../icons/menu";
import { useState } from "react";

export default function Header() {
    const [showHeader, setShowHeader] = useState({
        transform: "translate3d(100vw, 0, 0)",
    });
    return (
        <>
            <div className="header-logo-container w-full flex items-center">
                <Link href="/">Shopping</Link>
                <div className="md:hidden right-content-mobile flex ml-auto">
                    <Link href="/cart">
                        <div className="cartContainer relative">
                            <CartIcon width={28} height={28} className="cartIcon" />
                            <div className="absolute flex items-center justify-center bg-black text-white rounded-full w-5 h-5 -right-2 -top-1">
                                <span>{0}</span>
                            </div>
                        </div>
                    </Link>
                    <div className="profileContainer ml-7">
                        <MenuIcon
                            width={30}
                            height={30}
                            className="menuIcon"
                            onClick={() =>
                                setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
                            }
                        />
                    </div>
                    {/* <Link href="/account"><ArrowIcon width={10} height={10} className="arrowIcon" /></Link> */}
                </div>
                <div className="header-right-content md:flex hidden">
                    <span>Cart</span>
                    <span>Profile</span>
                </div>
            </div>
            <div>
                <div id="mySidenav" style={showHeader} className="sidenav fixed z-0 top-0 text-white right-0 bg-black overflow-x-hidden transition-1">
                    <a href="javascript:void(0)" className="closebtn" onClick={() =>
                        setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
                    }>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div
                    className="background fixed w-screen h-full top-0 text-white left-0 bg-transparent cursor-pointer"
                    style={showHeader}
                    onClick={() =>
                        setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
                    }
                />
            </div>
            <div className="w-full mt-5">
                <Input name="search-form" id="search-form" className="search-input" placeholder="Search...." />
            </div>
        </>

    );
}
