
import { getSingleNote } from "@/lib/api";
import BackButton from "@/components/BackButton/BackButton";


type Props = {
    params: Promise<{id: string}>;
};

const PreviewPage = async ({params}: Props) =>{
    const {id} = await params;

    const note = await getSingleNote(id)
    return(
        <div>
   <hr/>
            Preview Page
            <BackButton>Close</BackButton>
            <br/>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    
    </div>
    )
}

export default PreviewPage;