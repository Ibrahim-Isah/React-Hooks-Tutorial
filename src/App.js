import './App.css';
import React, { useReducer } from 'react';
import EffectCounterOne from './components/EffectCounterOne';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter';
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';
import ReduceCounter from './components/ReduceCounter';
import ReduceCounterTwo from './components/ReduceCounterTwo';
import ReduceCounterThree from './components/ReduceCounterThree';
import ReduceComponentA from './components/ReduceComponentA';
import ReduceComponentB from './components/ReduceComponentB';
import ReduceComponentC from './components/ReduceComponentC';
import DataFetchingReduce from './components/DataFetchingReduce';
import DataFetchingReduceTwo from './components/DataFetchingReduceTwo';
import Callback from './components/Callback';
import MemoCounter from './components/MemoCounter';
import RefHook from './components/RefHook';
import RefTimer from './components/RefTimer';
import UserForm from './components/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

// const initialState = 0;

// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1;
// 		case 'decrement':
// 			return state - 1;
// 		case 'reset':
// 			return initialState;
// 		default:
// 			return state;
// 	}
// };

function App() {
	//const [ count, disbatch ] = useReducer(reducer, initialState);
	return (
		<div className="app">
			{/* useState Hooks  */}
			{/* <HookCounter /> */}
			{/* <HookCounterTwo /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterFour /> */}

			{/* useEffect Hooks */}
			{/* <EffectCounterOne /> */}
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalCounter /> */}
			{/* <DataFetching /> */}

			{/* useContext Hooks */}
			{/* <UserContext.Provider value={'Isah'}>
				<ChannelContext.Provider value={'Pinky'}>
					<ComponentA />
				</ChannelContext.Provider>
			</UserContext.Provider> */}

			{/* useReducer Hooks */}
			{/* <ReduceCounter /> */}
			{/* <ReduceCounterTwo /> */}
			{/* <ReduceCounterThree /> */}

			{/* <CountContext.Provider value={{ countState: count, countDispatch: disbatch }}>
				Count - {count}
				<ReduceComponentA />
				<ReduceComponentB />
				<ReduceComponentC />
			</CountContext.Provider> */}

			{/* <DataFetchingReduce /> */}
			{/* <DataFetchingReduceTwo /> */}

			{/* useCallback Hook */}
			{/* <Callback /> */}
			{/* <MemoCounter /> */}

			{/* useRef Hooks */}
			{/* <RefHook /> */}
			{/* <RefTimer /> */}

			{/* useCustomHooks */}
			<UserForm />
		</div>
	);
}

export default App;
