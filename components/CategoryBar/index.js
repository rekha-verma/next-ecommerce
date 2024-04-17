import Link from "next/link";

export const categories = [
    {
        id: 101,
        name: "New In",
        emoji: "⚡",
        path: "/",
        slug: "new_in"
    },
    {
        id: 102,
        name: "Clothing",
        emoji: "👚",
        path: "/category/clothing",
        slug: "clothing"
    },
    {
        id: 103,
        name: "Shoes",
        emoji: "👠",
        path: "/category/shoes",
        slug: "shoes"
    },
    {
        id: 104,
        name: "Accessories",
        emoji: "👜",
        path: "/category/accessories",
        slug: "accessories"
    },
    {
        id: 105,
        name: "Activewear",
        emoji: "🤸",
        path: "/category/activewear",
        slug: "activewear"
    },
    {
        id: 105,
        name: "Gift & Living",
        emoji: "🎁",
        path: "/category/gift_and_living",
        slug: "gift_and_living"
    },
    {
        id: 106,
        name: "Inspiration",
        emoji: "💎",
        path: "/category/inspiration",
        slug: "inspiration"
    }
]

export default function CategoryBar() {
    return (
        <div className="categories-container">
            <h2 className="category-title">Explore</h2>
            <ul className="categories-categories flex md:list-item overflow-x-auto no-scrollbar">
                {
                    categories.map((item) => {
                        return (
                            <li className="category-item pt-5 pb-5 flex items-center" key={item.name}><Link className="app-subnav__link flex items-center min-w-28 flex-col" href={item.path}><span>{item.emoji}</span><span>{item.name}</span></Link></li>
                        )
                    })
                }
            </ul>
        </div>
    );
}