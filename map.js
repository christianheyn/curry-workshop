const invoiceData = [
    { id: 0, status: 'DRAFT', invoice_number: 'RE01'},
    { id: 1, status: 'OPEN', invoice_number: 'RE02'},
    { id: 2, status: 'OVERDUE', invoice_number: 'RE03'},
    { id: 3, status: 'PAID', invoice_number: 'RE04'},
    { id: 5, status: 'CANCELED', invoice_number: 'RE06'},
];

/* Duplicated for every status */
// const setDraftStatus = (invoiceObj) => {
//     return {...invoiceObj, status: 'DRAFT'};
// };

const isOpen = x => x.status === 'OPEN';
const makeSetStatusIf = status => predicate => documentObj => {
    return (predicate(documentObj))
                ? { ...documentObj, status }
                : documentObj
};

const setDraftStatusIf = makeSetStatusIf('DRAFT');

const result = invoiceData.map(setDraftStatusIf(isOpen));

console.log(result);