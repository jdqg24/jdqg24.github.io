const conexion = require("../db/config");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

function generateConfirmationToken() {
  const token = crypto.randomBytes(20).toString("hex");
  return token;
}

// Configurar un transportador de correo electrónico (utiliza tu propio servicio y credenciales)
const transporter = nodemailer.createTransport({
  service: "sahilikarim22@hotmail.com", // Ejemplo: Gmail
  auth: {
    user: "sahilikarim22@hotmail.com",
    pass: "Perronegro123.",
  },
});

const usuariosController = {
  postUsuarios: (req, res) => {
    const { correoUcab, clave, apellidos, nombres, cedula, tipoUsuario } = req.body;
    const estatus = 0;
    // Genera un token de confirmación
    const token = generateConfirmationToken();
  
    // Consulta para verificar si el correo ya está registrado
    const selectQuery = "SELECT * FROM usuarios WHERE correoUcab = ?";
  
    conexion.query(selectQuery, [correoUcab], (error, results) => {
      if (error) {
        console.error("Error al buscar el usuario:", error);
        return res.status(500).send("Error al verificar el usuario en la base de datos");
      } else if (results.length > 0) {
        return res.status(400).send("El usuario ya está registrado, verifique su cuenta con el correo que le enviamos");
      } else {
        // Envía un correo de confirmación al usuario
        const mailOptions = {
          from: "sahilikarim22@hotmail.com",
          to: correoUcab,
          subject: "Confirmación de Registro",
          text: `Por favor, haz clic en el siguiente enlace para confirmar tu correo: http://localhost:3000/confirmar/${token}`,
        };
  
        const insertQuery =
          "INSERT INTO usuarios (correoUcab, clave, apellidos, nombres, cedula, estatus, tipoUsuario, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
        conexion.query(
          insertQuery,
          [correoUcab, clave, apellidos, nombres, cedula, estatus, tipoUsuario, token],
          (error, resultados) => {
            if (error) {
              console.error("Error al insertar el estudiante en la base de datos:", error);
              return res.status(500).send("Error al insertar el estudiante en la base de datos");
            } else {
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error al enviar el correo de confirmación:", error);
                  return res.send("Hubo un error al enviar el correo de confirmación.");
                } else {
                  console.log("Correo de confirmación enviado:", info.response);
                  return res.send("Por favor, verifica tu correo electrónico para activar tu cuenta.");
                }
              });
            }
          }
        );
      }
    });
  },
  // Ruta para confirmar el correo
  getConfirmacion: (req, res) => {
    const token = req.params.token;
    // Query SQL para actualizar el campo 'estatus' a 1 para el usuario con un token específico
    const updateQuery = "UPDATE usuarios SET estatus = 1 WHERE token = ?";
    // Ejecuta la consulta con el token como parámetro
    conexion.query(updateQuery, [token], (error, results) => {
      if (error) {
        console.error("Error al actualizar el campo estatus:", error);
        return res.send(
          "error al verificar su cuenta. Contacte a un administrador"
        );
        // Manejo de errores, por ejemplo, puedes enviar una respuesta de error
      } else {
        return res.send(
          "Tu cuenta ha sido activada correctamente. Puedes iniciar sesión ahora."
        );
      }
    });
  },
  getConfirmarUsuario: (req, res) => {
    res.render(`confirmarUsuario`);
  },
};

module.exports = usuariosController;
