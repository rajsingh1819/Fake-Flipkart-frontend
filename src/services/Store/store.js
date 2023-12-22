import { legacy_createStore as createStore } from 'redux'
// import componentData from "../Reducer/reducer"
import rootRaducer from "../Reducer/CombineReducer"

export const store = createStore(rootRaducer)
console.log("store =>", store);

// export default store;