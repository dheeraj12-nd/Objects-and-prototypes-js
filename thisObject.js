const emp= {
    id: 101,
    firstName: "Dheeraj",
    Lastname:"Yadav",
    emailId: 'test@gmail.com',

    displayData: function(){
        console.log(this.id+" "+this.firstName+" "+ this.Lastname+" "+this.emailId)
    }
};

emp.displayData();  