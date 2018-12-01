import { CHANGE_RANGE, CHANGE_RINGTONE, CHANGE_VIBRATE } from '../constants/ActionTypes';


const initialState = {
  rangeOption: 0,
  soundID: 0,
  vibrate: true,
};

const settingsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CHANGE_RANGE: {
      const id = action.payload.optionID;
      newState.rangeOption = id;
      return newState;
    }
    case CHANGE_RINGTONE: {
      const soundID = action.payload.soundID;

      newState.soundID = soundID;
      return newState;
    }
    case CHANGE_VIBRATE: {
      const vibrate = action.payload.vibrate;
      newState.vibrate = vibrate;
      return newState;
    }
    default: {
      return newState;
    }
  }
};

export default settingsReducer;
