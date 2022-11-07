
# MyBill Expense Calculator

This app was designed based around user input. When the user loads the page, the first step is to input their current account balance. From here, they click the [+] button to add a new bill or expense to the list. As this is done, their remaining account balance will be adjusted dependant on the amount of each bill.
## Tech Stack

**Client:** React.JS

**Server:** Node, Express, PostgreSQL

## Start Guide
Fork and clone this repo. Then run the following code.
```bash
 cd backend
 npm install
 nodemon backendServer.js
 cd frontend/react-mvp
 npm install
 npm start
```
## Features

- 'How To' tab with directions on app usage
- Input account balance
- Add different expenses/bills
- Subtracts total value of expenses/bills from balance to give accurate remaining balance
- Delete expenses/bills, which will add money back into total balance


## Future features

- On page refresh, clear database for fresh restart
- Add monthly/weekly selector to create multiple budget plans
- User log in on splash page to allow multiple-user usage

## Authors
- [@ClarkDylan](https://www.github.com/ClarkDylan)