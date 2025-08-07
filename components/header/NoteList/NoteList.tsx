import css from './NoteList.module.css';
import type { Note } from '@/lib/api';
import NoteItem from '../NoteItem/NoteItem';

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <NoteItem item={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
