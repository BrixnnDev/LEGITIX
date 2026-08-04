@echo off
cd /d "%~dp0"
echo ========================================
echo   Legitix - Servidor de desarrollo
echo   Abriendo http://localhost:5173 ...
echo   Guarda cualquier archivo .jsx/.css
echo   y el navegador se actualiza SOLO.
echo   Cierra esta ventana para detener.
echo ========================================
bun run dev
pause