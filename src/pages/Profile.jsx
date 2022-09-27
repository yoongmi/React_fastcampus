import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  return (
    <div>
      <h2>Profile 페이지</h2>
      {id ? <p>id는 {id} 입니다.</p> : null}
    </div>
  );
}
