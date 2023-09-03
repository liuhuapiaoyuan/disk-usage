当然！以下是一个适合的 README.md 文件示例，用于说明如何使用你的脚本：

```markdown
# Directory Size Calculator

This is a Node.js script that calculates the disk usage of directories in the current directory.

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone or download this repository.

## Usage

1. Open a terminal or command prompt.
2. Navigate to the directory where you cloned or downloaded this repository.
3. Run the following command:

   ```
   disk-usage js <directory-path>
   ```

   Replace `<directory-path>` with the actual path of the directory you want to calculate the disk usage for.

4. The script will recursively calculate the disk usage for each subdirectory and display the results in the terminal.

## Example

To calculate the disk usage of the "my-folder" directory located in the current directory:

```
disk-usage js my-folder
```

## Notes

- The script may take some time to calculate the disk usage, especially for large directories.
- The disk usage is displayed in a human-readable format (e.g., "1.23 MB", "500 KB").
- The script does not calculate the disk usage of individual files, only directories.

## License

This project is licensed under the [MIT License](LICENSE).
```
 