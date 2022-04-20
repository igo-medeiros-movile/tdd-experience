describe('add item to todo list', () => {
    test('should add item to a list', () => {
        expect(addToDoList('buy milk')).contains('buy milk');
    })
})