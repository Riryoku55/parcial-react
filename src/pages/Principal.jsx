import Cartilla from '../components/Cartilla';

const Principal = () => {
  const actores = [
    {
      nombre: 'Leonardo DiCaprio',
      imagen: 'https://i.pinimg.com/736x/a5/3e/ce/a53eced7c8f64dba141f32287fef7127.jpg',
    },
    {
      nombre: 'Scarlett Johansson',
      imagen: 'https://i.pinimg.com/originals/d1/55/04/d1550433fc3e567643b8393b542f3c27.png',
    },
    {
      nombre: 'Morgan Freeman',
      imagen: 'https://i.pinimg.com/736x/c3/e0/a9/c3e0a9119267d3aea9378803bd413f89.jpg',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {actores.map((actor, i) => (
        <Cartilla key={i} nombre={actor.nombre} imagen={actor.imagen} />
      ))}
    </div>
  );
};

export default Principal;
