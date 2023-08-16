# Overview
- Workflow to create this webpage - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/)
- Learnings on the way - [Project README](https://github.com/prak112/DevSchool-HTML#topics-learned)
- Visit published website using GitHub Pages - <a href="https://prak112.github.io/DevSchool-HTML" target="_blank" rel="noopener">here!</a>
- Resolved CSS and JS rendering issue with help of this [closed Stack Overflow query](https://stackoverflow.com/questions/52003005/css-not-working-on-github-pages)
    - In `index.html` and `main.js`, changed filepath 
    
        **FROM** 
        ```
        /images/cats/waltz-cat.jpg
        ```
        **TO** 
        ```
        images/cats/waltz-cat.jpg
        ```
    - In `styles.css` changed filepath

        **FROM**  
        ```
        background-image : url(/images/cats/universe_bg.jpg)
        ```  
        **TO** 
        ```
        background-image: url("DevSchool-HTML/../../images/cats/universe_bg.jpg");
        ```
    - In `main.js` changed **FROM**
    *firefox-logo.png* **TO** *firefox-logo.jpg*
- Local Server rendering as expected (standard reference point)
