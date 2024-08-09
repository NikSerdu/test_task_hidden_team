# Тестовое задание hidden team

## Установка

Установка с помощью npm (localhost:5173)

```bash
  git clone https://github.com/NikSerdu/test_task_hidden_team
  cd test_task_hidden_team
  mv .env.default .env
  nano .env
  npm i
  npm run dev
```

Установка с помощью pnpm (localhost:5173)

```bash
  git clone https://github.com/NikSerdu/test_task_hidden_team
  cd test_task_hidden_team
  mv .env.default .env
  nano .env
  pnpm i
  pnpm run dev
```

Установка с помощью Docker (localhost)

```bash
  git clone https://github.com/NikSerdu/test_task_hidden_team
  cd test_task_hidden_team
  mv .env.default .env
  nano .env
  sudo docker compose up -d
```

## Переменные окружения

При установке запросит установить переменную окружения `VITE_SERVER_URL`, её необходимо взять из файла с тестовым заданием

## Библиотеки

- MantineUI
- Axios
- React-router-dom
- Redux toolkit
- js-cookie
