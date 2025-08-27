//Add money feature
const validPin = 1234;
const transactionsData = [];

//

document.getElementById("Add-money-btn").addEventListener("click", function () {
  console.log("add money");

  const bank = document.getElementById("Add-Select-A-Bank").value;
  const accountNumber = document.getElementById("Add-Account-Number").value;
  const amount = parseInt(document.getElementById("Add-Amount").value);
  const pinNumber = parseInt(document.getElementById("add-pin").value);

  const availableBalance = Number(
    document.getElementById("Available-balance").innerText
  );

  // ✅ allowed banks
  const allowedBanks = [
    "sonali",
    "janata",
    "agrani",
    "rupali",
    "dbbl",
    "islami",
  ];

  if (!bank) {
    alert("😍 Please select a bank first!");
    return;
  }

  if (!allowedBanks.includes(bank)) {
    alert(
      "😓 Invalid Bank Selected! Please select only Sonali, Janata, Agrani, Rupali, DBBL, or Islami."
    );
    return;
  }

  // ✅ Account Number Validation
  if (!/^\d{11}$/.test(accountNumber)) {
    alert("😊 Please provide a valid 11 digit account number!");
    return;
  }

  // ✅ Pin Validation
  if (pinNumber !== validPin) {
    alert("❌ Wrong Pin!");
    return;
  }

  // ✅ Update Balance
  const newBalance = availableBalance + amount;
  document.getElementById("Available-balance").innerText = newBalance;

  // ✅ Save Transaction
  transactionsData.push({
    name: ` ${amount} Taka added from ${bank}`,
    balance: newBalance,
    date: new Date().toLocaleString(),
  });

  // ✅ Success Message
  alert(`✅ Successfully added ${amount} Taka!\nNew Balance: ${newBalance}`);
});
// **************************  CashOut Feature  ****************************************
document
  .getElementById("Withdraw-Money")
  .addEventListener("click", function () {
    const agentNumber = document
      .getElementById("enter-agent-number")
      .value.trim();
    const amount = Number(document.getElementById("enter-amount").value);
    const pinNumber = parseInt(
      document.getElementById("enter-pin-number").value
    );
    const availableBalance = Number(
      document.getElementById("Available-balance").innerText
    );

    // ✅ Validate agent number
    if (!/^\d{11}$/.test(agentNumber)) {
      alert("⚠️ Please provide a valid 11 digit agent number!");
      return;
    }

    // ✅ Validate amount
    if (!Number.isFinite(amount) || amount <= 0) {
      alert("⚠️ Please enter a valid amount!");
      return;
    }

    // ✅ Validate PIN
    if (pinNumber !== validPin) {
      alert("❌ Wrong PIN!");
      return;
    }

    // ✅ Check balance
    if (amount > availableBalance) {
      alert("❌ Insufficient Balance!");
      return;
    }

    // ✅ Update Balance
    const newBalance = availableBalance - amount;
    document.getElementById("Available-balance").innerText = newBalance;

    // ✅ Save transaction history
    transactionsData.push({
      name: `- ${amount} Taka Cashout to Agent ${agentNumber}`,
      amount: amount,
      balance: newBalance,
      date: new Date().toLocaleString(),
      type: "withdraw",
    });

    // ✅ Success alert
    alert(
      `✅ Successfully withdrawn ${amount} Taka!\nNew Balance: ${newBalance}`
    );
  });

// **************************   Add Money toggolin  ****************************************

document.getElementById("ADD-MONEY").addEventListener("click", function () {
  const fromes = document.getElementsByClassName("frome");
  for (frome of fromes) {
    frome.style.display = "none";
  }
  document.getElementById("AddMoneyBtn").style.display = "block";
  function handleButtonToggle(id) {
    const allButtons = document.getElementsByClassName("fur-btn");

    for (const btn of allButtons) {
      btn.classList.remove("border-[#0874f2]");
      btn.classList.add("border", "border-gray-300");
    }
    document.getElementById("ADD-MONEY").classList.remove("border-gray-300");
    document.getElementById("ADD-MONEY").classList.add("border-[#0874f2]");
    console.log(document.getElementById("ADD-MONEY"));
    const selectedButton = document.getElementById(id);
  }
  handleButtonToggle("ADD-MONEY");
});

// Cashout
document.getElementById("ADD-CASHOUT").addEventListener("click", function () {
  const fromes = document.getElementsByClassName("frome");
  for (frome of fromes) {
    frome.style.display = "none";
  }
  document.getElementById("AddCashoutBtn").style.display = "block";

  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById("ADD-CASHOUT").classList.remove("border-gray-300");
  document
    .getElementById("ADD-CASHOUT")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

// **************************  Transfer Money toggolin  ****************************************

document
  .getElementById("Transfer-Money-btn")
  .addEventListener("click", function () {
    const fromes = document.getElementsByClassName("frome");
    for (frome of fromes) {
      frome.style.display = "none";
    }
    document.getElementById("trnsfer-money-perant").style.display = "block";

    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }

    document
      .getElementById("Transfer-Money-btn")
      .classList.remove("border-gray-300");
    document
      .getElementById("Transfer-Money-btn")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });

//   ***************************** Get-Bonus- togolon **********************************

document.getElementById("Get-Bonus-btn").addEventListener("click", function () {
  const fromes = document.getElementsByClassName("frome");
  for (frome of fromes) {
    frome.style.display = "none";
  }
  document.getElementById("Get-Bonus-pareant").style.display = "block";

  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById("Get-Bonus-btn").classList.remove("border-gray-300");
  document
    .getElementById("Get-Bonus-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

// ***************************************  Pay Bill  **************************************

document.getElementById("Pay-Bill-btn").addEventListener("click", function () {
  const fromes = document.getElementsByClassName("frome");
  for (frome of fromes) {
    frome.style.display = "none";
  }
  document.getElementById("Pay-Bill-pareant").style.display = "block";

  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById("Pay-Bill-btn").classList.remove("border-gray-300");
  document
    .getElementById("Pay-Bill-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

// ***************************************  Transactions **************************************

document
  .getElementById("Transactions-btn")
  .addEventListener("click", function () {
    const fromes = document.getElementsByClassName("frome");
    for (frome of fromes) {
      frome.style.display = "none";
    }
    document.getElementById("Transactions-pareant").style.display = "block";

    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }

    document
      .getElementById("Transactions-btn")
      .classList.remove("border-gray-300");
    document
      .getElementById("Transactions-btn")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });
//   ******************** add money   function to toggle buttons ************
// function handleButtonToggle(id) {
//   const formBtns = document.getElementsByClassName("form-btn");

document
  .getElementById("Transactions-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    for (const data of transactionsData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-white rounded-3xl p-3 flex justify-between items-center mx-auto max-w-xl">
        <div class="flex items-center">
          <div class="border-2 p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" alt="">
          </div>
          <div class="ml-4">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <h2 class="font-bold">${data.balance} ৳</h2>
        <i class="fa-solid fa-ellipsis-vertical cursor-pointer hover:underline"></i>
      </div>
    `;
      transactionContainer.appendChild(div);
    }
  });
