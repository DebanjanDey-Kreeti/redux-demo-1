export default function reducer(state = {
    fetching: false,
    fetched: false,
    tweets: [],
    error: null,
  }, action) {
    switch(action.type) {
      case "FETCH_TWEETS": {
        return {...state, fetching: true};
      }
      case "FETCH_TWEETS_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "FETCH_TWEETS_FULFILLED": {
        return {...state, fetching: false, fetched: true, users: action.payload};
      }
    }
    return state;
  }