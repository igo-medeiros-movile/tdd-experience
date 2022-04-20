import addToDoList from "./addTodo";

describe("add item to todo list", () => {
    test("should add item to a list", () => {
        let toDoList = []; 
        addToDoList(toDoList, "list item");
        addToDoList(toDoList, "list item2");

        expect(toDoList).toContain("list item");
        expect(toDoList).toContain("list item2");
    });
});
