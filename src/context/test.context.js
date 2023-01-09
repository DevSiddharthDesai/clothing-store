import { createContext, useReducer } from "react";

export const TestContext = createContext({
    addValue: () => null,
    currentValue: 0,
    minusValue: () => null
});

const INITIAL_STATE = {
    currentValue: 0
}

export const VALUE_ACTION_TYPES = {
    ADD_VALUE: 'ADD_VALUE',
    MINUS_VALUE: 'MINUS_VALUE'
};


const testReducer = (state, action) => {
    
    const { type, payload } = action;

    switch(type){
        case VALUE_ACTION_TYPES.ADD_VALUE:
            return{
                ...state,
                ...payload
            }
        case VALUE_ACTION_TYPES.MINUS_VALUE:
            return{
                ...state,
                ...payload
            }
        default:  
            throw new Error(`Unhandled type ${type} in testReducer`);
    }
}

export const TestProvider = ({ children }) => {

    const [state, dispatch] = useReducer(testReducer, INITIAL_STATE);

    const addValue = () => {
        dispatch({ type: VALUE_ACTION_TYPES.ADD_VALUE, value: ++state.currentValue});
    }

    const minusValue = () => {
        dispatch({ type: VALUE_ACTION_TYPES.ADD_VALUE, value: --state.currentValue});
    }

    const value = {
        addValue,
        minusValue,
        currentValue: state.currentValue
      };

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;

}