```

C:\Users\hanif
λ echo $PATH
$PATH

C:\Users\hanif
λ echo PATH
PATH

C:\Users\hanif
λ PATH
PATH=C:\Composer\cmd\bin;C:\Program Files\Git\bin;C:\Program Files\Git\usr\bin;C:\Program Files\Git\share\vim\vim74;C:\Composer\cmd\vendor\conemu-maximus5;C:\Composer\cmd\vendor\conemu-maximus5\ConEmu;C:\ProgramData\Oracle\Java\javapath;C:\Program Files (x86)\Intel\iCLS Client\;C:\Program Files\Intel\iCLS Client\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\Windows Live\Shared;C:\Program Files (x86)\Intel\OpenCL SDK\2.0\bin\x86;C:\Program Files (x86)\Intel\OpenCL SDK\2.0\bin\x64;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\IPT;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\IPT;C:\Program Files\Diskeeper Corporation\ExpressCache\;C:\Program Files (x86)\Brackets\command;C:\Program Files\nodejs\;C:\Program Files\Microsoft SQL Server\120\Tools\Binn\;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Users\hanif\.dnx\bin;C:\Program Files\Microsoft DNX\Dnvm\;C:\Program Files (x86)\Microsoft SQL Server\100\Tools\Binn\;C:\Program Files\Microsoft SQL Server\100\Tools\Binn\;C:\Program Files\Microsoft SQL Server\100\DTS\Binn\;C:\Program Files\Git\cmd;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\bin;C:\Program Files (x86)\Git\bin;C:\wamp64\bin\php\php5.6.19;C:\ProgramData\ComposerSetup\bin; C:\Composer;C:\Program Files (x86)\WinAnt\bin;C:\Users\hanif\AppData\Roaming\npm;C:\Users\hanif\AppData\Roaming\Composer\vendor\bin;C:\Composer\cmd

C:\Users\hanif
λ composer -v
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 1.0.2 2016-04-21 12:30:18

Usage:
  command [options] [arguments]

Options:
  -h, --help                     Display this help message
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi                     Force ANSI output
      --no-ansi                  Disable ANSI output
  -n, --no-interaction           Do not ask any interactive question
      --profile                  Display timing and memory usage information
  -d, --working-dir=WORKING-DIR  If specified, use the given directory as working directory.
  -v|vv|vvv, --verbose           Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Available commands:
  about           Short information about Composer
  archive         Create an archive of this composer package
  browse          Opens the package's repository URL or homepage in your browser.

  clear-cache     Clears composer's internal package cache.
  clearcache      Clears composer's internal package cache.
  config          Set config options
  create-project  Create new project from a package into given directory.
  depends         Shows which packages cause the given package to be installed
  diagnose        Diagnoses the system to identify common errors.
  dump-autoload   Dumps the autoloader
  dumpautoload    Dumps the autoloader
  exec            Execute a vendored binary/script
  global          Allows running commands in the global composer dir ($COMPOSER_HOME).
  help            Displays help for a command
  home            Opens the package's repository URL or homepage in your browser.

  info            Show information about packages
  init            Creates a basic composer.json file in current directory.
  install         Installs the project dependencies from the composer.lock file if present, or falls back on the composer.json.
  licenses        Show information about licenses of dependencies
  list            Lists commands
  prohibits       Shows which packages prevent the given package from being installed
  remove          Removes a package from the require or require-dev
  require         Adds required packages to your composer.json and installs them
  run-script      Run the scripts defined in composer.json.
  search          Search for packages
  self-update     Updates composer.phar to the latest version.
  selfupdate      Updates composer.phar to the latest version.
  show            Show information about packages
  status          Show a list of locally modified packages
  suggests        Show package suggestions
  update          Updates your dependencies to the latest version according to composer.json, and updates the composer.lock file.
  validate        Validates a composer.json and composer.lock
  why             Shows which packages cause the given package to be installed
  why-not         Shows which packages prevent the given package from being installed

C:\Users\hanif
λ composer --version
Composer version 1.0.2 2016-04-21 12:30:18

C:\Users\hanif
λ cd electra\

C:\Users\hanif\electra
λ ls
client/  server/

C:\Users\hanif\electra
λ server\
'server\' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\hanif\electra
λ cd server\

C:\Users\hanif\electra\server
λ composer init


  Welcome to the Composer config generator



This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [hanif/server]: electra
 The package name electra is invalid, it should be lowercase and have a vendor name, a forward slash, and a package name, matching: [a-z0-9_.-]+/[a-z0-9_.-]+
Package name (<vendor>/<name>) [hanif/server]: hanif/electra
Description []: API for electra
Author [, n to skip]: hanif
 Invalid author string.  Must be in the format: John Smith <john@example.com>
Author [, n to skip]: n
Minimum Stability []: dev
Package Type []: library
License []:

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? yes
Search for a package: horus

Found 3 packages matching horus

   [0] alash3al/horus
   [1] gossamer/horus
   [2] cotapreco/horus

Enter package # to add, or the complete package name if it is not listed: 0
Enter the version constraint to require (or leave blank to use the latest version):
Using version ^13.0 for alash3al/horus
Search for a package:
Would you like to define your dev dependencies (require-dev) interactively [yes]? no

{
    "name": "hanif/electra",
    "description": "API for electra",
    "type": "library",
    "require": {
        "alash3al/horus": "^13.0"
    },
    "minimum-stability": "dev"
}

Do you confirm generation [yes]? yes

C:\Users\hanif\electra\server
λ ls
composer.json

C:\Users\hanif\electra\server
λ git init
Initialized empty Git repository in C:/Users/hanif/electra/server/.git/

C:\Users\hanif\electra\server
λ git remote add origin https://github.com/hanif93/electra.git

C:\Users\hanif\electra\server
λ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        composer.json

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\hanif\electra\server
λ git add composer.json
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.

C:\Users\hanif\electra\server
λ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   composer.json


C:\Users\hanif\electra\server
λ git commit -m "start project"
[master (root-commit) 853000c] start project
 Committer: hanif hanafiah <hanif hanafiah>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
 1 file changed, 9 insertions(+)
 create mode 100644 composer.json

C:\Users\hanif\electra\server (master)
λ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 334 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/hanif93/electra.git
 * [new branch]      master -> master

C:\Users\hanif\electra\server (master)
λ ls
composer.json

C:\Users\hanif\electra\server (master)
λ nano composer.json
'nano' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\hanif\electra\server (master)
λ composer install
Loading composer repositories with package information
Updating dependencies (including require-dev)
  - Installing alash3al/horus (v13-stable)
    Downloading: 100%

Writing lock file
Generating autoload files

C:\Users\hanif\electra\server (master)
λ mysql
'mysql' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\hanif\electra\server (master)
λ php
^C
C:\Users\hanif\electra\server (master)
λ mysql
'mysql' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\hanif\electra\server (master)
λ composer dump-autoload
Generating autoload files

C:\Users\hanif\electra\server (master)
λ cd ..

C:\Users\hanif\electra
λ git status
fatal: Not a git repository (or any of the parent directories): .git

C:\Users\hanif\electra
λ cd server

C:\Users\hanif\electra\server (master)
λ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   composer.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        classes/
        composer.lock
        index.php
        vendor/

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\hanif\electra\server (master)
λ git stage *
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in composer.lock.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/.htaccess.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/Horus.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/README.md.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/composer.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/index.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/alash3al/horus/nginx.conf.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/autoload.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/ClassLoader.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/LICENSE.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/autoload_classmap.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/autoload_namespaces.php. The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/autoload_psr4.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/autoload_real.php.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in vendor/composer/installed.json.
The file will have its original line endings in your working directory.

C:\Users\hanif\electra\server (master)
λ git status
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   classes/db.php
        modified:   composer.json
        new file:   composer.lock
        new file:   index.php
        new file:   vendor/alash3al/horus/.htaccess
        new file:   vendor/alash3al/horus/Horus.php
        new file:   vendor/alash3al/horus/README.md
        new file:   vendor/alash3al/horus/composer.json
        new file:   vendor/alash3al/horus/index.php
        new file:   vendor/alash3al/horus/nginx.conf
        new file:   vendor/autoload.php
        new file:   vendor/composer/ClassLoader.php
        new file:   vendor/composer/LICENSE
        new file:   vendor/composer/autoload_classmap.php
        new file:   vendor/composer/autoload_namespaces.php
        new file:   vendor/composer/autoload_psr4.php
        new file:   vendor/composer/autoload_real.php
        new file:   vendor/composer/installed.json


C:\Users\hanif\electra\server (master)
λ git reset HEAD vendor/*

C:\Users\hanif\electra\server (master)
λ git status
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   classes/db.php
        modified:   composer.json
        new file:   composer.lock
        new file:   index.php

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        vendor/


C:\Users\hanif\electra\server (master)
λ git status
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   classes/db.php
        modified:   composer.json
        new file:   composer.lock
        new file:   index.php

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore


C:\Users\hanif\electra\server (master)
λ git stage .git
.git\       .gitignore
C:\Users\hanif\electra\server (master)
λ git stage .git
.git\       .gitignore
C:\Users\hanif\electra\server (master)
λ git stage .gitignore

C:\Users\hanif\electra\server (master)
λ git status
warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .gitignore
        new file:   classes/db.php
        modified:   composer.json
        new file:   composer.lock
        new file:   index.php


C:\Users\hanif\electra\server (master)
λ git commit -m "api users complete"
[master warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
27a1e4c] api users complete
 Committer: hanif hanafiah <hanif hanafiah>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

warning: LF will be replaced by CRLF in composer.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in composer.lock.
The file will have its original line endings in your working directory.
 5 files changed, 140 insertions(+), 1 deletion(-)
 create mode 100644 .gitignore
 create mode 100644 classes/db.php
 create mode 100644 composer.lock
 create mode 100644 index.php

C:\Users\hanif\electra\server (master)
λ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


C:\Users\hanif\electra\server (master)
λ git push origin master
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 1.89 KiB | 0 bytes/s, done.
Total 8 (delta 1), reused 0 (delta 0)
To https://github.com/hanif93/electra.git
   853000c..27a1e4c  master -> master

C:\Users\hanif\electra\server (master)
λ

```