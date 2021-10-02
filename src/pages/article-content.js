//Creacion de un arreglo que almacenas otros objetos --articulos

const articles =[
    {
        name:"learn-react",
        title:"The Fatest Way To Learn React",
        thumbnail:"/images/react.jpg",
        content:[
            'Yes, you should start by reading the React documentation. It’s well writtenand you’ll understand the essential terminology and concepts by the time you’re finished.',
            'The link I shared above points to the first section of the documentation on installation.',
            'There is a link there  to a CodePen to help you get started.'
        ],
    },
    {
        name:"learn-node",
        title:"Getting Started",
        thumbnail:"/images/node.jpg",
        content:[
            'You won’t be able to get started in Node.js development until you have a firm grasp in JavaScript fundamentals.',
            'The following is a checklist of topics you need to master before moving on to the creation of backend applications that will serve a full-stack project:'
        ],
    },
    {
        name:"learn-flutter",
        title:"Flutter basics",
        thumbnail:"/images/flutter.png",
        content:[
            'Flutter widgets are built using a modern framework that takes inspiration from React.',
            'The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state.',
            'When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.'
        ],
    },
];

export default articles;