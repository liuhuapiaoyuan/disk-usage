const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function calculateDirectorySize(directory) {
  let totalSize = 0;

  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      totalSize += calculateDirectorySize(filePath);
    } else if (stats.isFile()) {
      totalSize += stats.size;
    }
  }

  return totalSize;
}

function formatSize(size) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }

  return `${size.toFixed(2)} ${units[index]}`;
}

function listDirectorySizes(directory) {
  const subDirectories = fs.readdirSync(directory);

  for (const subDirectory of subDirectories) {
    const subDirectoryPath = path.join(directory, subDirectory);
    const stats = fs.statSync(subDirectoryPath);

    if (stats.isDirectory()) {
      const size = calculateDirectorySize(subDirectoryPath);
      console.log(`${subDirectoryPath}: ${formatSize(size)}`);
    }
  }
}

// 使用方法：在命令行中运行 `node script.js 目录路径`
const directoryPath = process.argv[2];
listDirectorySizes(directoryPath);
