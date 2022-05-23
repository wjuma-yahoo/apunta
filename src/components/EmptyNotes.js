import logo from '../assets/writing.png';

export const EmptyNotes = () => {

  return (
    <div className="empty-notes">
      <div className="empty-notes__logo">
        <img src={logo} alt="logo" />
      </div>
      <p>Pulsa el nuevo boton de notas que encontraras arriba para crear una nota</p>
    </div>
  )
}
