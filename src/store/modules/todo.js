import { ADD, UPDATE, DELETE } from "../mutation-types";

export default {
    namespaced: true,
    state: {
        todoList: [
            { id: 1, text: "Todo 1" },
            { id: 2, text: "Todo 2" },
            { id: 3, text: "Todo 3" },
            { id: 4, text: "Todo 4" },
            { id: 5, text: "Todo 5" },
        ],
    },
    getters: {
        getTodo: (state) => (id) => {
            // console.log(id);
            return state.todoList.find(t => t.id === id);
        }
    },
    mutations: {
        [ADD](state, { todo }) {
            if (todo) {
                state.todoList.push(todo);
            }
        },

        [UPDATE](state, { todo }) {
            if (todo) {
                let foundIndex = state.todoList.findIndex(t => t.id === todo.id);
                if (foundIndex >= 0 && foundIndex < state.todoList.length) {
                    state.todoList[foundIndex] = todo;
                }
            }
        },

        [DELETE](state, { todo }) {
            if (todo) {
                state.todoList = state.todoList.filter(t => t.id !== todo.id);
            }
        },
    },
    actions: {},
};
