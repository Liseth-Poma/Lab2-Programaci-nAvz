//Archivo que manejará los web services para realizar las operaciones CRUD a la tabla cliente
//de la base de datos
const express = require("express");
const router = express.Router();
var getConnection = require("../conexion");
//Consultar un cliente por cédula
//Router establece los endpoint y por medio del get se obtienen los datos
router.get("/cliente/:cedula", (req, res) => {
  //req y res, maneja dos respuestas
  //Se utiliza variable que se exportó a la base de datos
  //Maneja una función anonima que permite manejar el error o conexión
  getConnection(function (err, conn) {
    //Almacena lo que recupera del req en la clave parámetro
    //Variable entre llaves = maneja un valor
    const { cedula } = req.params;
    //
    if (err) {
      return res.sendStatus(400);
    } else {
      conn.query(
        "SELECT * FROM cliente WHERE cedula = ?",
        [cedula],
        function (err, rows) {
          if (err) {
            //Libera la conexión
            conn.release();
            return res.sendStatus(
              400,
              "No se puede obtener los datos de la tabla"
            );
          }
          res.send(rows);
          conn.release();
        }
      );
    }
  });
});

// Consultar un cliente por ID
router.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  getConnection(function (err, conn) {
    if (err) {
      return res.status(400).send("No se puede conectar a la base de datos");
    } else {
      conn.query("SELECT * FROM cliente WHERE idcliente = ?", [id], function (err, rows) {
        if (err) {
          conn.release();
          return res.status(400).send("No se puede obtener los datos de la tabla");
        }
        res.send(rows);
        conn.release();
      });
    }
  });
});

//INSERTAR UN NUEVO CLIENTE
router.post("/cliente/", (req, res, next) => {
  const data = {
    nombre: req.body.nombre,
    cedula: req.body.cedula,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    correo: req.body.correo,
  };
  const query =
    "INSERT INTO cliente (nombre, cedula, telefono, direccion, correo) VALUES ('" +
    data.nombre +
    "','" +
    data.cedula +
    "','" +
    data.telefono +
    "','" +
    data.direccion +
    "','" +
    data.correo +
    "')";

  getConnection(function (err, conn) {
    //Almacena lo que recupera del req en la clave parámetro
    //Variable entre llaves = maneja un valor
    if (err) {
      return res.sendStatus(400, "No se puede conectar a la base de datos", err);
    } else {
      conn.query(query, function (err, rows) {
          if (err) {
            //Libera la conexión
            conn.release();
            return res.sendStatus(400,"No se puede obtener los datos de la tabla");
          }
          else {
            conn.release();
            res.json({status: "Registro exitoso"});
          }
        }
      );
    }
  });
});
router.get("/cliente/", (req, res) => {
  getConnection(function (err, conn) {
    //
    if (err) {
      return res.sendStatus(400);
    } else {
      conn.query(
        "SELECT * FROM cliente",
        function (err, rows) {
          if (err) {
            conn.release();
            return res.sendStatus(
              400,
              "No se puede obtener los datos de la tabla"
            );
          }
          res.send(rows);
          conn.release();
        }
      );
    }
    });
  });

// Actualizar un cliente por ID
router.put("/cliente/:id", (req, res) => {
  const { id } = req.params;
  const data = {
    nombre: req.body.nombre,
    cedula: req.body.cedula,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    correo: req.body.correo,
  };
  
  const query = `
    UPDATE cliente 
    SET nombre = ?, cedula = ?, telefono = ?, direccion = ?, correo = ? 
    WHERE idcliente = ?
  `;

  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400).send("No se puede conectar a la base de datos");
    } else {
      conn.query(query, [data.nombre, data.cedula, data.telefono, data.direccion, data.correo, id], function (err, result) {
        if (err) {
          conn.release();
          return res.sendStatus(400).send("No se puede actualizar los datos de la tabla");
        } else {
          conn.release();
          res.json({status: "Actualización exitosa"});
        }
      });
    }
  });
});

// Eliminar un cliente por ID
router.delete("/cliente/:id", (req, res) => {
  const { id } = req.params;
  
  const query = "DELETE FROM cliente WHERE idcliente = ?";

  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400).send("No se puede conectar a la base de datos");
    } else {
      conn.query(query, [id], function (err, result) {
        if (err) {
          conn.release();
          return res.sendStatus(400).send("No se puede eliminar los datos de la tabla");
        } else {
          conn.release();
          res.json({status: "Eliminación exitosa"});
        }
      });
    }
  });
});

module.exports = router;

