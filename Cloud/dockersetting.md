<img width="959" height="1039" alt="image" src="https://github.com/user-attachments/assets/b5f8a3fe-9de0-438f-8b53-a2a57c4c3d24" />

[Linux에서 자주 쓰는 명령어]
- 링크: https://github.com/ESG-EDU/Docs/tree/main/linux

[Docker]
- 링크: https://github.com/ESG-EDU/CLOUD_STUDY/tree/main/docker

나중에 정리하기
Microsoft Windows [Version 10.0.19045.6466]
(c) Microsoft Corporation. All rights reserved.

D:\IDE\workspaces\WEB_STUDY-study\study\STUDY_FILES\study21>docker exec -it ubt /bin/bash
root@e0a3ca85482c:/# useradd -m -s /bin/bash -c "hong" honggildong
root@e0a3ca85482c:/# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin    
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin    
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin    
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin       
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin        
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin  
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
_apt:x:42:65534::/nonexistent:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
honggildong:x:1001:1001:hong:/home/honggildong:/bin/bash
root@e0a3ca85482c:/# passwd hong
passwd: user 'hong' does not exist
root@e0a3ca85482c:/# passwd honggildong
New password: 
Retype new password:
passwd: password updated successfully
root@e0a3ca85482c:/# passwd
New password: 
Retype new password:
passwd: password updated successfully
root@e0a3ca85482c:/# su hong
su: user hong does not exist or the user entry does not contain all the required fields
root@e0a3ca85482c:/# su honggildong
honggildong@e0a3ca85482c:/$ cd ~
honggildong@e0a3ca85482c:~$ pwd
/home/honggildong
honggildong@e0a3ca85482c:~$ su -
Password: 
root@e0a3ca85482c:~# exit
logout
honggildong@e0a3ca85482c:~$ exit
exit
root@e0a3ca85482c:/# cd ~
root@e0a3ca85482c:~# pwd
/root
root@e0a3ca85482c:~# apt update
Get:1 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB] 
Get:2 http://archive.ubuntu.com/ubuntu noble InRelease [256 kB]
Get:3 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [34.8 kB]
Get:4 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [3008 kB]
Get:5 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
Get:6 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:7 http://archive.ubuntu.com/ubuntu noble/restricted amd64 Packages [117 kB]
Get:8 http://archive.ubuntu.com/ubuntu noble/main amd64 Packages [1808 kB]
Get:9 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1776 kB]            
Get:10 http://archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [331 kB]                
Get:11 http://archive.ubuntu.com/ubuntu noble/universe amd64 Packages [19.3 MB]                 
Get:12 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1194 kB]       
Get:13 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [2171 kB]             
Get:14 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [38.1 kB]
Get:15 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3219 kB]
Get:16 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1975 kB]
Get:17 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [34.6 kB]      
Get:18 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [49.5 kB]
Fetched 35.7 MB in 6s (5546 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
1 package can be upgraded. Run 'apt list --upgradable' to see it.
root@e0a3ca85482c:~# pwd
/root
root@e0a3ca85482c:~# vi
bash: vi: command not found
root@e0a3ca85482c:~# apt install vim
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libexpat1 libgpm2 libpython3.12-minimal libpython3.12-stdlib libpython3.12t64
  libreadline8t64 libsodium23 libsqlite3-0 media-types netbase readline-common tzdata
  vim-common vim-runtime xxd
Suggested packages:
  gpm readline-doc ctags vim-doc vim-scripts
The following NEW packages will be installed:
  libexpat1 libgpm2 libpython3.12-minimal libpython3.12-stdlib libpython3.12t64
  libreadline8t64 libsodium23 libsqlite3-0 media-types netbase readline-common tzdata vim
  vim-common vim-runtime xxd
0 upgraded, 16 newly installed, 0 to remove and 1 not upgraded.
Need to get 16.3 MB of archives.
After this operation, 72.1 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libexpat1 amd64 2.6.1-2ubuntu0.3 [88.0 kB]
Get:2 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libpython3.12-minimal amd64 3.12.3-1ubuntu0.10 [836 kB]
Get:3 http://archive.ubuntu.com/ubuntu noble/main amd64 media-types all 10.1.0 [27.5 kB]
Get:4 http://archive.ubuntu.com/ubuntu noble/main amd64 netbase all 6.4 [13.1 kB]
Get:5 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 tzdata all 2025b-0ubuntu0.24.04.1 [276 kB]
Get:6 http://archive.ubuntu.com/ubuntu noble/main amd64 readline-common all 8.2-4build1 [56.5 kB]
Get:7 http://archive.ubuntu.com/ubuntu noble/main amd64 libreadline8t64 amd64 8.2-4build1 [153 kB]
Get:8 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libsqlite3-0 amd64 3.45.1-1ubuntu2.5 [701 kB]
Get:9 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libpython3.12-stdlib amd64 3.12.3-1ubuntu0.10 [2069 kB]
ed file /usr/share/man/fr/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: warning: skip creation of /usr/share/man/it/man1/view.1.gz because associated file /usr/share/man/it/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: warning: skip creation of /usr/share/man/ja/man1/view.1.gz because associated file /usr/share/man/ja/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: warning: skip creation of /usr/share/man/pl/man1/view.1.gz because associated file /usr/share/man/pl/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: warning: skip creation of /usr/share/man/ru/man1/view.1.gz because associated file /usr/share/man/ru/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: warning: skip creation of /usr/share/man/tr/man1/view.1.gz because associated file /usr/share/man/tr/man1/vim.1.gz (of link group view) doesn't exist
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vim (vim) in auto mode        
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vimdiff (vimdiff) in auto modeProcessing triggers for libc-bin (2.39-0ubuntu8.6) ...
root@e0a3ca85482c:~# vi
root@e0a3ca85482c:~# ls -l
total 0
root@e0a3ca85482c:~# vi
root@e0a3ca85482c:~#

[자주쓰는 명령어]
- vi > i > 내용 바꾸고 ( echo "내용") > esc + 
- ls -l
- cat /etc/passwd
- su honggildong
- su -
- exit
- cd ~
- pwd
- useradd -m -s /bin/bash -c "hong" hong
- vi main.sh
- esc + :eq
- cat main.sh
됐고 나 이거 재능 없고 밑으로 내려가서 저거나 배워


<img width="964" height="1040" alt="image" src="https://github.com/user-attachments/assets/dbc7291d-4b82-4b4e-9901-31215e1074b5" />

아래와 같이 자동 생성 됨
<img width="964" height="1040" alt="image" src="https://github.com/user-attachments/assets/9e1f2384-7835-42d0-b262-7bd4394d060a" />

[Port Forward]
C:\Users\hi>docker run -d -it -p 80:5173 --name nd node:24.13.0
원래MS로는 5173를 이용했었어 근데 이제 리눅스로 80이라는 포트를 이용할거야

https://narawantsgohome.notion.site/26-02-02-2fbcb949b1a1806ab9ddf487701c0178
