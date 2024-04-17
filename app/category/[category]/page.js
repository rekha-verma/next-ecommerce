'use client'
import { categories } from "@/components/CategoryBar";
import Layout from "@/components/Layout";
import React from "react";

export default function CategoryPage(props) {
    return (
        <Layout>
            <div className="category-container">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900">{categories.slug === props?.params?.category}</h1>
            </div>
        </Layout>
    )
}
