# Team-RSVP-Manager
# Gametime Hero - RSVP Manager Challenge

This project is a simple RSVP management service built in TypeScript for the Gametime Hero internship coding challenge.

## 📌 Features

- Add or update a player's RSVP
- Get a list of confirmed attendees (status: "Yes")
- Get stats on total, confirmed, and declined responses

## 🧠 Thought Process

I approached this challenge by focusing on clean code, simplicity, and scalability:
- Used a `Map` to efficiently store RSVP data keyed by player ID
- Kept functions focused and testable (e.g., `getStats`, `getConfirmed`)
- Used dependency injection to allow logging to be easily swapped or extended
- Kept logic and types separate for clarity and reusability

## 🛠️ Tech Stack

- TypeScript (no framework)
- Node.js (for running locally)
- Simple console logger (can be replaced with custom logging)

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/soujanya1604/Team-RSVP-Manager.git
   cd gametime-hero-rsvp-service

   Install dependencies (if using ts-node):  npm install
   Run the example: npx ts-node src/index.ts

   Or compile using TypeScript:  npx tsc   and  node dist/index.js

