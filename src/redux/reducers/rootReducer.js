import { combineReducers} from "redux";
import uiReducer from "./uiReducer";
import firstAssessmentReducer from "./firstAssessmentReducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    firstAssessment: firstAssessmentReducer
})

export default rootReducer;
