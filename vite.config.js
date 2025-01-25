import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        recommendations: "recommendations.html",
        field_program: "field_program.html",
        bph:"bph.html",
        pi:"pi.html",
        mikat:"mikat.html",
        medinfo:"medinfo.html",
        re:"re.html",        
        kwu:"kwu.html",        
        sosmas:"sosmas.html",
        media_partner: "media_partner.html"     
      }
    }
  }
})
