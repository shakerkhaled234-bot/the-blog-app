import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // تحويل المسار إلى نسبي لحل مشاكل 404 نهائياً
})