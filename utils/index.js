const method = {
   get: (data) => (req, res) => res.send(data),
   post: (data) => (req, res) => {
      const newData = {
         id: data[data.length - 1].id + 1,
         name: req.body.name,
      };
      data.push(newData);
      res.send(data);
   },
   put: (data) => (req, res) => {
      const itemUpdate = data.filter((item) => item.id === req.body.id);
      data.forEach(
         (e, i) =>
            e.id === itemUpdate[0].id &&
            (data[i] = { ...itemUpdate[0], name: req.body.name })
      );
      res.send(data);
   },
   delete: (data) => (req, res) => {
      const itemDelete = data.filter((item) => item.id === req.body.id);
      data.forEach(
         (element, index) =>
            element.id === itemDelete[0].id && data.splice(index, 1)
      );
      res.send(data);
   },
};

module.exports = method;
