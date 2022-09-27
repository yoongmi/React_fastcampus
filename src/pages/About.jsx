export default function About() {
  const obj = new URLSearchParams(window.location.search);
  const name = obj.get("name");
  return (
    <div>
      <h2>About 페이지</h2>
      <p> {name}</p>
    </div>
  );
}
