//TODO : create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoriesName = [
    "cars and vehicles",
    "electronics",
    "fashion",
    "home and garden",
    "jobs",
    "kids",
    "motors",
    "pets",
    "real estate",
    "services",
    "sports",
    "travel"
    ];

    async function main(){
        console.log("Seeding categories......");

        try {
         const values: { name: string; description: string }[] = categoriesName.map((name) => ({
            name,
            description: `video related to ${name.toLocaleLowerCase()}`
        }));

        await db.insert(categories).values(values);
        console.log("Categories seeded successfully");
        process.exit(0);

        } catch (error) {
            console.log("Error seeding categories", error);
            process.exit(1);
        }
    }
main()