import Swal from 'sweetalert2'

const SweetAlert = (icon, title) => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500,
      })
}

export default SweetAlert;