type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <div style={{display: 'flex', gap: '24px', marginTop:'15px', marginLeft:'40px'}}>
      <aside>{sidebar}</aside>
      <hr/>
      <div>{children}</div>
    </div>
  );
};

export default NotesLayout;
