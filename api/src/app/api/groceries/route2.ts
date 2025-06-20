import {ListAllUsers } from "../../../../actions/groceries/UserAction";

export async function GET() {
    return Response.json(await ListAllUsers())
}