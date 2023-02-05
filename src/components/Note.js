import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return ( 
        <div className="note">
            <span>this is our first note</span>
            <div className="note-footer">
                <small>13/04/2023</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
}
 
export default Note;