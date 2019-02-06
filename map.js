const invoiceData = [
    { id: 0, status: 'DRAFT', nr: 'RE01'},
    { id: 1, status: 'OPEN', nr: 'RE02'},
    { id: 2, status: 'OPEN', nr: 'RE03'},
    { id: 3, status: 'PAID', nr: 'RE04'},
    { id: 5, status: 'CANCELED', nr: 'RE06'},
];

const makeSetStatus = status => predicate => obj =>
    (predicate(obj) ? { ...obj, status } : obj)

const isOpen = x => x.status === 'OPEN';
const isId2 = x => x.id === 2;
const makeAnd = (f1, f2) => x => f1(x) && f2(x);
const makeOr = (f1, f2) => x => f1(x) || f2(x);
const isOpenOrId2 = makeAnd(isOpen, isId2);
const setToDraftWhen = makeSetStatus('Draft');

const result = invoiceData.map(setToDraftWhen(isOpenOrId2));

console.log(result);
