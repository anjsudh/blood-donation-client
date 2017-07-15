/**
 * Created by anjana-2492 on 7/15/2017.
 */
import FETCH_DONORS from "../action_creators/action_creater_donor"
export default function (state=null,action){
    switch(action.type) {
        case FETCH_DONORS:
            return action.payload;
    }
    return state;
}