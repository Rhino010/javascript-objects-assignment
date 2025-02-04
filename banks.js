function BankAccount (accountId, balance, ownerName) {
    this.accountId = accountId;
    this.balance = balance;
    this.ownerName = ownerName;
}


function createAccount(accountId, balance, ownerName){
    let newAccount = new BankAccount(accountId, balance, ownerName);
    console.log(`Congratulations, Account: ${newAccount.accountId}, belonging to ${newAccount.ownerName}, has been successfully added.`)
    return newAccount;
}

BankAccount.prototype.withdrawFunds = function(withdrawAmount) {
    this.balance -= withdrawAmount;
    console.log(`The new balance for this account is ${this.balance}.`);
}

BankAccount.prototype.addFunds = function(depositAmount) {
    this.balance += depositAmount;
    console.log(`The amount after deposit is ${this.balance}.`)
}

BankAccount.prototype.calculateInterest = function(interestRate) {
    let originalBalance = this.balance;
    let interestAmount = this.balance * (interestRate / 100 + 1) - originalBalance;
    console.log(`Total interest paid on this account is: $${interestAmount}.`)
}

const account1 = createAccount(12, 1234, "Ryan");
const account2 = createAccount(34, 1896, "Maia");

account1.withdrawFunds(34);

account1.addFunds(1000);

account1.calculateInterest(5)

