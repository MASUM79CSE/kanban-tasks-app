# 🗂️ Kanban Tasks App

A lightweight, elegant Kanban board built using **React**, **Firebase Firestore**, and **Tailwind CSS**. This app lets users manage tasks across `To Do`, `In Progress`, and `Done` columns with real-time updates and intuitive UI.

![Kanban Preview](#) <!-- Replace with actual image if available -->

---

## 🚀 Features

- 📝 Create, update, and delete tasks
- 🔄 Real-time sync using Firebase Firestore
- 🔐 Anonymous Firebase Authentication
- 💡 Auto-focus task inputs and clean UI/UX
- 🎉 Confetti on task completion
- 🧠 Modular, scalable code with functional components
- 📱 Responsive design with Tailwind CSS
- 🌈 Smooth transitions and animations

---

## 🧰 Tech Stack

| Tech         | Description                          |
|--------------|--------------------------------------|
| React        | Frontend library (via Babel)         |
| Firebase     | Firestore DB + Authentication        |
| Tailwind CSS | Utility-first styling                |
| Babel        | In-browser JSX transformation        |
| HTML/CSS     | Pure frontend deployment             |

---

## 📦 Getting Started

> ⚠️ No build tools required – works with plain HTML + Firebase

### 🔗 Live Demo

[🔗 Visit the Live App](https://your-live-demo-url.com) <!-- Replace with actual deployed link -->

### 🧪 Prerequisites

- Firebase project (Firestore + Authentication enabled)
- Tailwind CDN
- Basic web server (optional for local testing)

### 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/MASUM79CSE/kanban-tasks-app.git
cd kanban-tasks-app
```


2. Add your Firebase config to firebase.js:
3.  Open index.html in your browser.
```bash
   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
  ...
   };
firebase.initializeApp(firebaseConfig);

```
3. Open index.html in your browser.

# 📌 Project Structure

```bash
📦 kanban-tasks-app
├── index.html           # Main HTML file
├── firebase.js          # Firebase config and setup
├── styles.css (CDN)     # Tailwind CSS (via CDN)
├── README.md            # You're here!

```

## 💡 Future Plans: 
 - Drag & drop task handling
 - User authentication with Email/Google
 - Task due dates & reminders
 - Multiple project boards
 - Dark mode toggle
