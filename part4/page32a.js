let customers = [
  {
    id: 1,
    name: "Snehitha",
    balance: 10000,
    transactions: [],
  },
  {
    id: 2,
    name: "Sneha",
    balance: 5000,
    transactions: [],
  },
];
function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: new Date().toLocaleString(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {

      if (customer.balance < amount) {
        console.log("Insufficient balance");
        return customer;
      }

      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: new Date().toLocaleString(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}
function showTransaction(id) {
  const customer = customers.find((customer) => customer.id === id);

  if (!customer) {
    console.log("Customer not found");
    return;
  }

  customer.transactions.forEach((t) => {
    console.log(
      "Type:", t.type,
      "Amount:", t.amount,
      "Date:", t.date
    );
  });
}
export{deposit,withdraw,checkBalance,showTransaction}

 