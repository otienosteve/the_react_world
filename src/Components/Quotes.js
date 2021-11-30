export default function Quotes({ data, fetchData }) {
  const { author, content } = data;

  return (
    <>
      <h2>{author}</h2>
      <h3>{content}</h3>
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
