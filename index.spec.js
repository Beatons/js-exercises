const { reverseCase, sortDescending, charCount, potatoes, singleOccurance, addUp, doubleChar, sortByLength, allTruthy, secondLargest, toArray, spelling, chatroomStatus, inkLevels, isSymmetrical, minutesToSeconds } = require('./index.js');

test('Adds up numbers up to the given one', () => {
  expect(addUp(1)).toBe(1);
  expect(addUp(4)).toBe(10);
  expect(addUp(13)).toBe(91);
  expect(addUp(600)).toBe(180300);
});

test('Find single character occurance from the string', () => {
  expect(singleOccurance('EFFEAABbc')).toBe('C');
  expect(singleOccurance('AAAAVNNNNSS')).toBe('V');
  expect(singleOccurance('s')).toBe('S');
  expect(singleOccurance('aaaassssddffdsffgg')).toBe('');
});

test('Double each characters in the string', () => {
  expect(doubleChar('String')).toBe('SSttrriinngg');
  expect(doubleChar('Hello World!')).toBe('HHeelllloo  WWoorrlldd!!');
  expect(doubleChar('1234!_ ')).toBe('11223344!!__  ');
});

test('Sort arrays by length', () => {
  expect(sortByLength(["a", "ccc", "dddd", "bb"])).toEqual(["a", "bb", "ccc", "dddd"]);
  expect(sortByLength(["apple", "pie", "shortcake"])).toEqual(["pie", "apple", "shortcake"]);
  expect(sortByLength(["may", "april", "september", "august"])).toEqual(["may", "april", "august", "september"]);
});

test('Are all values truthy', () => {
  expect(allTruthy(true, true, true)).toBe(true);
  expect(allTruthy(true, false, true)).toBe(false);
  expect(allTruthy(5, 4, 3, 2, 1, 0)).toBe(false);
});

test('Find second largest number', () => {
  expect(secondLargest([10, 40, 30, 20, 50])).toBe(40);
  expect(secondLargest([25, 143, 89, 13, 105])).toBe(105);
  expect(secondLargest([54, 23, 11, 17, 10])).toBe(23);
});

test('Convert object to 2D array', () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
  expect(toArray({ foo: 33, bar: 45, baz: 67 })).toEqual([["foo", 33], ["bar", 45], ["baz", 67]]);
  expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
  expect(toArray({})).toEqual([]);
});

test('Spell the word', () => {
  expect(spelling("bee")).toEqual(['b', 'be', 'bee']);
  expect(spelling("cake")).toEqual(['c', 'ca', 'cak', 'cake']);
  expect(spelling("happy")).toEqual(['h', 'ha', 'hap', 'happ', 'happy']);
  expect(spelling("eagerly")).toEqual(['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly']);
  expect(spelling("believe")).toEqual(['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe']);
});

test('Return chatroom status', () => {
  expect(chatroomStatus([])).toBe("no one online");
  expect(chatroomStatus(["becky325"])).toBe("becky325 online");
  expect(chatroomStatus(["becky325", "malcolm888"])).toBe("becky325 and malcolm888 online");
  expect(chatroomStatus(["becky325", "malcolm888", "fah32fa"])).toBe("becky325, malcolm888 and 1 more online");
  expect(chatroomStatus(["paRIE_to"])).toBe("paRIE_to online");
  expect(chatroomStatus(["s234f", "mailbox2"])).toBe("s234f and mailbox2 online");
  expect(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])).toBe("pap_ier44, townieBOY and 4 more online");
});

test('Print levels', () => {
  expect(inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
})).toBe(10);
  expect(inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
})).toBe(432);
  expect(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
})).toBe(0);
  expect(inkLevels({
	"cyan": 70,
	"magenta": 700,
	"yellow": 1
})).toBe(1);
  expect(inkLevels({
	"cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
})).toBe(6543);
  expect(inkLevels({
	"cyan": 1,
	"magenta": 1,
	"yellow": 1
})).toBe(1);
  expect(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 700
})).toBe(700);
});

test('Video length in seconds', () => {
  expect(minutesToSeconds("01:00")).toBe(60);
  expect(minutesToSeconds("13:56")).toBe(836);
  expect(minutesToSeconds("10:60")).toBe(false);
  expect(minutesToSeconds("132:21")).toBe(7941);
  expect(minutesToSeconds("132:271")).toBe(false);
  expect(minutesToSeconds("01:30")).toBe(90);
  expect(minutesToSeconds("10:00")).toBe(600);
});

test('Reverse the case', () => {
  expect(reverseCase("Happy Birthday")).toBe('hAPPY bIRTHDAY');
  expect(reverseCase('MANY THANKS')).toBe('many thanks');
  expect(reverseCase('sPoNtAnEoUs')).toBe('SpOnTaNeOuS');
  expect(reverseCase('eXCELLENT, yOuR mAJESTY')).toBe('Excellent, YoUr Majesty');
});

test('Is the Number Symmetrical', () => {
  expect(isSymmetrical(23)).toBe(false);
  expect(isSymmetrical(9562)).toBe(false);
  expect(isSymmetrical(10019)).toBe(false);
  expect(isSymmetrical(1)).toBe(true);
  expect(isSymmetrical(3223)).toBe(true);
  expect(isSymmetrical(95559)).toBe(true);
  expect(isSymmetrical(66566)).toBe(true);
});

test('Find the Amount of Potatoes', () => {
  expect(potatoes("potato")).toBe(1);
  expect(potatoes("potatopotatocherry")).toBe(2);
  expect(potatoes("potatopotatopotatoorange")).toBe(3);
  expect(potatoes("potatopotatobananapotatopotato")).toBe(4);
  expect(potatoes("potatopotatomangopotatopotatopotato")).toBe(5);
  expect(potatoes("potatocucumberpotatopotatopotatopotatopotato")).toBe(6);
});

test('Count Instances of a Character in a String', () => {
  expect(charCount('a','edabit')).toBe(1);
  expect(charCount('b','big fat bubble')).toBe(4);
  expect(charCount('c','Chamber of secrets')).toBe(1);
  expect(charCount('f','frank and his friends have offered five foxes for sale')).toBe(7);
  expect(charCount('x','edabit')).toBe(0);
  expect(charCount('a','Adam and Eve bit the apple and found a snake')).toBe(6);
  expect(charCount('s','sssssssssssssssssssssssss')).toBe(25);
  expect(charCount('7','10795426697')).toBe(2);
});

test('Sort Numbers in Descending Order', () => {
  expect(sortDescending(123)).toBe(321);
  expect(sortDescending(670276097)).toBe(977766200);
  expect(sortDescending(2619805)).toBe(9865210);
  expect(sortDescending(81294)).toBe(98421);
  expect(sortDescending(1111)).toBe(1111);
  expect(sortDescending(321)).toBe(321);
  expect(sortDescending(628904)).toBe(986420);
  expect(sortDescending(289327560)).toBe(987653220);
  expect(sortDescending(6456)).toBe(6654);
  expect(sortDescending(444111888555333)).toBe(888555444333111);
});