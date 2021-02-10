
# Question Answer
========================================================================
========================================================================
1.  Create a simple commit, and then peek under the hood at the objects stored in our `.git` folder to gain insights into how things work.

    * you can use tree .git to check .git folder tree
to init git use "git init" in folder as you know
and to add file in git use "git add ." to add all "." and to add particulat "git add hello.txt"
to commit in git use "git commit -a "message" to commit all 
to upload on server use "git push"
========================================================================
========================================================================
2. Inspect the object with `git cat-file -t <commit id>` and `git cat-file -p <commit-id>`
*    $ echo 'hello world1' | git hash-object -w --stdin
       >> 3ad7759fe189c7e87edd8079c4d71b5168d3f075

*   to check type
        $ git cat-file -t 3ad77
        >>blob
*   to check data 
    $ git cat-file -p 3ad77
        >> hello world1
========================================================================
========================================================================
3. Use `git ls-files -s` to view the content of your staging area.


========================================================================
========================================================================
4. Use `git reset` to undo the staging of your file.


========================================================================
========================================================================
5. Stash your changes with a unique stash name, then unstash and apply them back.


========================================================================
========================================================================
6. Create a lightweight tag and confirm that its pointing to the right commit.


========================================================================
========================================================================
7. Create an annotated tag, and use `git show` to see more information about it.


========================================================================
========================================================================
8. Merge 2 branches(ex. feature, and master) and look at the git logs.


========================================================================
========================================================================
9.  Make two conflicting changes to `sample.txt` in two different branches.


========================================================================
========================================================================
10. Use various options in git log to see the filtered history of repository.


========================================================================
========================================================================
11.  Try Following command to see how Git is creating SHA Keys and storing values
```shell
$ echo 'Hello, World!' | git hash-object --stdin
```
```shell
$ echo 'blob 14\0Hello, World!' | openssl sha1
```
*Answer: actully must get same object value but getting differenct just check
$ echo 'hello world1' | git hash-object --stdin
3ad7759fe189c7e87edd8079c4d71b5168d3f075

$ echo 'blob 14\0hello world1' | openssl sha1
(stdin)= 052793d58c078fe5f05ca6383ae432e37c9f970e


again tried not same dont know why
$ echo 'blob 14\0hello' | openssl sha1
(stdin)= c6df3e4881a3d16c8bf544ff119151a5dbb8bb26

$ echo 'hello' | git hash-object --stdin
ce013625030ba8dba906f756967f9e9ca394464a
========================================================================
========================================================================
10. Use various options in git log to see the filtered history of repository.


========================================================================
========================================================================
########################################################################
========================================================================
========================================================================

# Git Excercise insights
1. Create a simple commit, and then peek under the hood at the objects stored in our `.git` folder to gain insights into how things work.
- Ans: create a file say eg: "sample.txt" and then add then commit that file.  
    * create file Sample .txt (with some data optional )
    * git add "sample.txt"

2. In windows "tree .git" to list tree of ".git" folder gives error for that in windows blash 
    error is like "bash: tree: command not found" so for that use following command in windows
    *   "cmd //c tree .git" 


3. To remove in unix/linux
    *  rm -rf .git/hooks/  (this will remove all folder or hooks here)