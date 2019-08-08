export const createActiontype = type => ({ [type]: `module/${type}` })
export const createActiontypes = actionTypes => actionTypes
    .map(createActionType)
    .reduce((types, type) => ({ ...types, ...type }), {});