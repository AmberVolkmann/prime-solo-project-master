const trailReducer = (state = [], action ) => {
    if ( action.type === 'SET_TRAILS') {
        return action.payload.trails
    }
    return state
}
  
  // user will be on the redux state at:
  // state.user
export default trailReducer;