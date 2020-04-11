export default function(values) {
    const errors = {};
    const requiredFields = [
        'autocomplete',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
}
