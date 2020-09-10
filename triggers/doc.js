const sample = require("../samples/doc.json");

const triggerDoc = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: `https://getoutline.com/api/documents.list`,
    params: {
      collection: bundle.inputData.collection
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content))
    .then(content => content.data);
};

module.exports = {
  key: 'doc',
  noun: 'Document',

  display: {
    label: 'New Document',
    description: 'Triggers when a new document is created.'
  },

  operation: {
    inputFields: [
      { key: 'collection', label: 'Collection', required: true, dynamic: 'collection.id.name' },
    ],
    perform: triggerDoc,
    sample
  }
};
