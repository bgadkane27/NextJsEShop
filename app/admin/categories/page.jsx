"use client";

import CategoryForm from "./components/Form";
import CategoryView from "./components/View";

export default function Page(){
    return(
        <main className="p-4 bg-foreground-100 overflow-auto flex gap-5">
            <CategoryForm />
            <CategoryView />
        </main>
    )
}