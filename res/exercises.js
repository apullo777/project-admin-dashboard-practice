class Exercises {

    exercises = [{
    // Code War Exercises 
        name: 'Simple Pig Latin',
        desc: 'Move the first letter of each word to the end of it, then add "ay" to the end of the word.',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/5kyu/simplePigLatin.js',
        type: 'codewar'
    }, {
        name: 'String Incremeter',
        desc: 'writing a function which increments a string, to create a new string',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/5kyu/strIncrementer.js',
        type: 'codewar'
    }, {
        name: 'Array Diff',
        desc: 'Implementing a difference function, which subtracts one list from another and returns the result',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/arrayDiff.js',
        type: 'codewar'
    }, {
        name: 'Consecutive Strings',
        desc: 'You are given an array strarr of strings and an integer k, your task is to return the first longest string consisting of k consecutive strings taken in the array.',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/consecutive_strings.py',
        type: 'codewar'
    }, {
        name: 'Duplicate Encoders',
        desc: 'Converting a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/duplicateEncoder.js',
        type: 'codewar'
    }, {
        name: 'Is Pangram',
        desc: 'Checking whether the sentence is pangram',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/isPangram.js',
        type: 'codewar'
    }, {
        name: 'Split Strings',
        desc: 'Spliting the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore.',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/splitStrings.js',
        type: 'codewar'
    }, {
        name: 'Camel Case',
        desc: 'Converting words into camel casing.',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/6kyu/stringToCamelCase.js',
        type: 'codewar'
    }, {
        name: 'Array Diff',
        desc: 'Implement a difference function, which subtracts one list from another and returns the result',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/arrayDiff.js',
        type: 'codewar'
    }, {
        name: 'Sum Array',
        desc: 'Returning the sum of all numbers in an array',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/sumArray1.js',
        type: 'codewar'
    }, {
        name: 'Sum Nested Array',
        desc: 'To sum all elements in a nested array',
        link: 'https://github.com/apullo777/codewars-solutions/blob/main/sumNestedArray.js',
        type: 'codewar'
    }, 
    // Algorithms
    {
        name: 'Dijkstras Algorithm',
        desc: 'Finding the shortest paths between nodes in a graph, which may represent, for example, road networks.',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/DijkstrasAlgorithm.py',
        type: 'algorithms'
    }, {
        name: 'Breadth First Search',
        desc: 'Searching a tree data structure for a node that satisfies a given property.',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/breadthFirstSearch.py',
        type: 'algorithms'
    }, {
        name: 'Quick Sort',
        desc: 'Sorting by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/quickSort.js',
        type: 'algorithms'
    }, {
        name: 'Selection Sort',
        desc: 'Sorting an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/selectionSort.py',
        type: 'algorithms'
    }, {
        name: 'Set Covering',
        desc: 'Given a collection of elements, the set covering problem aims to find the minimum number of sets that incorporate (cover) all of these elements.',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/setCovering.py',
        type: 'algorithms'
    },{
        name: 'Binary Search',
        desc: 'Comparing the target value to the middle element of the array.',
        link: 'https://github.com/apullo777/algorithms-practice/blob/main/binarySearch.py',
        type: 'algorithms'
    }];

    constructor() {
        this.create();
    }

    create() {
        const cd = document.getElementById('codewar');
        const algo = document.getElementById('algorithms');
        const codewar = document.createElement('article');
        const algorithms = document.createElement('article');
        this.exercises.forEach(exercise => {
            if (exercise.type === 'codewar') {
                codewar.innerHTML += this.template(exercise);
            } else {
                algorithms.innerHTML += this.template(exercise);
            }
        });
        codewar.appendChild(cd);
        algorithms.appendChild(algo);
    }

    template(exercise) {
        return `
            <h4><a href="${exercise.link}">${exercise.name}</a></h4>
            <p>${exercise.desc}</p>
        `;
    }
}

export default Exercises;