para hacer deploy

{
  "scripts": {
    "build": "tailwindcss build frontend/site.css
                -c frontend/tailwind.config.js -o static/site.css"
  },
  ...
}



//EN desarrollo

"build": "run-s build:css react-scripts:build",


//My build

"build": "tailwindcss build src/styles/index.css -c ./tailwind.config.js -o src/styles/tailwind.css",
