const express = require('express')

const app = express()


// fruits.js

let fruits = [];

function createFruit(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Fruit name must be a non-empty string.');
  }
  fruits.push(name);
  return name;
}

function readFruits() {
  return [...fruits]; // Return a shallow copy
}

function updateFruit(index, newName) {
  if (typeof index !== 'number' || index < 0 || index >= fruits.length) {
    throw new Error('Invalid index.');
  }
  if (!newName || typeof newName !== 'string') {
    throw new Error('New fruit name must be a non-empty string.');
  }
  const oldName = fruits[index];
  fruits[index] = newName;
  return { oldName, newName };
}

function deleteFruit(index) {
  if (typeof index !== 'number' || index < 0 || index >= fruits.length) {
    throw new Error('Invalid index.');
  }
  return fruits.splice(index, 1)[0];
}

function resetFruits() {
  // Useful for test isolation
  fruits = [];
}

module.exports = {
  createFruit,
  readFruits,
  updateFruit,
  deleteFruit,
  resetFruits
};


app.listen(3000, () => {
    alert('Hello')
})