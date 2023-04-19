import { Component } from '@angular/core'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_9nuuoy3',
        'template_lb5cor7',
        e.target as HTMLFormElement,
        'gAKg00mc5SWT6iVhT',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    Swal.fire('success', 'Message sent', 'success')
  }
}
