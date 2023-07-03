/* eslint-disable no-nested-ternary */
/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
const getFizzBuzz = (num) => ((num % 3 === 0 && num % 5 === 0) ? 'FizzBuzz'
  : (num % 3 === 0) ? 'Fizz'
    : (num % 5 === 0) ? 'Buzz'
      : num);


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
const getFactorial = (n) => (n === 1 ? n : n * getFactorial(n - 1));


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
const getSumBetweenNumbers = (n1, n2) => {
  let currant = n1;
  return Array(n2 - n1 + 1)
    .fill(n1)
    .map(() => {
      const newEl = currant;
      // eslint-disable-next-line no-plusplus
      currant++;
      return newEl;
    }).reduce((a, b) => a + b);
};


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
// eslint-disable-next-line no-unused-vars
function isTriangle(a, b, c) {
  // eslint-disable-next-line prefer-rest-params, no-shadow
  const arg = [...arguments].sort((a, b) => a - b);
  return (arg[0] + arg[1]) > arg[2];
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  return (rect1.top + rect1.height) > rect2.top
    && (rect1.left + rect1.width) > rect2.left;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return ((circle.center.x - point.x) ** 2
    + (circle.center.y - point.y) ** 2) < circle.radius ** 2;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const mass = str.split('').filter((el) => el !== ' ');
  const unique = Array.from(new Set(mass));
  const resMass = unique.map((el) => {
    const returnEl = [];
    mass.forEach((val) => (val === el ? returnEl.push(el) : ''));
    return returnEl;
  });
  const res = resMass.find((el) => el.length === 1);
  return res === undefined ? null : res.join('');
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';

  return a <= b ? `${start}${a}, ${b}${end}` : `${start}${b}, ${a}${end}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
const reverseString = (str) => str.split('').reverse().join('');


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => +String(num).split('').reverse().join('');


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const arrayFromNum = String(ccn).split('');

  const calculate = (even, el, index) => {
    if (even) {
      if (index % 2 !== 0) return el * 2 > 9 ? el * 2 - 9 : el * 2;
      return +el;
    }

    if (index % 2 === 0) return el * 2 > 9 ? el * 2 - 9 : el * 2;
    return +el;
  };

  const boolean = (arrayFromNum.length - 1) % 2 === 0;

  const lastNum = +arrayFromNum.slice(arrayFromNum.length - 1, arrayFromNum.length);

  const arrayToCalculate = arrayFromNum
    .slice(0, arrayFromNum.length - 1)
    .map((el, ind) => calculate(boolean, el, ind));

  return (arrayToCalculate.reduce((a, b) => a + b) + lastNum) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arrayOfNum = String(num).split('');
  const sum = arrayOfNum.reduce((a, b) => +a + +b);
  return (arrayOfNum.length > 1) ? getDigitalRoot(sum) : +sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
const isBracketsBalanced = (str) => {
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  let flag = true;
  const stack = [];

  str.split('').forEach((strElement) => {
    bracketsConfig.forEach((configElement) => {
      if (strElement === configElement[0] && strElement === configElement[1]) {
        if (stack.length === 0) stack.push(strElement);
        else if (stack[stack.length - 1] !== configElement[0]
          && !stack.includes(strElement)) stack.push(strElement);
        else if (stack[stack.length - 1] === configElement[0]) stack.pop();
        else flag = false;
      } else if (strElement === configElement[0] && strElement !== configElement[1]) {
        stack.push(strElement);
      } else if (strElement === configElement[1] && strElement !== configElement[0]) {
        // eslint-disable-next-line no-unused-expressions
        stack.length !== 0 && stack[stack.length - 1] === configElement[0]
          ? stack.pop() : flag = false;
      }
    });
  });

  return flag === true && stack.length === 0;
};


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
const toNaryString = (num, n) => num.toString(n);


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let flag = true;
  let index = 0;
  const res = pathes[0].split('');

  res.forEach((el, ind) => {
    if (flag) {
      pathes.forEach((val) => {
        if (val.split('')[ind] !== el) {
          index = ind;
          flag = false;
        }
      });
    }
  });

  const superRes = res.slice(0, index);

  if (superRes.length < 2) return superRes.join('');

  const indexOfSlash = superRes.reverse().indexOf('/');

  return superRes
    .reverse()
    .slice(0, superRes.length - indexOfSlash)
    .join('');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
const getMatrixProduct = (m1, m2) => {
  const m1Rows = m1.length;
  const m1Column = m1[0].length;
  const m2Column = m2[0].length;

  const resMas = new Array(m1Rows);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < m1Rows; ++i) {
    resMas[i] = new Array(m2Column);
    // eslint-disable-next-line no-plusplus
    for (let k = 0; k < m2Column; ++k) {
      resMas[i][k] = 0;
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < m1Column; ++j) {
        resMas[i][k] += m1[i][j] * m2[j][k];
      }
    }
  }

  return resMas;
};


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
const evaluateTicTacToePosition = (position) => {
  const checkMass = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  const check = (game, mass, toe) => {
    let win;
    mass.forEach((el) => {
      let count = 0;
      el.forEach((val) => {
        // eslint-disable-next-line no-plusplus
        if (game[val[0]][val[1]] === toe) count++;
      });
      if (count === 3) win = toe;
    });
    return win;
  };

  return check(position, checkMass, '0') || check(position, checkMass, 'X');
};


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
