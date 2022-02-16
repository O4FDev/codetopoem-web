# [Code to Poem](https://codetopoem.com/)

Code to Poem is a simple AI-based app for developers to take code and transform it into a magical poem.

## Apendix
- [Code to Poem](#code-to-poem)
  - [Apendix](#apendix)
  - [Technology Overview](#technology-overview)
  - [What I have learnt](#what-i-have-learnt)

## Technology Overview
Please sign up for the following services:
- Vercel
- OpenAI

Firstly, you should clone the repo and install the dependencies using the command `cd codetopoem-web && npm install`. You should then create a .env file using `touch .env` or make the file in the root of codetopoem-web. 

Place your OpenAI API Key in the env file using the following example for direction: `OPENAI_API_KEY="apikey"`

Using `npm run dev` will allow you to view the page on your localhost environment, and using the Vercel CLI `vercel` command will allow you to deploy it to the web. 

## What I have learnt

I built this project upon GPT-3; by messing around with variations in settings, I've developed a deeper understanding of how to use prompts and settings in GPT-3 to generate a solution. 