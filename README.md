File Metadata Microservice
=========================

User stories:
* User Story: I can submit a FormData object that includes a file upload.
* User Story: When I submit something, I will receive the file size in bytes within the JSON response
* Hint: You may want to use this package: [https://www.npmjs.com/package/multer](https://www.npmjs.com/package/multer)

### Example usage:

Upload File from the app at [`https://judicious-hope.glitch.me/`](https://judicious-hope.glitch.me/)

### Example output:
```
{
  "name": "profile.png",
  "size": 2045
}
```
