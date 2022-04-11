import { combineReducers} from "redux";
import uiReducer from "./uiReducer";
import firstAssessmentReducer from "./firstAssessmentReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    firstAssessment: firstAssessmentReducer,
    auth: authReducer
})

export default rootReducer;
