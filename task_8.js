let users = new Map();
users.set("Roma", "grade A");
users.set("Sasha", "grade B");
users.set("Sonya", "grade A");
users.set("Karim", "grade B");
users.set("Tarik", "grade A");
users.set("Misha", "grade C");
users.set("Pasha", "grade A");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}