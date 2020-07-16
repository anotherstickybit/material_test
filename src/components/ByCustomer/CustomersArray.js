const Customers = [
    { title: 'Aabenraa kommune', val: 'ab' },
    { title: 'Aalborg kommune', val: 'al' },
    { title: 'Aarhus kommune', val: 'aak' },
    { title: 'Alleroed kommune', val: 'ak' },
    { title: 'Ballerup kommune', val: 'bk' },
    { title: 'DIBS', val: 'dibs' },
    { title: 'Danaktiv', val: 'da' },
    { title: 'Egedal kommune', val: 'ek' },
    { title: 'Frederiksberg kommune', val: 'frb' },
    { title: 'Frederikssund kommune', val: 'fs' },
    { title: 'Fujitsu', val: 'fuji' },
    { title: 'Gentofte kommune', val: 'ge' },
    { title: 'Glostrup kommune', val: 'gl' },
    { title: 'Greve kommune', val: 'gk' },
    { title: 'Gribskov kommune', val: 'grib' },
    { title: 'Halsnaes kommune', val: 'halk' },
    { title: 'Hoeje-Taastrup Kommune prisme', val: 'htk' },
    { title: 'ILVA', val: 'ilva' },
    { title: 'Nilfisk', val: 'nilfisk' },
    { title: 'Sonderborg', val: 'sb' },
    { title: 'TIA', val: 'tia' },
    { title: 'Brondby kommune', val: 'bb' },
    { title: 'Ascore', val: 'bas' },
    { title: 'Container Centralen', val: 'ccdk' },
    { title: 'COOP', val: 'coop' },
    { title: 'DK-Production', val: 'dkp' },
    { title: 'Faaborg-Midtfyn kommune', val: 'fm' },
    { title: 'Faxe kommune', val: 'fa' },
    { title: 'Fredensborg Kommune', val: 'fg' },
    { title: 'Hartmann', val: 'hartmann' },
    { title: 'Holbaek kommune', val: 'holbaek' },
    { title: 'Kolding kommune', val: 'kolk' },
    { title: 'Middelfart kommune', val: 'mf' },
    { title: 'Nyborg kommune', val: 'nyborg' },
    { title: 'Randers kommune', val: 'ra' },
    { title: 'Region Syddanmark', val: 'rsd' },
    { title: 'Silkenborg kommune', val: 'silkek' },
    { title: 'Skive kommune', val: 'sk' },
    { title: 'Slagelse kommune', val: 'sl' },
    { title: 'Prisme shared', val: 'prisme' },
    { title: 'Dragor kommune', val: 'dr' },
    { title: 'Vejen kommune', val: 've' },
    { title: 'Vesthimmerlands Kommune', val: 'vh' },
    { title: 'Hovedstadens Beredskab', val: 'hoved' },
    { title: 'GDC', val: 'gdc' },
    { title: 'Thisted Kommune', val: 'thi' },
    { title: 'Varde kommune', val: 'va' },
]

export default Customers;

export const getCustomersForAccount = (customersString) => {
    if (customersString === 'all') return Customers;
    return  Customers.filter(elem => {
        if (customersString.includes(',' + elem.val)) {
            return elem;
        }
    })
}