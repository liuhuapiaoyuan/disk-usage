# Directory Size Calculator

This is a Node.js script that calculates the disk usage of directories in the current directory.

## Installation
```
npm i -g @suntree/disk-usage
```

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
 