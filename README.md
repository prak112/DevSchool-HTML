# Frontend Development
- Tools being used :
    - HTML5
    - CSS3, Getting started with [Bootstrap](/test_html/index.html) 
    - Javascript

- Resources helping to make decisions :
    - freeCodeCamp blogpost - [Automate and Improve Web development workflow](https://www.freecodecamp.org/news/how-to-improve-your-web-development-workflow/)
    - MDN Docs - [Getting Started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
    - [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) 

# Topics Learned
- Basic website interactivity with Javascript
- Publishing first website using GitHub - [SuperCats](https://github.com/prak112/DevSchool-HTML/tree/supercats)
- GIT Orphan Branch :
	- Usage for static websites, or static parts of major project like thesis
	- Some standard commands for working between branches
	
        ```bash
        $git checkout orphan newbranch  
        :'to create and move to created orphan branch -"newbranch"'
        ```
        
        ```bash
        $git rm director/*  
        :'to remove non-essential directory from "newbranch" including the files'
        ```

        ```bash
        $git fetch origin  
        :'to identify if any changes in upstream(remote branch)'
        ```
        
        ```bash
        $git diff HEAD @{u} --name-only 	
        :'to check which files will be changed on the next pull'
        ```

        ```bash
        $git pull --rebase 	
        :'to create a linear history of commits, used since "main" branch is key in current repo. Also aware that it is NOT recommended for	beginners'
        ```