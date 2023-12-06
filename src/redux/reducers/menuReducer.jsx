import { TYPES } from "../Types"

// menu state and reducer
const menuState = {
    List: [
        {
            id: 1,
            name: 'nasi goreng'
        },
        {
            id: 2,
            name: 'sosro'
        }
    ],

    menuList: []
}

export const menuReducer = (state = menuState, action) => {
    switch (action.type) {
        case TYPES.MENU_LIST:
            return {
                ...state,
                menuList: action.payload.menuList
            }
        default:
            return state
    }
}