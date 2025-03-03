import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  if (!models[modelName].db.db) {
    throw new Error(`Model or database for ${modelName} does not exist`);
  }
  const modelExists = await models[modelName].db.db.listCollections({
    name: collectionName
  }).toArray();

  if (modelExists.length) {
    await db.dropCollection(collectionName);
  }
}