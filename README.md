###### **Nofy-Fuse**

<h1 align="center">
    <img width="200" src="./nofy_fuse.png">
</h1>
<h3 align="center">
    
Backend base application 🚀 - template
</h1>


<!-- 
<h3 align="center">
    <a href="">Acessar a demonstração</a>
<h3 > -->

## Indice

- [Indice](#indice)
- [🔖  About](#-about)
- [💻  Tecnologies](#-tecnologies)
- [🛠️  Instalation](#️-instalation)
- [🏃  Run application](#-run-application)
- [🏃  Routes](#-routes)
- [✨  Branch patterns](#-branch-patterns)
- [✨  Patterns Commit - Commitlint](#-patterns-commit---commitlint)
  - [Conventional Commits types for using::](#conventional-commits-types-for-using)
- [🦸  Autor](#-autor)


## 🔖&nbsp; About
This is a template for create the backend with postgres using NodeJs.


## 💻&nbsp; Tecnologies
- NodeJs
- Fastify (JWT, CORS)
- Prisma
- Typescript
- EsLint (Rocketseat configs)

## 🛠️&nbsp; Instalation

1. Need make the .env file, based in .env.example!
 - Inside.env file add the variable database example (I using the POSTGRESQL)
```
DATABASE_URL="postgresql://{password}:{user}@localhost:5432/{DatabaseName}?schema=public"
```

2. Need install all dependencies
```bash
npm install
```

3. Need run docker-compose to start Postgres Database!
```bash
docker-compose up
```

1. Need run the seed script, for populate the database with users!
```bash
npx prisma db seed -- --environment development
```

## 🏃&nbsp; Run application
```bash
npm run start:dev # development
```

<!-- ## ✅ Testes Unitários

```bash
npm run test:dev # watch mode
npm run test #ci
``` -->

## 🏃&nbsp; Routes
- [POST]: /login (public)
- [GET]:  /users (private) 
- [POST]: /users (private)

```
PS: For private routes, you need to make the login and get the token for authorization. 
Add in the headers: Authorization: Bearer {token}.
```

## ✨&nbsp; Branch patterns 
Follow this patterns:
- New branchs:  feature/[StoryID]
                bugfix/[BugID]
                release/[ReleaseCardId]


## ✨&nbsp; Patterns Commit - Commitlint
Follow the Conventional Commits: 

### Conventional Commits types for using:: 
- **chore**: Update of tasks that do not cause changes in production code, but involve tool changes, configuration changes, and library updates.
- **feat**: Additions of new features or any other new implementations to the code.
- **fix**: Essentially define the treatment of bug fixes.
- **refactor**: Used for any changes that are executed in the code, but do not alter the final functionality of the impacted task.
- **docs**: Inclusion or modification only of documentation files.
- **perf**: A code change that improves performance.
- **style**: Changes related to code formatting that do not affect the meaning of the code, such as whitespace, formatting, missing semicolon, etc.
- **test**: Adding missing tests or correcting existing tests in automated testing processes (TDD).
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
- **env**: Used in the description of modifications or additions in configuration files in continuous integration (CI) processes and methods, such as parameters in container configuration files. _For example_:
 ```js
 type: brief description what was done.
 feat: added the page footer
```


## 🦸&nbsp; Autor
Hello, I'm Hugo Almeida, I'm a fullstack architect (mobile++) . I am passionate about technology, programming, processes and planning. I united all these passions in one profession. Questions, suggestions and criticism are very welcome. Follow my contacts.
- Developed :bowtie: by Hugo Almeida
- For support or suggestion : hugoalmeidahh@gmail.com

If you like, don't forget to send stars for this project._