const user = {
  name: "Ali",
  profile: {
    age: 21,
    address: {
      city: "Islamabad",
    },
    social: null,
  },
};

console.log(user?.profile?.address?.city);
console.log(user?.profile?.address?.street);
console.log(user?.contact?.phone);

console.log(user.profile.age ?? 18);
console.log(user.profile.social ?? "No social account");
console.log(user.contact?.phone ?? "No phone number");