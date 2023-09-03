const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function calculateDirectorySize(directory) {
  try {
    let totalSize = 0;

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      if (stats.isSymbolicLink()) {
        break;
      }
      if (stats.isDirectory()) {
        totalSize += calculateDirectorySize(filePath);
      } else if (stats.isFile()) {
        totalSize += stats.size;
      }
    }

    return totalSize;
  } catch (error) {
    console.log(`${directory}: 计算失败：${error.message}`)
    return 0
  }
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
  let totalSize = 0
  try {

    const subDirectories = fs.readdirSync(directory);

    for (const subDirectory of subDirectories) {
      const subDirectoryPath = path.join(directory, subDirectory);
      try {
        const stats = fs.statSync(subDirectoryPath);

        // 排查link的目录
        if (stats.isDirectory() && !stats.isSymbolicLink()) {

          const size = calculateDirectorySize(subDirectoryPath);
          totalSize += size
          console.log(`${subDirectoryPath}: ${formatSize(size)}`);
        }
      } catch (error) {
        console.log(`${subDirectoryPath}: 计算失败：${error.message}`);
      }
    }
    console.log("-------------------------------------")
    console.log(`${directory}: ${formatSize(totalSize)}`);

  } catch (error) {
    console.log(`${directory}: 计算失败：${error.message}`);
  }

}

// 使用方法：在命令行中运行 `node script.js 目录路径`
const directoryPath = process.argv[2];
listDirectorySizes(path.resolve(directoryPath));
