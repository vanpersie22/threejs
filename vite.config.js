// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/pages/about.html',
        contact: '/pages/contact.html',
        projects: '/pages/projects.html',
        services: '/pages/services.html',
        skills: '/pages/skill.html',
        pubs: '/pages/pubs.html'
      }
    }
  }
};