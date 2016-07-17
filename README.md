# tss-agent

## Usage

node index --name mymachine --host 0.0.0.0 --port 3000

## Running on windows as a service

mkdir C:\TSS\TSS-Agent
cd C:\TSS\TSS-Master

### Install service

./prerequisites/nssm-v2.24-x64.exe install TSS-Agent ./prerequisites/node-x64.exe "index.js"
./prerequisites/nssm-v2.24-x64.exe set TSS-Agent AppDirectory "C:\TSS\TSS-Agent"
./prerequisites/nssm-v2.24-x64.exe set TSS-Agent AppParameters "index.js"
./prerequisites/nssm-v2.24-x64.exe set TSS-Agent DisplayName TSS Agent
./prerequisites/nssm-v2.24-x64.exe set TSS-Agent Description "TSS Agent service"
./prerequisites/nssm-v2.24-x64.exe set TSS-Agent Start SERVICE_AUTO_START

### Start service

./prerequisites/nssm-v2.24-x64.exe start TSS-Agent

### Stop service

./prerequisites/nssm-v2.24-x64.exe stop TSS-Agent

### Remove service

./prerequisites/nssm-v2.24-x64.exe remove TSS-Agent