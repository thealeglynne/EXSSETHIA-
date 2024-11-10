import SearchInput from '../componentes/SearchInput';


export default function Registro() {
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <SearchInput />
      {/* Formulario completo de registro aquí */}
      <form>
        <label>Nombre:</label>
        <input type="text" name="nombre" />
        
        <label>Email:</label>
        <input type="email" name="email" />
        
        <label>Contraseña:</label>
        <input type="password" name="password" />
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}