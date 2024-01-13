import { Card } from "~/models/card";

export async function dataService() {
    const results = await (await fetch(`/src/data/data.json`)).json() as Card[];
    return results;
}