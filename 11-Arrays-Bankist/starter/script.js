'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}




const calculateUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}

calculateUsername(accounts);

const updateUI = function () {
  displayMovements(currentAccount.movements);

  calculateDisplayBalance(currentAccount);

  calculateDisplaySummary(currentAccount.movements);
}

const calculateDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0)
  labelBalance.textContent = `${account.balance} \u20AC`;
}


const calculateDisplaySummary = function (movements) {
  const income = movements.filter((curr) => curr > 0).reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}\u20AC`;

  const outcome = movements.filter((curr) => curr < 0).reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}\u20AC`;

  const interest = Number(labelBalance.innerHTML.split(' ')[0]) * 0.05;
  interest > 0 ? interest : 0;
  labelSumInterest.textContent = `${interest}\u20AC`;

}


let currentAccount, flag = false;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);


  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    updateUI();
    flag=true
  } else {
    alert("Invalid Credentials")
    flag=false;
  }
  if (flag){
    document.querySelector('.login__btn').classList.add("hide");
    document.querySelector('.logout__btn').classList.remove("hide");
  }

});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(currentAccount)
  if (amount > 0 && receiverAccount && receiverAccount?.username !== currentAccount.username && currentAccount.balance >= amount) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI();
  } else if (!receiverAccount) {
    alert("User does not exist!");
  } else if (receiverAccount?.username === currentAccount.username) alert("Can't transfer money to your own account")
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  } else {
    alert("Double check your Username and PIN")
  }
  inputClosePin.value = inputCloseUsername.value = ''
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert("Loan Amount must be between 1 and 10x of your max transaction");
  }
  inputLoanAmount.value = '';
});


let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})