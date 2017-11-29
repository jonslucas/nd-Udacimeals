import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions';

const initialCalendar = {
  sunday:    { breakfast: null, lunch: null, dinner: null, },
  monday:    { breakfast: null, lunch: null, dinner: null, },
  tuesday:   { breakfast: null, lunch: null, dinner: null, },
  wednesday: { breakfast: null, lunch: null, dinner: null, },
  thurday:   { breakfast: null, lunch: null, dinner: null, },
  friday:    { breakfast: null, lunch: null, dinner: null, },
  saturday:  { breakfast: null, lunch: null, dinner: null, },
};


function calendar (state = initialCalendar, action) {
  const {day, meal, recipe } = action;

  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      };
    default:
      return state;
  }
}

export default calendar;
