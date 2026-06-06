# Tech Stack

- Nest JS.
- Svelte.
- Docker.
- Bun.
- n8n.
- Hermes Agent (Future).

# Pre-requisite Local Installation

1. [Installed Bun Runtime](https://bun.com/).
2. [Installed Docker](https://www.docker.com/), ensure already logged in and already having WSL if in Windows.
3. [Installed Ollama](https://ollama.com/) in host machine Or Using Subscription Model to use it in the n8n workflow as a categorization engine.

# Pre-requisite to connect Gmail REST-API

---

## Setup APIs & Services > Enabled APIs Services

1. Access [Google Cloud Console](https://cloud.google.com/), and navigate to Console.
2. Navigate to "Enable APIs and services"
3. Search Gmail API, Click the card to enter the detail page.
4. Then select Install.
5. Done.

## Setup APIs & Services > OAuth Consent Screen

1. Access [Google Cloud Console](https://cloud.google.com/), and navigate to Console.
2. Create new Project, Finish the required field, creating new project don't inputting address or any payment method.
3. Navigate to "APIs & Services".
4. Navigate to menu "OAuth consent screen". Setup your consent OAuth and input required field.
5. Navigate to menu "Audience", Scroll to botom find "Test users" and input your email.
6. Done.

## Setup APIs & Services > Credentials

1. Navigate to Create Credentials, select OAuth Client ID.
2. Input Application Type as Web Application.
3. Input application name as you want.
4. Navigate to section Authorized redirect URIs, and input with `OAuth Redirect URL` from your n8n.
5. After create you got the `ClientID` and `ClientSecret`, Save the ClientID and ClientSecret somewhere safe.

# App Setup

## Setup Ollama (Skipped this if already having online model)

1. Install Ollama based on your OS (don't installed it as Docker).
2. run `ollama pull qwen3:4b-instruct`, as this demo using this model, tested in 16GB RAM Laptop without discrete GPU.
3. After download is done, run `ollama run qwen3:4b-instruct`, then test it if run then we're good to go.
4. Done.

## Setup n8n

1. Copy the `.env.example` and paste it as `.env` into the same level of the example, and setup the environement inside based on your preference.
2. Open local repository and run `docker compose up -d` inside the repository, for first installation have download the image first.
3. As the default port, open in the browser with `localhost:5678`.
4. Create new workflow and import the workflow from the repository in `/n8n/Financial_Management_WorkFlow.json`.

## Setup n8n for connecting to Gmail API

1. Open Gmail Service node, Setup Credential.
2. Input `ClientID` and `ClientSecret` inside the Gmail OAuth, and Sign In With Google.
3. Then follow the step, then should success.
4. Done.

## Setup n8n for local Ollama model

1. Open Ollama node model, and Authenticate with ollama server URL.
2. Input it with `http://host.docker.internal:11434`.
3. Connect it done (ensure ollama already running).

# Post Setup

1. All setup is ready, just play with the parameters in the n8n. And Running the n8n Workflow.

# Misc

1. BE WIP.
2. FE WIP.
3. Integrate n8n to BE | WIP.

// This is just a fun project
