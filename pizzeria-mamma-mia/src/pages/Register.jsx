import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess("");
      return;
    }

    setSuccess("Registro exitoso.");
    setError("");
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Registro</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme su contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Register;
