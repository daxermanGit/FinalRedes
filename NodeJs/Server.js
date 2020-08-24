const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:nazonoUrabe12@usuarios.8fxyu.mongodb.net/Usuarios?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  	use Usuarios;
  client.close();
});