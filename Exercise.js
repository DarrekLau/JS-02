// Exercise #1

function payment(amount) {
  let totalAmount = amount + 3 + amount * 0.01;
  return totalAmount;
  console.log(totalAmount);
}

payment(20);

// Exercise #2

// part 1
function friends(nameA, nameB, nameC) {
  console.log("Welcome " + nameA + ", " + nameB + ", " + nameC + ".");
}

friends("John", "Mary", "Amy");

// part 2
function age(birthYr) {
  let year = new Date().getFullYear();

  const age = year - birthYr;
  return age;
  console.log(age);
}

age(1990);

// part 3
function friendsAge(nameA, ageA, nameB, ageB, nameC, ageC) {
  console.log(
    "Welcome " +
      nameA +
      ", you are " +
      ageA +
      ". " +
      "Welcome " +
      nameB +
      ", you are " +
      ageB +
      ". " +
      "Welcome " +
      nameC +
      ", you are " +
      ageC +
      "."
  );
}

friendsAge("John", 30, "Mary", 31, "Amy", 32);

//   Exercise #3

function score(a) {
  if (a === 11) {
    console.log("Perfect !!");
  } else if (a > 8) {
    console.log("Excellent!");
  } else if (a >= 5) {
    return true;
  } else {
    return false;
  }
}

score();
