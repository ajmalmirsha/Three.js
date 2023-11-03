import { Link, useSearchParams } from "react-router-dom";

export default function () {
  const [search, setSearch] = useSearchParams({ q: "" });
  return (
    <>
      <div className="div" style={{ backgroundColor: "black", color: "white" }}>
      <Link to={"/about"}> about</Link>
        <p>{search.get("q")}</p>
        <input
          type="text"
          value={search.get("q")}
          onChange={(e) =>
            setSearch(
              (prev) => {
                prev.set("q", e.target.value);
                return prev;
              },
              { replace: true }
            )
          }
        />
      </div>
      <div className="div"></div>
      <div className="div">page 3</div>
    </>
  );
}
