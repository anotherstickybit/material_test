const Customers = [
    { title: 'Aabenraa kommune', val: 'ab' },
    { title: 'Aalborg kommune', val: 'al' },
    { title: 'Aarhus kommune', val: 'aak' },
    { title: 'Alleroed kommune', val: 'ak' },
    { title: 'Ballerup kommune', val: 'bk' },
]

export default Customers;

export const getCustomersForAccount = (customersString) => {
    if (customersString === 'all') return Customers;
    return  Customers.filter(elem => {
        if (customersString.includes(elem.val)) {
            return elem;
        }
    })
}