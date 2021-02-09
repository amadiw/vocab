import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import user from "./user"
import word from "./word"
import map from './map'
const reducer = combineReducers({user, messages, trips, events, map})

const middleware = applyMiddleware(thunkMiddleware)
//, createLogger({ collapsed: false }))


const store = createStore(reducer, middleware)

export default store
export * from "./user"
export * from "./word"
