import { createStore } from "redux";
const reducerFn = (state={counter:10},action)=>{
    // synchronous function
    // we should not mutate the origninal state
    if(action.type === 'INC'){return{counter: state.counter+1}}
    if(action.type === 'DEC'){return{counter: state.counter-1}}
    if(action.type === 'addBy'){return{counter: state.counter+action.payload}}
    if(action.type === 'RESET'){return{counter: action.payload}}
    return state
};
const store = createStore(reducerFn)
export default store