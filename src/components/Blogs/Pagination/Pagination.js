
function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pageNumbers.map((num) => (
        <div
          style={{
            color: "white",
            backgroundColor: "rgb(3, 155, 229)",
            padding: "7px",
            width: "30px",
            textAlign: "center",
            border:"2px solid white",
            marginBottom:"20px"
          }}
          href="#"
          key={num}
          onClick={() => paginate(num)}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
export default Pagination;
