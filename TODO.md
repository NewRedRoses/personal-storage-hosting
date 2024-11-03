# Instructions 

Below is an overview of the current stage for this project. These instructions are based on [the assignment instructions for this project by the Odin Project](https://www.theodinproject.com/lessons/nodejs-file-uploader#project-solution)

- [ ] **Initialize Express** 
- [ ] **Install main dependencies (`EJS`,`Prisma`, `Passport.js`)**
- [ ] **Set up session post-login with `Passport.js`**
  - Use [prisma session store library](https://github.com/kleydon/prisma-session-store#readme) for database persistence with the sessions. 
- [ ] **Add form where logged-in users can upload files**.
  - Start by storing the file locally in the filesystem but later on the [multer middleware](https://github.com/expressjs/multer) will be used once other stuff gets implemented.
- [ ] **Add support for folder & CRUD operations**
  - [ ] Add ability to create folders. 
  - [ ] Add ability to open the contents of a folder.
  - [ ] Add ability to update folder's names.
  - [ ] Add ability to delete a folder and its contents. 
- [ ] **Add a route to view file details** 
  - [ ] Add the file's name, size and upload time in the page.
  - [ ] Add a download button.
- [ ] Add logic to actually upload these files to the "cloud". 
  - Tips:
    - While possible to store these files in the db, the instructors recommend using [Cloudinary](https://cloudinary.com/) or [supabase](https://supabase.com/docs/guides/storage) for the actual hosting.
    - Save the file URL in the database once uploaded