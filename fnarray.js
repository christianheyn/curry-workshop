const invoiceData = [
    { id: 0, status: 'DRAFT', invoice_number: 'RE01' },
    { id: 1, status: 'OPEN', invoice_number: 'RE02' },
    { id: 2, status: 'OVERDUE', invoice_number: 'RE03' },
    { id: 3, status: 'PAID', invoice_number: 'RE04' },
    { id: 5, status: 'CANCELED', invoice_number: 'RE06' },
];

const makeMergeFunc = obj => status => {
    return { ...obj, status };
};

const result = invoiceData
                    .map(makeMergeFunc)
                    .map(f => f('DRAFT'))

console.log(result);

