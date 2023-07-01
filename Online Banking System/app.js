const express = require('express');
const app = express();
const port = 3000; // You can choose any port number you prefer

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const fs = require('fs');
let balance = 10;
// Read the contents of the JSON file
fs.readFile('/Users/ahmedfarahat/Downloads/deploy-64160b08fb143a135e02db34/public/balance.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const json_data = JSON.parse(data);

    // Access and convert the value of the "balance" variable to a number
    const last = Number(json_data.balance);

    // Print the balance
    balance  = last

    // You can now use the balance variable as a number
    // ...
  } catch (err) {
    console.error('Error parsing JSON data:', err);
  }
});





var path = require('path');
//
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// getters;
app.get('/LoansRequests', (req, res) => {
  res.render('LoansRequests');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/', (req, res) => {
  res.render('login');
});
app.get('/reminder', (req, res) => {
  res.render('reminder');
});
app.get('/home', (req,res) => {
  res.render('home', { balance });
});




app.get('/OpenAccount', (req, res) => {
  res.render('OpenAccount');
});
app.get('/CloseAccount', (req, res) => {
  res.render('CloseAccount');
});
app.get('/Transactions', (req, res) => {
  res.render('Transactions');
});
app.get('/Transfer', (req, res) => {
  res.render('Transfer');
});
app.get('/Loans', (req, res) => {
  res.render('Loans');
});
app.get('/Payments', (req, res) => {
  res.render('Payments');
});
app.get('/Report', (req, res) => {
  res.render('Report');
});
app.get('/AppLoan', (req, res) => {
  res.render('AppLoan');
});

app.get('/ApplyCreditCard', (req, res) => {
  res.render('ApplyCreditCard');
});

app.get('/PayLoan', (req, res) => {
  res.render('PayLoan');
});

app.get('/LoanStatus', (req, res) => {
  res.render('LoanStatus');
});
app.get('/PaymentsCC', (req, res) => {
  res.render('PaymentsCC');
});
app.get('/TransactionsCC', (req, res) => {
  res.render('TransactionsCC');
});

app.get('/ReportCreditCard', (req, res) => {
  res.render('ReportCreditCard');
});

app.get('/BankerPage', (req, res) => {
  res.render('BankerPage');
});
app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/AccountsRequests', (req, res) => {
  res.render('AccountsRequests');
});
app.get('/TransfersRequests', (req, res) => {
  res.render('TransfersRequests');
});



// postes ;

app.post('/OpenAccount', (req, res) => {
  // Perform authentication logic here
   res.send('form submitted and will be reviewed');

  // Redirect to another page
   
});
app.post('/apploan', (req, res) => {
  // Perform authentication logic here
   res.send('loan form submitted and will be reviewed');

  // Redirect to another page
   
});
app.post('/ReportCreditCard', (req, res) => {
  // Perform authentication logic here
   res.send('Credit Card Reported Successfully');

  // Redirect to another page
   
});
app.post('/appcred', (req, res) => {
  // Perform authentication logic here
   res.send('Credit Card Applied Successfully');

  // Redirect to another page
   
});


app.post('/tech', (req, res) => {
  // Perform authentication logic here
   res.send(' report submitted Successfully');

  // Redirect to another page
   
});

app.post('/CloseAccount', (req, res) => {
  // Perform authentication logic here
   res.send('Account Closed successfully!');

  // Redirect to another page
   
});
app.post('/signup', (req, res) => {
  // Perform authentication logic here

  // Redirect to another page

  res.redirect('/login');
});

app.get('/Points', (req, res) => {
  res.render('Points');
});
app.get('/CreditCardApp', (req, res) => {
  res.render('CreditCardApp');
});
app.get('/CreditCardRep', (req, res) => {
  res.render('CreditCardRep');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/Report', (req, res) => {
  // Perform authentication logic here

  // Redirect to another page
   res.render('home', { balance });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
 if(username==="admin")
 {
     res.redirect('/admin');

 }else if (username.startsWith("banker"))
 {
  
   res.redirect('/BankerPage');
 }
 else
 {
       res.render('home', { balance });
 }
});

function pay(amount) {
  if (typeof amount !== 'number' || amount <= 0) {
    console.error('Invalid amount');
    return;
  }

  balance -= amount;
  console.log(balance);
}

app.post('/payit300', (req, res) => {

balance-=300;
});

app.post('/payit400', (req, res) => {

balance-=400;
});
app.post('/payit600', (req, res) => {

balance-=600;
});
app.post('/payit350', (req, res) => {

balance-=350;
});





app.post('/Transfer', (req, res) => {
  const amount = parseFloat(req.body.Amount); 


  // Subtract the amount from the balance
  balance -= amount;
  
 res.send('  successfully!');
   
  // Perform additional operations or logic here

  // Redirect to a success page or any other desired action
});


app.post('/partial', (req, res) => {
  const amount = parseFloat(req.body.Amount); 


  // Subtract the amount from the balance
  balance -= amount;

  // Perform additional operations or logic here

  // Redirect to a success page or any other desired action
});



app.post('/paycredit20000', (req, res) => {



  // Subtract the amount from the balance
  balance -= 20000;

  // Perform additional operations or logic here

  // Redirect to a success page or any other desired action
});


app.post('/payinstallment', (req, res) => {



  // Subtract the amount from the balance
  balance -= 1250;

  // Perform additional operations or logic here

  // Redirect to a success page or any other desired action
});



app.post('/paycredit30000', (req, res) => {



  // Subtract the amount from the balance
  balance -= 30000;

  // Perform additional operations or logic here

  // Redirect to a success page or any other desired action
});






