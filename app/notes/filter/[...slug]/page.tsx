// app/notes/filter/[...slug]/page.tsx

import { getNotess } from '@/lib/api';
import NoteList from '@/components/header/NoteList/NoteList';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotess(category);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByCategory;
