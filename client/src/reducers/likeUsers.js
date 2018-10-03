import axios from 'axios'

const LIKE_USERS = 'LIKE_USERS'

export const getLikeUsers = () => {
  return (dispatch) => {
    axios.get('/api/like_users')
      .then ( res => dispatch({ type: LIKE_USERS, users: res.data }) )
  }
}

export default ( state = [],  action ) => {
  switch(actions.type) {
    case LIKE_USERS:
      return actions.users
    default:
      return state
  }
}