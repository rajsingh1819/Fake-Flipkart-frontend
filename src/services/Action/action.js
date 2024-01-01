import { LIST_COMPONENT_DATA } from "../constants";
import { CARD_COMPONENT_DATA } from "../constants";

export const listComponentData = (data) => {
    console.log("Action data =>", data);
    return {
        type: LIST_COMPONENT_DATA,
        data: data
    }

}

export const cardComponentData = (data) => {
    return {
        type: CARD_COMPONENT_DATA,
        data: data
    }

}

