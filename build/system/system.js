/*
 * SyrupJS
 * The System Runtime Platform
 * https://syrupjs.github.io
 * @ecarriou
 *  
 * Copyright (c) 2016 Erwan Carriou
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. 
 */

/**
 * This module contains syrup core system.
 *
 * @module syrup
 * @submodule syrup-system
 * @class syrup-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * syrup core system
 * @property {SyrupSystem} system
 */
var system = {
    "schemas": {
        "Worker": {
            "_id": "Worker",
            "_name": "Worker",
            "_schema": "WorkerSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "worker": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "WorkerSchema": {
            "_id": "WorkerSchema",
            "_name": "WorkerSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "worker": "property",
            "send": "method"
        },
        "SyrupAdminSchema": {
            "_id": "SyrupAdminSchema",
            "_name": "SyrupAdminSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "start": "method",
            "stop": "method"
        },
        "SyrupAdmin": {
            "_id": "SyrupAdmin",
            "_name": "SyrupAdmin",
            "_schema": "SyrupAdminSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "start": {
                "params": [{
                    "name": "path",
                    "type": "string",
                    "mandatory": false,
                    "default": ""
                }]
            },
            "stop": {}
        },
        "SyrupChannelSchema": {
            "_id": "SyrupChannelSchema",
            "_name": "SyrupChannelSchema",
            "sync": "event",
            "loadSystem": "event",
            "createSchema": "event",
            "updateSchema": "event",
            "deleteSchema": "event",
            "createModel": "event",
            "updateModel": "event",
            "deleteModel": "event",
            "createType": "event",
            "updateType": "event",
            "deleteType": "event",
            "createComponent": "event",
            "updateComponent": "event",
            "deleteComponent": "event",
            "createBehavior": "event",
            "updateBehavior": "event",
            "deleteBehavior": "event",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "send": "event"
        },
        "SyrupChannel": {
            "_id": "SyrupChannel",
            "_name": "SyrupChannel",
            "_schema": "SyrupChannelSchema",
            "_inherit": [
                "SyrupComponent",
                "SyrupComponent"
            ],
            "sync": {},
            "loadSystem": {
                "params": [{
                    "name": "system",
                    "type": "object"
                }]
            },
            "createSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "updateSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "deleteSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "updateModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "deleteModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "updateType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "deleteType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createComponent": {
                "params": [{
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "updateComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "deleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "createBehavior": {
                "params": [{
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "updateBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "deleteBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "_core": true,
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "SyrupSchema": {
            "load": "method",
            "ready": "event",
            "_id": "SyrupSchema",
            "_name": "SyrupSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "system": "method",
            "warning": "event"
        },
        "Syrup": {
            "load": {
                "params": [{
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }]
            },
            "ready": {},
            "_id": "Syrup",
            "_name": "Syrup",
            "_schema": "SyrupSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "warning": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "system": {
                "params": [{
                    "name": "name",
                    "type": "string",
                    "mandatory": false
                }],
                "result": "object"
            }
        },
        "SyrupBehavior": {
            "_id": "SyrupBehavior",
            "_name": "SyrupBehavior",
            "_schema": "SyrupBehaviorSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "core": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "useCoreAPI": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "component": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "action": {
                "type": "javascript",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "SyrupBehaviorSchema": {
            "_id": "SyrupBehaviorSchema",
            "_name": "SyrupBehaviorSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "SyrupClassInfo": {
            "_id": "SyrupClassInfo",
            "_name": "SyrupClassInfo",
            "_schema": "SyrupClassInfoSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "metamodel": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "model": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "property": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "properties": {
                "result": "array"
            },
            "link": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "links": {
                "result": "array"
            },
            "method": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "methods": {
                "result": "array"
            },
            "collection": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "collections": {
                "result": "array"
            },
            "event": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "events": {
                "result": "array"
            }
        },
        "SyrupClassInfoSchema": {
            "_id": "SyrupClassInfoSchema",
            "_name": "SyrupClassInfoSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "link": "method",
            "links": "method",
            "collections": "method",
            "collection": "method",
            "event": "method",
            "events": "method"
        },
        "SyrupComponent": {
            "_id": "SyrupComponent",
            "_name": "SyrupComponent",
            "_schema": "SyrupComponentSchema",
            "_core": true,
            "on": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "handler",
                    "type": "function"
                }, {
                    "name": "useCoreAPI",
                    "type": "boolean",
                    "mandatory": false
                }]
            },
            "off": {
                "params": [{
                    "name": "state",
                    "type": "string",
                    "mandatory": false
                }, {
                    "name": "behaviorId",
                    "type": "string",
                    "mandatory": false
                }]
            },
            "require": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "destroy": {
                "params": []
            },
            "classInfo": {
                "type": "@SyrupClassInfo",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "init": {
                "params": [{
                    "name": "conf",
                    "type": "object"
                }]
            },
            "error": {
                "params": [{
                    "name": "data",
                    "type": "errorParam"
                }]
            }
        },
        "SyrupComponentSchema": {
            "_id": "SyrupComponentSchema",
            "_name": "SyrupComponentSchema",
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "SyrupDatabase": {
            "_id": "SyrupDatabase",
            "_name": "SyrupDatabase",
            "_schema": "SyrupDatabaseSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "system": {
                "params": [{
                    "name": "system",
                    "type": "object",
                    "mandatory": false
                }],
                "result": "string"
            },
            "subsystem": {
                "params": [{
                    "name": "params",
                    "type": "object"
                }],
                "result": "string"
            },
            "collections": {
                "result": "object"
            },
            "insert": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "object"
                }]
            },
            "update": {
                "params": [{
                    "name": "schema",
                    "type": "string"
                }, {
                    "name": "componentId",
                    "type": "string"
                }, {
                    "name": "attributeName",
                    "type": "string"
                }, {
                    "name": "attributeValue",
                    "type": "object"
                }]
            },
            "remove": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "string"
                }]
            }
        },
        "SyrupDatabaseSchema": {
            "_id": "SyrupDatabaseSchema",
            "_name": "SyrupDatabaseSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "SyrupMessage": {
            "_id": "SyrupMessage",
            "_name": "SyrupMessage",
            "_schema": "SyrupMessageSchema",
            "_core": true,
            "event": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "from": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "data": {
                "type": "array",
                "readOnly": false,
                "mandatory": true,
                "default": []
            }
        },
        "SyrupMessageSchema": {
            "_id": "SyrupMessageSchema",
            "_name": "SyrupMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "SyrupMetamodel": {
            "_id": "SyrupMetamodel",
            "_name": "SyrupMetamodel",
            "_schema": "SyrupMetamodelSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }]
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }]
            },
            "create": {
                "params": []
            }
        },
        "SyrupMetamodelSchema": {
            "_id": "SyrupMetamodelSchema",
            "_name": "SyrupMetamodelSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "SyrupState": {
            "_id": "SyrupState",
            "_name": "SyrupState",
            "_schema": "SyrupStateSchema",
            "_class": false,
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "parameters": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            }
        },
        "SyrupStateSchema": {
            "_id": "SyrupStateSchema",
            "_name": "SyrupStateSchema",
            "_core": true,
            "name": "property",
            "parameters": "property"
        },
        "SyrupSystem": {
            "_id": "SyrupSystem",
            "_name": "SyrupSystem",
            "_schema": "SyrupSystemSchema",
            "_inherit": [
                "SyrupComponent"
            ],
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "master": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "subsystem": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "version": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "0.0.1"
            },
            "description": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "schemas": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "behaviors": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "types": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "components": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "ready": {},
            "sync": {},
            "main": {}
        },
        "SyrupSystemSchema": {
            "_id": "SyrupSystemSchema",
            "_name": "SyrupSystemSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "sync": "method",
            "main": "method",
            "ready": "event"
        }
    },
    "types": {
        "html": {
            "name": "html",
            "type": "string",
            "core": true
        },
        "css": {
            "name": "css",
            "type": "string",
            "core": true
        },
        "collection": {
            "name": "collection",
            "type": "object",
            "schema": {
                "type": {
                    "type": [
                        "string"
                    ],
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "errorParam": {
            "name": "errorParam",
            "type": "object",
            "schema": {
                "message": {
                    "type": "string",
                    "mandatory": true
                },
                "error": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "event": {
            "name": "event",
            "type": "object",
            "schema": {
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "javascript": {
            "name": "javascript",
            "type": "string",
            "core": true
        },
        "json": {
            "name": "json",
            "type": "string",
            "core": true
        },
        "link": {
            "name": "link",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                }
            },
            "core": true
        },
        "message": {
            "name": "message",
            "type": "object",
            "schema": {
                "event": {
                    "type": "string",
                    "mandatory": true
                },
                "from": {
                    "type": "string",
                    "mandatory": false
                },
                "data": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "method": {
            "name": "method",
            "type": "object",
            "schema": {
                "result": {
                    "type": "string",
                    "mandatory": false
                },
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "parameter": {
            "name": "parameter",
            "type": "object",
            "schema": {
                "name": {
                    "type": "string",
                    "mandatory": true
                },
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": false
                },
                "default": {
                    "type": "@type",
                    "mandatory": false
                }
            },
            "core": true
        },
        "property": {
            "name": "property",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                }
            },
            "core": true
        }
    },
    "behaviors": {
        "1c00c107e01c9b3": {
            "_id": "1c00c107e01c9b3",
            "component": "SyrupAdmin",
            "state": "start",
            "action": "function start(path) {\n    var Worker = null,\n    worker = null,\n    workerPath = '',\n    SyrupChannel = null,\n    syrupChannel = null;\n    \n    if (path) {\n        workerPath = path + '/scripts/worker.js';\n        workerPath = workerPath.replace(/\\/\\//g,'/');\n    } else {\n        workerPath = '/designer/scripts/worker.js';\n    }\n    \n    if (typeof SharedWorker !== 'undefined') {\n        \n        if (!this.require('channel-admin')) {\n            SyrupChannel = this.require('SyrupChannel');\n            syrupChannel = new SyrupChannel({\n                '_id': 'channel-admin',\n                '_core': true\n            });\n            \n            syrupChannel.on('send', function send(message) {\n                this.require('worker-admin').worker().port.postMessage(message);\n            });\n            \n            // schema change events\n            syrupChannel.on('createSchema', function createSchema(id, schema) {\n                this.require('metamodel').schema(schema);\n                this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('updateSchema', function updateSchema(id, schema) {\n                 this.require('metamodel').type(schema);\n                 this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('deleteSchema', function deleteSchema(id) {\n                $db['SyrupSchema'].remove({'_id': id});\n                this.require('metamodel').create();\n            }, true);\n            \n            // model change events\n            syrupChannel.on('createModel', function createModel(id, model) {\n                this.require('metamodel').schema(model);\n                this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('updateModel', function updateModel(id, model) {\n                 this.require('metamodel').type(model);\n                 this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('deleteModel', function deleteModel(id) {\n                $db['SyrupSchema'].remove({'_id': id});\n                this.require('metamodel').create();\n                $component.removeFromMemory(id);\n            }, true);\n            \n            // type change events\n            syrupChannel.on('createType', function createType(id, type) {\n                this.require('metamodel').type(type);\n                this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('updateType', function updateType(id, type) {\n                 this.require('metamodel').type(type);\n                 this.require('metamodel').create();\n            }, true);\n            \n            syrupChannel.on('deleteType', function deleteType(id) {\n                $db['SyrupType'].remove({'_id': id});\n                this.require('metamodel').create();\n            }, true);\n            \n            // component change events\n            syrupChannel.on('createComponent', function createComponent(model, component) {\n                $db[model].insert(component);\n            }, true);\n            \n            syrupChannel.on('updateComponent', function updateComponent(id, collection, component) {\n                $db[collection].update({'_id': id}, component);\n            }, true);\n            \n            syrupChannel.on('deleteComponent', function deleteComponent(id, collection) {\n                $db[collection].remove({'_id': id});\n            }, true);\n            \n            // behavior change events\n            syrupChannel.on('createBehavior', function createBehavior(component) {\n                $db['SyrupBehavior'].insert(component);\n            }, true);\n            syrupChannel.on('updateBehavior', function updateBehavior(id, behavior) {\n                this.require(id).action(behavior.action);\n            });\n            syrupChannel.on('deleteBehavior', function deleteBehavior(id) {\n                $db['SyrupBehavior'].remove({'_id': id});                  \n            }, true);\n         \n            // System Designer event\n            syrupChannel.on('sync', function sync() {\n                this.loadSystem(JSON.parse(this.require('db').system()));\n            });\n    \n            Worker = this.require('Worker');\n            worker = new Worker({\n                '_id': 'worker-admin',\n                '_core': true,\n                'worker': new SharedWorker(workerPath),\n            });\n            \n            worker.worker().port.onmessage = function (e) {\n              $db.SyrupMessage.insert(e.data);\n            };\n            \n            console.info('syrup: admin is started');\n        } else {\n            console.info('syrup: admin is already started');\n        }\n    } else {\n        console.info('syrup: the browser can not run admin features');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1d7151dd2d1558f": {
            "_id": "1d7151dd2d1558f",
            "component": "SyrupAdmin",
            "state": "stop",
            "action": "function stop() {\n    var worker = null,\n    channel = null;\n    \n    worker = this.require('worker-admin');\n    if (worker && worker.worker()) {\n        worker.worker().port.onmessage = function () {};\n        worker.destroy();\n        \n        channel = this.require('channel-admin');\n        if (channel) {\n            channel.destroy();\n        }\n        \n        console.info('syrup: admin is stopped');\n    }\n}",
            "useCoreAPI": false,
            "core": false
        },
        "1fc101c23918773": {
            "component": "SyrupComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                console.warn(\"syrup: invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "syrup",
            "state": "load",
            "action": "function load(url, async) {\n    var xhr = null,\n    callbackLoad = null;\n    xhr = new XMLHttpRequest();\n    \n    callbackLoad = function callbackLoad(system) {\n        var sysId = $db.system(system),\n        sys = $component.get(sysId),\n        systems = document.querySelectorAll('link[rel=system]'),\n        nbSubsystem = $db.SyrupSystem.find({\n            'subsystem': true\n        }); \n        if (sys) {\n            sys.main();\n        } \n        if (systems.length + 1 + nbSubsystem.length === $db.SyrupSystem.count()) {\n            $component.get('syrup').ready();\n        }\n    };\n    \n    if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    callbackLoad(JSON.parse(xhr.response));\n                }\n            }\n        };\n        xhr.send(null);\n    } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n            callbackLoad(JSON.parse(xhr.response));\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {\n    var subsystems = [],\n    systems = [],\n    system = null,\n    i = 0,\n    length = 0;\n    \n    subsystems = $db.SyrupSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('syrup').load(system.href, false);\n            } else {\n                this.require('syrup').load(system.href, true);\n            }\n        }\n        if (length === 0) {\n            this.require('syrup').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f62c1d8c71d33b": {
            "_id": "1f62c1d8c71d33b",
            "component": "Syrup",
            "state": "error",
            "action": "function error(data) {\n    console.error('syrup: ' + data.message, data.error);\n}",
            "core": true
        },
        "120fd194d31adbd": {
            "_id": "120fd194d31adbd",
            "component": "Syrup",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('SyrupSystem');\n        system = new System(conf);\n    } else {\n        result = $db.SyrupSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "17e2710e8e137b9": {
            "_id": "17e2710e8e137b9",
            "component": "Syrup",
            "state": "warning",
            "action": "function warning(message) {\n    console.warn('syrup: ' + message);\n}",
            "core": true
        },
        "18b7f1b9e61eb34": {
            "_id": "18b7f1b9e61eb34",
            "component": "SyrupClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "17b7c137fd15eaf": {
            "_id": "17b7c137fd15eaf",
            "component": "SyrupClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "19899181ca12ac7": {
            "_id": "19899181ca12ac7",
            "component": "SyrupClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1ef371df66123a3": {
            "_id": "1ef371df66123a3",
            "component": "SyrupClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "11f80192ce1712e": {
            "_id": "11f80192ce1712e",
            "component": "SyrupClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "15e2713de51504d": {
            "_id": "15e2713de51504d",
            "component": "SyrupClassInfo",
            "state": "links",
            "action": "function links() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1a01d1d08d156a2": {
            "_id": "1a01d1d08d156a2",
            "component": "SyrupClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "1befc1101d10f01": {
            "_id": "1befc1101d10f01",
            "component": "SyrupClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1bcdd199161ff69": {
            "_id": "1bcdd199161ff69",
            "component": "SyrupClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "19f3b1d39e14db2": {
            "_id": "19f3b1d39e14db2",
            "component": "SyrupClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "148b418ab81ff10": {
            "_id": "148b418ab81ff10",
            "component": "SyrupComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "11f091120a184d6": {
            "_id": "11f091120a184d6",
            "component": "SyrupComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                console.warn(\"syrup: invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "19cea18d171150d": {
            "_id": "19cea18d171150d",
            "component": "SyrupComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1c0671dc0c10a16": {
            "_id": "1c0671dc0c10a16",
            "component": "SyrupDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Syrup') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "195fe1e9ea1a7cf": {
            "_id": "195fe1e9ea1a7cf",
            "component": "SyrupDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f54c15cd2191b8": {
            "_id": "1f54c15cd2191b8",
            "component": "SyrupDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "106991d3d514556": {
            "_id": "106991d3d514556",
            "component": "SyrupMetamodel",
            "state": "create",
            "action": "function create() {\n    $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1893b12c6d10a97": {
            "_id": "1893b12c6d10a97",
            "component": "SyrupMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e31b1fa831b4c4": {
            "_id": "1e31b1fa831b4c4",
            "component": "SyrupMetamodel",
            "state": "type",
            "action": "function type(type) {\n    $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "189231b0c51f860": {
            "_id": "189231b0c51f860",
            "component": "SyrupSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "SyrupAdmin": {
            "admin": {
                "_id": "admin"
            }
        },
        "Syrup": {
            "syrup": {
                "_id": "syrup",
                "version": "0.9.9"
            }
        },
        "SyrupDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "SyrupMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "SyrupSystem": {
            "18ed81de331252c": {
                "_id": "18ed81de331252c",
                "name": "system-admin",
                "version": "0.1.0",
                "description": "SyrupJS administration component",
                "subsystem": true,
                "master": false
            },
            "133421d0c313d2d": {
                "_id": "133421d0c313d2d",
                "name": "web",
                "version": "0.1.0",
                "description": "Add behaviors for web",
                "subsystem": true,
                "master": false
            },
            "1f6ff194df1c37a": {
                "_id": "1f6ff194df1c37a",
                "name": "webType",
                "version": "0.1.0",
                "description": "Add types for web",
                "subsystem": true,
                "master": false
            }
        }
    },
    "name": "syrup",
    "version": "0.9.9",
    "description": "The System Runtime Platform",
    "_id": "e89c617b6b15d24",
    "master": false,
    "subsystem": false
};

/* exports  */


/**
 * This module contains syrup core system.
 *
 * @module syrup
 * @submodule syrup-system
 * @class syrup-system
 * @static 
 */


/**
 * syrup core system
 * @property {SyrupSystem} system
 */
exports.system = system;
