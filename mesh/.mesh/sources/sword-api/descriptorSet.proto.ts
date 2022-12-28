// @ts-nocheck
import descriptor from 'protobufjs/ext/descriptor/index.js';

export default [

  {
    name: "Root0",
    decodedDescriptorSet: descriptor.FileDescriptorSet.fromObject({
  "file": [
    {
      "name": "com_sword_v1.proto",
      "package": "com.sword.v1",
      "messageType": [
        {
          "name": "CreateSwordRequest",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            },
            {
              "name": "type",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": "Type"
            },
            {
              "name": "samurai_id",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            }
          ]
        },
        {
          "name": "Sword",
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
              "name": "type",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": "Type"
            },
            {
              "name": "samurai_id",
              "number": 4,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            }
          ]
        },
        {
          "name": "ListBySamuraiIdRequest",
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
          "name": "SamuraiWithSwordsResponse",
          "field": [
            {
              "name": "id",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING"
            },
            {
              "name": "swords",
              "number": 2,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": "Sword"
            }
          ]
        },
        {
          "name": "SamuraiWithSwordsRequest",
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
          "name": "ListSwordsByIdRequest",
          "field": [
            {
              "name": "ids",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_STRING"
            }
          ]
        },
        {
          "name": "ListSamuraiWithSwordsRequest",
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
      "enumType": [
        {
          "name": "Type",
          "value": [
            {
              "name": "UNKNOWN",
              "number": 0
            },
            {
              "name": "KATANA",
              "number": 1
            },
            {
              "name": "TACHI",
              "number": 2
            },
            {
              "name": "UCHIGATANA",
              "number": 3
            },
            {
              "name": "WAKIZASHI",
              "number": 4
            }
          ]
        }
      ],
      "service": [
        {
          "name": "SwordService",
          "method": [
            {
              "name": "CreateSword",
              "inputType": ".com.sword.v1.CreateSwordRequest",
              "outputType": ".com.sword.v1.Sword"
            },
            {
              "name": "ListSwords",
              "inputType": ".google.protobuf.Empty",
              "outputType": ".com.sword.v1.Sword",
              "serverStreaming": true
            },
            {
              "name": "ListBySamuraiId",
              "inputType": ".com.sword.v1.ListBySamuraiIdRequest",
              "outputType": ".com.sword.v1.Sword",
              "serverStreaming": true
            },
            {
              "name": "GetById",
              "inputType": ".com.sword.v1.GetByIdRequest",
              "outputType": ".com.sword.v1.Sword"
            },
            {
              "name": "ListById",
              "inputType": ".com.sword.v1.ListSwordsByIdRequest",
              "outputType": ".com.sword.v1.Sword",
              "serverStreaming": true
            },
            {
              "name": "GetSamuraiWithSwords",
              "inputType": ".com.sword.v1.SamuraiWithSwordsRequest",
              "outputType": ".com.sword.v1.SamuraiWithSwordsResponse"
            },
            {
              "name": "ListSamuraiWithSwords",
              "inputType": ".com.sword.v1.ListSamuraiWithSwordsRequest",
              "outputType": ".com.sword.v1.SamuraiWithSwordsResponse",
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
        "sword": {
          "nested": {
            "v1": {
              "options": {
                "java_multiple_files": true
              },
              "nested": {
                "SwordService": {
                  "methods": {
                    "CreateSword": {
                      "requestType": "CreateSwordRequest",
                      "responseType": "Sword",
                      "comment": null
                    },
                    "ListSwords": {
                      "requestType": "google.protobuf.Empty",
                      "responseType": "Sword",
                      "responseStream": true,
                      "comment": null
                    },
                    "ListBySamuraiId": {
                      "requestType": "ListBySamuraiIdRequest",
                      "responseType": "Sword",
                      "responseStream": true,
                      "comment": null
                    },
                    "GetById": {
                      "requestType": "GetByIdRequest",
                      "responseType": "Sword",
                      "comment": null
                    },
                    "ListById": {
                      "requestType": "ListSwordsByIdRequest",
                      "responseType": "Sword",
                      "responseStream": true,
                      "comment": null
                    },
                    "GetSamuraiWithSwords": {
                      "requestType": "SamuraiWithSwordsRequest",
                      "responseType": "SamuraiWithSwordsResponse",
                      "comment": null
                    },
                    "ListSamuraiWithSwords": {
                      "requestType": "ListSamuraiWithSwordsRequest",
                      "responseType": "SamuraiWithSwordsResponse",
                      "responseStream": true,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "CreateSwordRequest": {
                  "fields": {
                    "name": {
                      "type": "string",
                      "id": 1,
                      "comment": null
                    },
                    "type": {
                      "type": "Type",
                      "id": 2,
                      "comment": null
                    },
                    "samurai_id": {
                      "type": "string",
                      "id": 3,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "Sword": {
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
                    "type": {
                      "type": "Type",
                      "id": 3,
                      "comment": null
                    },
                    "samurai_id": {
                      "type": "string",
                      "id": 4,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "Type": {
                  "values": {
                    "UNKNOWN": 0,
                    "KATANA": 1,
                    "TACHI": 2,
                    "UCHIGATANA": 3,
                    "WAKIZASHI": 4
                  },
                  "comment": null,
                  "comments": {
                    "UNKNOWN": null,
                    "KATANA": null,
                    "TACHI": null,
                    "UCHIGATANA": null,
                    "WAKIZASHI": null
                  }
                },
                "ListBySamuraiIdRequest": {
                  "fields": {
                    "id": {
                      "type": "string",
                      "id": 1,
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
                "SamuraiWithSwordsResponse": {
                  "fields": {
                    "id": {
                      "type": "string",
                      "id": 1,
                      "comment": null
                    },
                    "swords": {
                      "rule": "repeated",
                      "type": "Sword",
                      "id": 2,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "SamuraiWithSwordsRequest": {
                  "fields": {
                    "id": {
                      "type": "string",
                      "id": 1,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "ListSwordsByIdRequest": {
                  "fields": {
                    "ids": {
                      "rule": "repeated",
                      "type": "string",
                      "id": 1,
                      "comment": null
                    }
                  },
                  "comment": null
                },
                "ListSamuraiWithSwordsRequest": {
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