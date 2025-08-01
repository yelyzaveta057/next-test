'use client';



import React, { useState } from "react";
import { getNotes, Note } from "@/lib/api";
import NoteList from "@/components/header/NoteList/NoteList";


const Notes = () => {
        const [notes, setNotes] = useState<Note[]>([]);


        const handleClick = async () =>{
            const response = await getNotes();
            if (response?.notes){
                setNotes(response.notes);
            }
        }  

            return (
              <section>
            <h1>Notes List</h1>
            <button onClick={handleClick}>Get my notes please!</button>
            {notes.length > 0 && <NoteList notes = {notes} />}
            </section>
        )
 

};

export default Notes;