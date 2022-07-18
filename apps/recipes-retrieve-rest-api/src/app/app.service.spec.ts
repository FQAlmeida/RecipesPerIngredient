import {AppService} from "./app.service"
import axios from "axios"

jest.mock("axios", () => {
})

describe("Retrieve Recipes by ID", () => {
    let service: AppService
    beforeEach(() => {
        service = new AppService();
    })
    test("Given a recipe with cod 1 is registered on the database, " +
    "when the service to retrieve a recipe by id is called with id 1," +
    "then the recipe in the database should be returned", () => {
    })
    test("Given no recipe is registered on the database, " +
    "when the service to retrieve a recipe by id is called with id 1," +
    "then a error object informing that no recipe was found should be retrieved", () => {
    })
})