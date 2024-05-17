const path = require('path');

function removeComments(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const result = data.replace(/\/\/.*$/gm, '');
    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Removed comments from ${filePath}`);
    });
  });
}

function findFilesRecursively(dirPath, fileName) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFilesRecursively(fullPath, fileName);
    } else if (file === fileName && path.extname(fullPath) === '.js') {
      removeComments(fullPath);
    }
  });
}

if (!process.argv[2]) {
  console.log("Usage: node remove-comments.js <filename>");
  process.exit(1);
}

const fileName = process.argv[2];
findFilesRecursively('./src', fileName); // Adjust the starting directory as needed
const fs = require('fs');
const path = require('path');

function removeComments(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const result = data.replace(/\/\/.*$/gm, '');
    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Removed comments from ${filePath}`);
    });
  });
}

function findFilesRecursively(dirPath, fileName) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFilesRecursively(fullPath, fileName);
    } else if (file === fileName && path.extname(fullPath) === '.js') {
      removeComments(fullPath);
    }
  });
}

if (!process.argv[2]) {
  console.log("Usage: node remove-comments.js <filename>");
  process.exit(1);
}

const fileName = process.argv[2];
findFilesRecursively('./src', fileName); // Adjust the starting directory as needed
1
