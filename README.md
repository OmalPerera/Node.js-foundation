# Node.js foundation course

## **Chapter 05 - File System**

In Order to use this module

    var fs = require('fs');

### Lesson 01-1 - Reading Contents of a directory Asynchronously

    fs.readdir(path[, options], callback)

* _path `<String>` | `<Buffer>`_<br>
* _options `<String>` | `<Object>`_<br>
* _encoding `<String>` default = 'utf8'`_<br>
* _callback `<Function>`_<br>

The callback gets two arguments (err, files) where files is an array of the names of the files

[https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)

<br>

### Lesson 01-2 - Reading Contents of a directory Synchronously

    fs.readdirSync(path[, options])

* _path `<String>` | `<Buffer>`_<br>
* _options `<String>` | `<Object>`_<br>
* _encoding `<String>` default = 'utf8'`_<br>

[https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options]
(https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options)

<br>

### Lesson 02-1 - Reading Contents of a file

    fs.readFile(file[, options], callback)

* _file `<String>` | `<Buffer>` | `<Integer>` filename or file descriptor_<br>
* _options `<Object>` | `<String>`_<br>
* _encoding `<String>` | `<Null>` default = null_<br>
* _flag `<String>` default = 'r'_<br>
* _callback `<Function>`_<br>

Example

    fs.readFile('/etc/passwd', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

[https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback]
(https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback)

<br>
<br>

fs.readFileSync(file[, options])
file <String> | <Buffer> | <Integer> filename or file descriptor
options <Object> | <String>
encoding <String> | <Null> default = null
flag <String> default = 'r'

Synchronous version of fs.readFile. Returns the contents of the file
If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options



fs.writeFile(file, data[, options], callback)
file <String> | <Buffer> | <Integer> filename or file descriptor
data <String> | <Buffer>
options <Object> | <String>
encoding <String> | <Null> default = 'utf8'
mode <Integer> default = 0o666
flag <String> default = 'w'
callback <Function>

Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.

The encoding option is ignored if data is a buffer. It defaults to 'utf8'

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

If options is a string, then it specifies the encoding. Example:
fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);

https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback



fs.appendFile(file, data[, options], callback)
file <String> | <Buffer> | <Number> filename or file descriptor
data <String> | <Buffer>
options <Object> | <String>
encoding <String> | <Null> default = 'utf8'
mode <Integer> default = 0o666
flag <String> default = 'a'
callback <Function>

Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a buffer.

Example:

fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

s.appendFile('message.txt', 'data to append', 'utf8', callback);

https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback



fs.appendFileSync(file, data[, options])
file <String> | <Buffer> | <Number> filename or file descriptor
data <String> | <Buffer>
options <Object> | <String>
encoding <String> | <Null> default = 'utf8'
mode <Integer> default = 0o666
flag <String> default = 'a'
The synchronous version of fs.appendFile(). Returns undefined.

https://nodejs.org/api/fs.html#fs_fs_appendfilesync_file_data_options


remove files
fs.unlinkSync(path)
path <String> | <Buffer>
https://nodejs.org/api/fs.html#fs_fs_unlinksync_path



fs.rename(oldPath, newPath, callback)
oldPath <String> | <Buffer>
newPath <String> | <Buffer>
callback <Function>

https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback



fs.renameSync(oldPath, newPath)
oldPath <String> | <Buffer>
newPath <String> | <Buffer>

https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath



-----------------------------------------------------------------

stream

Writable streams

const myStream = getWritableStreamSomehow();
myStream.write('some data');
myStream.write('some more data');
myStream.end('done writing data');

https://nodejs.org/api/stream.html#stream_writable_streams


Readable streams

var stream = fs.createReadStream("./chat.log", "UTF-8");
stream.on("data", function(dataChunk){
  process.stdout.write(`chunks : ${dataChunk.length} |`);
  data += dataChunk;
  //console.log(data);
});
