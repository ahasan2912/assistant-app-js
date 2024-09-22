const calculateButton = document.getElementById('calculate');
let x = 1;
calculateButton.addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    
    if(income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList,this.remove('hidden');
        return;
    }

    if(software <= 0 || isNaN(software)){
        document.getElementById('software-error').classList,this.remove('hidden');
        return;
    }

    if(courses <= 0 || isNaN(courses)){
        document.getElementById('courses-error').classList,this.remove('hidden');
        return;
    }

    if(courses <= 0 || isNaN(internet)){
        document.getElementById('internet-error').classList,this.remove('hidden');
        return;
    }

    const totalExpenses = software + courses + internet;
    const mainBalance = document.getElementById('balance');
    const balance = income - totalExpenses;
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    mainBalance.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");

    const historyItem = document.createElement('div');
    historyItem.classList = 'bg-white p-3 rounded-md border-1-2 border-indigo-500';
    historyItem.innerHTML = `
        <p>Serial ${x++}</p>
        <p>${new Date().toLocaleDateString()}</p>
        <p class="text-gray-500">Income ${income.toFixed(2)}</p>
        <p class="text-gray-500">Total expenses ${totalExpenses.toFixed(2)}</p>
        <p class="text-gray-500">Balance ${balance.toFixed(2)}</p>
    `;
    const  historyContianer = document.getElementById("history-list");
    historyContianer.insertBefore(historyItem, historyContianer.firstChild);
});

const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener('click', function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const calculateButton = document.getElementById('calculate');
    const savingPercentnce = parseFloat(document.getElementById('savings').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmont = (savingPercentnce * balance) / 100;
    
    const savingsElement = document.getElementById('savings-amount');
    savingsElement.innerText = savingAmont.toFixed(2);

    const remaingBalance = balance - savingAmont;
    const remaingElement = document.getElementById('remaining-balance');
    remaingElement.innerText = remaingBalance;
});

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove("hidden");

});
assistantTab.addEventListener('click', function(){
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.remove('text-gray-600');

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add("hidden");
})