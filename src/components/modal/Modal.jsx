
import "./modal.scss"
import { Button, Modal } from 'react-bootstrap'

const ModalBox = ({setShowModal}) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Beden Seciniz</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" className='text-white me-auto'
          onClick={()=>setShowModal(false)}
          >Beden Sec</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default ModalBox
