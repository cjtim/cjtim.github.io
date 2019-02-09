@ECHO OFF
color 09
SET APP_NAME=HOTSPOT SERVER PROGRAM Final By @DUCKSCREEN
TITLE %APP_NAME% 

:: A
:CONSOLE
CLS
color 0F
ECHO HOTSPOT SERVER PROGRAM Final
ECHO ===============================================================================
ECHO                             HOTSPOT 
ECHO                             SERVER
ECHO ===============================================================================
ECHO Do you want to open HOTSPOT SERVER
ECHO.
ECHO Type
ECHO 1 For OPEN HOTSPOT SERVER
ECHO .
ECHO 2 For STOP HOTSPOT SERVER
ECHO .
ECHO 3.WIFI PASSWORD
ECHO .
ECHO 4 For CHECK INFOMATION HOTSPOT SERVER
ECHO .
ECHO 5.For SHOW WIFI DRIVER
ECHO .
ECHO 6.WHO MADE THIS??
ECHO .
SET /P YOU=Enter the number:


:: b
IF %YOU%==1 GOTO :OPEN HOTSPOT SERVER
IF %YOU%==2 GOTO :STOP HOTSPOT SERVER
IF %you%==3 GOTO :WIFI PASSWORD
IF %YOU%==4 GOTO :CHECK INFOMATION
IF %you%==5 GOTO :SHOW DRIVER
IF %you%==6 GOTO :CREDIT
IF NOT DEFINED NUMBER GOTO :CONSOLE
GOTO :EOF

:: C
:OPEN HOTSPOT SERVER
CLS
color 0A
netsh wlan set hostednetwork mode=allow ssid=JamesBond007 key=22225555
netsh wlan start hostednetwork
GOTO :CONSOLE_OPEN
:CONSOLE_OPEN
CLS
ECHO ===============================================================================
ECHO SUCCESSFUL TO START SERVER
ECHO ===============================================================================
PAUSE
GOTO :CONSOLE

::D
:STOP HOTSPOT SERVER
CLS
color 0C
@SET net=netsh wlan set hostednetwork mode=allow
netsh wlan stop hostednetwork
PAUSE
GOTO :CONSOLE

:WIFI PASSWORD
color 0F
CLS
ECHO.
ECHO ===============================================================================
ECHO NAME=JamesBond007
ECHO .
ECHO Pass=22225555
ECHO ===============================================================================
PAUSE
GOTO :CONSOLE

::F
:CHECK INFOMATION
CLS
color 0F
@ECHO OFF
title=CHECK HOTSPOT SERVER
%appname%=title
netsh wlan show hostednetwork
pause
GOTO :CONSOLE
GOTO :EOF

:SHOW DRIVER
CLS
color 0F
netsh wlan show drivers
pause
GOTO :CONSOLE
GOTO :EOF

:: Exit console
:CREDIT
CLS
ECHO.
ECHO ===============================================================================
ECHO HOTSPOT SERVER PROGRAM Final
ECHO .
ECHO ALL CREDIT GOES TO DUCKSCREEN
ECHO .
ECHO ===============================================================================
PAUSE
GOTO :CONSOLE
