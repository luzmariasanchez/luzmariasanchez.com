
export async function validate(item, schema, options) {
  const validation = {
    $hasError: false,
    $errors: []
  };
  const schemaKeys = Object.keys(schema);
  for (let i = 0; i < schemaKeys.length; i++) {
    const fieldKey = schemaKeys[i];
    const field = schema[fieldKey];
    validation[fieldKey] = {
      $hasError: false,
      $errors: []
    };
    const fieldKeys = Object.keys(field);
    for (let j = 0; j < fieldKeys.length; j++) {
      const validatorKey = fieldKeys[j];
      const validationResult = await field[validatorKey](item[fieldKey], item, fieldKey, options);
      validation[fieldKey][validatorKey] = validationResult;
      if (validation[fieldKey][validatorKey] !== true) {
        validation[fieldKey].$hasError = true;
        validation[fieldKey].$errors.push(validationResult);
        validation.$hasError = true;
        validation.$errors.push(validationResult);
      }
    }
  }
  return validation;
}