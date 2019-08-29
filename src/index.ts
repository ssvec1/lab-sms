
import './styles.css';
import { parse } from 'path';
console.log('Ready to Party With Some TypeScript!');

// all this runs when the document loads


const btnTen = document.getElementById('btnTenPercent') as HTMLInputElement;
const btnFifteen = document.getElementById('btnFifteenPercent') as HTMLInputElement;
const btnTwenty = document.getElementById('btnTwentyPercent') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLSpanElement;
const billAmount = document.getElementById('txtBillAmount') as HTMLInputElement;
const lsBillAmount = document.getElementById('listBillAmount') as HTMLSpanElement;
const lsTipPercent = document.getElementById('listTipPercent') as HTMLSpanElement;
const lsTipAmount = document.getElementById('listTipAmount') as HTMLSpanElement;
const lsPaidAmount = document.getElementById('listPaidAmount') as HTMLSpanElement;

// can change to 'input' to update as user enters value
btnTen.addEventListener('click', function () {
    const tipPercent = parseInt(btnTen.value, 10);
    const billAmt = parseInt(billAmount.value, 10);
    const tipAmt = calculateTip(billAmt, tipPercent);
    const totalAmt = billAmt + tipAmt;

    answer.innerText = tipPercent.toString();
    lsBillAmount.innerText = billAmt.toString();
    lsTipPercent.innerText = tipPercent.toString();
    lsTipAmount.innerText = tipAmt.toString();
    lsPaidAmount.innerText = totalAmt.toString();

    btnTen.disabled = true;
    btnFifteen.disabled = false;
    btnTwenty.disabled = false;

    if (billAmt < 0) {
        billAmount.classList.add('error');
        clearValues();
    } else {
        billAmount.classList.remove('error');
    }
});
btnFifteen.addEventListener('click', function () {
    const tipPercent = parseInt(btnFifteen.value, 10);
    const billAmt = parseInt(billAmount.value, 10);

    const tipAmt = calculateTip(billAmt, tipPercent);
    const totalAmt = billAmt + tipAmt;

    answer.innerText = tipPercent.toString();
    lsBillAmount.innerText = billAmt.toString();
    lsTipPercent.innerText = tipPercent.toString();
    lsTipAmount.innerText = tipAmt.toString();
    lsPaidAmount.innerText = totalAmt.toString();

    btnTen.disabled = false;
    btnFifteen.disabled = true;
    btnTwenty.disabled = false;

    if (billAmt < 0) {
        billAmount.classList.add('error');
        clearValues();
    } else {
        billAmount.classList.remove('error');
    }
});
btnTwenty.addEventListener('click', function () {
    const tipPercent = parseInt(btnTwenty.value, 10);
    const billAmt = parseInt(billAmount.value, 10);

    const tipAmt = calculateTip(billAmt, tipPercent);
    const totalAmt = billAmt + tipAmt;

    answer.innerText = tipPercent.toString();
    lsBillAmount.innerText = billAmt.toString();
    lsTipPercent.innerText = tipPercent.toString();
    lsTipAmount.innerText = tipAmt.toString();
    lsPaidAmount.innerText = totalAmt.toString();

    btnTen.disabled = false;
    btnFifteen.disabled = false;
    btnTwenty.disabled = true;

    if (billAmt < 0) {
        billAmount.classList.add('error');
        clearValues();
    } else {
        billAmount.classList.remove('error');
    }
});

function calculateTip(billTotal: number, tipPercent: number): number {
    return billTotal / tipPercent;
}

function clearValues() {
    answer.innerText = ' ';
    lsBillAmount.innerText = ' ';
    lsTipPercent.innerText = ' ';
    lsTipAmount.innerText = ' ';
    lsPaidAmount.innerText = ' ';
    console.log('clearValues called');
}
