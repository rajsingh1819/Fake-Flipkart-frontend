import { LIST_COMPONENT_DATA } from "../constants";

const initialState = {
    data: []
}

const componentData = (state = initialState, action) => {
    switch (action.type) {
        case LIST_COMPONENT_DATA:
            console.log("reducer =>", action.data);
            return {
                ...state,
                data: action.data
            };
        default:
            return state;

    }



}
export default componentData;