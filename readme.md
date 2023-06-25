# Roblox Online Checker

This program checks if a Roblox client is online by checking the files in the Workspace folder. The Roblox client writes a file with the current time periodically. The server checks if the current time - the client time is more than a specified time. If not, the server plays a macro to open the Roblox client.

## Installation

To install this program, you need to have Node.js and pkg installed on your system. You can download Node.js from [here](https://nodejs.org/en/download/) and install pkg using npm:

```bash
npm install -g pkg
```

## Usage

To use this program, you need to run the app.js file and specify the path to the Workspace folder and the time limit in seconds. For example:

```bash
node app.js
```

This will check if the Roblox client is online every 10 seconds. If not, it will play a macro to open the Roblox client.

You can also compile the app.js file into an executable using pkg:

```bash
pkg app.js
```

This will create a app.exe file that you can run without Node.js.

Alternatively, you can download the compiled file from the release section of this repo. To use it, you need to:

- Download and extract the file from the release section.
- Set your config in the .env file according to your preferences.
- Record a macro using TinyTask and save it as an exe file in the same folder as the program.
- Run the program.

The config options in the .env file are:

- FILEPATH: The path to the folder where the Roblox client writes a file with the current time.
- FILENAME: The name of the file that the Roblox client writes.
- MACRONAME: The name of the macro exe file that you recorded with TinyTask.
- TIMEOUT: The time limit in seconds for checking if the current time - the client time is more than or equal to this value. If yes, then play the macro.
- DELAYTIME: The delay time in seconds after checking before checking again.
- DELAYAFTERRUNMACRO: The delay time in seconds after playing the macro before checking again.
- WORKTIME: The work time in minutes for running the program. If the program runs for more than or equal to this value, then stop the program.
- ISLOG: A boolean value (true or false) for whether you want to write a log file or not.

## License

This program is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

## ???
Using Bing ChatAi generate [readme.md](readme.md) (ใช่ฮะ เขียนเองภาษาคงไม่ดีเท่านี้ 5 5 5 )(บางอย่างอาจดูไม่ make sense เพราะให้ข้อมูล ai น้อยไปหน่อย)