// @ts-nocheck
import descriptor from 'protobufjs/ext/descriptor/index.js';

export default [

  {
    name: "Root0",
    decodedDescriptorSet: descriptor.FileDescriptorSet.fromObject({
  "file": [
    {
      "name": "com_samurai_v1.proto",
      "package": "com.samurai.v1",
      "messageType": [
        {
          "name": "GetByIdRequest",
          "field": [
            {
              "name": "id",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            }
          ]
        },
        {
          "name": "Samurai",
          "field": [
            {
              "name": "id",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            },
            {
              "name": "name",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            },
            {
              "name": "age",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_INT32"
            }
          ]
        },
        {
          "name": "ListSamuraiResponse",
          "field": [
            {
              "name": "items",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": "Samurai"
            }
          ]
        },
        {
          "name": "ListSamuraiById",
          "field": [
            {
              "name": "ids",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_STRING"
            }
          ]
        }
      ],
      "service": [
        {
          "name": "SamuraiService",
          "method": [
            {
              "name": "GetById",
              "inputType": ".com.samurai.v1.GetByIdRequest",
              "outputType": ".com.samurai.v1.Samurai"
            },
            {
              "name": "ListAllSamurai",
              "inputType": ".google.protobuf.Empty",
              "outputType": ".com.samurai.v1.Samurai",
              "serverStreaming": true
            },
            {
              "name": "ListById",
              "inputType": ".com.samurai.v1.ListSamuraiById",
              "outputType": ".com.samurai.v1.Samurai",
              "serverStreaming": true
            }
          ]
        }
      ],
      "options": {
        "javaMultipleFiles": true
      },
      "syntax": "proto3"
    },
    {
      "name": "google_protobuf.proto",
      "package": "google.protobuf",
      "messageType": [
        {
          "name": "Empty"
        }
      ],
      "syntax": "proto3"
    }
  ]
}),
    rootJson: {
  "nested": {
    "com": {
      "nested": {
        "samurai": {
          "nested": {
            "v1": {
              "options": {
                "java_multiple_files": true
              },
              "nested": {
                "SamuraiService": {
                  "methods": {
                    "GetById": {
                      "requestType": "GetByIdRequest",
                      "responseType": "Samurai",
                      "comment": null
                    },
                    "ListAllSamurai": {
                      "requestType": "google.protobuf.Empty",
                      "responseType": "Samurai",
                      "responseStream": true,
                      "comment": null
                    },
                    "ListById": {
                      "requestType": "ListSamuraiById",
                      "responseType": "Samurai",
                      "responseStream": true,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "GetByIdRequest": {
                  "fields": {
                    "id": {
                      "type": "string",
                      "id": 1,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "Samurai": {
                  "fields": {
                    "id": {
                      "type": "string",
                      "id": 1,
                      "comment": null
                    },
                    "name": {
                      "type": "string",
                      "id": 2,
                      "comment": null
                    },
                    "age": {
                      "type": "int32",
                      "id": 3,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "ListSamuraiResponse": {
                  "fields": {
                    "items": {
                      "rule": "repeated",
                      "type": "Samurai",
                      "id": 1,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "ListSamuraiById": {
                  "fields": {
                    "ids": {
                      "rule": "repeated",
                      "type": "string",
                      "id": 1,
                      "comment": null
                    }
                  },
                  "comment": null
                }
              }
            }
          }
        }
      }
    },
    "google": {
      "nested": {
        "protobuf": {
          "nested": {
            "Empty": {
              "fields": {},
              "comment": null
            }
          }
        }
      }
    }
  }
},
  },

];