const method = {
   data: [],
   get: (req, res) => res.send(method.data),
   post: (req, res) => {
      const newData = {
         id: method.data[method.data.length -1].id + 1,
         name: req.body.name,
      };
      method.data.push(newData);
      res.send(method.data);
   },
   put: (req, res) => {
      const newData = method.data.map((item) => {
         if (item.id == req.body.id) {
            return {
               ...item,
               name: req.body.name,
            };
         }
         return item;
      });
      method.data = newData;
      res.send(method.data);
   },
   delete: (req, res) => {
      const newData = method.data.filter((item) => item.id !== req.body.id);
      method.data = newData
      res.send(method.data)
   },
};

module.exports = method;
