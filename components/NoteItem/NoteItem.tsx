import {Note} from "@/lib/api";
import Link from "next/link";

type Props = {
    item: Note;
};
const NoteItem = ({item}: Props) =>{
    return(
        <ul style={{listStyle:'none'}}>
        <li>
           <Link href={`/notes/${item.id}`}>{item.title}</Link>
        </li>
        </ul>
    )
};
export default NoteItem;