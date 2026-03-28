# Desarrollo local y pruebas
- Este proyecto es un conjunto de landing pages en Astro para un dentista en CDMX. Para probar de forma local, sigue estos pasos.

Requisitos previos
- Node.js 18+ (se recomienda usar la versión LTS más reciente)
- npm (o pnpm/yarn, según prefieras)

Instalación
- Inicia el servidor de desarrollo: 
```bash
npm run dev
```
- Por defecto, el servidor corre en http://localhost:5173. Si deseas usar otro puerto, ejecuta: 
```bash
npx astro dev --port 3000
```
- Abre las tres variantes para revisión:
  - http://localhost:5173/index-v1
  - http://localhost:5173/index-v2
  - http://localhost:5173/index-v3

Notas de verificación
- El barrado de versión (Version Switcher) en la cabecera permite cambiar entre las variantes V1, V2 y V3 sin recargar datos de negocio.
- La CTA de WhatsApp está visible en móvil sin scroll y con una pequeña pulsación para invites al tap.
- Se deben cumplir WCAG 2.2 AA y LFPDPPP; el Aviso de Privacidad está disponible en /aviso-de-privacidad.
- Asegúrate de que las imágenes en public/images sean WebP y < 200 KB para buen rendimiento.