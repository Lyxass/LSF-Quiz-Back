const request = require("supertest");
const app = require("../../src/v1")
const fs = require("fs");

describe("Tests game routes", () => {

    test("It should response the GET method", done => {
        jest.mock("fs")

        let listOfWords = ["test1", "test2"]

        fs.readdirSync.mockImplementation(() => {

            console.log("test")
            return listOfWords
        })

        request(app)
            .get("game/available-words")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.data).toBe(listOfWords);
                done();
            });
    });
});