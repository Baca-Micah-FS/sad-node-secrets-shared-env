# Shared Secret File Demonstration

This repository intentionally commits a `.env` file containing a fake secret. The application loads `APP_SECRET` through `dotenv` and uses it to create an HMAC signature.

## Run

```bash
npm install
npm start
```

## Finding

The `.env` file is copied when the repository is cloned because Git tracks it. This makes the application easy to run, but it also exposes the secret to every person and system with repository access. GitHub may warn about some recognizable credential formats, but a generic value is not guaranteed to trigger secret scanning. A lack of warning does not mean the secret is safe.

No real credential is stored in this repository.
