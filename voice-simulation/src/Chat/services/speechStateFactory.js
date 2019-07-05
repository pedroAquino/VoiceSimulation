export const speechStateFactory = ({
    speaking = false,
    browserEnabled = false
} = {}) => ({
    speaking,
    browserEnabled
});