import { CREATE_POST } from "./types";
import { showAlert } from "./action";

const spanWords = ['wordpress', 'pascal', 'html']

//** creating Middleware **//

export function Middleware({ dispatch }) { 
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                // find spam words 
               const found = spanWords.filter((w)=> action.payload.title.includes(w))
               if (found.length) {
                  return dispatch(showAlert("spam"))
               }
            }
            // if no spam word continue            
            return next(action)
        }
    }
}