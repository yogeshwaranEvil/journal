import { useLocation } from "react-router-dom";


export default function Fulljournal() {
    const location = useLocation();
    const journalId = new URLSearchParams(location.search).get('id');



  return (
    <div>{journalId}</div>
  )
}
