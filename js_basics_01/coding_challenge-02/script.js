var yob = [1989, 1974, 2002, 1959, 1993, 2000, 2007, 2004],
    r = [],
    full_1 = [],
    full_2 = [],
    i;

function printFullAge() {
  for (i = 0; i < yob.length; i++) {
    var age = 2017 - yob[i];
    if (age >= 18) {
      r.push('Person ' + (i + 1) + ' is ' + age + ' years old.', true);
      full_1.push('2017 - ' + yob[i] + ' = ' + age);
    } else {
      r.push('Person ' + (i + 1) + ' is ' + age + ' years old. ', false);
      full_2.push('2017 - ' + yob[i] + ' = ' + age);
    }
  }

  for (var p in full_1) {
    console.log(full_1[p]);
  }

  for (var p in full_2) {
    console.log(full_2[p]);
  }

  for (var p in r) {
    console.log(r[p]);
  }
}

printFullAge();
