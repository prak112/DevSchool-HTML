# Frontend Development
- Recently published project - <a href="https://prak112.github.io/DevSchool-HTML/" target="_blank" rel="noopener">Multimedia Content</a>
- Tools being used :
    - HTML5
    - CSS3, Getting started with [Bootstrap](/test_html/index.html) 
    - Javascript

</br>

- Helpful Resources :
    - [freeCodeCamp learning platform](https://www.freecodecamp.org/learn) 
    - freeCodeCamp blogpost - [Automate and Improve Web development workflow](https://www.freecodecamp.org/news/how-to-improve-your-web-development-workflow/)
    - MDN Docs - [Getting Started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
    - [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) 


## Projects
- [SuperCats](https://github.com/prak112/DevSchool-HTML/tree/supercats)
    - Build website using HTML, CSS & JS
    - Publish website using GitHub
- [DevJournal](https://github.com/prak112/DevSchool-HTML/tree/devjournal)
    - Work in progress
    - Simple idea for a personal webpage
- [MyGoogle](https://github.com/prak112/DevSchool-HTML/tree/googletest)
    - Simplified version of Google homepage
    - Part of CS50 Web Dev part1-project
    - Add animation of Google logo
    - Built in record-time with Codeium's help
- [Multimedia content](https://github.com/prak112/DevSchool-HTML/tree/multimedia)
    - Embed video content with poster and subtitles
    - Style page in grid format
    - Build navigation menu (as in devjournal) between different topics
- [Mockup]()
    - Build a mockup site of the original Pulse webpage
    - Strong focus on learning from In-Browser DevTools
    - Useful resources from [FrontEndPractice](https://www.frontendpractice.com/projects/)


## Topics Learned
<details>
<summary>Basic website interactivity with Javascript</summary>

####  Browser/Web APIs
- They aid in the interaction between HTML conent and CSS styles and collecting, generating/manipulating audio and/or video content.
- Amongst a [different categories of APIs](https://www.educative.io/answers/what-are-browser-apis), following are the ones we used.
#### Document Object Model (DOM) API  
- Builds interaction by addressing specific elements in `index.html` such as,
    - on_click Events for alerts, swapping content
    - Modify headers, paragraphs
#### Web Storage API
- Locally stores the user input on their browser
- Allows access and displaying the content using DOM API
</details>

<details>
<summary>GIT Orphan Branch</summary>

#### What is a Git Orphan branch ?
- A Git branch, in general, is used for developing a feature or resolving a bug, so a project progresses without lag.
- A Git Orphan branch provides the possibility to start from zero, i.e., not share any commit history with either the main branch or any other branches.
- Hence a perfect setup for hosting a static github page!
- Thanks to the [short snippet from DEV Community blog](https://dev.to/mcaci/how-to-create-an-orphan-branch-in-git-35ac)
- They are used for :
    - static websites, 
    - static parts of major project like a thesis,
    - to host an open-source part of a commercial software

#### How to create and handle a Git Orphan branch ?
```bash
    $ git checkout --orphan newbranch  
    :'to create and move to created orphan branch -"newbranch"'
```
    
```bash
    $ git rm director/*  
    :'to remove non-essential directory from "newbranch" including the files'
```

```bash
    : 'different ways to create a file'

    $ touch README.md       : 'only creates a README'
    $ echo newFile.txt      : 'only creates a newFile'
    $ cat > anyFile.txt     : 'creates and can start appending right away'
```

```bash
    :'generally used after git commit'

    $ git fetch origin  
    :'to identify if any changes in upstream(remote branch)'
```

```bash
    $ git diff HEAD @{u} --name-only 	
    :'to check which files will be changed on the next pull'
```

```bash
    $ git pull --rebase newbranch
    :'to fetch changes from remote repo, rebase current branch on top of fetched branch. NOT recommended, Do your research'
```
</details>
    


<details>
<summary>Publishing static website using GitHub Pages</summary>

#### What is a Static website ?
- Websites which are read-only, and the content does not change based on the user activity
- This website is build from pre-built component files (HTML, CSS, JS) stored on a web server, in our case GitHub Pages.
- Check [Hubspot blogpost](https://blog.hubspot.com/website/static-vs-dynamic-website) more info.

#### How to publish a Static website ?
- There are many services [as mentioned](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website) in MDN Web Docs
- A free reliable source would be [GitHub Pages](https://docs.github.com/en/pages)
- The process is as simple as hosting a repo and [following the instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to deploy the website.
- However, there are also certain details, which I learned the hard-way.
1. IF the `index.html` file is accomodated with `styles.css` and `main.js` files, then it is mandatory to add `.nojekyll` file in the same directory as the `index.html`.  This step renders the static website without looking for `_config.yml` to define the Jekyll theme.
2. Filepaths must begin with directory name, NEVER a "/"
3. Keep image formats uniform, i.e., either all images are in `.jpg` or `.png` format, not both.
4. Filepaths inside `.css` file must [begin from the root directory.](https://github.com/prak112/DevSchool-HTML/tree/supercats#overview)


</details>