## Requirements
- Node.js
- npm or yarn (I'm using yarn)

## How do I run it on my own computer?

1. First, navigate to the project directory in the terminal

2. Rename `.env.example` file to `.env` and get the necessary keys from Airtable and Raindrop accounts, then add them to the following sections

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
RAINDROP_ACCESS_TOKEN=
```

3. Install dependencies

```bash
yarn
```

4. Start the development server

```bash
yarn dev
```

5. You're all set

Open [http://localhost:3000](http://localhost:3000) in your browser
