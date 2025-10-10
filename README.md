# Ecomodda Vinstage – Guía del Repositorio

## Resumen
Aplicación full-stack para gestionar el catálogo de productos de Ecomodda Vinstage, con frontend en React (Vite) y backend en Node.js/Express.

## Estructura principal
- **Proyecto funcional/backend**: API REST en Express, utiliza MongoDB y variables de entorno en `.env`.
- **Proyecto funcional/database**: Scripts de inicialización de base de datos.
- **Proyecto funcional/frontend**: Interfaz de usuario con Vite + React.
- **Proyecto funcional/docs**: Documentación complementaria.

## Flujo de trabajo recomendado
1. Clonar el repositorio.
2. Instalar dependencias en `backend` y `frontend` (`npm install`).
3. Configurar las variables de entorno en `backend/.env`.
4. Ejecutar `docker-compose up` desde la carpeta raíz del proyecto para levantar los servicios, o iniciar backend/frontend por separado con `npm run dev`.
5. Realizar pruebas necesarias y documentar cambios relevantes.

## Notas importantes
- Mantener sincronizado el archivo `README.md` con instrucciones de despliegue y uso.
- No versionar archivos sensibles (`backend/.env`).
- Compatibilidad probada en Node.js 18+ y npm 9+.
