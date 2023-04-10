import { combineReducers} from "redux";
import uiReducer from "./uiReducer";
import firstAssessmentReducer from "./firstAssessmentReducer";
import authReducer from "./authReducer";
import takeAssessmentReducer from "./takeAssessmentReducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    firstAssessment: firstAssessmentReducer,
    auth: authReducer,
    takeAssessment: takeAssessmentReducer
})

export default rootReducer;
