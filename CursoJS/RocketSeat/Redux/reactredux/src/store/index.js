import { createStoreHook, createSelectorHook } from "react-redux";

const INITIAL_STATE = {
    data: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 1, title: "Segunda aula" },
            ],
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" },
            ],
        },
    ],
};

function modules(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_COURSE":
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}

const store = createSelectorHook(modules);

export default store;
