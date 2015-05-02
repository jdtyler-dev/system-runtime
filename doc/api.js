YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "MonocoDatabaseCollection",
        "MonocoError",
        "channel",
        "monoco",
        "monoco-behavior",
        "monoco-component",
        "monoco-db",
        "monoco-helper",
        "monoco-log",
        "monoco-metamodel",
        "monoco-state",
        "monoco-system",
        "monoco-workflow"
    ],
    "modules": [
        "channel",
        "monoco",
        "monoco-behavior",
        "monoco-component",
        "monoco-db",
        "monoco-helper",
        "monoco-log",
        "monoco-metamodel",
        "monoco-state",
        "monoco-system",
        "monoco-workflow"
    ],
    "allModules": [
        {
            "displayName": "channel",
            "name": "channel",
            "description": "This module manages the channel"
        },
        {
            "displayName": "monoco",
            "name": "monoco",
            "description": "This module is the main module of Monoco. <br>\nIt inits Monoco Metamodel and loads the Monoco core system."
        },
        {
            "displayName": "monoco-behavior",
            "name": "monoco-behavior",
            "description": "This module manages the behaviors of all components. \nA behavior is a mecanism that allow users to add actions that will be executed \nwhen a specific state of a component will change."
        },
        {
            "displayName": "monoco-component",
            "name": "monoco-component",
            "description": "This module manages the components. \nIt is the factory of all the components that are created by Monoco."
        },
        {
            "displayName": "monoco-db",
            "name": "monoco-db",
            "description": "This module manages Monoco Database. <br>\nMonoco Database is a micro NoSQL Database that contains: <br>\n- collections to store documents (schemas, types, components, ...) and <br>\n- APIs to import or export documents. <br>\n\nMonoco Database is closely linked to Monoco Metamodel and Monoco Component because: <br>\n- all operations done by Monoco Database must be compliant with the model before being finished, <br>\n- insert operation automatically creates a component and <br>\n- remove operation automatically destroy a component."
        },
        {
            "displayName": "monoco-helper",
            "name": "monoco-helper",
            "description": "This module contains all the functions used by all the modules."
        },
        {
            "displayName": "monoco-log",
            "name": "monoco-log",
            "description": "This module contains all the functions that write a log."
        },
        {
            "displayName": "monoco-metamodel",
            "name": "monoco-metamodel",
            "description": "This module manages Monoco Metamodel. <br>\nMonoco Metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections."
        },
        {
            "displayName": "monoco-state",
            "name": "monoco-state",
            "description": "This module manages the states of all thecomponents."
        },
        {
            "displayName": "monoco-system",
            "name": "monoco-system",
            "description": "This module contains the Monoco core system."
        },
        {
            "displayName": "monoco-workflow",
            "name": "monoco-workflow",
            "description": "This module manages the workflow of Monoco. It behaves like a workflow engine. <br>\nIt checks if the change of status of a component is valid to be executed. By valid, it means that:<br>\n- the state is valid for the component, <br>\n- the input (i.e. parameters) of all actions for the state are compliants with the model and <br>\n- the output of all actions are compliants with the model. <br>\n\nIf an error occurs, the workflow will call the error state of the component and monoco. <br>\nIf the error can break the consistency of the current system, the worklow will stop."
        }
    ]
} };
});