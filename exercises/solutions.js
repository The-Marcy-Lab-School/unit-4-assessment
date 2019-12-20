// 1
function makeAccount(startingBal){
  return {
    checkBalance(){
      return startingBal;
    },
    add(num){
      num + startingBal;
      return `${num} added`
    },
    subtract(num){
      startingBal - num
      return `${num} subtracted`
    },
  }
}

// 2
function SavingsAccount(name, balance){
    this.name = name;
    this.balance = 0;
}
    
SavingsAccount.prototype.showBalance = function(){
    return `$ ${this.balance}`;
  
}
  
SavingsAccount.prototype.depositFunds = function(num){
  if(num < 0 ) return `Please include a deposit amount that is greater than 0`;
  this.balance += num;
  return `${num} deposited`;
}
  
SavingsAccount.prototype.withdrawFunds = function (num){
  if(num < this.balance) return `Insufficient Funds`;
  this.balance -= num;
  return `${num} withdrawn`;
}


// 3
function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.contacts = [];
}

Phone.prototype.addContact = function(obj) {
  this.contacts.push(obj);
  if(/^[a-zA-Z0-9]/.test(obj.name)){
    return `Invalid`;
  }else if(/^\d{10}$/.test(obj.phoneNumber)){
    return `Invalid`;
  }
  return `${obj.name}added.`;
  
}

// 4
function AppleiPhone(phoneNumber, model){
  Phone.call(this, phoneNumber);
  this.model = model;
}

AppleiPhone.prototype.sendiMessage = function(obj, str){
  if(obj.constructor === 'AppleiPhone'){
    return `Message sent.`; 
  }else{
    return `Message could not be sent.`;
  }
}

// 5
class Person{
  constructor(firstName, lastName, age, gender){
    this.firstName =firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  fullName(){
    return this.firstName + this.lastName;
  }
}


module.exports = {
  // makeAccount,
  // SavingsAccount
  // Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
