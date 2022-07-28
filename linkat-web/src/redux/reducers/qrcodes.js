import { CREATE_QR_CODE, CREATE_QR_FOR_LINKS, SCAN_QR, NOT_FOUND } from "../constants";

const initialState = {
    QR: {},
    QRLinks: {},
    Data:{}
}

const qrcodesReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_QR_CODE:
            return {
                ...state,
                QR:  action?.payload?.data?.QR
            }
        case CREATE_QR_FOR_LINKS:
            return {
                ...state,
                QRLinks: action?.payload?.data?.QR
            }
      case SCAN_QR:
        return {
          ...state,
          Data : action?.payload?.data, 
        }
    case NOT_FOUND: 
        return{
            ...state,
            Data : {}
        }                 
        default:
            return state;
    }
}

export default qrcodesReducer;