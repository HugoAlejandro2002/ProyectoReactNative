const initialState = {
    isLogin: false
}

export default (state = initialState, action: any) => {
    switch(action.type){
        case 'IS_LOGIN':
            return {
                ...state,
                isLogin: true
            }
        default:
            return state
    }
};