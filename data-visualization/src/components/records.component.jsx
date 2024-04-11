import { Link } from "react-router-dom";
import "./records.styles.css";

export default function Records(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Team</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.players.player.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.teamName}</td>
            <td>
              <Link to={{ pathname: `/player/${item.id}` }}>View Stats</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
