import { every, isNil } from "lodash";

function isConditionValid(condition, item) {
  return every(Object.keys(condition), (field) => {
    return !isNil(item[field]) && condition[field](item[field], item, field) === true;
  })
}

export function iff(condition, validator) {
  return (value, item, field) => {
    if (isConditionValid(condition, item)) {
      return validator(value, item, field);
    } else {
      return true;
    }
  }
}
