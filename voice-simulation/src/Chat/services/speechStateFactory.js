export const speechStateFactory = ({
    speaking = false,
    result = '',
    browserEnabled = false
} = {}) => ({
    speaking,
    result,
    browserEnabled
});