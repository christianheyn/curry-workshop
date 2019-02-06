const invoiceData = [
    { id: 0, status: 'DRAFT', nr: 'RE01'},
    { id: 1, status: 'OPEN', nr: 'RE02'},
    { id: 2, status: 'OVERDUE', nr: 'RE03'},
    { id: 3, status: 'PAID', nr: 'RE04'},
    { id: 5, status: 'CANCELED', nr: 'RE06'},
];

/* Duplicated for every status */
// const setDraftStatus = (invoiceObj) => {
//     return {...invoiceObj, status: 'DRAFT'};
// };

/* makeSetStatusIf :: String -> ((Object -> Bool) -> (Object -> Object)) */
const makeSetStatusIf = status => predicate => invoiceObj => {
    return (predicate(invoiceObj))
                ? { ...invoiceObj, status }
                : invoiceObj
};

const makeOr = (f1, f2) => x => (f1(x) || f2(x));
const isOpen = x => x.status === 'OPEN';
const isId2 = x => x.id === 2;

const setDraftStatusIf = makeSetStatusIf('DRAFT');
const isOpenOrId2 = makeOr(isOpen, isId2);

const result = invoiceData.map(setDraftStatusIf(isOpenOrId2));

console.log(result);
