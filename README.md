# **Nofy-Fuse**

Base Application - template
<!-- <h1 align="center">
    <img src="https://ik.imagekit.io/kudysak8uv/logo2_wkzFleEF6.png">
</h1>

<h1>
    <img src="public/apresentacao.gif">
</h1> -->
<!-- 
<h3 align="center">
    <a href="">Acessar a demonstração</a>
<h3 > -->

# Indice

- [About](#-about)
- [Tecnologies](#-tech)
- [Instalation](#-install)
- [Run application](#-run)
- [Branch patterns ](#-branch)
- [Developers ](#-devs)


## 🔖&nbsp; About
This is a template for create the backend with postgres using NodeJs.


# 🚀&nbsp; Techonologies
- NodeJs
- Fastify (JWT, CORS)
- Prisma
- Typescript
- EsLint (Rocketseat configs)

## 🛠️&nbsp; Instalation

1. Need make the env file!
2. Need install all dependencies

```bash
npm install
```
3. Need run docker-compose to start Postgres Database!

```bash
docker-compose up
```

## 🏃&nbsp; Run application

```bash
npm run dev # development
```

<!-- ## ✅ Testes Unitários

```bash
npm run test:dev # watch mode
npm run test #ci
``` -->

## ✨&nbsp; Branch patterns 
Follow this patterns:
- New branchs:  feature/[StoryID]
                bugfix/[BugID]
                release/[ReleaseCardId]


## ✨&nbsp; Patterns Commit - Commitlint
Follow the Conventional Commits: 

### Conventional Commits types for using:: 
**chore**: Update of tasks that do not cause changes in production code, but involve tool changes, configuration changes, and library updates.
**feat**: Additions of new features or any other new implementations to the code.
**fix**: Essentially define the treatment of bug fixes.
**refactor**: Used for any changes that are executed in the code, but do not alter the final functionality of the impacted task.
**docs**: Inclusion or modification only of documentation files.
**perf**: A code change that improves performance.
**style**: Changes related to code formatting that do not affect the meaning of the code, such as whitespace, formatting, missing semicolon, etc.
**test**: Adding missing tests or correcting existing tests in automated testing processes (TDD).
**build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
**ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
**env**: Used in the description of modifications or additions in configuration files in continuous integration (CI) processes and methods, such as parameters in container configuration files. _For example_:
 ```bash
 **type**: brief description of what was done.
 **feat**: added the page footer
```

---
## Developers
Developed :bowtie: by Hugo Almeida
For support or suggestions : hugoalmeidahh@gmail.com