import { createContext, createSignal, useContext } from "solid-js";

export const TimeContext = createContext()

export function ContextProvider (props: any) {
    const [context, setContext] = createSignal('daily')

    return (
        <TimeContext.Provider value={{context, setContext}}>
            {props.children}
        </TimeContext.Provider>)
}

export function useTimeContext() {
    return useContext(TimeContext);
}