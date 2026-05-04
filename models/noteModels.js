const Note = require('../schema/Note.js');

const getNotes = async () => { 
  return await Note.findAll({ 
    attributes: ['id', 'judul', 'isi', 'tanggal_dibuat'],
    order: [['tanggal_dibuat', 'DESC']]
  });
}

const createNote = async (data) => { 
  return await Note.create(data);
}

// const findById = async (id) => {
//   return await Note.findByPk(id, {
//     attributes: ["id", "judul", "isi", "tanggal_dibuat"],
//   });
// }

const updateNote = async (id, data) => {
  return await Note.update(data, { 
    where: {
      id: id, 
    }, 
  });
}
const deleteNote = async (id) =>{ 
  return await Note.destroy({ 
    where: {
      id: id, 
    }, 
  });
}
module.exports = { 
  getNotes,
  createNote,
  updateNote, 
  deleteNote 
};
