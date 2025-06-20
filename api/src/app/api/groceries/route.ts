import { ListAllGroceries } from "../../../../actions/groceries/GroceryActions";

export async function GET() {
    return Response.json(await ListAllGroceries())
}