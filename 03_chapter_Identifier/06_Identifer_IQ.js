// ============================================
// JavaScript Identifier Rules - IQ
// ============================================

let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";


let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

//let 1stPlace = "invalid"; //starting with number is not allowed


// Keyword
// let class = "invalid"; //Keywords are reserved and cannot be used as identifiers
// let const = "invalid";
//let function = "invalid";
let Function = "invalid";

let MyVar = "uppercase M"; //MyVar is valid, but not recommended to start with uppercase letter for variables and functions
let myvar = "lowercase v"; //myvar and MyVar are different identifiers, JavaScript is case-sensitive

// Unicode letters and Unicode escape sequences are allowed 

let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A";
let \u005f = "Unicode escape for _";


// let my-name = "invalid"; // Hyphens are not allowed in identifiers
// let my name = "invalid";      // Spaces are not allowed in identifiers
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'


// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;
function getUserInfo() { return "function camelCase"; }

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Person() { return "constructor"; }

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";