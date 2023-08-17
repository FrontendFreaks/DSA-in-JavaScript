# Objects in JavaScript

<p align="center">
  <a href="https://youtube.com/live/pYTNGZERlQY">
  <img src="https://img.youtube.com/vi/pYTNGZERlQY/0.jpg" alt="Objects In JavaScript" />
  </a>
</p>

### Creating an object
```javascript
const person = {
    name: "Vishal",
    age: 21,
    isEducator: true,
    skills: ["C++", "JavaScript", "ReactJS"],
    projects: {
        "Frontend Freaks": "Frontend Development Project",
    },
    code: function(){
        return "start coding";
    },
    walk: () => {
        return "start walking";
    }
}
```

### Accessing properties using Dot Operator
```javascript
console.log(person.age); // 21
```

### Accessing properties using []
```javascript
console.log(person["name"]); // Vishal
```

### Checking if a key exists in the object
```javascript
console.log(person.hasOwnProperty("name")) // true
console.log(person.hasOwnProperty("last Name")) // false
```

### Adding, deleting, and updating keys
```javascript
person.name = "Vivek" // Updating name key 
person.location = "New Delhi" // Adding location Key
delete person.projects // Deleting projects key
console.log(person);
```

### Shallow Copy
```javascript
const person2 = person
person2.isEducator = false;
```

### Deep Copy
```javascript
const person3 = Object.assign({}, person)
// Nested Objects still do shallow copy here, there for we use lodash cloneDeep method(out of scope for this course)
person3.skills = null;
```

### Using freeze and seal methods
```javascript
Object.freeze(person) // User can't add or delete or update keys
console.log(person);
console.log(Object.isFrozen(person)) // true
```

```javascript
Object.seal(person) // User can't add or delete keys but can update the value
console.log(Object.isSealed(person)); // true
```

### Keys, Values & Entries
```javascript
console.log(Object.keys(person)) // ["name" , "age", "isEducator", ...]
console.log(Object.values(person)) // ["Vishal", 21, true, ...]
console.log(Object.entries(person)) // [["name", "Vishal"], ["age", 21], ["isEducator", true], ...]
```

### Looping through an Object using for...in
```javascript
for (let key in person) {
    console.log(key + ":", person[key]); // name: Vishal   age: 21, isEducator: true ...
}
```

### Looping through an Object using forEach with Object.keys
```javascript
Object.keys(person).forEach((key) => console.log(key))
```
### How to check if two objects are equal?
```javascript
console.log(Object.is(person, person3))
```

### find count of all players
```javascript
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

const playerCount = (data) => {
    if(data === null){
        return {}
    }

    let countPlayer = {}
    for(let player of data.name){
        countPlayer[player] = (countPlayer[player] || 0) + 1;
    }
    const nextPlayerCount = playerCount(data.next);

    for(let key in nextPlayerCount){
        countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key]
    }
    return countPlayer;
}

const countPlayer = playerCount(data);
console.log(countPlayer) // {p1: 2, p4: 3, p3: 3, p2: 2: p5: 2}
```

### Prototype and Inheritance in JavaScript Objects

```javascript
const obj1 = {
    name: "Vishal"
}

const obj2 = {
    age: 21,
    __proto__: obj1
}

console.log(obj2.name);
```

### Question 2: Group Anagrams (LeetCode 49)

```javascript
let anagrams = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("")
        if (!anagrams.hasOwnProperty(str)) {
            anagrams[str] = []
        }

        anagrams[str] = [...anagrams[str], strs[i]];
    }
    return Object.values(anagrams);
```

## Practice Questions

1. [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)
2. [Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/)
3. [Two Sum](https://leetcode.com/problems/two-sum/)
4. [Sum of Unique Elements](https://leetcode.com/problems/sum-of-unique-elements/)
5. [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)
6. [Integer to Roman](https://leetcode.com/problems/integer-to-roman/)
7. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
8. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
9. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
