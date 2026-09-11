@echo off
echo Starting Hogwarts Birthday Quest Local Server...
echo.
echo Server will start on: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause
