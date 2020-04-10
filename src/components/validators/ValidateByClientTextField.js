export default function(values) {
    const errors = {};
    const requiredFields = [
        'client',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
}
