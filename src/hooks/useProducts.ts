"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {

    const response = await fetch(
        "https://dummyjson.com/products"

    );
    console.log("FETCHING PRODUCTS...");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export default function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
}