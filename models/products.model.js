const db = require('./db');

// Model Produk
const Product = {
  getAll: (callback) => {
    db.query('SELECT * FROM products', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { nama, deskripsi, harga, foto } = data;

    db.query(
      'INSERT INTO products (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)',
      [nama, deskripsi, harga, foto],
      callback
    );
  },

  update: (id, data, callback) => {
    const { nama, deskripsi, harga, foto } = data;

    db.query(
      'UPDATE products SET nama = ?, deskripsi = ?, harga = ?, foto = ? WHERE id = ?',
      [nama, deskripsi, harga, foto, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  }
};

module.exports = Product;
