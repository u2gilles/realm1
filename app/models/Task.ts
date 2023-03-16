// https://www.mongodb.com/docs/realm/sdk/react-native/use-realm-react/

import { Realm } from "@realm/react";

export class Task extends Realm.Object<Task> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static schema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };

  constructor(realm: Realm, description: string) {
    super(realm, {
      _id: new Realm.BSON.ObjectId(),
      description,
      isComplete: false,
      createdAt: new Date(),
    });
  }
}

/*
   

*/
