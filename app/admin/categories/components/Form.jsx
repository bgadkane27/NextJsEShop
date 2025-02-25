"use client";

import { Button, Input } from "@heroui/react";

export default function CategoryForm() {
    return (
        <div className="bg-white p-4 rounded-xl w-full md:w-[350px] flex flex-col gap-4">
            <h1>Create a category</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <Input
                        isRequired
                        label="Image"
                        type="file"
                        id="image-name"
                        name="image-name"
                        className="max-w-xs"
                    />
                </div>
                <div>    
                    <Input
                        isRequired
                        label="Category Name"
                        placeholder="Enter a category name"
                        type="text"
                        id="category-name"
                        name="category-name"
                        className="max-w-xs"
                    />
                </div>
                <div>    
                    <Input
                        isRequired
                        label="Slug"
                        placeholder="Enter a slug name"
                        type="text"
                        id="slug-name"
                        name="slug-name"
                        className="max-w-xs"
                    />
                </div>
                <div>
                    <Button 
                    color="primary"
                    className="w-full"
                    >Create</Button>
                </div>
            </form>
        </div>
    );
}
