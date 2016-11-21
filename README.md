## Introduction

rslidy is a web-based presentation tool using HTML, CSS and JavaScript. It is able to display slides stored within a single HTML file.

## Installation

To use rslidy for a presentation, the rslidy.js file and all relevant CSS files have to be included in your HTML file, which should also contain the presentation itself. Alternatively, the rslidy.min.js and rslidy-combined.min.css files can be used if no custom settings or other modifications are needed.
The following HTML commands are necessary to include rslidy:
```
<link rel="stylesheet" href="css/reset.css"/>
<link rel="stylesheet" href="css/normalise.css"/>
<link rel="stylesheet" href="css/rslidy.css" />
<link rel="stylesheet" href="css/slides-default.css"/>

<script src="js/rslidy.js"></script>
```


## TypeScript and Grunt

Following command can be used to create the final JavaScript file from the original TypeScript file:
```
tsc rslidy.ts
```

Grunt can be used to minify both JS and CSS files and it also creates a ZIP archive of rslidy. Grunt uses following plugins in rslidy: grunt-contrib-uglify, grunt-contrib-cssmin and grunt-zip.
