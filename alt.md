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

"start": "run-p watch:css react-scripts start",


//My build

"build": "tailwindcss build src/styles/index.css -c ./tailwind.config.js -o src/styles/tailwind.css",

para hacer deploy

 "start": "run-p watch:css react-scripts:start",  -- >>   "start": "react-scripts start",

-- >> "node --max_old_space_size=2560 node_modules/.bin/react-scripts start", //EL CORRECTO PARA HEROKU

//GH PAGES
"build2": "react-scripts build",
