"use client";

import CategoryForm from "./components/Form";
import CategoryView from "./components/View";

export default function Page(){
    return(
        <main className="w-full p-4 bg-foreground-50 overflow-auto flex gap-4">
            <CategoryForm />
            <CategoryView />
        </main>
    )
}