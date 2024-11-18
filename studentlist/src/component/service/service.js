const CustomerList=[
    {
      id :"1",
      name:"hp",
      phone:"111",
      email: "a@a"
    },
    {
      id :"2",
      name:"hp1",
      phone:"222",
      email: "b@b"
    },
    {
      id :"3",
      name:"hp2",
      phone:"333",
      email: "c@c"
    }
  ];

export function GetAllCustomer() {
    return CustomerList;
}

export function AddNewCustomer(customer) {
    CustomerList.push(customer);
}