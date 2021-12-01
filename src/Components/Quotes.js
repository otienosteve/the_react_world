export default function Quotes({ data, fetchData }) {
  const { gender="female", email="email@gmail.com", login="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphotography&psig=AOvVaw3LaGwZhxvaVf0SCvDrh4hW&ust=1638448924255000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLigscLPwvQCFQAAAAAdAAAAABAD" } = data[0];

  return (
    <>
      <h2>{gender}</h2>
      <h2>{email}</h2>
      <img src={login} alt={email}/>

      <button
        type="button"
        style={{
          color: "green",
          background: "none",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => fetchData()}
      >
        Get Quote
      </button>
    </>
  );
}
